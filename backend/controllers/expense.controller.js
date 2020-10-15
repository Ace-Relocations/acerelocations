const service = require("../services/expense.service");
const db = require("../models");

const Customer = db.customer;
const Expense = db.expense;


module.exports = {
 
    createExpense: async (req, res) => {
        try {
            const {
                gcnno, expense
                } = req.body;
            if(expense == false) {
                res.status(500).send({ message: "The value passed is null" });
            }
            let total = await service.getTotal(expense);
            let createData = await service.createExpense(gcnno, expense, total);
            if (createData == false) {
            res.status(500).send({ message: "failed to register expense", data: createData });
            return;
            } 
            
            let jobById = {};
            jobById.expense = createData;
            jobById.isExpenseAdded = true;
            var newvalues = { $set: jobById };
            Customer.updateOne({ gcnno: gcnno}, newvalues, (err, user) => {
                if (err) {
                    console.log(err)
                res.status(500).send({ message: "Expense not linked to Job" });
                return;
                }  
                return res.status(200).send({ message: "Expense was linked to the job successfully!", data: jobById });
            });
        } catch (err) {
            res.status(500).send({ message: "Failed to register Expense", data: err });
            return;    
        }
    },

    getExpense: async (req, res) => {
        try {
            //let expenses = await Customer.find({gcnno: req.body.gcnno}).populate("expense").populate("expense");
            let findExpense = await service.getExpense(req.body.gcnno);
            if(!findExpense){
                return res.status(500).send({ message: "Invoice failed to fetch, does not exist!", data: findExpense });
            }
            return res.status(200).send({ message: "Expense was fetched successfully!", data: expenses });
        } catch(err) {
            console.log(err)
            res.status(500).send({ message: "Failed to fetch Expense", data: err });
            return;    
        }
    },

    updateExpense: async (req, res) => {
        try {
        const {
            gcnno, expense
            } = req.body;

            let expenseC = await Expense.findOne({gcnno: gcnno});
            let obj = {};
            obj._id = expenseC._id;
            obj.gcnno = gcnno;
            obj.expenseDetails = expense || expenseC.expenseDetails; 
            obj.total = await service.getTotal(obj.expenseDetails);
            var newvalues = { $set: obj };

            let updateV = await Expense.updateOne({gcnno: obj.gcnno}, newvalues)
                if (!updateV) {
                return res.status(500).send({ message: "expense not updated", data: updateV });
                }  
                return res.status(200).send({ message: "expense was updated successfully!", data: obj });

        } catch(err) {
            console.log(err)
            res.status(500).send({ message: "Failed to fetch expense", data: err });
            return;    
        }
    }

}