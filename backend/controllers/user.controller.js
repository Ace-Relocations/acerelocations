const service = require("../services/user.service")
const db = require("../models");
const numberToText = require('number-to-text');
require('number-to-text/converters/en-us');
const auth = require("../middlewares/auth.jwt")
const moment = require('moment');

const User = db.user;

module.exports = {

  createUser: async (req, res) => {
    try {
      const {
        username, email, number, dateOfBirth, address, city, state, country, postalCode, langPreference, themePreference, currency, timezone, 
        twoFactor, displayPicture
      } = req.body;

      const user = await User.findById(req.userId);
      if (!user) {
        res.status(500).send({ message: "User not found" });
      }

      user.username = username;
      user.email = email;
      user.number = number;
      user.dateOfBirth = dateOfBirth;
      user.address = address;
      user.city = city;
      user.state = state;
      user.country = country;
      user.postalCode = postalCode;
      user.langPreference = langPreference;
      user.themePreference = themePreference;
      user.currency = currency;
      user.timezone = timezone;
      user.twoFactor = twoFactor;
      user.displayPicture = displayPicture;

      var newvalues = { $set: user };

      let updateData = await service.updateUser(req.userId, newvalues);
      if (!updateData) {
        res.status(500).send({ message: "User was not updated" });
        return;
      }
      return res.status(200).send({ message: "User was updated successfully!", data: user });


    } catch (err) {
      res.status(500).send({ message: err });
      return;
    }
  },

  viewUser: async (req, res) => {
    try {
      let viewData = await service.viewUser(req.userId);
      if (!viewData) {
        res.status(500).send({ message: "User with the following gcnnno not found" });
        return;
      }
      return res.status(200).send(viewData);
    } catch (err) {
      res.status(500).send({ message: err });
      return;
    }
  },

  viewAllUser: async (req, res) => {
    try {
      const limit = parseInt(req.query.limit); // Make sure to parse the limit to number
      const skip = parseInt(req.query.skip);// Make sure to parse the skip to number
      const Users = await service.getAll(limit, skip);

      return res.status(200).json(Users);
    } catch (err) {
      res.status(500).send({ message: err });
      return;
    }
  },

  filterUser: async (req, res) => {
    try {
      var queryCond = {}
      if (req.query.consignorF) {
        queryCond.consignor = req.query.consignor;
      }
      if (req.query.consigneeF) {
        queryCond.consignee = req.query.consignee;
      }
      if (req.query.consignorL) {
        queryCond.consignor = req.query.consignor;
      }
      if (req.query.consigneeL) {
        queryCond.consignee = req.query.consignee;
      }
      if (req.query.contact) {
        queryCond.contact = req.query.contact;
      }
      if (req.query.email) {
        queryCond.email = req.query.email;
      }
      if (req.query.ocity) {
        queryCond.ocity = req.query.ocity;
      }
      if (req.query.dcity) {
        queryCond.dcity = req.query.dcity;
      }
      if (req.query.type) {
        queryCond.type = req.query.type;
      }
      if (req.query.status) {
        queryCond.status = req.query.status;
      }
      if (req.query.createdBy) {
        queryCond.createdBy = req.query.createdBy;
      }

      let Users = await service.filterUser(queryCond);
      if (!Users) {
        res.status(500).send({ message: "No Users with the given filters found" });
        return;
      }
      res.status(200).send({ message: "User with the following filters found", data: Users });

    } catch (err) {
      res.status(500).send({ message: err });
      return;
    }
  },

  updateUser: async (req, res) => {
    try {
      const {
        username, email, number, dateOfBirth, address, city, state, country, postalCode, langPreference, themePreference, currency, timezone, twoFactor, displayPicture
      } = req.body;

      let user = await service.viewUser(req.userId);

      if (!user) {
        res.status(500).send({ message: "User with the following id not found" });
        return;
      }

      let obj = new User();

      obj._id = user._id;
      obj.username = username || user.username;
      obj.email = email || user.email;
      obj.number = number || user.number;
      obj.dateOfBirth = dateOfBirth || user.dateOfBirth;
      obj.address = address || user.address;
      obj.city = city || user.city;
      obj.state = state || user.state;
      obj.country = country || user.country;
      obj.postalCode = postalCode || user.postalCode;
      obj.langPreference = langPreference || user.langPreference;
      obj.themePreference = themePreference || user.themePreference;
      obj.currency = currency || user.currency;
      obj.timezone = timezone || user.timezone;
      obj.twoFactor = twoFactor || user.twoFactor;
      obj.displayPicture = displayPicture || user.displayPicture;

      var newvalues = { $set: obj };

      let updateData = await service.updateUser(req.userId, newvalues);

      if (!updateData) {
        res.status(500).send({ message: "User was not updated" });
        return;
      }
      return res.status(200).send({ message: "User was updated successfully!", data: updateData });


    } catch (err) {
      res.status(500).send({ message: err });
      return;
    }
  },

  deleteUser: async (req, res) => {
    try {
      let user = await service.viewUser(req.query.id);

      if (!user) {
        res.status(500).send({ message: "User with the following id not found" });
        return;
      }

      let deleteV = await service.deleteUser(req.query.id);
      if (!deleteV) {
        return res.status(500).send({ message: "Failed to delete Customer", data: deleteV });
      }

      return res.status(200).send({ message: "User was deleted succesfully!", data: deleteV });

    } catch (err) {
      res.status(500).send({ message: err });
      return;
    }
  },

}