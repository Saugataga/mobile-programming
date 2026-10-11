let balance = 10000; // Initial balance
let PIN = "1234"; // Predefined PIN

let check = true;

function toggleBalance() {
  check = !check;
  document.getElementById("balance").innerText = check ? "$" + balance : "XXXX";
}

function withdraw() {
  let amount = Number(prompt("Enter the amount to withdraw:"));
  if (amount > 0 && amount <= balance && amount % 100 === 0) {
    let enteredPIN = prompt("Enter your PIN:");
    if (enteredPIN !== PIN) {
      alert("Incorrect PIN. Transaction cancelled.");
      return;
    }
    balance -= amount;
    alert("Withdrawal successful! New balance: $" + balance);
  } else {
    alert(
      "Invalid amount. Please enter a positive amount in multiples of 100 that is less than or equal to your balance.",
    );
  }
}

function deposit() {
  let amount = Number(prompt("Enter the amount to deposit:"));
  if (amount > 0 && amount % 100 === 0) {
    let enteredPIN = prompt("Enter your PIN:");
    if (enteredPIN !== PIN) {
      alert("Incorrect PIN. Transaction cancelled.");
      return;
    }
    balance += amount;
    alert("Deposit successful! New balance: $" + balance);
  } else {
    alert(
      "Invalid amount. Please enter a positive amount in multiples of 100.",
    );
  }
}
