//Realizar un programa que permita sumar los 150 primeros números
function calculate() {
    const exercise = document.getElementById("exercise").value;
    let result = 0;
  
    if (exercise === "1") {
      for (let i = 1; i <= 150; i++) {
        result += i;
      }
      alert(`The sum of the first 150 numbers is: ${result}`);
      document.getElementById("result").innerText = `Result: ${result}`;
    }
  }
  