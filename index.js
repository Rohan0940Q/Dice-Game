// ✅ Sound object (good!)
const rollSound = new Audio("dice-142528.mp3");

// ✅ Global score variables (❗ move them outside the function so they persist between rolls)
let score1 = 0;
let score2 = 0;

function rollDice() {

  console.log("Rolling Dice...");
  // ✅ Play sound first
  rollSound.play();

  console.log("P1:", randomNumber1, "P2:", randomNumber2);

  // ✅ Random numbers
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // ✅ Update dice images
  var randomImageSource = "images/dice" + randomNumber1 + ".png";
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".img1").setAttribute("src", randomImageSource);
  document.querySelector(".img2").setAttribute("src", randomImageSource2);

  // ✅ Heading
  var heading = document.querySelector("h1");

  // ✅ Scoring logic
  const p1Name = document.getElementById("name1").textContent;
  const p2Name = document.getElementById("name2").textContent;

  if (randomNumber1 > randomNumber2) {
    heading.textContent = `🚩 ${p1Name} Wins!`;
    score1++;
  } else if (randomNumber2 > randomNumber1) {
    heading.textContent = `${p2Name} Wins! 🚩`;
    score2++;
  } else {
    heading.textContent = "Draw!";
  }

  // ✅ Update score displays
  document.getElementById("score1").textContent = "Score: " + score1;
  document.getElementById("score2").textContent = "Score: " + score2;
}

// ✅ Name input setup (runs on page load)
window.onload = function () {
  document.getElementById("startBtn").addEventListener("click", function () {
    const p1 = document.getElementById("player1Name").value || "Player 1";
    const p2 = document.getElementById("player2Name").value || "Player 2";

    
    document.getElementById("name1").textContent = p1;
    document.getElementById("name2").textContent = p2;

    score1=0;
    score2=0;

    document.getElementById("score1").textContent = "Score: 0";
    document.getElementById("score2").textContent = "Score: 0";

    document.querySelector("h1").textContent = "Roll the Dice";
  });

  // ✅ Optional: Attach roll button event
  document.getElementById("rollBtn").addEventListener("click", rollDice);
};
