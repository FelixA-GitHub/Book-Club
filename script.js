'use strict';

//elements
const btnPreview = document.querySelector('.preview');
const btnShelf = document.querySelector('.shelf');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

//function to open modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//function to close modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//the for loop allows you to do something to each class within the .querySelectorAll at the same time
for (let i = 0; i < btnShowModal.length; i++)
  //opens modal
  btnShowModal[i].addEventListener('click', openModal);

//closes modal
btnCloseModal.addEventListener('click', closeModal);

//overlay click will also close modal
overlay.addEventListener('click', closeModal);

//using a ESC keypress to close modal
document.addEventListener('keydown', function (event) {
  //this helps determine which key was pressed
  //event will show the key
  //key will give name of button
  console.log(event.key);
  //checks if event key was escape and
  //checks if modal contains hidden class, so that we may close window
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    //if so, we call the closeModal function to close the window
    closeModal();
  }
});
