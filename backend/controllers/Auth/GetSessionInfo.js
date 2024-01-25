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
        if(req.body.extended){
            let decodedAccessToken = jwt.verify(req.cookies.token, process.env.ACCESS_TOKEN_SECRET)
            if(!decodedAccessToken.isPasswordVerified){
                if(!req.body.password){
                    return res.status(500).json({
                        success: false
                      });
                }
                const HasRightPassword = await bcrypt.compare(req.body.password, user.password);

                if(!HasRightPassword){
                    return res.status(500).json({
                        success: false,
                        result: null,
                        message: 'Felaktigt lösenord',
                      });
                }

                let token = await Refresh(req.cookies.jwt, true);
                res.cookie('token', token, {
                    maxAge: req.body.remember ? 365 * 24 * 60 * 60 * 1000 : null,
                    secure: true,
                    domain: req.hostname,
                    Path: '/'});
            }

            return res.status(200).json({
                success: true,
                name: user.name,
                email: user.email,
                password: user.password,
                privilege: user.privilege,
                saldo: user.saldo,
                settings: user.settings
            })
        }
        else{
            return res.status(200).json({
                loggedIn: true,
                name: user.name,
                privilege: user.privilege,
                saldo: user.saldo,
                settings: user.settings
            })
        }
    }
}

module.exports = GetSessionInfo;