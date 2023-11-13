function calculateCost() {
    const centiliterCost = 25; // in pesos
    const gallons = document.getElementById('gasInput').value;
    
    if (gallons !== '') {
      const liters = gallons * 3.78541; // conversion from gallons to liters
      const cost = (liters * 100) * centiliterCost / 100; // cost calculation
      
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = `Amount of Gasoline: ${liters.toFixed(2)} liters<br>Value to Pay: ${cost.toFixed(2)} pesos`;
    } else {
      alert('Please enter a valid amount of gasoline.');
    }
  }
  