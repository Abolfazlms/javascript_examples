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

function tipCalculator(bill){
    // if(bill>=50 && bill<=300){
    //     return bill*0.15;
    // }
    // else{
    //     return bill*0.2;
    // }    
    return bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;
}
const bills = [125,55,44];
const tips = [tipCalculator(bills[0]),tipCalculator(bills[1]),tipCalculator(bills[2])];
const totalValues = [tips[0]+bills[0]];
totalValues.push(bills[1]+tips[1]);
totalValues.push(bills[2]+tips[2]);

console.log(bills,tips);
console.log(totalValues);
