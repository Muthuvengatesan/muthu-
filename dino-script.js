const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreDisplay = document.getElementById("score");

let isJumping = false;
let score = 0;
let gameInterval;

document.addEventListener("keydown", function (e) {
  if (e.code === "Space" && !isJumping) {
    jump();
  }
});

function jump() {
  isJumping = true;
  dino.classList.add("jump");

  setTimeout(() => {
    dino.classList.remove("jump");
    isJumping = false;
  }, 500);
}

function checkCollision() {
  const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if (cactusLeft < 90 && cactusLeft > 50 && dinoTop >= 140) {
    alert("💥 Game Over!\nScore: " + score);
    clearInterval(gameInterval);
    score = 0;
    scoreDisplay.textContent = "Score: 0";
    cactus.style.animation = "none";
    setTimeout(() => {
      cactus.style.animation = "cactusMove 2s linear infinite";
      gameInterval = setInterval(gameLoop, 100);
    }, 1000);
  }
}

function gameLoop() {
  score++;
  scoreDisplay.textContent = "Score: " + score;
  checkCollision();
}

gameInterval = setInterval(gameLoop, 100);
