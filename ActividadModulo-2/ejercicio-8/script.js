function calcularSueldoBajo() {
    let cantidadSueldos = parseInt(prompt("Ingrese la cantidad de sueldos:"));
    let sueldos = [];

    for (let i = 0; i < cantidadSueldos; i++) {
        sueldos.push(parseFloat(prompt(`Ingrese el sueldo del empleado ${i + 1}:`)));
    }

    if (sueldos.length > 0) {
        const sueldoMasBajo = Math.min(...sueldos);
        alert(`Los sueldos ingresados son: ${sueldos.join(', ')}\nEl sueldo más bajo es: ${sueldoMasBajo}`);
    } else {
        alert("No se ingresaron sueldos.");
    }
}
