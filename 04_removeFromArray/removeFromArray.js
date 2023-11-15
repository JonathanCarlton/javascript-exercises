const removeFromArray = function() {
    const originalArray = arguments[0];
    const argumentsToRemove = [];
    const newArray = [];

    // get all arguments that need to be removed, and put in a list
    for (let i = 1; i < arguments.length; i++) {
        argumentsToRemove.push(arguments[i]);
    }

    // index through original list, removing element if its in the argumentsToRemove list
    for (index in originalArray) {
        if ( !argumentsToRemove.includes(originalArray[index])) {
            newArray.push(originalArray[index])
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
