const db = require("../models");
const Customer = db.customer;
const Invoice = db.invoice;
const BillCounter = db.billCounter;
const moment = require('moment');


module.exports = {

    createInvoice: async (input, invoice, total, totalInText) => {
        try {
            const {
                gcnno, invoice, billno, invoiceDate, recieptDate
            } = input;
            const curr_year = moment(Date.now()).format('YY');
            next_year = parseInt(curr_year)+1
            let obj = new Invoice();
            obj.gcnno = gcnno;
            obj.billno = curr_year.toString() + "-" + next_year.toString() + "/" +billno.toString();
            obj.invoiceDate = invoiceDate;

            obj.recieptDate = recieptDate;
            obj.invoiceDetails = invoice;
            obj.total = total;
            obj.totalInText = totalInText;

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
            for (i = 0; i < invoice.length; i++) {
                if (invoice[i].amount) {
                    totalA = totalA + parseInt(invoice[i].amount);
                }
            }
            return totalA;
        } catch (err) {
            return err;
        }
    },

    incrementBillno: async () => {
        try {
            let gcnno = await BillCounter.findByIdAndUpdate({ _id: 'entityId' }, { $inc: { seq: 1 } });
            return gcnno.seq;
        } catch (err) {
            return err;
        }
    },

    decrementBillno: async () => {
        try {
            let current = await BillCounter.findById("entityId");

            let obj = new BillCounter();
            obj.seq = current.seq - 1;
            var newvalues = { $set: obj };
            return BillCounter.updateOne({ _id: "entityId" }, newvalues);

        } catch (err) {
            res.status(500).send({ message: err });
            return;
        }
    },

    setBillno: async (defaultBillno) => {
        try {
            let current = await BillCounter.findById("entityId");
            let obj = new BillCounter();
            if (current) {
                obj.seq = defaultBillno;
                var newvalues = { $set: obj };
                return BillCounter.updateOne({ _id: "entityId" }, newvalues);
            } else {
                obj._id = "entityId";
                obj.seq = defaultBillno;
                let defautV = obj.save();
                if (!defautV) {
                    return "error";
                }
                return defautV;
            }
        } catch (err) {
            return err;
        }
    },

    deleteByGcnno: async (gcnNo) => {
        try {
            let deleted = await Invoice.deleteOne({ gcnno: gcnNo });
            if (!deleted) {
                return deleted;
            }
            return deleted;
        } catch (err) {
            return err;
        }
    },

    getInvoice: async (gcnNo) => {
        try {
            let invoice = await Invoice.findOne({ gcnno: gcnNo });
            if (!invoice) {
                return invoice;
            }
            return invoice;
        } catch (err) {
            return err;
        }
    },

    deleteInvoice: async (gcnNo) => {
        try {
            let invoice = await Invoice.deleteOne({ gcnno: gcnNo });
            if (!invoice) {
                return invoice;
            }
            return invoice;
        } catch (err) {
            return err;
        }
    }


}