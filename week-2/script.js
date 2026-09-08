 function addNumber(){
        let number1 = Number(document.getElementById("number").value);
        let number2 = Number(document.getElementById("number2").value);
        let sum = number1 + number2;
        
        document.getElementById("result").innerText = "The sum is: " + sum;
   }