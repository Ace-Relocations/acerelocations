const db = require("../models");
const Customer = db.customer;
const Invoice = db.invoice;
const User = db.user;


module.exports = {

    createInvoice: async (gcnno, invoice, total) => {
        try {
            let obj = new Invoice();
            obj.gcnno = gcnno;
            obj.invoiceDetails = invoice;
            obj.total = total;

            let createData = await obj.save();
            if (!createData) {
                return false;
            }
            return obj;
        } catch (err) {
            return err;    
        }
    },

    getTotal: async (invoice) => {
        try {
            let totalA = 0;
            for (i=0; i<invoice.length; i++) {
                totalA = totalA + invoice[i].amount; 
            }
            return totalA;
        } catch (err) {
            return err;
        }
    }

}