export function displayNumber (userInput) {
    const currentNumber = document.querySelector("#current__operations")
    currentNumber.value = userInput //aquí estoy escribiendo en value
}

export function initDisplayOperations () {
    displayNumber("");
}