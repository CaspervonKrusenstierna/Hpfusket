const mongoose = require("mongoose")
const User = require("../../models/User");
const jwt = require("jsonwebtoken")

const VerifyEmail = async (req, res) => {

    if(req.body.token == ""){
        return res.status(500).json({
            success: false,
            result: null,
          });
    }

    const user = await User.findOne({verifyToken: req.body.token});
    if(!user){
        return res.status(500).json({
            success: false,
            result: null,
            message: "Invalid link."
          });
    }

    if(user.isVerified){
        return res.status(500).json({
            success: false,
            result: null,
            message: "You are already verified."
          });
    }

    user.isVerified = true;
    user.save();
    return res.status(100).json({
        success: true,
        result: null
    });
}


module.exports =  VerifyEmail;
