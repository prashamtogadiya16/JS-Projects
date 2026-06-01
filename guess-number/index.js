const guessInput = document.getElementById('guess');         
const submitBtn = document.querySelector('.check');          
const message = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
const highScoreDisplay = document.querySelector('.highscore');
const resetBtn = document.querySelector('.btn');             

let secretNumber = Math.floor(Math.random() * 20) + 1; 
let score = 20;
let highScore = 0;

submitBtn.addEventListener('click', () => {
  const guess = Number(guessInput.value);

  if (score <= 0) {
    message.textContent = 'Game over! Press Again! to restart.';
    return;
  }

  if (!guess) {
    message.textContent = 'Please enter a number!';
  } 
  else if (guess === secretNumber) {
    message.textContent = '🎉 Correct number!';
    document.body.style.backgroundColor = '#60b347';
    
    document.querySelector('.number').textContent = secretNumber;
    
    if (score > highScore) {
      highScore = score;
      highScoreDisplay.textContent = highScore;
    }
  } 
  else {
    if (score > 1) {
      message.textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      scoreDisplay.textContent = score;
    } else {
      score = 0;
      scoreDisplay.textContent = score;
      message.textContent = 'Game over! You lost.';
    }
  }
});

resetBtn.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  
  scoreDisplay.textContent = score;
  message.textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  guessInput.value = ''; 
});