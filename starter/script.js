/*
let js="amazing";
    if(js==="amazing"){
        alert("Js is Amazing!");
    }
console.log(21+53-24);
let test="test text";
let _function = "test";
let PI=3.141595268;
console.log(test);
console.log(PI);
*/

/*
let javascriptIsfun = true;
let userName = "ali";
let age = 21;
console.log(typeof javascriptIsfun);
console.log(typeof userName);
console.log(typeof true);
console.log(typeof age);
javascriptIsfun = "true";
console.log(typeof javascriptIsfun);

let testvariable;
console.log(typeof testvariable);

const firstName = "ali";
const lastName = "alipour";
const birth_year = 1991;
// const user_info ="the user "+firstName+" "+lastName+" birth in "+birth_year+" and he has "+(2022-birth_year)+" years old.";
const user_info =`the user ${firstName} ${lastName} birth in ${birth_year} and he has ${2022-birth_year} years old.`;
console.log(user_info);

let number = prompt("Enter a number : ");
console.log(number);
*/

let team_1_score,team_2_score;
team_1_scores = (25+51+32)/3 ;
team_2_score = (21+30+60)/3;

if (team_1_score > team_2_score && team_1_score >= 100){
    console.log(`team 1 with average score ${team_1_score} is winner!`);
}else if (team_2_score > team_1_score && team_2_score >= 100){
    console.log(`team 2 with average score ${team_2_score} is winner!`);
} else if (team_1_score === team_2_score && team_1_score>=100 && team_2_score>=100){
    console.log('team score is equal and both of them wins!');
}else{
    console.log('the teams are equal.');
}

