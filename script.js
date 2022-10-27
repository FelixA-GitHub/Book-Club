'use strict';

let book1 = document.getElementsByClassName('.book-1');
let book2 = document.getElementsByClassName('.book-2');
let book3 = document.getElementsByClassName('.book-3');
let book4 = document.getElementsByClassName('.book-4');

document.querySelector('.book').addEventListener('click', function () {
  let vote = document.querySelector('article');
  console.log(vote);

  if (vote) {
    console.log('Voted for Book 1!');
  } else if (vote === book2) {
    console.log('Voted for Book 2!');
  } else if (vote === book3) {
    console.log('Voted for Book 3!');
  } else {
    console.log('Voted for Book 4!');
  }
});
