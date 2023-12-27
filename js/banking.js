// __________________________________Get User Input Amount___________________________________
function getInputValue(inputId) {
    const inputFeild = document.getElementById(inputId);
    const inputAmount = parseFloat(inputFeild.value);
    // ________clear input______
    inputFeild.value = '';
    return inputAmount;
}
// __________________________________Add Toatl Deposit & Withdraw Amount____________________
function updateTotal(totalAmount, inputValue) {
    if (inputValue > 0) {
        const totalAmountFeild = document.getElementById(totalAmount);
        const currentAmount = parseFloat(totalAmountFeild.innerText) + inputValue;
        totalAmountFeild.innerText = currentAmount;
    }
}
// __________________________________Calculate Total Balance__________________________________
function updateTotalBalance(amount) {
    const totalbalance = document.getElementById('total-balance');
    if (Math.abs(amount) > 0) {
        totalbalance.innerText = parseFloat(totalbalance.innerText) + amount;
    }

}
// __________________________________Handle Deposit Button____________________________________
document.getElementById('btn-deposite').addEventListener('click', function () {
    const depositeInput = getInputValue('deposite-input'); 
    updateTotal('total-deposite', depositeInput);
    updateTotalBalance(depositeInput);
})

// _________________________________Handle Withdraw Button____________________________________
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawInput = getInputValue('withdraw-input');
    updateTotal('total-withdraw', withdrawInput);
    updateTotalBalance(-withdrawInput);

})