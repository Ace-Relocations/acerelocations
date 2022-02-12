const db = require("../models");
const User = db.user;

module.exports = {

    viewUser: async (userId) => {
        try {

            let user = await User.findOne({ _id: userId });
            if (!user) {
                return user;
            }
            return user;
        } catch (err) {
            res.status(500).send({ message: err });
            return;
        }
    },

    getAll: async (limit, skip) => {
        try {
            return User.find({})  // You may want to add a query
                .skip(skip) // Always apply 'skip' before 'limit'
                .limit(limit)

        } catch {
            return err;
        }
    },

    createUser: async (custObj) => {
        try {
            let user = await custObj.save();
            if (!user) {
                return false;
            }
            return user;

        } catch {
            return err;
        }
    },

    updateUser: async (userId, newvalues) => {
        try {
            let user = await User.updateOne({ _id: userId }, newvalues);
            if (!user) {
                return false;
            }
            return user;

        } catch {
            return err;
        }
    },

    filterUser: async (queryCond) => {
        try {
            let user = await User.find(queryCond);
            if (!user) {
                return false;
            }
            return user;

        } catch {
            return err;
        }
    },

    deleteUser: async (userId) => {
        try {
            let user = await User.deleteOne({ _id: userId });
            if (!user) {
                return false;
            }
            return user;

        } catch {
            return err;
        }
    },
}
