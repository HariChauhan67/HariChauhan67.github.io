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

$(document).ready(function() {
  $("#Random").click(function() {
    for (var i = 1; i <= 20; i++) {
      $.get("Topics/" + i + ".txt", function(data) {
        var lines = data.split("\n");
        var line = lines[Math.floor(Math.random() * lines.length)];
        $("#Topic" + i).text(line);
      });
    }
  });
});
