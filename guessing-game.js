//@ts-nocheck
//! 🛠 Guessing Game Challenge (Phase 1 - Core JS)
/*
📌 Requirements:
- Generate a random number between 1 and 10
- Let the user guess until they get it right
- Track number of attempts
- Give hints (too high / too low)
- Show success message with attempt count
*/

const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attemptsDisplay');

guessBtn?.addEventListener('click', playGussingGame);

function playGussingGame() {
  const guessNumber = Number(guessInput.value);

  if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 10) {
    feedback.textContent = '❌ Please enter a valid number between 1 and 10.';
    feedback.style.color = '#d32f2f';
    return;
  }

  attempts++;
  if (randomNumber === guessNumber) {
    feedback.textContent = `🎉 Congratulations! You guessed it in ${attempts} attempts.`;
    feedback.style.color = '#388e3c';
    guessInput.disabled = true;
    guessBtn.disabled = true;
  } else if (guessNumber < randomNumber) {
    feedback.textContent = '📉 Too low! Try a higher number.';
    feedback.style.color = '#1976d2';
  } else {
    feedback.textContent = '📈 Too high! Try a lower number.';
    feedback.style.color = '#f57c00';
  }
  attemptsDisplay.textContent = `Attempts: ${attempts}`;
}
