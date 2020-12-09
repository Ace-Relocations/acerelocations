const service = require("../services/invoice.service");
const db = require("../models");
const numberToText = require('number-to-text');

const Customer = db.customer;
const User = db.user;
const Invoice = db.invoice;

module.exports = {
 
    createInvoice: async (req, res) => {
        try {
            const {
                gcnno, invoice
                } = req.body;
            if(invoice == false) {
                res.status(500).send({ message: "The value passed is null" });
            }
            const billno = await service.incrementBillno();

            let newInvoice = invoice.filter(function(obj){
                if(obj.isChecked === true){
                    return true;
                }
                return false;
            });
            let total = await service.getTotal(newInvoice);
            const totalInText = numberToText.convertToText(total);
            let createData = await service.createInvoice(gcnno, billno, newInvoice, total, totalInText);
            if (createData == false) {
            res.status(500).send({ message: "failed to register invoice", data: createData });
            return;
            } 
            
            let jobById = {};
            jobById.invoice = createData;
            jobById.isInvoiceAdded = true;
            var newvalues = { $set: jobById };
            Customer.updateOne({ gcnno: gcnno}, newvalues, (err, user) => {
                if (err) {
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
            if(!findInvoice){
                return res.status(500).send({ message: "Invoice failed to fetch, does not exist!", data: findInvoice });
            }
            return res.status(200).send({ message: "Invoice was fetched successfully!", data: findInvoice });
        } catch(err) {
            console.log(err)
            res.status(500).send({ message: "Failed to fetch Invoice", data: err });
            return;    
        }
    },

    updateInvoice: async (req, res) => {
        try {
        const {
            gcnno, invoice, billno
            } = req.body;
            let invoiceC = await Invoice.findOne({gcnno: gcnno});

            if(invoice == false && billno == null || invoice == "" && billno == null || invoice == null && billno == null) {
                let deleteV = await Invoice.deleteOne({ gcnno: gcnno});
                if (!deleteV){
                    res.status(500).send({ message: "Failed to delete Invoice" });
                }
                let number = await service.decrementBillno();

                let jobById = {};
                jobById.isInvoiceAdded = false;
                var newvalues = { $set: jobById };
                let customerU = await Customer.updateOne({ gcnno: gcnno}, newvalues,);
                if (!customerU){
                    res.status(500).send({ message: "The value passed is null but failed to change the status" });
                }
                res.status(500).send({ message: "The value passed is null hence the invoice is deleted" });
            }
         
            let obj = {};
            obj._id = invoiceC._id;
            obj.gcnno = gcnno;
            obj.billno = billno || invoiceC.billno;
            obj.invoiceDetails = invoice || invoiceC.invoiceDetails; 
            obj.total = await service.getTotal(obj.invoiceDetails);
            var newvalues = { $set: obj };

            let updateV = await Invoice.updateOne({gcnno: obj.gcnno}, newvalues)
                if (!updateV) {
                return res.status(500).send({ message: "Invoice not updated", data: updateV });
                }  
                return res.status(200).send({ message: "Invoice was updated successfully!", data: obj });

        } catch(err) {
            console.log(err)
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

}