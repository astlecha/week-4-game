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


//increment score by individual random numbers on click.
$("#ruby-image").on("click", function() {
  score += number1;
  alert("Your new score is: " + score);
  console.log("Score: " + score)
});


$("#diamond-image").on("click", function() {
  score += number2;
  alert("Your new score is: " + score);
  console.log("Score: " + score)
});


  $("#citrine-image").on("click", function() {
  score += number3;
  alert("Your new score is: " + score);
  console.log("Score: " + score)
});


  $("#emerald-image").on("click", function() {
  score += number4;
  alert("Your new score is: " + score);
  console.log("Score: " + score)
});


    // //If counter exactly equals targetNumber, user wins, wins increment up 1.
    // if (counter === targetNumber) {
    //   alert("You win!");
    //   wins++;
    // }

    // //If counter exceeds targetNumber, user loses, losses increment up 1.
    // else if (counter >= targetNumber) {
    //   alert("You lose!!");
    //   losses++;
    // }


})