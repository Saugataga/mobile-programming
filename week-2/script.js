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

document.getElementById("result-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    getResult();
});

function getResult(){

  let Chemistry = Number(document.getElementById("Chemistry").value);
  let Physics = Number(document.getElementById("Physics").value);
  let English = Number(document.getElementById("English").value);
  let Maths = Number(document.getElementById("Maths").value);
  let Computer = Number(document.getElementById("Computer").value);
  let Nepali = Number(document.getElementById("Nepali").value);
  let Social = Number(document.getElementById("Social").value);
  let Psychology = Number(document.getElementById("Psychology").value);

  

  let total = Chemistry + Physics + English + Maths + Computer + Nepali + Social + Psychology;

  printResult(total);

}

function printResult(total){
    let result = "PASS";
    if(total >= 700){
        document.getElementById("Placement").innerText = "You have passed with distinction.";
    } else if(total >= 600){
        document.getElementById("Placement").innerText = "You have passed with first division.";
    } else if(total >= 500){
        document.getElementById("Placement").innerText = "You have passed with second division.";
    } else if(total >= 400){

        document.getElementById("Placement").innerText = "You have passed with third division.";
    } else {
        document.getElementById("Placement").innerText = "You have failed.";
        result = "FAIL"
    }
    
    if(result == "PASS"){
      document.getElementById("PassorFail").innerHTML = "Placement : " + "PASS";
      document.getElementById("PassorFail").style.color = "green";
    }
    else{
      document.getElementById("PassorFail").innerHTML = "Placement : " + "FAIL";
      document.getElementById("PassorFail").style.color = "red";
    }

    document.getElementById("TotalMarks").innerHTML = "Total Marks: " + total;
}