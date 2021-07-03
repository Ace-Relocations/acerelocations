const db = require("../models");
const Customer = db.customer;
const User = db.user;

module.exports = {
 
   createCustomer: async (req, res) => {
    try {
        const {
            consignor, consignee, contact, email, oaddress1, oaddress2, ocity, ostate, opincode, daddress1, daddress2, dcity, dstate, dpincode, type, insuranceP, insuranceA, date
            } = req.body;
        const user = await User.findById(req.userId)
        const createdBy = user.email;

        let obj = new Customer();
        obj.gcnno = gcnno;
        obj.consignor = consignor; 
        obj.consignee = consignee; 
        obj.contact = contact; 
        obj.email = email; 
        obj.oaddress1 = oaddress1; 
        obj.oaddress2 = oaddress2; 
        obj.ocity = ocity; 
        obj.ostate = ostate; 
        obj.opincode = opincode; 
        obj.daddress1 = daddress1; 
        obj.daddress2 = daddress2; 
        obj.dcity = dcity; 
        obj.dstate = dstate; 
        obj.dpincode = dpincode; 
        obj.type = type;
        obj.insuranceP = insuranceP; 
        obj.insuranceA = insuranceA;
        obj.createdBy = createdBy; 
        obj.date = date;

        console.log(obj);

        obj.save(err => {
            if (err) {
                if(err.code == 11000) {
                    res.status(500).send({ message: "User with this email already exist" });
                    return;
                }
              res.status(500).send({ message: err });
              return;
            }  
            res.send({ message: "Customer was registered successfully!" });
          });
        
    } catch (err) {
        res.status(500).send({ message: err });
        return;    
      }
   },

   viewCustomer: async (req, res) => {
    try {
        Customer.find({ email: req.body.email }, (err, user) => {
            if (!user) {
              res.status(500).send({ message: "User with the following email not found" });
              return;
            }
            console.log(user);
            return res.status(200).send(user);
        })
    } catch (err) {
        res.status(500).send({ message: err });
        return;    
      }
   },

   updateCustomer: async (req, res) => {
    try {

        
    } catch (err) {
        res.status(500).send({ message: err });
        return;    
      }
   },

   deleteCustomer: async (req, res) => {
    try {

        
    } catch (err) {
        res.status(500).send({ message: err });
        return;    
      }
   },

}