const service = require("../services/barcode.service")
const db = require("../models");
const numberToText = require('number-to-text');
require('number-to-text/converters/en-us');
const auth = require("../middlewares/auth.jwt")
const moment = require('moment');
const invoiceService = require("../services/invoice.service");
const expenseService = require("../services/expense.service")

const Customer = db.customer;
const Barcode = db.barcode;
const User = db.user;
const Counter = db.counter;

module.exports = {

    createBarcode: async (req, res) => {
        try {
            const {
                empCode, empName, fromLocation, fromFloor, fromWing, department, box, toLocation, toFloor, toWing, workstationNo, date
            } = req.body;

            const user = await User.findById(req.userId)
            const createdBy = user.email;
            let obj = new Barcode();
        
            obj.empCode = empCode;
            obj.empName = empName;
            obj.fromLocation = fromLocation;
            obj.fromFloor = fromFloor;
            obj.fromWing = fromWing;
            obj.department = department;
            obj.box = box;
            obj.toLocation = toLocation;
            obj.toFloor = toFloor;
            obj.toWing = toWing;
            obj.workstationNo = workstationNo;
            obj.createdBy = createdBy;
            obj.date = date;
            obj.boxLabels[0] = empCode + "_1"
            obj.save(err => {
                if (err) {
                    if (err.code == 11000) {
                        res.status(500).send({ message: "User with this empCode already exist" });
                        return;
                    } else {
                        res.status(500).send({ message: err });
                        return;
                    }
                }
                res.status(200).send({ message: "Barcode was registered successfully!", data: obj });
            });

        } catch (err) {
            res.status(500).send({ message: err });
            return;
        }
    },

    viewBarcode: async (req, res) => {
        try {
            let viewData = await service.viewBarcode(req.query.empCode);
            if (!viewData) {
                res.status(500).send({ message: "Barcode with the following empCode not found" });
                return;
            }
            return res.status(200).send(viewData);
        } catch (err) {
            res.status(500).send({ message: err });
            return;
        }
    },

    viewAllBarcode: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit); // Make sure to parse the limit to number
            const skip = parseInt(req.query.skip);// Make sure to parse the skip to number
            const barcodes = await service.getAllBarcode(limit, skip);

            return res.status(200).json(barcodes);
        } catch (err) {
            res.status(500).send({ message: err });
            return;
        }
    },

    filterBarcode: async (req, res) => {
        try {
            var queryCond = {}
            if (req.query.empCode) {
                queryCond.empCode = req.query.empCode;
            }
            if (req.query.empName) {
                queryCond.empName = req.query.empName;
            }
            if (req.query.box) {
                queryCond.box = req.query.box;
            }
            if (req.query.workstationNo) {
                queryCond.workstationNo = req.query.workstationNo;
            }
            
            const barcodes = await Barcode.find(queryCond);
            if (!barcodes) {
                res.status(500).send({ message: "No barcodes with the given filters found" });
                return;
            }
            res.status(200).send({ message: "Barcode with the following filters found", data: jobs });

        } catch (err) {
            res.status(500).send({ message: err });
            return;
        }
    },

    updateBarcode: async (req, res) => {
        try {
            const {
                empCode, empName, fromLocation, fromFloor, fromWing, department, box, toLocation, toFloor, toWing, workstationNo, date, createdBy
            } = req.body;

            Barcode.findOne({ empCode: req.query.empCode }, async (err, user) => {
                if (!user) {
                    res.status(500).send({ message: "Barcode with the following empCode not found" });
                    return;
                }

                const admin = await User.findById(req.userId)
                const createdBy = admin.email;

                obj.empCode = empCode;
                obj.empName = empName;
                obj.fromLocation = fromLocation;
                obj.fromFloor = fromFloor;
                obj.fromWing = fromWing;
                obj.department = department;
                obj.box = box;
                obj.toLocation = toLocation;
                obj.toFloor = toFloor;
                obj.toWing = toWing;
                obj.workstationNo = workstationNo;
                obj.createdBy = createdBy;
                obj.date = moment(date).format('DD/MM/YYYY');

                var newvalues = { $set: obj };

                Barcode.updateOne({ empCode: req.query.empCode }, newvalues, (err, user) => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }
                    return res.status(200).send({ message: "Barcode was updated successfully!", data: obj });
                });
            })

        } catch (err) {
            res.status(500).send({ message: err });
            return;
        }
    },

    deleteBarcode: async (req, res) => {
        try {
            const barcode = await Barcode.findOne({ gcnno: req.query.gcnno })
            if (!barcode) {
                res.status(500).send({ message: "Barcode with the following empCode does not exist" });
                return;
            }
            
                let deleteV = await Barcode.deleteOne({ empCode: req.query.empCode });
                if (!deleteV) {
                    return res.status(500).send({ message: "Failed to delete Barcode", data: deleteV });
                }
                return res.status(200).send({ message: "Barcode was deleted successfully!", data: barcode.empCode });
        } catch (err) {
            res.status(500).send({ message: err });
            return;
        }
    },
}