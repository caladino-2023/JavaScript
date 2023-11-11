"use strict"

// 1. Realizar el algoritmo que convierta litros en centilitros, decilitros, galones y onzas.
function convert() {
    const liters = parseFloat(document.getElementById('litersInput').value);
  
    if (!isNaN(liters)) {
      const centiliters = liters * 1000;
      const deciliters = liters * 10;
      const gallons = (liters * 0.264172).toFixed(2);
      const ounces = (liters * 33.814).toFixed(2);
  
      document.getElementById('centiliters').innerText = `${liters} Liters = ${centiliters} Centiliters`;
      document.getElementById('deciliters').innerText = `${liters} Liters = ${deciliters} Deciliters`;
      document.getElementById('gallons').innerText = `${liters} Liters = ${gallons} Gallons`;
      document.getElementById('ounces').innerText = `${liters} Liters = ${ounces} Ounces`;
  
      document.getElementById('results').classList.remove('hidden');
    }
  }