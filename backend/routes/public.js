const express = require("express");
const Login = require("../controllers/Auth/Login");
const Register = require("../controllers/Auth/Register");
const Logout = require("../controllers/Auth/Logout")
const path = require("path");
const GetSessionInfo = require("../controllers/Auth/GetSessionInfo");
const { Auth0 } = require("../controllers/Auth/Auth");
const Refresh = require("../controllers/Auth/Refresh");

const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', "builds", "homepagebuild", "index.html"));
})

router.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, '..', "builds", "publicdashbuild", "index.html"));
})
router.get("/dashboard/payment", (req, res) => {
    res.sendFile(path.join(__dirname, '..', "builds", "publicdashbuild", "index.html"));
})

router.post("/register", (req, res) => {
    Register(req, res);
})

router.post("/login", (req, res) => {
    Login(req,res);
})
router.post("/logout", (req, res) => {
    Logout(req,res);
})

router.post("/getsessioninfo", (req, res) => {
    GetSessionInfo(req, res);
})

module.exports = router;