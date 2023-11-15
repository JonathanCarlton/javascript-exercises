const sumAll = function(num1, num2) {
    let largerNumber;
    let smallerNumber;
    let totalSum = 0;

    // error handling
    if (num1 < 0 || num2 < 0 || typeof(num1) != "number" || typeof(num2) != "number") {
        return "ERROR";
    }

    if (num1 > num2){
        largerNumber = num1;
        smallerNumber = num2;
    }
    else { // this also triggers if equal, then assignment does not matter
        largerNumber = num2;
        smallerNumber = num1;
    }

    for (i = smallerNumber; i <= largerNumber; i++){
        totalSum += i;
    }
    return totalSum;


};

// Do not edit below this line
module.exports = sumAll;
