function registrarNotas() {
    let cantidadNotas = parseInt(prompt('Ingrese la cantidad de notas'));
    let notas = [];
    let suma = 0;
  
    if (!isNaN(cantidadNotas) && cantidadNotas > 0) {
      for (let i = 0; i < cantidadNotas; i++) {
        let nota = parseFloat(prompt(`Ingrese la nota ${i + 1}`));
        if (!isNaN(nota)) {
          notas.push(nota);
          suma += nota;
        } else {
          alert('Ingrese una nota válida');
          return;
        }
      }
  
      let promedio = suma / cantidadNotas;
      mostrarResultado(`Notas: ${notas.join(', ')} <br> Promedio: ${promedio.toFixed(2)}`);
    } else {
      alert('Ingrese una cantidad de notas válida');
    }
  }
  
  function mostrarResultado(resultado) {
    document.getElementById('resultado').innerHTML = resultado;
  }
  