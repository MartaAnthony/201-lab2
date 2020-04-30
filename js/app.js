'use strict';

// greeting
alert('Oh hello!');
var name = prompt('What\'s your name, beautiful?');
// console.log('User\'s name is ' + name);
alert('Welcome to my page, ' + name + '!');

var answers = [];

// Invitation to play
var playGame = prompt('Do you want to play a guessing game with me?')

if(playGame.toLowerCase() === 'yes'){
  alert('Cool! I will ask you a couple of questions, and you\'ll answer yes or no, or if you\'re lazy, just say y or n. Let\'s go!')

  // Who's my husband?
var husband = prompt('Is my husband a military trained killing machine?')

if(husband.toLowerCase() === 'yes' || husband.toLowerCase() === 'y'){
  console.log(1);
  answers.push(1);
  alert('Yup! Your\'re right. My husband was a captain in the US Marine Corps.');
  
} else { 
   console.log(0);
  alert('Oh yes he is! He is a badass US Marine Corps officer.');
}

// Did I see a polar bear?
var bear = prompt('Did I see a polar bear on the street of my hometown in Poland one winter?')

if(bear.toLowerCase() === 'yes' || bear.toLowerCase() === 'y'){
  console.log(0);
  alert('No, you silly! Poland is not a Siberian tundra, there are no polar bears on the streets.');
} else {
  console.log(1);
  answers.push(1);
  alert('Bravo! That would be a scary proposition. And totally messed up, since there are no polar bears outside of the zoo in Poland');
}

// Do I like veggies? 
var favoriteFood = prompt('Is my favorite food group veggies?')

if(favoriteFood.toLowerCase() === 'yes' || favoriteFood.toLowerCase() === 'y'){
  console.log(1);
  answers.push(1);
  alert('You bet! I LOVE veggies. I\'m practically a bunny rabbit.');
} else {
  console.log(0);
  alert('Why do you say that? Do you think I\'m fat? Of course I like veggies.');
}

// what's my age

var age = prompt('Am I 33?')

if(age.toLowerCase() === 'yes' || age.toLowerCase() === 'y'){
  console.log(0);
  alert('Guess again. Just kidding, I\'m not going to tell you my age anyway.');
} else {
  console.log(1);
  answers.push(1);
  alert('Doesn\'t matter, I won\'t tell you my age anyway.');
}

//Am I a dancer

var dance = prompt('Did I use to dance salsa competitevely?')

if(dance.toLowerCase() === 'yes' || dance.toLowerCase() === 'y'){
  console.log(0);
  alert('Heck no, I am the most uncoordinated person ever.');
} else {
  console.log(1);
  answers.push(1);
  alert('Very good. I am not a dancer');
}

// How many plants did I kill

for (var i=0; i<3; i++){ 
  var number = prompt('How many plants did I accidentally kill last year? Choose a number from 1 to 10. You have 3 guesses!');
if(number === "3") {
  console.log(1);
  answers.push(1);
   alert('Good job! You are figuring me out.');
   break;
  } else if (number > 3){
    console.log(0);
    alert('Hold your horses, my black thumb is not that bad.');
  } else {
    console.log(0)
    alert('I wish. It was definitely more.');
  }
 }

 // My favorite sweerts

 alert('One more question, ok? I have a very sweet tooth, and I am wondering if you can guess which treat is my favorite.')

 for (var i=0; i<6; i++){
   var favoriteSweets = ['chocolate truffles', 'peanut butter cups', 'flan', 'hard candy', 'salted carmels', 'cookies', 'donuts', 'bananas'];
   var sweetGuess = prompt('What do I like most: chocolate truffles, peanut butter cups, flan, hard candy, salted carmels, cookies, donuts, or bananas?');
   if(sweetGuess === favoriteSweets[4]) {
     console.log(1);
     answers.push(1);
     alert('You got it! I would kill for salted carmels right now.');
     break;
   } else {
     console.log(0);
     alert('That\'s not it.')
   }
   }

   console.log(answers);
   alert('You\'ve got ' + answers.length + ' correct answers!');

 alert(name +', that\'s all for today. You\'re a good sport. Thank you for playing!')

 } else {
    alert('Maybe another time!'); 
  }
