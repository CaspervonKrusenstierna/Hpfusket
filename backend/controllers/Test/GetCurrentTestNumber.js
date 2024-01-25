const GetCurrentTestNumber = (req, res) => {
    var today = new Date();
    var timeHours = today.getHours();
    if(timeHours <= 9){
        return 1;
    }
    if(timeHours <= 10){
        return 2;
    }
    if(timeHours <= 11){
        return 3;
    }
    if(timeHours <= 13){
        return 4;
    }
    return 5;
}

module.exports = GetCurrentTestNumber;