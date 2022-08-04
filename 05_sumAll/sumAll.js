const sumAll = function (numberOne, numberTwo) {
    if (Number.isInteger(numberOne) && Number.isInteger(numberTwo) &&
        numberOne >= 0 & numberTwo >= 0) {
            return (numberOne + numberTwo) *
            (Math.abs(numberOne - numberTwo) + 1) / 2;
            
    } else return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
