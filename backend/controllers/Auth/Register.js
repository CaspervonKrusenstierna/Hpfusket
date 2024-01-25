const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
const User = require("../../models/User");
const joi = require("joi");

const schema = joi.object({
    name: joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

    password: joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    
    email: joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
  });

const Register = async (req, res) => {
    const { error, value } = schema.validate({name: req.body.name, password: req.body.password, email: req.body.email});
    if(error){
      return res.status(500).json({
        success: false,
        result: null,
        message: 'Felaktig information',
      });
    }

   if(await User.findOne({name: req.body.name})){
    return res.status(500).json({
        success: false,
        result: null,
        message: "Användarnamnet är redan taget.",
      });
   }

    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 13);
        const user = await new User({
            name: req.body.name,
            email: req.body.email,
            privilege: 2,
            password: hashedPassword,
            isBanned: false,
            isVerified: false
        }).save();

        return res.status(200).json({success: true});
    }
    
    catch(error){
        return res.status(500).json({
            success: false,
            result: null,
            message: error.message,
          });
    }
}

module.exports = Register;