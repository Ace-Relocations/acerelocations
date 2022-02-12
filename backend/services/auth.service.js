const nodemailer = require("nodemailer");
const db = require("../models");

const User = db.user;

module.exports = {
    sendOtpMail: async (email) => {
        try {
            var otp = Math.random();
            otp = otp * 1000000;
            otp = parseInt(otp);


            let transporter = await nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'shahdishant28@gmail.com',
                    pass: 'ADGJLljgdab82*'
                },
            });

            const mailOptions = {
                from: 'shahdishant28@gmail.com',
                to: email,
                subject: "Please Confirm the OTP",
                html: "<b>Hello, your OTP for verification is " + otp + "</b>",
            };
            const response = await transporter.sendMail(mailOptions);

            return response;

        } catch (err) {

            return err;
        }
    },

    sendVerification: async (req, user) => {
        try {

            let transporter = await nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'shahdishant28@gmail.com',
                    pass: 'ADGJLljgdab82*#'
                },
            });

            rand = Math.floor((Math.random() * 100) + 54);
            host = req.get('host');
            link = "http://" + "rhodiumfrontend.s3-website.us-east-2.amazonaws.com/" + "/verified-message?id=" + rand + "&email=" + req.body.email;

            user.emailVerifyNo = rand;
            var newvalues = { $set: user };
            let updatev = user.updateOne({ _id: user._id }, newvalues);
            mailOptions = {
                from: 'info@rhodium.com',
                to: req.body.email,
                subject: "Please confirm your Email account",
                html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>"
            }
            const response = transporter.sendMail(mailOptions);

            return "true";

        } catch (err) {

            return err;
        }
    },

    verifyEmail: async (req, res, rand) => {
        try {
            console.log("Id:", req.query.id );
            console.log("rand:", rand );
                if (req.query.id == rand) {
                    let user = await User.findOne({ email: req.query.email });
                    if (!user) {
                        return false;
                    }

                    user.emailVerified = true;
                    var newvalues = { $set: user };
                    let updatev = await User.updateOne({ _id: user._id }, newvalues);
                    console.log("updatev:", updatev);

                    if (!updatev) {
                        return false;
                    }

                    return true;
                }
                else {
                    return false;
                }
            
        } catch (err) {
            return err;
        }
    },

    verifyOTP: async (user, otp) => {
        try {

            if (user.emailOTP == otp) {
                user.loginVerified = true;
                var newvalues = { $set: user };
                let updatev = await User.updateOne({ _id: user._id }, newvalues);
                if (!updatev) {
                    return false;
                }
                return updatev;
            }
            else {
                return false;
            }

        } catch (err) {
            return err;
        }
    },
}