const x = 1;
x = 2;

function plus() {
  let number1 = document.getElementById("Number1");
  let number2 = document.getElementById("Number2");
  let answer = document.getElementById("answer");
  let result = Number(number1.value) + Number(number2.value);
  answer.innerHTML = result;
}

function minus() {
  let number1 = document.getElementById("Number1");
  let number2 = document.getElementById("Number2");
  let answer = document.getElementById("answer");
  let result = Number(number1.value) - Number(number2.value);
  answer.innerHTML = result;
}

function multiply() {
  let number1 = document.getElementById("Number1");
  let number2 = document.getElementById("Number2");
  let answer = document.getElementById("answer");
  let result = Number(number1.value) * Number(number2.value);
  answer.innerHTML = result;
}

function devide() {
  let number1 = document.getElementById("Number1");
  let number2 = document.getElementById("Number2");
  let answer = document.getElementById("answer");
  let result = Number(number1.value) / Number(number2.value);
  answer.innerHTML = result.toFixed(3);
}

function DELL() {
  let number1 = document.getElementById("Number1");
  let number2 = document.getElementById("Number2");
  let answer = document.getElementById("answer");
  number1.value = "";
  number2.value = "";
  answer.innerHTML = "0";
}
