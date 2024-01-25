let ASound = new Audio(require('./letters/A.m4a'))
let BSound = new Audio(require('./letters/B.m4a'))
let CSound = new Audio(require('./letters/C.m4a'))
let DSound = new Audio(require('./letters/D.m4a'))
let ESound = new Audio(require('./letters/E.m4a'))
let KvantSound = new Audio(require('./kvant.m4a'))
let VerbSound = new Audio(require('./verb.m4a'))

function PlayLetter(letter){
    switch(letter){
        case "A": ASound.play(); break;
        case "B": BSound.play(); break;
        case "C": CSound.play(); break;
        case "D": DSound.play(); break;
        case "E": ESound.play(); break;
    }
}
function GenerateRandomAnswers(){
    let RandomAnswers = [];
    for(let i = 0; 40 > i; i++){
        let RandomInt = Math.floor(Math.random() * 5) + 1;
        let RandomLetter;
        switch(RandomInt){
            case 1: RandomLetter="A"; break;
            case 2: RandomLetter="B"; break;
            case 3: RandomLetter="C"; break;
            case 4: RandomLetter="D"; break;
            case 5: RandomLetter="E"; break;
        }
        RandomAnswers.push(RandomLetter);
    }
    console.log(RandomAnswers)
    return RandomAnswers;
}
function CommunicateTestType(TestType){
    if(TestType == "kvant"){
        KvantSound.play();
    }
    else{
        VerbSound.play();
    }
}
function CommunicateAnswers(Answers){
    for(let i = 0; Answers.length > i; i++){
        setTimeout(() => {PlayLetter(Answers[i])}, i*2000);
    }
}
function StartCheat(settings){
    const currentDate = new Date();
    const startTime = currentDate.getTime();

    let TimeOutIds = [];
    for(let i = 0; 240 > i; i++){
        TimeOutIds.push(setTimeout(async () => {
            const response = await fetch("http://192.168.0.132:3000/testanswer", {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer"
                    }).then((res) => res.json());
            if(response.Answers){
                for(let j = 0; TimeOutIds.length > j; j++){
                    clearTimeout(TimeOutIds[j]);
                }
                CommunicateTestType(response.TestType);
                setTimeout(() => {CommunicateAnswers(response.Answers)}, 3000)
            }
        }, i*60000)); // check for 240 60 second intervals = 4 hours for answers to be in.
    }
}

function StartTest(type, settings){
    let Answers = GenerateRandomAnswers();
    CommunicateAnswers(Answers)
    return Answers;
}


export {StartCheat, StartTest, CommunicateAnswers, GenerateRandomAnswers};
