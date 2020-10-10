const config = require("../config/auth.config");
const db = require("../models");
const { handleResponse, handleError } = require('../middlewares/responsehandler');

const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");


exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username.toLowerCase(),
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
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

            res.status(200).send({ message: "User was registered successfully!", data: user });
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

          res.status(200).send({ message: "User was registered successfully!", data: user });
        });
      });
    }
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