const service = require("../services/job.service")
const db = require("../models");
const numberToText = require('number-to-text');
require('number-to-text/converters/en-us');

const Customer = db.customer;
const User = db.user;
const Counter = db.counter;

module.exports = {
 
createJob: async (req, res) => {
    try {
        const {
            consignor, consignee, contact, email, oaddress1, oaddress2, ocity, ostate, opincode, daddress1, daddress2, dcity, dstate, dpincode, car, type, status, insuranceP, insuranceA, date
            } = req.body;
        // const defaultV = await service.setGcnno(491);
        const gcnno = await service.incrementGcnno();
        
        let gcnnoC = 0;
        if(car == true){
            gcnnoC = await service.incrementGcnno();
        }
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
        obj.car = car;
        obj.carGcnno = gcnnoC;
        obj.insuranceP = insuranceP; 
        obj.insuranceA = insuranceA;
        obj.insuranceAInText = numberToText.convertToText(insuranceA);
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
            res.status(200).send({ message: "Customer was registered successfully!", data: obj });
        });
        
    } catch (err) {
        res.status(500).send({ message: err });
        return;    
    }
},

viewJob: async (req, res) => {
    try {
        let viewData = await service.viewJob(req.query.gcnno);

        if (!viewData) {
            res.status(500).send({ message: "User with the following gcnnno not found" });
            return;
            }
            return res.status(200).send(viewData);
    } catch (err) {
        res.status(500).send({ message: err });
        return;    
    }
},

viewAllJob: async (req, res) => {
    try {
        const limit = parseInt(req.query.limit); // Make sure to parse the limit to number
        const skip = parseInt(req.query.skip);// Make sure to parse the skip to number

        const jobs = await service.getAll(limit, skip);

        return res.status(200).json(jobs);
    } catch (err) {
        res.status(500).send({ message: err });
        return; 
    }
},

filterJob: async (req, res) => {
    try {
        var queryCond = {}
        if(req.query.consignor){
            queryCond.consignor=req.query.consignor;
         }
         if(req.query.consignee){
            queryCond.consignee=req.query.consignee;
         }
         if(req.query.contact){
            queryCond.contact=req.query.contact;
         }
         if(req.query.email){
            queryCond.email=req.query.email;
         }
         if(req.query.ocity){
            queryCond.ocity=req.query.ocity;
         }
         if(req.query.dcity){
            queryCond.dcity=req.query.dcity;
         }
         if(req.query.type){
            queryCond.type=req.query.type;
         }
         if(req.query.status){
            queryCond.status=req.query.status;
         }
         if(req.query.createdBy){
            queryCond.createdBy=req.query.createdBy;
         }

        const jobs = await Customer.find(queryCond);
        if (!jobs) {
            res.status(500).send({ message: "No jobs with the given filters found" });
            return;
            }
        res.status(200).send({ message: "Job with the following filters found", data: jobs });

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
                return res.status(200).send({ message: "Customer was updated successfully!", data: obj });
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
        if ((current.seq - 1) == user.gcnno || (user.car == true && (current.seq - 2) == user.gcnno)) {
            let number = await service.decrementGcnno(user.gcnno);
            if (user.car == true){
                let number1 = await service.decrementGcnno(user.gcnno);
            }
            let deleteV = await Customer.deleteOne({ gcnno: req.query.gcnno});
            return res.status(200).send({ message: "Customer was deleted successfully!", data: user.gcnno });     
        } else {
            let obj = new Customer();
            obj.status = "Canceled";

           const user = await Customer.updateOne({ gcnno: req.query.gcnno}, { status: 'canceled '});

                if (!user) {
                res.status(500).send({ message: "Job status not updated" });
                return;
                }  
                return res.status(200).send({ message: "Customer job status was updated to cancelled!", data: obj });
        }           
    } catch (err) {
        res.status(500).send({ message: err });
        return;    
    }
},

}