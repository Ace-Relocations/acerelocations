const service = require("../services/invoice.service");
const db = require("../models");
const numberToText = require('number-to-text');
const moment = require('moment');

const Customer = db.customer;
const User = db.user;
const Invoice = db.invoice;

module.exports = {

    createInvoice: async (req, res) => {
        try {
            const {
                gcnno, invoice, billno, invoiceDate, recieptDate
            } = req.body;

            if (invoice == false) {
                res.status(500).send({ message: "The value passed is null" });
            }

            let newInvoice = invoice.filter(function (obj) {
                if (obj.isChecked === true) {
                    return true;
                }
                return false;
            });
            let total = await service.getTotal(newInvoice);
            const totalInText = numberToText.convertToText(total) + " " + "only";
            // var billno = await service.incrementBillno();

            let createData = await service.createInvoice(req.body, newInvoice, total, totalInText);
            if (createData == false) {
                // billno = service.decrementBillno();
                res.status(500).send({ message: "failed to register invoice", data: createData });
                return;
            }

            let jobById = {};
            jobById.invoice = createData;
            jobById.isInvoiceAdded = true;
            var newvalues = { $set: jobById };
            console.log("New Values:", newvalues)
            Customer.updateOne({ gcnno: gcnno }, newvalues, (err, user) => {
                if (err) {
                    // billno = service.decrementBillno();
                    res.status(500).send({ message: "Invoice not linked to Job, duplicate value" });
                    return;
                }
                return res.status(200).send({ message: "Invoice was linked to the job successfully!", data: jobById });
            });
        } catch (err) {
            res.status(500).send({ message: "Failed to register Invoice", data: err });
            return;
        }
    },

    getInvoice: async (req, res) => {
        try {
            let findInvoice = await service.getInvoice(req.query.gcnno);
            if (!findInvoice) {
                return res.status(500).send({ message: "Invoice failed to fetch, does not exist!", data: findInvoice });
            }
            return res.status(200).send({ message: "Invoice was fetched successfully!", data: findInvoice });
        } catch (err) {
            res.status(500).send({ message: "Failed to fetch Invoice", data: err });
            return;
        }
    },

    updateInvoice: async (req, res) => {
        try {
            const {
                gcnno, invoice, billno, invoiceDate, recieptDate
            } = req.body;
            let invoiceC = await Invoice.findOne({ gcnno: gcnno });

            if (invoice == false && billno == null || invoice == "" && billno == null || invoice == null && billno == null) {
                let deleteV = await Invoice.deleteOne({ gcnno: gcnno });
                if (!deleteV) {
                    res.status(500).send({ message: "Failed to delete Invoice" });
                }
                // let number = await service.decrementBillno();

                let jobById = {};
                jobById.isInvoiceAdded = false;
                var newvalues = { $set: jobById };
                let customerU = await Customer.updateOne({ gcnno: gcnno }, newvalues);
                if (!customerU) {
                    res.status(500).send({ message: "The value passed is null but failed to change the status" });
                }
                res.status(500).send({ message: "The value passed is null hence the invoice is deleted" });
            }

            let obj = {};
            obj._id = invoiceC._id;
            obj.gcnno = gcnno;
            const curr_year = moment(Date.now()).format('YY');
            next_year = parseInt(curr_year) + 1
            obj.billno = curr_year.toString() + "-" + next_year.toString() + "/" +billno.toString() || invoiceC.billno;
            obj.invoiceDate = invoiceDate || invoiceC.invoiceDate;
            obj.recieptDate = recieptDate || invoiceC.recieptDate;
            obj.invoiceDetails = invoice || invoiceC.invoiceDetails;
            obj.total = await service.getTotal(obj.invoiceDetails);
            obj.totalInText = numberToText.convertToText(obj.total) + " " + "only";
            var newvalues = { $set: obj };

            let updateV = await Invoice.updateOne({ gcnno: obj.gcnno }, newvalues)
            if (!updateV) {
                return res.status(500).send({ message: "Invoice not updated", data: updateV });
            }
            return res.status(200).send({ message: "Invoice was updated successfully!", data: obj });

        } catch (err) {
            res.status(500).send({ message: "Failed to fetch Invoice", data: err });
            return;
        }
    },

    setBillno: async (req, res) => {
        try {
            const defaultV = await service.setBillno(req.body.billno);
            return res.status(200).send({ message: "Job billno was updated!", data: defaultV });
        } catch (err) {
            res.status(500).send({ message: err });
        }
    },

    deleteInvoice: async (req, res) => {
        try {
            let delInvoice = await service.deleteByGcnno(req.query.gcnno);
            if (!delInvoice) {
                return res.status(500).send({ message: "Invoice failed to Delete, does not exist!", data: delInvoice });
            }
            return res.status(200).send({ message: "Invoice was Deleted successfully!", data: delInvoice });
        } catch (err) {
            res.status(500).send({ message: "Failed to fetch Invoice", data: err });
            return;
        }
    },

}