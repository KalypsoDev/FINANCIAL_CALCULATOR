export function displayNumber (userInput) {
    const currentNumber = document.querySelector("#current__operations");
    currentNumber.value = userInput; //aquí estoy escribiendo en value
}

export function initDisplayOperations () {
    displayNumber("");
}

export function getScreenContent () {
    const currentNumber = document.querySelector("#current__operations");
    return currentNumber.value;
}