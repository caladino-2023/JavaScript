function contarMultiplos() {
    let multiplosDeTres = 0;
  
    for (let i = 1; i <= 50; i++) {
      if (i % 3 === 0) {
        multiplosDeTres++;
      }
    }
  
    alert(`La cantidad de múltiplos de 3 entre los primeros 50 números es: ${multiplosDeTres}`);
  }
  