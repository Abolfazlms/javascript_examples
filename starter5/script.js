'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const openModal = function () {
    modal.classList.remove('hidden');
    // modal.style.display = 'block';
    overlay.classList.remove('hidden');
};
// console.log(btnShowModal);
for (let i = 0; i < btnShowModal.length; i++) {
    // console.log(btnShowModal[i].textContent);
    btnShowModal[i].addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
