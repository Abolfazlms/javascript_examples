'use strict';

// const sumToValues = function (num1,num2){
//     return num1+num2;
// }
// console.log(sumToValues(21,1));

// function sumToValues(num1,num2){
//     let sum = num1+num2;
//     return sum;
// }

// console.log(sumToValues(21,1));

// const sumToValue = (num1,num2)=>{
//     return num1+num2;
// }
// const sumToValue = Number=>{Number+21;
// }
// const average_Calculator = (score1,score2,score3) =>{(score1+score2+score3)/3;};

// const team_1 = average_Calculator(44,23,61);
// const team_2 = average_Calculator(52,31,25);

// const check_winner = function(avg1,avg2){
//     if(avg1>=2*avg2){
//         return `team1 with average score ${avg1} is winner!`;
//     }else if(avg2>=2*avg1){
//         return `team2 with average score ${avg2} is winner!`;
//     }else{
//         return `team1 and team2 is equal.`;
//     }
// }
// console.log(check_winner(team_1,team_2));
// console.log(check_winner(43,21));

// const friends = new Array('ali','steve','hassan');
// const friends = ['ali','steve','hassan'];
// const birth_year = 1990;
// const money = [1000,2000,2500];
// const age_calculator = function(birth_year){
//     return 2023-birth_year;
// }

// const person = ['ali','alipour',age_calculator(birth_year),money[money.length-1],friends];
// console.log(person);

// friends.push('hossein')
// console.log(friends);

// friends.pop('hossein');
// console.log(friends);

// friends.unshift('alireza');
// console.log(friends);

// friends.shift('alireza');
// console.log(friends);

// const friend_index = friends.indexOf('ali');
// console.log(`ali is ${friend_index+1}st of your friends`);

// const isFriend = friends.includes('hossein');
// if(isFriend){
//     console.log('hossein is friends.');
// }else{
//     console.log('hossein not in friend list.');
// }

// function tipCalculator(bill){
//     if(bill>=50 && bill<=300){
//         return bill*0.15;
//     }
//     else{
//         return bill*0.2;
//     }    
//     return bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;
// }
// const bills = [125,55,44];
// const tips = [tipCalculator(bills[0]),tipCalculator(bills[1]),tipCalculator(bills[2])];
// const totalValues = [tips[0]+bills[0]];
// totalValues.push(bills[1]+tips[1]);
// totalValues.push(bills[2]+tips[2]);

// console.log(bills,tips);
// console.log(totalValues);

// const person = {
//     firstName:'ali',
//     lastName:'alipour',
//     age:21,
//     friends:['ali','hossein']
// };
// console.log(person);
// console.log(person.firstName);

// let option = 'firstName'
// console.log(person.option);
// console.log(person[option]);

// person.location = 'london';
// person['gmail'] = 'example@gmail.com';

// console.log(person);

// console.log(`${person.firstName} has ${person.friends.length} friends, and his best friend is called ${person.friends[0]}`)

// const person = {
//         firstName:'ali',
//         lastName:'alipour',
//         birthYear:1991,
//         friends:['ali','hossein'],
//         hasDriverLicense:true,
//         ageCalculator:function(){
//             this.age = 2023-this.birthYear;
//         },       
//         getSummary:function(){
//             return `${this.firstName} is a ${this.ageCalculator()} years old person, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
//         }
// };
// console.log(person.ageCalculator());
// console.log(person.getSummary());

// const person1 = {
//     fullName:'ali alipour',
//     height:1.80,
//     mass:50,
//     BMI_Calculator:function(){
//         this.bmi = this.mass/(this.height**2);
//         return this.bmi;
//     }
// };
// const person2 = {
//     fullName:'hossein hosseini',
//     height:1.91,
//     mass:60,
//     BMI_Calculator:function(){
//         this.bmi = this.mass/(this.height**2);
//         return this.bmi;
//     }
// };

// person1.BMI_Calculator();
// person2.BMI_Calculator();

// if(person1.bmi>person2.bmi){
//     console.log(`${person1.fullName}'s BMI(${person1.bmi}) is higher than ${person2.fullName}'s BMI(${person2.bmi})`);
// }else if(person2.bmi>person1.bmi){
//     console.log(`${person2.fullName}'s BMI(${person2.bmi}) is higher than ${person1.fullName}'s BMI(${person1.bmi})`);
// }else{
//     console.log(`${person1.fullName}'s BMI(${person1.bmi}) is equal to ${person2.fullName}'s BMI(${person2.bmi})`);
// }

// for(let i = 0 ; i < 10 ; i++){
//     console.log(i);
// }

// const person = [
//     'ali',
//     'alipour',
//     1991,
//     ['ali','hossein'],
// ];
// const arrayTypes = [];

// for (let i = 0; i < person.length; i++){
//     console.log(person[i], typeof person[i]);
//     // arrayTypes[i] = typeof person[i];
//     arrayTypes.push(typeof person[i]);
// }
// console.log(arrayTypes);

// const years = [1991,1970,2000,1993,1998];
// const ages = [];

// for(let i = 0; i<years.length; i++){
//     ages.push(2023 - years[i]);
// }
// console.log(ages);

// const person = [
//     'ali',
//     'alipour',
//     1991,
//     ['ali','hossein'],
// ];
// const arrayTypes = [];
// for(let i = 0; i<person.length; i++){
//     if(typeof person[i] !== 'string'){
//         continue;
//     }
//     arrayTypes.push(typeof person[i]);
// }
// console.log(arrayTypes);

// for(let i = 0; i<person.length; i++){
//     if(typeof person[i] === 'number'){
//         break;
//     }
//     arrayTypes.push(typeof person[i]);
// }
// console.log(arrayTypes);

// let number = Math.trunc(Math.random()*30)+1;
// while(number !== 21){
//     number = Math.trunc(Math.random()*30)+1;
//     console.log(`the random number is : ${number}`);
// }

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total_values = [];

for(let i = 0; i < bills.length; i++){
    const tip = tipsCalculator(bills[i]);
    tips.push(tip);
    total_values.push(tip+bills[i]);
}    
function tipsCalculator(bill){
    return bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2 ;
}
console.log(bills,tips,total_values);
const average_calculator = function(money_array){
    let money = 0;
    for(let i = 0; i<money_array.length;i++){
        money+= money_array[i];
    }
    return money/money_array.length;
}
console.log(`the average of bills with tips is ${average_calculator(total_values)} $`);