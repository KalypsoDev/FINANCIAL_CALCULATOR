export function displayNumber (userInput) {
    const currentNumber = document.querySelector("#current__operations");
    currentNumber.value = userInput;
}

export function displayOperation (userInput) {
    const currentNumber = document.querySelector("#previous__operations");
    currentNumber.value = userInput;
}

export function initDisplayOperations () {
    displayNumber("");
    displayOperation('');
}

export function getScreenContent () {
    const currentNumber = document.querySelector("#current__operations");
    return currentNumber.value;
}