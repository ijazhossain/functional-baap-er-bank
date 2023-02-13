
document.getElementById('deposit-btn').addEventListener('click', function () {
    const previousDeposit = getElementFieldValueById('deposit-amount');
    const currentDeposit = getInputValueById('deposit-field');
    if (isNaN(currentDeposit)) {
        alert('Enter deposit amount');
        return;
    }
    if (currentDeposit < 0) {
        alert('Deposit amount can not be negative value');
        return;
    }
    const totalDeposit = previousDeposit + currentDeposit;
    setTextElementValue('deposit-amount', totalDeposit);
    const availableBalance = getElementFieldValueById('total-amount');
    const newTotalBalance = availableBalance + currentDeposit;
    setTextElementValue('total-amount', newTotalBalance);
})