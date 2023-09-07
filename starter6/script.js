'use strict';

//Selecting Elements
const player_0El = document.querySelector('.player--0');
const player_1El = document.querySelector('.player--1');

const score_0El = document.querySelector('#score--0');
const score_1El = document.getElementById('score--1');
// const score_1El = document.querySelector('#score--1');
let current_0EL = document.getElementById('current--0');
let current_1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

//Starting Conditions (variable initializing)
score_0El.textContent = 0;
score_1El.textContent = 0;
diceEl.classList.add('hidden');

//Definition The Functions

function init() {
    playing = true;

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    current_0EL.textContent = 0;
    current_1El.textContent = 0;

    score_0El.textContent = 0;
    score_1El.textContent = 0;
    diceEl.classList.add('hidden');

    player_0El.classList.remove('player--winner');
    player_1El.classList.remove('player--winner');

    player_0El.classList.add('player--active');
    player_1El.classList.remove('player--active');
}
function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player_0El.classList.toggle('player--active');
    player_1El.classList.toggle('player--active');
}

init();

//Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        //1. Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        //2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `./images/dice-${dice}.png`;

        //3. Check for rolled 1
        if (dice !== 1) {
            //Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
        } else {
            // Switch to the next player
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        //1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        //2. Check if player's score >= 100
        if (scores[activePlayer] >= 100) {
            //Finish the game
            playing = false;
            diceEl.classList.remove('hidden');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
        } else {
            //Switch to the next player
            switchPlayer();
        }
    }
});
btnNew.addEventListener('click', init);
