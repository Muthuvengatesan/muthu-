const messages = {
  happy: [
    "Keep smiling, the world needs it! 😊",
    "Happiness looks good on you!",
    "Shine bright like your mood!"
  ],
  sad: [
    "It’s okay to feel down. Tomorrow’s another chance 💙",
    "Take a deep breath. You’ve got this.",
    "Even the moon goes through phases."
  ],
  inspired: [
    "Now’s the time. Start that idea! 💡",
    "Your thoughts are powerful. Build on them.",
    "You’re a spark. Create something today."
  ],
  tired: [
    "Rest is productive too 😴",
    "It’s okay to take a break.",
    "Recharge. The world can wait a little."
  ]
};

const emojis = document.querySelectorAll(".emoji");
const messageBox = document.getElementById("messageBox");

emojis.forEach((emoji) => {
  emoji.addEventListener("click", () => {
    const mood = emoji.dataset.mood;
    const quote = messages[mood][Math.floor(Math.random() * messages[mood].length)];
    
    document.body.className = mood;
    messageBox.textContent = quote;
  });
});