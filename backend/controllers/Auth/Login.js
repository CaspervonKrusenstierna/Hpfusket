const mongoose = require("mongoose")
const User = mongoose.model("User");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const joi = require("joi");
const Refresh = require("./Refresh");

const schema = joi.object({
  name: joi.string()
  .alphanum()
  .min(3)
  .max(30)
  .required(),
  password: joi.string()
  .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
});

const Login = async (req, res) => {
    const { error, value } = schema.validate({name: req.body.name, password: req.body.password});
    if(error){
      return res.status(500).json({
        success: false,
        result: null,
        message: 'Felaktigt lösenord eller användarnamn.',
      });
    }

    const user = await User.findOne({name: req.body.name});
    if(!user){
        return res.status(500).json({
            success: false,
            result: null,
            message: 'Felaktigt lösenord eller användarnamn.',
          });
    }

    const HasRightPassword = await bcrypt.compare(req.body.password, user.password);

    if(!HasRightPassword){
        return res.status(500).json({
            success: false,
            result: null,
            message: 'Felaktigt lösenord eller användarnamn.',
          });
    }

    if(user.isBanned){
        return res.status(500).json({
            success: false,
            result: null,
            message: 'Kontot är avstängt.',
          });
    }

    const refreshToken = jwt.sign(
        {
          id: user.loggedOutTokenIds.length+1,
          name: user.name,
          privilege: user.privilege
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "1d" }
      );

      res.cookie('jwt', refreshToken, {
        maxAge: 3 * 24 * 60 * 60 * 1000,
        domain: req.hostname,
        Path: '/'})

    res.cookie('token', Refresh(refreshToken, true), {
      maxAge: req.body.remember ? 365 * 24 * 60 * 60 * 1000 : null,
      
      domain: req.hostname,
      Path: '/'})

    return res.json({success: true}); 
}

module.exports = Login;