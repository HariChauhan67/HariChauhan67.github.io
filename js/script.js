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

const pTags = document.querySelectorAll('p');
const topicsFolder = '../Topics/';
const fileExtension = '.txt';
const randomButton = document.getElementById('Random');

randomButton.addEventListener('click', () => {
  for (let i = 0; i < pTags.length; i++) {
    const fileName = topicsFolder + (i + 1) + fileExtension;
    fetch(fileName)
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n');
        const randomIndex = Math.floor(Math.random() * lines.length);
        const randomLine = lines[randomIndex];
        pTags[i].textContent = pTags[i].textContent.split('\n')[0] + `\n ${randomLine}`;
      });
  }
});