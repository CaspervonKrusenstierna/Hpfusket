let ASound = new Audio(require('./sounds/A.m4a'))
let BSound = new Audio(require('./sounds/B.m4a'))
let CSound = new Audio(require('./sounds/C.m4a'))
let DSound = new Audio(require('./sounds/D.m4a'))
let ESound = new Audio(require('./sounds/E.m4a'))
let KvantSound = new Audio(require('./sounds/kvant.m4a'))
let VerbSound = new Audio(require('./sounds/verb.m4a'))
let TimeToRumble = new Audio(require('./sounds/rumble.mp3'))

let Sensitivity = 5;
let LetterInfo = new Object();
let TestInfo = new Object();
let LastTime;
let Answers = [];
let TestType;
let Section;

function PlayLetter(letter){
    switch(letter){
        case "A": ASound.play(); break;
        case "B": BSound.play(); break;
        case "C": CSound.play(); break;
        case "D": DSound.play(); break;
        case "E": ESound.play(); break;
    }
}
function SendAnswers(){
    const response = fetch("http://127.0.0.1:3000/dashboard/testanswers", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({"TestType": TestType, "Answers": Answers, "Section": Section})
      });
  }

function StartComms(Part){
    Section = Part;
    window.addEventListener("devicemotion", (event) => {onMovement(event)});

    TestInfo.timesUsed = 0;
    TestInfo.Test = "kvant"
    KvantSound.play();

    setTimeout(() => {TestInfo.Test = "verb"; VerbSound.play();}, 3000)
    let CurrentTimeOut = 6000;
    for(let i = 0; 1 > i; i++){
        setTimeout(() => {LetterInfo.timesUsed = 0; LetterInfo.letter = "A"; PlayLetter("A")}, CurrentTimeOut);
        setTimeout(() => {LetterInfo.letter = "B"; PlayLetter("B")}, CurrentTimeOut+2000);
        setTimeout(() => {LetterInfo.letter = "C"; PlayLetter("C")}, CurrentTimeOut+4000);
        setTimeout(() => {LetterInfo.letter = "D"; PlayLetter("D")}, CurrentTimeOut+6000);
        setTimeout(() => {LetterInfo.letter = "E"; PlayLetter("E")}, CurrentTimeOut+8000);
        CurrentTimeOut += 10000;
    }
    LetterInfo.letter = ""
}
function StartCommsWait(Time, Part){
    StartComms();
    let TimeOutIds = [];
    for(let i = 0; 360 > i; i++){
        TimeOutIds.push(setTimeout(() => {
            const date = new Date();
            const currHour = date.getHours();
            const currMin = date.getMinutes();
            if(currHour == Time.Hour && currMin == Time.Min){
                for(let j = 0; TimeOutIds.length > j; j++){ // clear timeouts to not run this a ton of times
                    clearTimeout(TimeOutIds[j]);
                }
                TimeToRumble.play();
                setTimeout(() => {StartComms(Part);}, 8000)
            }
        }, i*30000)); // check for 360 30 second intervals = 3 hours for time to be right.
    }
}
function onMovement(event){
    let totalAcc = (Math.abs(event.acceleration.x) + Math.abs(event.acceleration.y) + Math.abs(event.acceleration.z));
    if(totalAcc > Sensitivity){
        if(LetterInfo.timesUsed == 0){
            LetterInfo.timesUsed++;
            Answers.push(LetterInfo.letter);
            if(Answers.length == 1){
                SendAnswers();
            }
        }
        if(TestInfo.timesUsed == 0){
            TestInfo.timesUsed++;
            TestType = TestInfo.Test;
        }
    }
}

export {StartCommsWait};