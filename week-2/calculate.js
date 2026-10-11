function calculate(a, b, operation) {
  switch (operation) {
    case 'add':
        document.getElementById("result").innerText = "The sum is: " + (Number(a) + Number(b));
        break;
    case 'subtract':
        document.getElementById("result").innerText = "The difference is: " + (Number(a) - Number(b));
        break;
    case 'multiply':
        document.getElementById("result").innerText = "The product is: " + (Number(a) * Number(b));
        break;
    case 'divide':
        if (Number(b) === 0) {
            document.getElementById("result").innerHTML = "Error: Division by zero is not allowed.";
        } else {
            let div = (Number(a) / Number(b));
            document.getElementById("result").innerText = "The quotient is: " + div.toFixed(2);
        }
        break;
    default:
        document.getElementById("result").innerText = "Invalid operation.";
  }
}