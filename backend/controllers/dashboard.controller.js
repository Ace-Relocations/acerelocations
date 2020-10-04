const dashboardService = require("../services/dashboard.service");
const db = require("../models");

module.exports = {
 
    getDashboard: async (req, res) => {
        try {
            let obj = {};
            obj.revenue = await dashboardService.getRevenue();
            obj.cost = await dashboardService.getCost();
            obj.profit = obj.revenue - obj.cost;
            obj.totalJobs = await dashboardService.getTotal();
            obj.ongoingJobs = await dashboardService.getOngoing();
            obj.completedJobs = await dashboardService.getCompleted();

            console.log(obj);
            return res.status(200).send({ message: "Dashboard was fetched successfully!", data: obj });

        } catch (err) {
            res.status(500).send({ message: "Failed to get Dashboard details", data: err });
            return;  
        }
    }
}
