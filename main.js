const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
const set = document.querySelector('.set')
const input = document.querySelector('input');
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const boxes = document.querySelectorAll('.boxes');
const warning = document.querySelector('.warning')
let number;
let userInput = [];
let random = [];

set.addEventListener('click', () => {
  number = input.value
})
start.addEventListener('click', beep);
reset.addEventListener('click', resetGame);

red.addEventListener('click', () => {
  userInput.push(Number(red.value));
  check();
});
green.addEventListener('click', () => {
  userInput.push(Number(green.value));
  check();
});
blue.addEventListener('click', () => {
  userInput.push(Number(blue.value));
  check();
});
yellow.addEventListener('click', () => {
  userInput.push(Number(yellow.value));
  check();
});

function resetGame() {
  random = [];
  userInput = [];
  warning.innerHTML = ''
}
function beep() {
  random.push(Math.floor(Math.random() * 4))
  for (var i = 0; i < 4; i++) {
    boxes[i].classList.remove('active');
  }
  boxes[random[random.length - 1]].classList.add('active');
}
function getInput(item) {
  userInput.push(Number(item.value));
  check();
}
function check() {
  if (userInput.length != random.length) {
    checkValue()
  } else {
    if (userInput[userInput.length - 1] == random[userInput.length - 1]) {
      checkGame();
      userInput = [];
      beep();
    } else {
      warning.innerHTML = 'Try again'
    }
  }
}
function checkValue() {
  if (userInput[userInput.length - 1] == random[userInput.length - 1]) {
  } else {
    warning.innerHTML = 'Try again'
  }
}
function checkGame() {
  if (Number(number) === userInput.length) {
    resetGame()
    warning.innerHTML = 'You won!'
  }
}