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