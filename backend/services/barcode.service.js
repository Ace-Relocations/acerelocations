const db = require("../models");
const Barcode = db.barcode;

module.exports = {

    viewBarcode: async (empCode) => {
        try {
            let barcode = await Barcode.findOne({ empCode: empCode });

            if (!barcode) {
            return barcode;
            }
            return barcode;
        } catch (err) {
            res.status(500).send({ message: err });
            return;    
        }
    },

    getAllBarcode: async (limit, skip) => {
        try {
            return Barcode.find({})  // You may want to add a query
                           .skip(skip) // Always apply 'skip' before 'limit'
                           .limit(limit)

        } catch {
            return err;    
        }
    },
}
