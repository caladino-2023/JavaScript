function calcularPotencia() {
    const base = parseFloat(document.getElementById('base').value);
    const exponente = parseFloat(document.getElementById('exponente').value);

    if (isNaN(base) || isNaN(exponente)) {
        alert('Por favor, ingresa números válidos para la base y el exponente.');
        return;
    }

    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }

    alert(`El resultado de ${base} elevado a la ${exponente} es: ${resultado}`);
}
