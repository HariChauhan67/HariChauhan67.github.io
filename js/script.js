let score1 = 0;
let score2 = 0;

function updateScore(team, value) {
  if (team === 1) {
    score1 += value;
    document.getElementById('score1').textContent = score1;
  } else if (team === 2) {
    score2 += value;
    document.getElementById('score2').textContent = score2;
  }
}

var lines;
var randomNumber;
var lastRandomNumber;

$(document.body).ready(function() {
  // load the text file from the server
  $.ajax({
    url: '../Topics/Quiz/1.General.txt'
  }).done(function(content) {
    // split the content into lines
    lines = content.split('\n');
  });

  // add a click event listener to the button
  $('#button').click(function() {
    // generate a random number
    do {
      randomNumber = Math.floor(Math.random() * lines.length);
    } while (randomNumber === lastRandomNumber);

    // set the variable to the random line
    var randomLine = lines[randomNumber];
    $('#variable').text(randomLine);

    // remember the last random number
    lastRandomNumber = randomNumber;
  });
});
