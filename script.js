// Get the balloons and scoreboard elements
const balloons = document.querySelectorAll(".balloon");
const player1Score = document.getElementById("player1-score");
const player2Score = document.getElementById("player2-score");

// Initialize scores
let score1 = 0;
let score2 = 0;
let count = 0;

// Add event listeners to the balloons
balloons.forEach((balloon) => {
  balloon.addEventListener("click",()=> updateScore(balloon));
});
  
  function updateScore(balloon) {
    
    // Remove the balloon from the game board
    balloon.style.display = "none";
    // Add to the player's score
    if (count % 2 == 0) {
      score1 += Math.floor(Math.random() * 100);
      player1Score.innerText = score1;
    } else {
      score2 += Math.floor(Math.random() * 100);
  
      player2Score.innerText = score2;
    }
    count++;
  };


// add more ballons
// Get the button and balloon container elements from the DOM
const addballonbutton = document.getElementById("addBalloon");

addballonbutton.addEventListener("click", () => {
  // const gameboard = document.getElementsByClassName('game-board')[0];
  // console.log('clicked',gameboard)
  // gameboard.innerHTML += '<div class="balloon yellow"></div>'

  // select gameboard
  const gamebeard = document.querySelector(".game-board");

  // create a child 'div'
  const ballonElement = document.createElement("div");

  ballonElement.classList.add("balloon","blue");
  // ballonElement.classList.add("blue");
  ballonElement.addEventListener('click',()=>updateScore(ballonElement))


  // append in the gameboard parent the div child
  gamebeard.appendChild(ballonElement);
});

// Set up the timer
const countdown = document.getElementById("countdown");
let timeLeft = 21;

const timer = setInterval(() => {
  timeLeft--;
  countdown.innerText = timeLeft;

  if (timeLeft === 0) {
    clearInterval(timer);
    // Determine the winner
    if (score1 > score2) {
      alert("Player 1 wins!");
    } else if (score2 > score1) {
      alert("Player 2 wins!");
    } else {
      alert("It's a tie!");
    }

    location.reload();
  }
}, 1000);
