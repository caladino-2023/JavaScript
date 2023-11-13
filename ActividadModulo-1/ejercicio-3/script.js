function convertCtoF() {
    const celsius = document.getElementById('celsiusInput').value;
    const fahrenheit = celsius * 9 / 5 + 32;
    document.getElementById('fahrenheitOutput').innerText = fahrenheit.toFixed(2);
}

function convertFtoC() {
    const fahrenheit = document.getElementById('fahrenheitInput').value;
    const celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('celsiusOutput').innerText = celsius.toFixed(2);
}
