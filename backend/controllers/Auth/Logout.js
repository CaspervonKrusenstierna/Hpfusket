const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");

const Logout = async (req, res) => {
    let decoded = jwt.verify(req.cookies?.jwt, process.env.REFRESH_TOKEN_SECRET);
    if(!decoded){
        return res.status(500).json({
            success: false,
          });
    }
    const user = await User.findOne({name: decoded.name});
    if(!user){
        return res.status(500).json({
            success: false,
          });
    }
    user.loggedOutTokenIds.push(decoded.id);
    user.save();
    return res.status(200).json({
        success: true
    })
}

module.exports = Logout;