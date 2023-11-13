function generarArreglo() {
    const arrayLength = parseInt(document.getElementById('arrayLength').value);
    
    if (isNaN(arrayLength) || arrayLength <= 0) {
      alert('Por favor, ingrese un número válido para la longitud del arreglo.');
      return;
    }
    
    const array = [];
    
    for (let i = 0; i < arrayLength; i++) {
      array.push(i % 2);
    }
    
    alert('El arreglo generado es: ' + array);
  }
  