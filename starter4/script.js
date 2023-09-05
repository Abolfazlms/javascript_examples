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

// document.querySelector('.guess_check').addEventListener('click', function () {
//     console.log(document.querySelector('.guess').value);
//     document.querySelector('.message').textContent = '🎉 Correct Number!';
// });

const secret_number = Math.trunc(Math.random() * 20 + 1);
console.log(secret_number);
let score = 10;

document.querySelector('.guess_check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess);
    if (!guess) {
        document.querySelector('.message').textContent = '🔔 Enter a Number!';
    } else if (guess && score > 1) {
        if (guess === secret_number) {
            document.querySelector('.message').textContent =
                '🎉 Correct Number!';
            document.querySelector('.number').textContent = secret_number;
        } else if (guess < secret_number) {
            document.querySelector('.message').textContent =
                '📉 Too Low Number!';
            score -= 1;
        } else if (guess > secret_number) {
            document.querySelector('.message').textContent =
                '📈 Too High Number!';
            score -= 1;
        }
    } else {
        document.querySelector('.message').textContent =
            '💥 You Lost The Game!';
        score = 0;
    }
    document.querySelector('.score').textContent = score;
});
