const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

const NumToLetter = (Num) => {
    switch(Num){
        case 0: return "A"
        case 1: return "B"
        case 2: return "C"
        case 3: return "D"
        case 4: return "E"
    }
}

const GenerateNewAnswer = (OriginalAnswer) => {
    let RandomInt = getRandomInt(4);
    while(OriginalAnswer == NumToLetter(RandomInt)){
        RandomInt = getRandomInt();
    }
    return NumToLetter(RandomInt);
}

const CreateTestAnswerErrors = (TestAnswers, ErrorAmount) => {
    let ToReturn = [];
    let RandomIndexes = [];
    for(let i = 0; ErrorAmount > i; i++){
        RandomIndexes.push(getRandomInt(39));
    }
    let RandomIndexesIndex = 0;
    for(let i = 0; 40 > i; i++){
        if(i == RandomIndexes[RandomIndexesIndex]){
            ToReturn.push(GenerateNewAnswer(TestAnswers[i]));
        }
        else{
            ToReturn.push(TestAnswers[i]);
        }
    }
    return ToReturn;
}

module.exports = CreateTestAnswerErrors;