const dashboardService = require("../services/dashboard.service");
const db = require("../models");

module.exports = {
 
    getDashboard: async (req, res) => {
        try {
            let obj = {};
            revenue = await dashboardService.getRevenue();
            cost = await dashboardService.getCost();
            profit = revenue - cost;
            totalJobs = await dashboardService.getTotal();
            ongoingJobs = await dashboardService.getOngoing();
            completedJobs = await dashboardService.getCompleted();

            obj = {
                'Revenue': revenue,
                'Cost': cost,
                'Profit': profit,
                'Total Jobs': totalJobs,
                'Ongoing Jobs': ongoingJobs,
                'Completed Jobs': completedJobs
            }
            return res.status(200).send({ message: "Dashboard was fetched successfully!", data: obj });

        } catch (err) {
            res.status(500).send({ message: "Failed to get Dashboard details", data: err });
            return;  
        }
    },

    getExpenseInsight: async (req, res) => {
        try {
            let obj = {};
            allExpense = await dashboardService.getExpense();
            
            // allExpense.forEach(element => {
            //     obj.append({"expense": })
                
            // });
            return res.status(200).send({ message: "Expense was fetched successfully!", data: allExpense });

        } catch (err) {
            res.status(500).send({ message: "Failed to get Dashboard details", data: err });
            return;  
        }
    },

    getInvoiceInsight: async (req, res) => {
        try {
            let obj = {};
            allInvoice = await dashboardService.getInvoice();
            
            let arr = []
            for(const val of allInvoice) {
                if(val.expense[0]){
                    arr.push({ "x": val.date, "y": val.expense.total?val.expense.total:"" })
                }
            }
            let obj1 = 
            {   "id": "expense",
                "color": "hsl(135, 70%, 50%)",
                "data": arr
            }
            let arr1 = []
            for(const val of allInvoice) {
                if(val.invoice[0]){
                    arr1.push({ "x": val.date, "y": val.invoice[0].total?val.invoice[0].total:"" })
                }
            }
            let obj2 = 
            {   "id": "invoice",
                "color": "hsl(18, 70%, 50%)",
                "data": arr1
            }
            let arr2 = [];
            arr2.push(obj1);
            arr2.push(obj2);
            return res.status(200).send({ message: "Expense was fetched successfully!", data: arr2 });

        } catch (err) {
            res.status(500).send({ message: "Failed to get Dashboard details", data: err });
            return;  
        }
    }
}
