'use strict';

// const testVariable = 21;

// if (testVariable === 21) {
//   console.log(testVariable);
// }
// const ageCalculator = (birthYear) => 2023 - birthYear;

// console.log();

const temperatures = [3, -2, -6, -1, 'error', 9, 15, 4, 21, 17, 19];

// const tempAmplitudeCalculator = function(temperatures){};
function tempAmplitudeCalculator(temperatures) {
    let max = temperatures[0],
        min = temperatures[0];

    for (let i = 0; i < temperatures.length; i++) {
        if (typeof temperatures[i] !== 'number') {
            continue;
        }
        max <= temperatures[i] ? (max = temperatures[i]) : (max = max);
        min >= temperatures[i] ? (min = temperatures[i]) : (min = min);
    }
    console.log(
        `maximum temperature is ${max} , minimum temperature is ${min}`
    );
    const amplitude = max - min;
    return amplitude;
}
console.log(
    `the amplitude of temperaturs is ${tempAmplitudeCalculator(temperatures)}`
);
