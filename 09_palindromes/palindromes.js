const palindromes = function (wtf) {
    const fillers = /[ ,.!]/g;
    const zanza = wtf.toLowerCase().replace(fillers, '');
    const len = zanza.length;
    for (let i = 0; i < len / 2; i++) {
        if (zanza[i] !== zanza[len - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
