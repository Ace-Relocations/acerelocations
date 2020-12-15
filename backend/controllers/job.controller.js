const service = require("../services/job.service")
const db = require("../models");
const numberToText = require('number-to-text');
require('number-to-text/converters/en-us');
const auth = require("../middlewares/auth.jwt")
const moment = require('moment');
const invoiceService = require("../services/invoice.service");
const expenseService = require("../services/expense.service")

const Customer = db.customer;
const User = db.user;
const Counter = db.counter;

module.exports = {
 
createJob: async (req, res) => {
    try {
        const {
            consignorF, consignorL, consigneeF, consigneeL, contact, email, oaddress1, oaddress2, ocity, ostate, opincode, daddress1, daddress2, dcity, dstate, dpincode, type, status, insuranceP, insuranceA, date
            } = req.body;
        const gcnno = await service.incrementGcnno();
        
        let gcnnoC = 0;
        if(type.toLowerCase() == "both"){
            gcnnoC = await service.incrementGcnno();
        }

        const user = await User.findById(req.userId)
        const createdBy = user.email;
        // const year = moment(Date.now()).format('YYYY');
        let obj = new Customer();
        obj.gcnno = gcnno;
        console.log(obj.gcnno)
        obj.consignorF = consignorF;
        obj.consignorL = consignorL; 
        obj.consigneeF = consigneeF;
        obj.consigneeL = consigneeL; 
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
        obj.carGcnno = gcnnoC;
        obj.insuranceP = insuranceP; 
        obj.insuranceA = insuranceA;
        obj.insuranceAInText = numberToText.convertToText(insuranceA);
        obj.createdBy = createdBy; 
        obj.date = moment(date).format('DD/MM/YYYY');
        obj.save(err => {
            if (err) {
                if(err.code == 11000) {
                    const gcnno = service.decrementGcnno();
                    res.status(500).send({ message: "User with this email already exist" });
                    return;
                } else {
                const gcnno = service.decrementGcnno(); 
                res.status(500).send({ message: err });
                return;
                }
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
        if(req.query.consignorF){
            queryCond.consignor=req.query.consignor;
         }
         if(req.query.consigneeF){
            queryCond.consignee=req.query.consignee;
         }
         if(req.query.consignorL){
            queryCond.consignor=req.query.consignor;
         }
         if(req.query.consigneeL){
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
            gcnno, consignorF, consigneeF, consignorL, consigneeL, contact, email, oaddress1, oaddress2, ocity, ostate, opincode, daddress1, daddress2, dcity, dstate, dpincode, type, insuranceP, insuranceA, date,status, isExpenseAdded, isInvoiceAdded
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
            obj.gcnno = gcnno || user.gcnno;
            obj.consignorF = consignorF || user.consignorF; 
            obj.consigneeF = consigneeF || user.consigneeF;
            obj.consignorL = consignorL || user.consignorL; 
            obj.consigneeL = consigneeL || user.consigneeL; 
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
            obj.invoice = user.invoice;
            obj.expense = user.expense;
            obj.isInvoiceAdded = isInvoiceAdded || user.isInvoiceAdded;
            obj.isExpenseAdded = isExpenseAdded || user.isExpenseAdded;

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
                res.status(500).send({ message: "User with the following gcnno does not exist" });
                return;
                }

        let current = await Counter.findById("entityId");
        if ((current.seq - 1) == user.gcnno || (user.type.toLowerCase() == "both" && (current.seq - 2) == user.gcnno)) {
            let number = await service.decrementGcnno(user.gcnno);

            if (user.type.toLowerCase() == "both"){
                let number1 = await service.decrementGcnno(user.gcnno);
            }
            let deleteV = await Customer.deleteOne({ gcnno: req.query.gcnno});
            if(!deleteV){
                return res.status(500).send({ message: "Failed to delete Customer", data: deleteV });
            }
            if(user.isInvoiceAdded){
                    let deleteI = await invoiceService.deleteByGcnno(req.query.gcnno);
                    if(!deleteI){
                        return res.status(500).send({ message: "Failed to delete Invoice", data: deleteI });
                    }
            }
            if(user.isExpenseAdded){
                let deleteE = await expenseService.deleteByGcnno(req.query.gcnno);
                if(!deleteE){
                    return res.status(500).send({ message: "Failed to delete Invoice", data: deleteE });
                }
           }
            return res.status(200).send({ message: "Customer was deleted successfully!", data: user.gcnno });     
        } else {
            let obj = new Customer();
            obj.status = "Canceled";

           const user = await Customer.updateOne({ gcnno: req.query.gcnno}, { status: 'canceled'});

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

setGcnno: async (req, res) => {
    try {
        const defaultV = await service.setGcnno(req.body.gcnno);
        return res.status(200).send({ message: "Job gcnno was updated!", data: defaultV });
    } catch (err) {
        res.status(500).send({ message: err });
    }
},

}