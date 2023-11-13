function calcularNotas() {
    let aprobadas = 0;
    let reprobadas = 0;
  
    for (let i = 0; i < 12; i++) {
      const nota = parseFloat(prompt(`Ingrese la nota del estudiante ${i + 1}:`));
      
      if (nota >= 0 && nota <= 10) {
        if (nota >= 5) {
          aprobadas++;
        } else {
          reprobadas++;
        }
      } else {
        alert('La nota ingresada no es válida. Debe estar entre 0 y 10.');
        return; // Termina la ejecución si la nota es inválida
      }
    }
  
    alert(`Cantidad de estudiantes aprobados: ${aprobadas}\nCantidad de estudiantes reprobados: ${reprobadas}`);
  }
  