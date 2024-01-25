const TestDay = require("../../models/TestDay");
const GetCurrentTestNumber = require("./GetCurrentTestNumber.js")

const SubmitTestAnswers = async (req, res) => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let currTest = await TestDay.findOne({date: date});

    let TestNumber = GetCurrentTestNumber();

    let StartIndex = 0;
    if(req.body.Section == 1){
        StartIndex = 19;
    }

    for(let i = 0; 20 > i; i++){
        currTest.tests[TestNumber-1].Answers.push(req.body.Answers[i]);
    }
    currTest.tests[TestNumber-1].TestType = req.body.TestType;
    currTest.markModified('tests');
    currTest.save();
}


module.exports = SubmitTestAnswers;