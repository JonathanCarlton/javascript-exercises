const repeatString = function(string, num) {
    let repeatedString = '';

    // error handling
    if (num < 0) {
        return "ERROR";
    }

    for(let i = 0; i < num; i++){
        repeatedString += string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
