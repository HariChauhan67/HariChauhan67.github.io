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

var lines = [];
var lastRandomNumbers = [];

$(document.body).ready(function() {
  // load the text files from the server
  for (var i = 1; i <= 20; i++) {
    $.ajax({
      url: 'textfile' + i + '.txt'
    }).done(function(content) {
      // split the content into lines
      var fileLines = content.split('\n');
      lines.push(fileLines);
    });
  }

  // add a click event listener to the button
  $('#button').click(function() {
    // generate a random number for each h2 tag
    var randomNumbers = [];
    for (var i = 0; i < 20; i++) {
      var randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * lines[i].length);
      } while (randomNumber === lastRandomNumbers[i]);
      randomNumbers.push(randomNumber);
      lastRandomNumbers[i] = randomNumber;
    }

    // set the text of each h2 tag to the random line
    for (var i = 1; i <= 20; i++) {
      var randomLine = lines[i - 1][randomNumbers[i - 1]];
      $('#topic' + i).text(randomLine);
    }
  });
});
