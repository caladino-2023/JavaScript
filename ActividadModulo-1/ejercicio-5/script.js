function calculateSalary() {
    const salaryInput = document.getElementById('salaryInput').value;
    const salary = parseFloat(salaryInput);
    let result = '';

    if (salary < 700000) {
        const pensionDiscount = salary * 0.02;
        const transportationAllowance = salary * 0.06;
        result = `Salary after deductions: ${salary - pensionDiscount + transportationAllowance}`;
    } else if (salary >= 700000 && salary < 1000000) {
        const pensionDiscount = salary * 0.04;
        result = `Salary after deductions: ${salary - pensionDiscount + 12000}`;
    } else {
        const pensionDiscount = salary * 0.06;
        result = `Salary after deductions: ${salary - pensionDiscount}`;
    }

    document.getElementById('result').innerText = result;
}
