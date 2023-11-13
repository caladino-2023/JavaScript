function generateEvenNumbers() {
    let evenNumbers = "";
    for (let i = 1; i <= 100; i++) {
      if (i % 2 === 0) {
        evenNumbers += i + "\n";
      }
    }
    alert("Even Numbers:\n" + evenNumbers);
  }
  