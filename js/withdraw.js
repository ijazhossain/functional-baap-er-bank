document.getElementById('withdraw-btn').addEventListener('click', function () {
    const previousWithdraw = getElementFieldValueById('withdraw-amount');
    const currentWithdraw = getInputValueById('withdraw-field');
    const totalWithdraw = previousWithdraw + currentWithdraw;
    setTextElementValue('withdraw-amount', totalWithdraw);
    if (isNaN(currentWithdraw)) {
        alert('Enter withdraw amount');
        return;
    }
    if (currentWithdraw < 0) {
        alert('withdraw amount can not be negative value');
        return;
    }

    const availableBalance = getElementFieldValueById('total-amount');
    const newTotalBalance = availableBalance - currentWithdraw;
    setTextElementValue('total-amount', newTotalBalance);
})