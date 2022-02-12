const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    token:{
      type: String
    },
    emailVerifyNo: {
      type: String,
      default: 0
    },
    emailOTP: {
      type: String,
      default: 0
    },
    mobileOTP: {
      type: String,
      default: 0
    },
    emailVerified: {
      type: Boolean,
      default: false
    },
    loginVerified: {
      type: Boolean,
      default: false
    },
    dateOfBirth: {
      type: Date,
      default: null
    },
    address: {
      type: String,
      default: null
    },
    displayPicture: {
      type: String,
      default: null
    },
    city: {
      type: String,
      default: null
    },
    state: {
      type: String,
      default: null
    },
    country: {
      type: String,
      default: null
    },
    postalCode: {
      type: String,
      default: null
    },
    langPreference: {
      type: String,
      default: null
    },
    themePreference: {
      type: String,
      default: null
    },
    currency: {
      type: String,
      default: null
    },
    timezone: {
      type: String,
      default: null
    },
    twoFactor: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: null
    },
    bankDetails : { type : Array , "default" : [] },
    cardDetails : {
      type: Object,
      default: null
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;