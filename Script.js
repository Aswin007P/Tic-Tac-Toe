let currentPlayer = 'X';
let gameBoard = Array(9).fill('');
let gameActive = true;

const winPatterns = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

const resultEl = document.getElementById('result');

function handleClick(index) {
  if (gameBoard[index] !== '' || !gameActive) return;

  gameBoard[index] = currentPlayer;
  const box = document.querySelectorAll('.box')[index];
  box.textContent = currentPlayer;
  box.classList.add(currentPlayer.toLowerCase());

  if (checkWin()) {
    endGame(false);
  } else if (gameBoard.every(cell => cell !== '')) {
    endGame(true);
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    resultEl.textContent = `Player ${currentPlayer}'s Turn`;
  }
}

function checkWin() {
  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
  });
}

function endGame(isDraw) {
  gameActive = false;
  if (isDraw) {
    resultEl.textContent = "It's a Draw!";
    resultEl.style.color = '#ffd166';
  } else {
    resultEl.textContent = `Player ${currentPlayer} Wins! 🎉`;
    resultEl.style.color = currentPlayer === 'X' ? '#ff6b6b' : '#4ecdc4';
    if (typeof confetti !== 'undefined') {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }
}

function restartGame() {
  currentPlayer = 'X';
  gameBoard = Array(9).fill('');
  gameActive = true;
  resultEl.textContent = "Player X's Turn";
  resultEl.style.color = 'white';
  document.querySelectorAll('.box').forEach(box => {
    box.textContent = '';
    box.className = 'box';
  });
}