const jwt = require("jsonwebtoken");
const mongoose = require("mongoose")
const User = mongoose.model("User");

const Refresh = async (refreshToken, isPasswordVerified) => {
    try{
        let decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        if(!decoded){
            return false;
        }
        let user = await User.findOne({name: decoded.name});
        for(let i = 0; user.loggedOutTokenIds.length > i; i++){
            if(decoded.id == user.loggedOutTokenIds[i]){
                return false;
            }
        }
        const accessToken = jwt.sign({ 
            name: decoded.name, 
            privilege: decoded.privilege,
            isPasswordVerified: isPasswordVerified 
        }, process.env.ACCESS_TOKEN_SECRET, { 
            expiresIn: '10m' 
        }); 
        return accessToken;
    }
    catch{
        return false;
    }
}

module.exports = Refresh;