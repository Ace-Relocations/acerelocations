const db = require("../models");

const Customer = db.customer;
const Invoice = db.invoice;
const Expense = db.expense;
const User = db.user;

module.exports = {
 
    getRevenue: async () => {
        try {
            let invoices = await Invoice.find({});
            let revenue = 0;
            for (i=0; i<invoices.length; i++){
                revenue = revenue + parseInt(invoices[i].total);
            }
            return revenue;
        } catch (err) {
            return err;  
        }
    },

    getCost: async () => {
        try {
            let expenses = await Expense.find({});
            let costs = 0;
            for (i=0; i<expenses.length; i++){
                costs = costs + parseInt(expenses[i].total);
            }
            return costs;
        } catch (err) {
            return err;  
        }
    },

    getTotal: async () => {
        try {
            let jobs = await Customer.find({});
            return jobs.length;
        } catch (err) {
            return err;  
        }
    },

    getOngoing: async () => {
        try {
            let jobs = await Customer.find({status: 'ongoing'});
            return jobs.length;
        } catch (err) {
            return err;  
        }
    },

    getCompleted: async () => {
        try {
            let jobs = await Customer.find({status: 'completed'});
            return jobs.length;
        } catch (err) {
            return err;  
        }
    },

    getExpense: async () => {
        try {
            return Expense.find({})  // You may want to add a query
        } catch {
            return err;    
        }
    },

    getInvoice: async () => {
        try {
            
            const data = Customer.find({})  // You may want to add a query
                           .populate("expense")
                           .populate("invoice"); // This is your 'page size'

            return data;

        } catch {
            return err;    
        }
    }

}