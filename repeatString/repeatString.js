const repeatString = function(string, times) {
    if (times > 0) {
        return string.repeat(times);
    }
    else if (times < 0){
        return ("ERROR");
    }
    else{
        return "";
    }
};


module.exports = repeatString;
