function plus() {
  let number1 = document.getElementById("Number1");
  let number2 = document.getElementById("Number2");
  let answer = document.getElementById("answer");
  answer.innerHTML = Number(number1.value) + Number(number2.value);
}

function minus() {
  let number1 = document.getElementById("Number1");
  let number2 = document.getElementById("Number2");
  let answer = document.getElementById("answer");
  answer.innerHTML = number1.value - number2.value;
}

function multiply() {
  let number1 = document.getElementById("Number1");
  let number2 = document.getElementById("Number2");
  let answer = document.getElementById("answer");
  answer.innerHTML = number1.value * number2.value;
}

function devide() {
  let number1 = document.getElementById("Number1");
  let number2 = document.getElementById("Number2");
  let answer = document.getElementById("answer");
  answer.innerHTML = number1.value / number2.value;
}

function DELL() {
  let number1 = document.getElementById("Number1");
  let number2 = document.getElementById("Number2");
  let answer = document.getElementById("answer");
  number1.value = "";
  number2.value = "";
  answer.value = "";
}
