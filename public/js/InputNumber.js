let userInput = "";


function onclickNumber(event) {
    event.stopPropagation();
    const button = event.target;
    const text__button = button.innerText.trim();
    userInput += text__button;
    userInput = parseInt(userInput);
    // console.log(userInput);
}

export function initInputNumber () {
    const number__buttons = document.querySelectorAll(".number");

    for (const button of number__buttons) {
        button.addEventListener("click", onclickNumber);
    }
}

export function getUserInput() {
    return userInput
}

export function resetUserInput () {
    userInput ="";
}

