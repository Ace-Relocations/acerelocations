const db = require("../models");
const Counter = db.counter;
const Customer = db.customer;

module.exports = {

    viewJob: async (gcnno) => {
        try {
            console.log("Hi")
            let user = await Customer.findOne({ gcnno: gcnno }).populate("expense").populate("invoice");
            console.log("Service user:", user);

            if (!user) {
            return user;
            }
            return user;
        } catch (err) {
            return err;    
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
            return err;    
        }
    },

    setGcnno: async (defaultGcnno) => {
        try {
            let current = await Counter.findById("entityId");
            let obj = new Counter();
            if (current) {
                obj.seq = defaultGcnno;
                var newvalues = { $set: obj };
            return Counter.updateOne({ _id: "entityId"}, newvalues);
            } else { 
            obj.seq = defaultGcnno;
            obj._id = "entityId";
            let defautV = obj.save();
            if (!defautV){
                return "error";
            }
            return defautV;
            }
        } catch (err) {
            return err;    
        }
    },

    getAll: async (limit, skip) => {
        try {
            return Customer.find({})  // You may want to add a query
                           .skip(skip) // Always apply 'skip' before 'limit'
                           .limit(limit)
                           .populate("expense")
                           .populate("invoice"); // This is your 'page size'

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
