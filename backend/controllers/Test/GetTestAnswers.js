const GetUserSubscriptionType = require("../Auth/GetUserSubscriptionType");
const GetCurrentTestNumber = require("./GetCurrentTestNumber")
const TestDay = require("../../models/TestDay");

const GetTestAnswers = async (req, res) => {
    let TestNumber = GetCurrentTestNumber();
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let CurrentTest = await TestDay.findOne({date: date});
    if(!CurrentTest){
        return res.status(500).json({
            success: false,
          });
    }
    let TestAnswers = CurrentTest.tests[TestNumber-1].Answers;
    let TestType = CurrentTest.tests[TestNumber-1].TestType;
    /*
    if(TestAnswers.length != 40){
        return res.status(200).json({
            success: false
          });
    }*/
    
    let SubscriptionType = GetUserSubscriptionType(req, res);
    switch(SubscriptionType){
        case 0: // 1.2+
        case 1: // 1.4+
        case 2: // 1.6+
        case 3: // 1.8+
        case 4: // 1.95+
    }
    

    return res.status(200).json({
        success: true,
        TestType: TestType,
        Answers: TestAnswers
      });
}

module.exports = GetTestAnswers;