const express = require("express");
const Auth = require("../controllers/Auth/Auth")
const path = require("path");
const TestDay = require("../models/TestDay");
const GetCurrentTestNumber = require("../controllers/Test/GetCurrentTestNumber");
const ConvertTestDayToJson = require("../controllers/Test/ConvertTestDayToJson");
const SubmitTestAnswers = require("../controllers/Test/SubmitTestAnswers");

const router = express.Router();
router.use(Auth.Auth2)

router.get("/dashboard/admin", (req, res) => {
    res.sendFile(path.join(__dirname, '..', "builds", "admindashbuild", "index.html"));
})

router.post("/dashboard/test", async (req, res) => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    let tests = [];
    for(let i = 0; 5 > i; i++){
        tests.push(new Object({"Answers": [], "TestType": ""}));
    }
    let testday = await new TestDay({
        date: date,
        tests: tests,
        suspiciousUsers: []
    })
    testday.save();
})

router.get("/dashboard/test", async (req, res) => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    let activetest = await TestDay.findOne({date: date});

    if(activetest){
        return res.status(200).json({provpass: GetCurrentTestNumber(),activetest: ConvertTestDayToJson(activetest)});
    }
    return res.status(200).json({activetest: false});
})

router.post("/dashboard/testanswers", (req, res) => {
    SubmitTestAnswers(req, res);
})


module.exports = router