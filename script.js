'use strict';

let book1 = document.querySelector('.book-1');
let book2 = document.querySelector('.book-2');
let book3 = document.querySelector('.book-3');
let book4 = document.querySelector('.book-4');
let voteBook = document.querySelector('article');
let bookNum = [1, 2, 3, 4];

voteBook.addEventListener('click', function () {
  let vote = 'vote 1';
  console.log(vote);

  if (`book-${bookNum}` === 1) {
    console.log('Voted for Book 1!');
  } else if (`book-${bookNum}` === 2) {
    console.log('Voted for Book 2!');
  } else if (vote === book3) {
    console.log('Voted for Book 3!');
  } else {
    console.log('Voted for Book 4!');
  }
});
