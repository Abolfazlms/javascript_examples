'use strict';
// console.log(document.querySelector('.message'));
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Answer!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = '12';

// document.querySelector('.guess').value = 21;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.guess_check').addEventListener('click', hello);

// function hello() {
//     console.log('hello world!');
// }

document.querySelector('.guess_check').addEventListener('click', function () {
    console.log(document.querySelector('.guess').value);
    document.querySelector('.message').textContent = '🎉 Correct Number!';
});
