const findTheOldest = function (people) {
    const currentYear = new Date().getFullYear();
    const oldest = people.reduce(
        (prev, current) => {
            const prevAge = (prev.hasOwnProperty('yearOfDeath') ? prev.yearOfDeath : currentYear) - prev.yearOfBirth;
            const currentAge = (current.hasOwnProperty('yearOfDeath') ? current.yearOfDeath : currentYear) - current.yearOfBirth;
            return prevAge > currentAge ? prev : current;
        }
    )
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
