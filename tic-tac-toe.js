const board = document.getElementById("gameBoard");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restart");

let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
  [0, 4, 8], [2, 4, 6]             // diagonals
];

// Create cells
function createBoard() {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("data-index", i);
    board.appendChild(cell);
  }
}

createBoard();

function checkWinner() {
  for (let condition of winConditions) {
    const [a, b, c] = condition;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      gameActive = false;
      statusText.textContent = `Player ${gameState[a]} Wins! 🎉`;
      return;
    }
  }

  if (!gameState.includes("")) {
    gameActive = false;
    statusText.textContent = "It's a Draw! 😅";
  }
}

function handleCellClick(e) {
  const index = e.target.getAttribute("data-index");
  if (!gameState[index] && gameActive) {
    gameState[index] = currentPlayer;
    e.target.textContent = currentPlayer;
    checkWinner();
    if (gameActive) {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      statusText.textContent = `Player ${currentPlayer}'s Turn`;
    }
  }
}

function restartGame() {
  gameState = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  statusText.textContent = "Player X's Turn";
  document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");
}

document.querySelectorAll(".cell").forEach(cell => cell.addEventListener("click", handleCellClick));
restartBtn.addEventListener("click", restartGame);
