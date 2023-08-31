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
const average_Calculator = (score1,score2,score3) =>{(score1+score2+score3)/3;};

const team_1 = average_Calculator(44,23,61);
const team_2 = average_Calculator(52,31,25);

const check_winner = function(avg1,avg2){
    if(avg1>=2*avg2){
        return `team1 with average score ${avg1} is winner!`;
    }else if(avg2>=2*avg1){
        return `team2 with average score ${avg2} is winner!`;
    }else{
        return `team1 and team2 is equal.`;
    }
}
console.log(check_winner(team_1,team_2));
console.log(check_winner(43,21));