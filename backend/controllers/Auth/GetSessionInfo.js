const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Refresh = require("./Refresh");
const GetSessionInfo = async (req, res) => {
    let user;
    let decoded;
    try{
        decoded = jwt.verify(req.cookies.jwt, process.env.REFRESH_TOKEN_SECRET)
        user = await User.findOne({name: decoded.name});
    }
    catch (error){
        return res.status(200).json({
            loggedIn: false,
          });
    }

    if(!user){
        return res.status(200).json({
            loggedIn: false,
          });
    }

    else{
        for(let i = 0; user.loggedOutTokenIds.length > i; i++){
            if(decoded.id == user.loggedOutTokenIds[i]){
                return res.status(200).json({
                    loggedIn: false,
                })
            }
        }
        return res.status(200).json({
            loggedIn: true,
            privilege: user.privilege
            })
        }
}

module.exports = GetSessionInfo;