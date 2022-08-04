const removeFromArray = function (sourceArray, ...notNeeded) {
/*     for (const clear of notNeeded) {
        while (true) {
            const index = sourceArray.indexOf(clear);
            if (index === -1) break;
            sourceArray.splice(index, 1);
        }
    }
    return sourceArray;
 */
return sourceArray.filter(element => !notNeeded.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
