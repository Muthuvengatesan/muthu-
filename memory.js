const emojis = ['🍕','🚀','🐶','🎮','👑','🍔','🎲','🦖'];
let cards = [...emojis, ...emojis];
cards.sort(() => 0.5 - Math.random());

const board = document.getElementById('game-board');
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let flips = 0;

cards.forEach(symbol => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerText = '?';
  card.dataset.symbol = symbol;
  board.appendChild(card);

  card.addEventListener('click', () => {
    if (lockBoard || card.classList.contains('flipped')) return;

    card.innerText = card.dataset.symbol;
    card.classList.add('flipped');

    if (!firstCard) {
      firstCard = card;
    } else {
      secondCard = card;
      lockBoard = true;
      flips++;
      document.getElementById("status").innerText = `Flips: ${flips}`;

      if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
        firstCard = null;
        secondCard = null;
        lockBoard = false;
      } else {
        setTimeout(() => {
          firstCard.innerText = '?';
          secondCard.innerText = '?';
          firstCard.classList.remove('flipped');
          secondCard.classList.remove('flipped');
          firstCard = null;
          secondCard = null;
          lockBoard = false;
        }, 800);
      }
    }
  });
});
