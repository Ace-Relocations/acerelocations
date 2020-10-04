const db = require("../models");
const Customer = db.customer;
const Expense = db.expense;
const User = db.user;


module.exports = {

    createExpense: async (gcnno, expense, total) => {
        try {
            let obj = new Expense();
            obj.gcnno = gcnno;
            obj.expenseDetails = expense;
            obj.total = total;

            let createData = await obj.save();
            if (!createData) {
                return false;
            }
            return obj;
        } catch (err) {
            return err;    
        }
    },

    getTotal: async (expense) => {
        try {
            let totalA = 0;
            for (i=0; i<expense.length; i++) {
                totalA = totalA + expense[i].Amount; 
            }
            return totalA;
        } catch (err) {
            return err;
        }
    }

}