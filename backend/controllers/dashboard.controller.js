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
            console.log(obj);
            return res.status(200).send({ message: "Dashboard was fetched successfully!", data: obj });

        } catch (err) {
            res.status(500).send({ message: "Failed to get Dashboard details", data: err });
            return;  
        }
    }
}
