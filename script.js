
let askBtn = document.getElementById("ask-button");
let ansSpace = document.getElementById("answer");

let choices = [
  "The future is murky",
  "Yes",
  "No",
  "Most Definitely",
  "Ask again later"
]

function randomNumber(a, b){
  return Math.floor(Math.random()*(b-a+1) + a);
}

function makeFortune() {
  // ansSpace.textContent = "The future is murky.";
  ansSpace.textContent = choices[randomNumber(0, 4)] + " Stay Golden!"
  
}

askBtn.addEventListener("click", makeFortune);
