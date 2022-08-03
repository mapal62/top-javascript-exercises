const repeatString = function (string, num) {
    if (num < 0 || (num !== Math.floor(num))) {
        return 'ERROR';
    }
    let result = '';
    for (let i = 0; i < num; i++) {
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
