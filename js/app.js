'use strict';

// greeting
alert('Oh hello!');
var name = prompt('What\'s your name, beautiful?');
console.log('User\'s name is' + name);
alert('Welcome to my page, ' + name + '!');

// Invite to play
var playGame = prompt('Do you want to play a guessing game with me?')

if (playGame.toLowerCase() === 'yes'){
  alert('Cool! I will ask you a couple of questions, and you\'ll answer yes or no. Let\'s go!');
} else {
  alert('Maybe another time!')
}

// Who's my husband?
var husband = prompt('Is my husband a military trained killing machine?')

if (husband.toLowerCase() === 'yes'){
  alert('Yup! Your\'re right. My husband was a captain in the US Marine Corps.')
} else { 
  alert('Oh yes he is! He is a badass US Marine Corps officer.')
}

  





