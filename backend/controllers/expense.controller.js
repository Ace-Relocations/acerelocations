const expenseService = require("../services/expense.service");
const jobService = require("../services/job.service")
const db = require("../models");

const Customer = db.customer;


module.exports = {
 
    createExpense: async (req, res) => {
        try {
            const {
                gcnno, expense
                } = req.body;
            if(expense == false) {
                res.status(500).send({ message: "The value passed is null" });
            }
            let total = await expenseService.getTotal(expense);
            let createData = await expenseService.createExpense(gcnno, expense, total);
            if (createData == false) {
            res.status(500).send({ message: "failed to register expense", data: createData });
            return;
            } 
            
            let jobById = {};
            jobById.expense = createData;
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
            let expenses = await Customer.find({gcnno: req.body.gcnno}).populate("expense").populate("invoice");
            return res.status(200).send({ message: "Expense was fetched successfully!", data: expenses });
        } catch(err) {
            console.log(err)
            res.status(500).send({ message: "Failed to fetch Expense", data: err });
            return;    
        }
    }

}