const dice = document.querySelectorAll(".die");
const rollButton = document.getElementById("roll-button");
 

dice.forEach(die => {
  die.innerHTML = `<img src="images/dice6.svg" alt="Die 6">`;
});


function rollDice() {
  dice.forEach(die => {
    const value = Math.floor(Math.random() * 6) + 1; // random 1–6
    die.innerHTML = `<img src="images/dice${value}.svg" alt="Die${value}">`;
  });
}

rollButton.addEventListener("click",rollDice)
