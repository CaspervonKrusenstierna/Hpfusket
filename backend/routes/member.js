const express = require("express");
const Auth = require("../controllers/Auth/Auth")
const router = express.Router();
const path = require("path");
const GetTestAnswers = require("../controllers/Test/GetTestAnswers");

router.use(Auth.Auth1)

router.get("/dashboard/info", (req, res) => {
    res.sendFile(path.join(__dirname, '..', "builds", "userdashbuild", "index.html"));
}) 

router.get("/testanswer", (req, res) => {
    GetTestAnswers(req, res);
})

module.exports = router;