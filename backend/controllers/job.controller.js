const service = require("../services/job.service")
const db = require("../models");
const Customer = db.customer;
const User = db.user;
const Counter = db.counter;

module.exports = {
 
createJob: async (req, res) => {
    try {
        const {
            consignor, consignee, contact, email, oaddress1, oaddress2, ocity, ostate, opincode, daddress1, daddress2, dcity, dstate, dpincode, type, status, insuranceP, insuranceA, date
            } = req.body;
        // const defaultV = await service.setGcnno(491);
        const gcnno = await service.incrementGcnno();
     

        const user = await User.findById(req.userId)
        const createdBy = user.email;

        let obj = new Customer();
        obj.gcnno = gcnno;
        obj.consignor = consignor; 
        obj.consignee = consignee; 
        obj.contact = contact; 
        obj.email = email; 
        obj.oaddress1 = oaddress1; 
        obj.oaddress2 = oaddress2; 
        obj.ocity = ocity; 
        obj.ostate = ostate; 
        obj.opincode = opincode; 
        obj.daddress1 = daddress1; 
        obj.daddress2 = daddress2; 
        obj.dcity = dcity; 
        obj.dstate = dstate; 
        obj.dpincode = dpincode; 
        obj.type = type;
        obj.status = status;
        obj.insuranceP = insuranceP; 
        obj.insuranceA = insuranceA;
        obj.createdBy = createdBy; 
        obj.date = date;

        obj.save(err => {
            if (err) {
                if(err.code == 11000) {
                    res.status(500).send({ message: "User with this email already exist" });
                    return;
                }
            res.status(500).send({ message: err });
            return;
            }  
            res.send({ message: "Customer was registered successfully!" });
        });
        
    } catch (err) {
        res.status(500).send({ message: err });
        return;    
    }
},

viewJob: async (req, res) => {
    try {
        Customer.findOne({ gcnno: req.query.gcnno }, (err, user) => {
            if (!user) {
            res.status(500).send({ message: "User with the following gcnnno not found" });
            return;
            }
            return res.status(200).send(user);
        })
    } catch (err) {
        res.status(500).send({ message: err });
        return;    
    }
},

updateJob: async (req, res) => {
    try {
        const {
            consignor, consignee, contact, email, oaddress1, oaddress2, ocity, ostate, opincode, daddress1, daddress2, dcity, dstate, dpincode, type, insuranceP, insuranceA, date,status   
            } = req.body;

        Customer.findOne({ gcnno: req.query.gcnno }, async (err, user) => {
            if (!user) {
            res.status(500).send({ message: "User with the following gcnnno not found" });
            return;
            }

            const admin = await User.findById(req.userId)
            const createdBy = admin.email;

            let obj = new Customer();
            obj._id = user._id;
            obj.gcnno = user.gcnno;
            obj.consignor = consignor || user.consignor; 
            obj.consignee = consignee || user.consignee; 
            obj.contact = contact || user.contact; 
            obj.email = email || user.email; 
            obj.oaddress1 = oaddress1 || user.oaddress1; 
            obj.oaddress2 = oaddress2 || user.oaddress2; 
            obj.ocity = ocity || user.ocity; 
            obj.ostate = ostate || user.ostate; 
            obj.opincode = opincode || user.opincode; 
            obj.daddress1 = daddress1 || user.daddress1; 
            obj.daddress2 = daddress2 || user.daddress2; 
            obj.dcity = dcity || user.dcity; 
            obj.dstate = dstate || user.dstate; 
            obj.dpincode = dpincode || user.dpincode; 
            obj.type = type || user.type;
            obj.status = status || user.status;
            obj.insuranceP = insuranceP || user.insuranceP; 
            obj.insuranceA = insuranceA || user.insuranceA;
            obj.createdBy = createdBy; 
            obj.date = date || user.date;

            var newvalues = { $set: obj };

            Customer.updateOne({ gcnno: req.query.gcnno}, newvalues, (err, user) => {
                if (err) {
                res.status(500).send({ message: "Job not updated" });
                return;
                }  
                return res.send({ message: "Customer was updated successfully!" });
            });
        })  
        
    } catch (err) {
        res.status(500).send({ message: err });
        return;    
    }
},

deleteJob: async (req, res) => {
    try {
        const user = await Customer.findOne({ gcnno: req.query.gcnno})
            if (!user) {
                res.status(500).send({ message: "User with the following gcnnno cannot be deleted" });
                return;
                }

        let current = await Counter.findById("entityId");
        if ((current.seq - 1) == user.gcnno ) {
            let number = await service.decrementGcnno(user.gcnno);
            let deleteV = await Customer.deleteOne({ gcnno: req.query.gcnno});
            return res.send({ message: "Customer was deleted successfully!" });     
        } else {
            let obj = new Customer();
            obj.status = "Canceled";

           const user = await Customer.updateOne({ gcnno: req.query.gcnno}, { status: 'canceled '});

                if (!user) {
                res.status(500).send({ message: "Job status not updated" });
                return;
                }  
                return res.send({ message: "Customer status was updated successfully!" });
        }           
    } catch (err) {
        res.status(500).send({ message: err });
        return;    
    }
},

}