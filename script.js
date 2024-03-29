'use strict';

//elements
const btnPreview = document.querySelector('.preview');
const btnShelf = document.querySelector('.shelf');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

//preview button
btnPreview.addEventListener('click', function () {
  alert('Preview');
});

//shelf button
btnShelf.addEventListener('click', function () {
  alert('Shelf');
});

//test function for alert
const loveYou = function () {
  alert('I LOVE YOU ❤️');
};

const love = document.querySelector('.love');
//event listener for text function
love.addEventListener('click', loveYou);
