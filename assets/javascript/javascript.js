var score = 0;
var wins = 0;
var losses = 0;
var targetNumber = (Math.floor(Math.random()*120)+19);
var increment = [];


//call on all functions in the document
$(document).ready(function(){

//call on targetNumber
  $("#random-number").text(targetNumber);

//pick random number for target and reset score to 0
function resetGame(){
  targetNumber=Math.floor(Math.random()*120+19);
      console.log(targetNumber);

  $('#random-number').text(targetNumber);
      number1= Math.floor((Math.random()*11)+1);
      number2= Math.floor((Math.random()*11)+1);
      number3= Math.floor((Math.random()*11)+1);
      number4= Math.floor((Math.random()*11)+1);
      score= 0;
      $('#current-score').text(score);
};


//call on when user wins
function winner(){
    wins++;
    $("#userWins").text(wins);
    reset();
}

//call on this function when user loses
function loser(){
    losses++;
    $("#userLoses").text(loses);
    reset();
}


//increment score by individual random numbers on click.
$("#ruby-image").on("click", function() {
  score += number1;
  alert("Your new score is: " + score);
//call on winner or loser function  
  if (score === targetNumber) {
    winner();
  }
  else if (score > targetNumber) {
    loser();
  }
});


$("#diamond-image").on("click", function() {
  score += number2;
  alert("Your new score is: " + score);
//call on winner or loser function
  if (score === targetNumber) {
    winner();
  }
  else if (score > targetNumber) {
    loser();
  }  
});


$("#citrine-image").on("click", function() {
  score += number3;
  alert("Your new score is: " + score);
//call on winner or loser function
  if (score === targetNumber) {
    winner();
  }
  else if (score > targetNumber) {
    loser();
  } 
});


$("#emerald-image").on("click", function() {
  score += number4;
  alert("Your new score is: " + score);
//call on winner or loser function
  if (score === targetNumber) {
    winner();
  }
  else if (score > targetNumber) {
    loser();
  }  
});


})