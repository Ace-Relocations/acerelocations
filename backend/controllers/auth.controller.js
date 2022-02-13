const config = require("../config/auth.config");
const db = require("../models");
const { handleResponse, handleError } = require('../middlewares/responsehandler');
const nodemailer = require("nodemailer");
// var data = require('./index.html');
const service = require("../services/auth.service")

const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shahdishant28@gmail.com',
    pass: 'dtigxclbutwxuwaw'
  },
});


exports.signup = async (req, res) => {
  const user = new User({
    username: req.body.username.toLowerCase(),
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    createdAt: Date.now()
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

          });
        }
      );
    } else {
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = [role._id];
        user.save(err => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
        });
      });
    }

    rand = Math.floor((Math.random() * 100) + 54);
    host = req.get('host');
    link = "http://" + "acerelocations-frontend.s3-website.us-east-2.amazonaws.com" + "/verified-message/"+ rand + "/" + req.body.email;

    user.emailVerifyNo = rand;
    var newvalues = { $set: user };
    let updatev = user.updateOne({ _id: user._id }, newvalues);

    // fs.readFile('index.html', function (err, html) {
    //   if (err) {
    //     res.status(500).send({ message: err });
    //   }       
      mailOptions = {
        from: 'info@acerelocations.co.in',
        to: req.body.email,
        subject: "Please confirm your Email account",
        html: "Hi, Please click here to confirm your email" + String(link)
      } 
      
   
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.status(200).send({ message: "User was registered successfully!", data: user });

    }) 
  // });

  });
};

exports.signin = (req, res) => {

  User.findOne({
    username: req.body.username.toLowerCase()
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }
      let obj = {};
      obj.token = token;
      var newvalues = { $set: obj };
      User.updateOne({ _id: user._id }, newvalues, (err, user) => {
        if (err) {
        res.status(500).send({ message: "Job not updated" });
        return;
        }  
    });   
    return res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      roles: authorities,
      accessToken: token
    });
    });
};

exports.logout = (req, res) => {
  try {
    User.updateOne({_id: req.userId}, {$unset: {token: 1}}, (err, user)=> {
      if (err) {
        res.status(500).send({ message: "Unable to Delete token" });
      }
      res.status(200).send({ message: "Logout Successfull" });
    })
  } catch (err) {
    res.status(500).send({ message: "Unable to Logout" });
  }
}

exports.verify = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.query.email.toLowerCase() });
    let verifyData = await service.verifyEmail(req, res, user.emailVerifyNo);
    console.log("verifyData:", verifyData);

    if (!verifyData) {
      res.status(500).send({ message: "User with the following email was not registered" });
      return;
    }
    return res.status(200).send({ message: "User with the following email was registered" });
  } catch (err) {
    res.status(500).send({ message: err });
    return;
  }
}

exports.verifyOTP = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email.toLowerCase() })
    let verifyData = await service.verifyOTP(user, req.body.otp);
    if (!verifyData) {
      res.status(500).send({ message: "Login failed" });
      return;
    }
    return res.status(200).send(verifyData);
  } catch (err) {
    res.status(500).send({ message: err });
    return;
  }
}

exports.forgotPassword = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email.toLowerCase() })
    if(user) {
    
    rand = Math.floor((Math.random() * 100) + 54);

    user.emailVerifyNo = rand;
    var newvalues = { $set: user };
    let updatev = user.updateOne({ _id: user._id }, newvalues);
    
      mailOptions = {
        from: 'info@acerelocations.co.in',
        to: req.body.email,
        subject: "OTP to reset password",
        html: "Hi, Please find your otp" + String(rand)
      } 
      
   
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.status(200).send({ message: "Forgot Password mail was sent!", data: user });

    })
  } 
  } catch (err) {
    res.status(500).send({ message: err });
    return;
  }
}