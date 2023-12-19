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

const h2Tags = document.querySelectorAll('h2');
const topicsFolder = '../Topics/';
const fileExtension = '.txt';
const randomButton = document.getElementById('Random');

randomButton.addEventListener('click', () => {
  for (let i = 0; i < h2Tags.length; i++) {
    const fileName = topicsFolder + (i + 1) + fileExtension;
    fetch(fileName)
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n');
        const randomIndex = Math.floor(Math.random() * lines.length);
        const randomLine = lines[randomIndex];
        h2Tags[i].textContent = h2Tags[i].textContent.split(':')[0] + `: ${randomLine}`;
      });
  }
});