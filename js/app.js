'use strict';

alert('Oh hello!');
var userName = prompt('What\'s your name, beautiful?');

alert('Welcome to my page, ' + userName + '!');

var answers = [];
function husbandQuestion(){
  var husband = prompt('Is my husband a military trained killing machine?'); 
  if(husband.toLowerCase() === 'yes' || husband.toLowerCase() === 'y'){ 
    answers.push(1);
    alert('Yup! Your\'re right. My husband was a captain in the US Marine Corps.');
  } else {
    alert('Oh yes he is! He is a badass US Marine Corps officer.');
  }
}
function bearQuestion(){

  var bear = prompt('Did I see a polar bear on the street of my hometown in Poland one winter?');

  if(bear.toLowerCase() === 'yes' || bear.toLowerCase() === 'y'){
    alert('No, you silly! Poland is not a Siberian tundra, there are no polar bears on the streets.');
  } else {
    answers.push(1);
    alert('Bravo! That would be a scary proposition. And totally messed up, since there are no polar bears outside of the zoo in Poland');
  }
}
function veggieQuestion(){
  var favoriteFood = prompt('Is my favorite food group veggies?');

  if(favoriteFood.toLowerCase() === 'yes' || favoriteFood.toLowerCase() === 'y'){
    answers.push(1);
    alert('You bet! I LOVE veggies. I\'m practically a bunny rabbit.');
  } else {
    alert('Why do you say that? Do you think I\'m fat? Of course I like veggies.');
  }
}
function danceQuestion(){

  var dance = prompt('Did I use to dance salsa competitevely?');

  if(dance.toLowerCase() === 'yes' || dance.toLowerCase() === 'y'){
    alert('Heck no, I am the most uncoordinated person ever.');
  } else {
    answers.push(1);
    alert('Very good. I am not a dancer');
  }
}
function plantQuestion(){
  for (var i=0; i<3; i++){
    var number = prompt('How many plants did I accidentally kill last year? Choose a number from 1 to 10. You have 3 guesses!');
    if(parseInt(number) === 3){
      answers.push(1);
      alert('Good job! You are figuring me out.');
      break;
    } else if (number > 3){
      alert('Hold your horses, my black thumb is not that bad.');
    } else {
      console.log(0);
      alert('I wish. It was definitely more.');
    }
  }
}
function sweetsQuestion(){
  alert('One more question, ok? I have a very sweet tooth, and I am wondering if you can guess which treat is my favorite.');

  for (var i=0; i<6; i++){
    var favoriteSweets = ['chocolate truffles', 'peanut butter cups', 'flan', 'hard candy', 'salted carmels', 'cookies', 'donuts', 'bananas'];
    var sweetGuess = prompt('What do I like most: chocolate truffles, peanut butter cups, flan, hard candy, salted carmels, cookies, donuts, or bananas?');
    if(sweetGuess === favoriteSweets[4]) {
      answers.push(1);
      alert('You got it! I would kill for salted carmels right now.');
      break;
    } else {
      alert('That\'s not it.');
    }
  }
}
function ageQuestion(){
  var age = prompt('Am I 33?');

  if(age.toLowerCase() === 'yes' || age.toLowerCase() === 'y'){
    alert('Guess again. Just kidding, I\'m not going to tell you my age anyway.');
  } else {
    answers.push(1);
    alert('Doesn\'t matter, I won\'t tell you my age anyway.');
  }
}

function gameInvite(){
  var playGame = prompt('Do you want to play a guessing game with me?');

  if(playGame.toLowerCase() === 'yes'){
    alert('Cool! I will ask you a couple of questions, and you\'ll answer yes or no, or if you\'re lazy, just say y or n. Let\'s go!');
    husbandQuestion();
    bearQuestion();
    ageQuestion();
    veggieQuestion();
    danceQuestion();
    plantQuestion();
    sweetsQuestion();

    alert('You\'ve got ' + answers.length + ' correct answers out of 7!');

    alert(userName +', that\'s all for today. You\'re a good sport. Thank you for playing!');

  } else {
    alert('Maybe another time!');
  }
}

gameInvite();

