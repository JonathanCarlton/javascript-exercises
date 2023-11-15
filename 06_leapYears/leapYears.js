const leapYears = function(year) {
    let leapYear = false;
    // divisble by 4, or if divisible by 100, also divisble by 400
    if (year % 4 === 0 ){
        leapYear = true;
    }
    if (year % 100 === 0) {
        leapYear = false;
        if (year % 400 === 0) {
            leapYear = true;
        }
    }
    return leapYear;
};

// > Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
// Do not edit below this line
module.exports = leapYears;
