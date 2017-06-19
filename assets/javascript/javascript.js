var score = 0;
var wins = 0;
var losses = 0;
var targetNumber = (Math.floor(Math.random()*120)+19);
var buttonNumArray = [];


//call on all functions in the document
$(document).ready(function(){

//generate random number for each jewel
function crystalNumbers(){
  var randomCrysNum = "";
  for (var i = 0; i < 4; i++) {
    if (i > -1) {
      randomCrysNum = Math.floor((Math.random()*12)+1);
    };
    buttonNumArray.push(randomCrysNum);
  };
}

//generate random jewel numbers
crystalNumbers();
console.log(buttonNumArray);

//call on targetNumber
  $("#random-number").text(targetNumber);

//pick random number for target and reset score to 0
function reset(){
  targetNumber=Math.floor(Math.random()*120+19);
    console.log(targetNumber);
    $('#random-number').text(targetNumber);

    //reset the score
    score= 0;
    $('#current-score').text(score);

    //reset button values
    buttonNumArray = [];
    crystalNumbers();
    console.log(buttonNumArray);
};


//call on when user wins
function winner(){
    alert("You win!!! Play again?");
    wins++;
    $("#userWins").text("Wins: "+wins);
    reset();
}

//call on this function when user loses
function loser(){
    alert("You lose :( Try again?");
    losses++;
    $("#userLoses").text("Losses: "+losses);
    reset();
}


  //increment score by individual random numbers on click.
  $("#ruby-image").on("click", function() {
    score += buttonNumArray[0];
    $("#current-score").text(score);
  //call on winner or loser function  
    if (score === targetNumber) {
      winner();
    }
    else if (score > targetNumber) {
      loser();
    }
  });


  $("#diamond-image").on("click", function() {
    score += buttonNumArray[1];
    $("#current-score").text(score);
  //call on winner or loser function
    if (score === targetNumber) {
      winner();
    }
    else if (score > targetNumber) {
      loser();
    }  
  });


  $("#citrine-image").on("click", function() {
    score += buttonNumArray[2];
    $("#current-score").text(score);
  //call on winner or loser function
    if (score === targetNumber) {
      winner();
    }
    else if (score > targetNumber) {
      loser();
    } 
  });


  $("#emerald-image").on("click", function() {
    score += buttonNumArray[3];
    $("#current-score").text(score);
  //call on winner or loser function
    if (score === targetNumber) {
      winner();
    }
    else if (score > targetNumber) {
      loser();
    }  
  });


})