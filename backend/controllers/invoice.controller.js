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
            let createData = await invoiceService.createInvoice(gcnno, invoice);
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
                return res.status(200).send({ message: "Invoice was linked to the jobsuccessfully!", data: jobById });
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
    }


}