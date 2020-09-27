const db = require("../models");
const Counter = db.counter;

module.exports = {

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
}
