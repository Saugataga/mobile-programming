function addNumber() {
  let number1 = Number(document.getElementById("number").value);
  let number2 = Number(document.getElementById("number2").value);
  let sum = number1 + number2;

  document.getElementById("result").innerText = "The sum is: " + sum;
}

function subtractNumber() {
  let number1 = Number(document.getElementById("number").value);
  let number2 = Number(document.getElementById("number2").value);
  let difference = number1 - number2;

  document.getElementById("result2").innerText =
    "The difference is: " + difference;
}

function multiplyNumber() {
  let number1 = Number(document.getElementById("number").value);
  let number2 = Number(document.getElementById("number2").value);
  let product = number1 * number2;

  document.getElementById("result3").innerText = "The product is: " + product;
}
