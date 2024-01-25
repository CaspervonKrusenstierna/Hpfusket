const ConvertTestDayToJson = (TestDay) => {
    let Json = {date: TestDay.date, tests: [], suspisciousUsers: []}

    for(let i = 0; 5 > i; i++){
        let Test = TestDay.tests[i];
        let TestJson = {answers: [], testType: Test.testType}
        for(let j = 0; Test.Answers.length > j; j++){
            TestJson.answers.push(Test.Answers[j]);
        }
        Json.tests.push(TestJson);
    }
    for(let i = 0; TestDay.suspiciousUsers.length > i; i++){
        Json.suspisciousUsers.push(TestDay.suspiciousUsers[i].name)
    }
    return Json;
}

module.exports = ConvertTestDayToJson;