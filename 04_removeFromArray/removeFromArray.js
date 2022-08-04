const removeFromArray = function (sourceArray, ...notNeeded) {
    for (const clear of notNeeded) {
        while (true) {
            const index = sourceArray.indexOf(clear);
            if (index === -1) break;
            sourceArray.splice(index, 1);
        }
    }
    return sourceArray;
};

// Do not edit below this line
module.exports = removeFromArray;
