const db = require("../models");
const Counter = db.counter;
const Customer = db.customer;

module.exports = {

    viewJob: async (gcnno) => {
        try {
            
            let user = await Customer.findOne({ gcnno: gcnno }).populate("expense").populate("invoice");
            if (!user) {
            return user;
            }
            return user;
        } catch (err) {
            res.status(500).send({ message: err });
            return;    
        }
    },

    incrementGcnno: async () => {
        try {
           let gcnno = await Counter.findByIdAndUpdate({_id: 'entityId'}, {$inc: { seq: 1} });
           return gcnno.seq;
        } catch (err) {
            return err;    
        }
    },

    decrementGcnno: async (gcnno) => {
        try {
            let current = await Counter.findById("entityId");

            let obj = new Counter();
            obj.seq = current.seq - 1;
            var newvalues = { $set: obj };
            return Counter.updateOne({ _id: "entityId"}, newvalues);
           
        } catch (err) {
            res.status(500).send({ message: err });
            return;    
        }
    },

    setGcnno: async (defaultGcnno) => {
        try {
            let obj = new Counter();
            obj.seq = defaultGcnno;
            var newvalues = { $set: obj };
            let defautV = Counter.updateOne({ _id: "entityId"}, newvalues);
            if (!defautV){
                return "error";
            }
            return defautV;
        } catch (err) {
            return err;    
        }
    },

    getAll: async (limit, skip) => {
        try {
            return Customer.find({})  // You may want to add a query
                           .skip(skip) // Always apply 'skip' before 'limit'
                           .limit(limit) // This is your 'page size'

        } catch {
            return err;    
        }
    },

    filterJob: async () => {
        try {

        } catch {
            return err;
        }
    },
}
