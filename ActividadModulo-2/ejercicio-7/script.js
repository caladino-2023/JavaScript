function contarImpares() {
    let cantidadImpares = 0;
    const cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números:"));

    for (let i = 0; i < cantidadNumeros; i++) {
        const numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
        if (numero % 2 !== 0) {
            cantidadImpares++;
        }
    }

    alert(`La cantidad de números impares es: ${cantidadImpares}`);
}
