function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}
function getElementFieldValueById(elementId) {
    const elementField = document.getElementById(elementId);
    const elementFieldValue = parseFloat(elementField.innerText);
    return elementFieldValue;
}
function setTextElementValue(elementId, newValue) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = newValue;
}