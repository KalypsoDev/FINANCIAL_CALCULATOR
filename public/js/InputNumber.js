import { displayNumber } from "./currentOperations.js";

let userInput = "";

function onclickNumber(event) {
    event.stopPropagation();
    const button = event.target;
    const text__button = button.innerText.trim();
    userInput += text__button;    
    displayNumber(userInput) 
    //nos devuelve por pantalla una cadena de texto
}

export function initInputNumber () {
    const number__buttons = document.querySelectorAll(".number");

    for (const button of number__buttons) {
        button.addEventListener("click", onclickNumber);
    }
}

export function getUserInput () {
    return parseFloat(userInput) 
    //nos devuelve un float a partir del string del usuario
}

export function resetUserInput () {
    userInput ="";
}

