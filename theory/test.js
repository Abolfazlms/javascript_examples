'use strict';

// const userName = 'ali'; //global scope

// function ageCalculator(birthYear) {
//     const age = 2023 - birthYear; //function scope

//     function printAge() {
//         const output = `The user ${userName}, age is ${age} and born is ${birthYear}`;
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true; //function scope
//             const userName = 'steve';
//             const str = `user ${userName}, is a millenial!`; //block scope
//             console.log(str);
//         }
//         // console.log(str);
//         console.log(millenial);
//     }
//     printAge();
//     return age;
// }

// ageCalculator(1993);
// // console.log(age);
// // printAge();

const person1 = {
    name: 'ali',
    age: 21,
};
const person2 = Object.assign({}, person1);
person2.age = 22;

console.log(person1.age);
console.log(person2.age);
