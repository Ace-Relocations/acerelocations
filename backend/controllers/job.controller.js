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
                gcnno, carGcnno, consignorF, consignorL, consigneeF, consigneeL, contact, email, oaddress1, oaddress2, ocity, 
                ostate, opincode, daddress1, daddress2, dcity, dstate, dpincode, type, status, insuranceP, insuranceA, insuranceCarP, 
                insuranceCarA, date, items, gst, item, assignedUser
            } = req.body;


            let uno;
            if (!gcnno) {
                uno = carGcnno;
            } else {
                uno = gcnno;
            }

            const user = await User.findById(req.userId)
            const createdBy = user.email;
   
            let obj = new Customer();
            obj.gcnno = uno;
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
            obj.carGcnno = carGcnno;
            obj.insuranceP = insuranceP;
            obj.insuranceA = insuranceA;
            obj.insuranceCarP = insuranceCarP;
            obj.insuranceCarA = insuranceCarA;
            obj.items = items;
            obj.assignedUser = assignedUser;
            obj.gst = gst;
            obj.item = item;

            if (insuranceA) {
                obj.insuranceAInText = numberToText.convertToText(insuranceA) + " " + "only";
            } else {
                obj.insuranceAInText = ""
            }

            if (insuranceCarA) {
                obj.insuranceCarAInText = numberToText.convertToText(insuranceCarA) + " " + "only";
            } else {
                obj.insuranceCarAInText = ""
            }

            obj.createdBy = createdBy;
            obj.date = moment(date).format('DD/MM/YYYY');
            obj.save(err => {
                if (err) {
                    if (err.code == 11000) {
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
            res.status(500).send({ message: "here" });
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
            if (req.query.consignorF) {
                queryCond.consignor = req.query.consignor;
            }
            if (req.query.consigneeF) {
                queryCond.consignee = req.query.consignee;
            }
            if (req.query.consignorL) {
                queryCond.consignor = req.query.consignor;
            }
            if (req.query.consigneeL) {
                queryCond.consignee = req.query.consignee;
            }
            if (req.query.contact) {
                queryCond.contact = req.query.contact;
            }
            if (req.query.email) {
                queryCond.email = req.query.email;
            }
            if (req.query.ocity) {
                queryCond.ocity = req.query.ocity;
            }
            if (req.query.dcity) {
                queryCond.dcity = req.query.dcity;
            }
            if (req.query.type) {
                queryCond.type = req.query.type;
            }
            if (req.query.status) {
                queryCond.status = req.query.status;
            }
            if (req.query.createdBy) {
                queryCond.createdBy = req.query.createdBy;
            }
            if (req.query.gst) {
                queryCond.gst = req.query.gst;
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
                gcnno, consignorF, consigneeF, consignorL, consigneeL, contact, email, oaddress1, oaddress2, ocity, ostate, opincode, daddress1, daddress2, dcity, dstate, dpincode, type, insuranceP, insuranceA, insuranceCarP, insuranceCarA, date, status, isExpenseAdded, isInvoiceAdded, carGcnno, items, gst, item, assignedUser
            } = req.body;
            let uno = gcnno;
            if (!gcnno && carGcnno) {
                uno = carGcnno;
            }

            Customer.findOne({ gcnno: req.query.gcnno }, async (err, user) => {
                if (!user) {
                    res.status(500).send({ message: "User with the following gcnnno not found" });
                    return;
                }

                const admin = await User.findById(req.userId)
                const createdBy = admin.email;

                let obj = new Customer();
                obj._id = user._id;
                if (user.type == "car"){
                    obj.gcnno = uno || user.gcnno;
                } else {
                    obj.gcnno = gcnno || user.gcnno;
                }
                obj.carGcnno = carGcnno;
                obj.consignorF = consignorF;
                obj.consigneeF = consigneeF;
                obj.consignorL = consignorL;
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
                obj.insuranceP = insuranceP;
                obj.insuranceA = insuranceA;
                obj.insuranceCarP = insuranceCarP;
                obj.insuranceCarA = insuranceCarA;
                obj.createdBy = createdBy;
                obj.items = items;
                obj.item = item;
                obj.gst = gst;
                obj.assignedUser = assignedUser;
                console.log("Input:", date)
                obj.date = moment(date).format('DD/MM/YYYY');
                console.log("Output:", obj.date)
                obj.invoice = user.invoice;
                obj.expense = user.expense;
                obj.isInvoiceAdded = isInvoiceAdded || user.isInvoiceAdded;
                obj.isExpenseAdded = isExpenseAdded || user.isExpenseAdded;

                if (insuranceA) {
                    obj.insuranceAInText = numberToText.convertToText(insuranceA) + " " + "only";
                } else {
                    obj.insuranceAInText = ""
                }
    
                if (insuranceCarA) {
                    obj.insuranceCarAInText = numberToText.convertToText(insuranceCarA) + " " + "only";
                } else {
                    obj.insuranceCarAInText = ""
                }
                
                var newvalues = { $set: obj };

                Customer.updateOne({ gcnno: req.query.gcnno }, newvalues, (err, user) => {
                    if (err) {
                        res.status(500).send({ message: err });
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
            const user = await Customer.findOne({ gcnno: req.query.gcnno })
            if (!user) {
                res.status(500).send({ message: "User with the following gcnno does not exist" });
                return;
            }

            // let current = await Counter.findById("entityId");
            // if ((current.seq - 1) == user.gcnno || (user.type.toLowerCase() == "both" && (current.seq - 2) == user.gcnno)) {
            //     let number = await service.decrementGcnno(user.gcnno);

            //     if (user.type.toLowerCase() == "both") {
            //         let number1 = await service.decrementGcnno(user.gcnno);
            //     }
            
                let deleteV = await Customer.deleteOne({ gcnno: req.query.gcnno });
                if (!deleteV) {
                    return res.status(500).send({ message: "Failed to delete Customer", data: deleteV });
                }
                if (user.isInvoiceAdded) {
                    let deleteI = await invoiceService.deleteByGcnno(req.query.gcnno);
                    if (!deleteI) {
                        return res.status(500).send({ message: "Failed to delete Invoice", data: deleteI });
                    }
                }
                if (user.isExpenseAdded) {
                    let deleteE = await expenseService.deleteByGcnno(req.query.gcnno);
                    if (!deleteE) {
                        return res.status(500).send({ message: "Failed to delete Invoice", data: deleteE });
                    }
                }
                return res.status(200).send({ message: "Customer was deleted successfully!", data: user.gcnno });

            // } else {
            //     let obj = new Customer();
            //     obj.status = "Canceled";

            //     const user = await Customer.updateOne({ gcnno: req.query.gcnno }, { status: 'canceled' });

            //     if (!user) {
            //         res.status(500).send({ message: "Job status not updated" });
            //         return;
            //     }
            //     return res.status(200).send({ message: "Customer job status was updated to cancelled!", data: obj });
            // }
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