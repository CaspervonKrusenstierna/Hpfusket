const mongoose = require("mongoose")
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");
const Refresh = require("./Refresh");

const GetUserPrivilege = async (req, res) => {
    let token = req.cookies?.token;
    try{
        let decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if(!decoded){
            return -1
        }
        let user = await User.findOne({name: decoded.name});
        if(user.isBanned){
            return -1
        }
        return decoded.privilege;
    }
    catch(error){
        try{
            let refreshToken = req.cookies?.jwt;
            if(!refreshToken){ 
                return -1;
            }
    
            token = await Refresh(refreshToken, false);
    
            res.cookie('token', token, {
                maxAge: req.body.remember ? 365 * 24 * 60 * 60 * 1000 : null,
                secure: true,
                domain: req.hostname,
                Path: '/'});
            
            let decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            if(!decoded){
                return -1
            }
            let user = await User.findOne({name: decoded.name});
            if(user.isBanned){
                return -1
            }
            return decoded.privilege;
        }
        catch(error){
            return -1;
        }
    }
}

const Auth0 = async (req, res, next) => { //non paid member
    if(!(await GetUserPrivilege(req, res) >= 0)){
        return res.status(406).json({ success: false, message: 'Unauthorized' }); 
    }
    next();
}

const Auth1 = async (req, res, next) => { // paid member
    if(!(await GetUserPrivilege(req, res) >= 1)){
        return res.status(406).json({ success: false, message: 'Unauthorized' }); 
    }
    next();
}

const Auth2 = async (req, res, next) => { // admin
    if(!(await GetUserPrivilege(req, res) >= 2)){
        return res.status(406).json({ success: false, message: 'Unauthorized' }); 
    }
    next();
}

module.exports = {GetUserPrivilege, Auth0, Auth1, Auth2};