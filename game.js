// create random number between 1-20
let randomNum = Math.ceil(Math.random() * 20);
console.log(randomNum);

let message = document.querySelector(".msg");
let remain = document.querySelector(".remain");
let topScore = document.querySelector(".top-score");

let remainDefault = 10;
let topScoreDefault = 0;

// every time the check button is clicked
document.querySelector(".check").addEventListener("click", () => {
  const guess = document.querySelector(".guess").value;

  // doesnt execute if no guess
  if (!guess) message.textContent = "Please guess a number";
  else if (guess < 1 || guess > 20)
    message.textContent = "Please guess between 1-20";
  else if (guess == randomNum) {
    // if guess matches with random number
    message.textContent = "Congratulations. Got it!🥳";
    document.querySelector(".winSound").volume = 0.5;
    document.querySelector(".winSound").play();
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = guess; // or randomNum

    // check the top score
    if (remainDefault > topScoreDefault) {
      topScoreDefault = remainDefault;
      document.querySelector(".top-score").textContent = topScoreDefault;
    }
  } else {
    // if it doesnt match and remain--
    if (remainDefault > 1) {
      remainDefault--;
      document.querySelector(".remain").textContent = remainDefault;

      guess < randomNum
        ? (message.textContent = "Opps! Guess bigger number! 🔼")
        : (message.textContent = "Opps! Guess smaller number 🔽");

      document.querySelector(".guess").value = ""; // reset after each guess attempt
    } else {
      message.textContent = "Sorry. You lose!😞";
      remainDefault--;
      document.querySelector(".remain").textContent = remainDefault;
      document.querySelector(".loseSound").volume = 0.5;
      document.querySelector(".loseSound").play();
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".guess").value = ""; // reset after each guess attempt
    }
  }
});

// every time the again button clicked (reset game (default) + backgroundcolor #2d3436)
document.querySelector(".again").onclick = () => {
  randomNum = Math.ceil(Math.random() * 20);
  console.log(randomNum);

  message.textContent = "The game starts again...";

  document.querySelector(".myBody").style.backgroundColor = "#2d3436";
  document.querySelector(".number").textContent = "?";
  remainDefault = 10; // redefine remainDefault
  document.querySelector(".remain").textContent = remainDefault;
};

document.addEventListener("DOMContentLoaded", () => {
  const toggleSoundButton = document.getElementById("toggleSoundButton");
  const backgroundAudio = document.getElementById("backgroundAudio");
  backgroundAudio.volume = 0.3;
  backgroundAudio.play();
  let isMuted = false;
  function toggleSound() {
    isMuted = !isMuted;
    if (isMuted) {
      backgroundAudio.play();
      document.querySelector("img").src = "assets/sound-on.png";
    } else {
      backgroundAudio.pause();
      document.querySelector("img").src = "assets/sound-off.png";
    }
  }
  toggleSoundButton.addEventListener("click", toggleSound);
});
