const fibonacci = function (arg) {
    const steps = Number(arg);
    if (steps < 1) return 'OOPS';
    let prev = 0;
    let act = 1;
    let res = 1;
    for (let i = 1; i < steps; i++) {
        res = act + prev;
        prev = act;
        act = res;
    }
    return res;
};

// Do not edit below this line
module.exports = fibonacci;
