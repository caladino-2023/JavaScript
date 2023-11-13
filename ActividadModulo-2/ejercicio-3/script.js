function calculateTotal() {
    const productPrices = [];
    for (let i = 0; i < 10; i++) {
        const price = parseFloat(prompt(`Enter the price of product ${i + 1}:`));
        productPrices.push(price);
    }

    const totalCost = productPrices.reduce((acc, price) => acc + price, 0);
    alert(`The total cost of the 10 products is $${totalCost.toFixed(2)}`);
}
