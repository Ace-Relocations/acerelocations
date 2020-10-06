const invoiceService = require("../services/invoice.service");
const jobService = require("../services/job.service")
const db = require("../models");

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
            let total = await invoiceService.getTotal(invoice);
            let createData = await invoiceService.createInvoice(gcnno, invoice, total);
            if (createData == false) {
            res.status(500).send({ message: "failed to register invoice", data: createData });
            return;
            } 
            
            let jobById = {};
            jobById.invoice = createData;
            var newvalues = { $set: jobById };
            Customer.updateOne({ gcnno: gcnno}, newvalues, (err, user) => {
                if (err) {
                    console.log(err)
                res.status(500).send({ message: "Invoice not linked to Job" });
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
            let invoices = await Customer.find({gcnno: req.body.gcnno}).populate("invoice");
            return res.status(200).send({ message: "Invoice was fetched successfully!", data: invoices });
        } catch(err) {
            console.log(err)
            res.status(500).send({ message: "Failed to fetch Invoice", data: err });
            return;    
        }
    },

    updateInvoice: async (req, res) => {
        try {
        const {
            gcnno, invoice
            } = req.body;

            let invoiceC = await Invoice.find({gcnno: gcnno});

            let obj = new Invoice();
            obj._id = invoiceC._id;
            obj.gcnno = gcnno;
            obj.invoiceDetails = invoice || invoiceC.invoiceDetails; 
            obj.total = await invoiceService.getTotal(obj.invoiceDetails);
            console.log(obj)
            var newvalues = { $set: obj };

            Invoice.updateOne({gcnno: obj.gcnno}, newvalues, (err, invoice) => {
                if (err) {
                res.status(500).send({ message: "Invoice not updated", data: err });
                return;
                }  
                return res.status(200).send({ message: "Invoice was updated successfully!", data: obj });
            });

        } catch(err) {
            console.log(err)
            res.status(500).send({ message: "Failed to fetch Invoice", data: err });
            return;    
        }
    }


}