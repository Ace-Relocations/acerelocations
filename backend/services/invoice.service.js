const db = require("../models");
const Customer = db.customer;
const Invoice = db.invoice;
const User = db.user;


module.exports = {

    createInvoice: async (gcnno, invoice) => {
        try {
            let obj = new Invoice();
            obj.gcnno = gcnno;
            obj.invoiceDetails = invoice;

            let createData = await obj.save();
            if (!createData) {
                return false;
            }
            return obj;
        } catch (err) {
            return err;    
        }
    },

}