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

function onClickToggleSign(event) {
    event.stopPropagation();
    if (userInput.length === 0) {
        return; //sale sin hacer nada
    }
    if (userInput[0] === '-') {
        userInput.replace("-",""); //quitar el signo -
    } else {
        userInput = `-${userInput}`; //añadir el signo -
    }

    displayNumber(userInput);
}

export function initInputNumber () {
    const number__buttons = document.querySelectorAll(".number");

    for (const button of number__buttons) {
        button.addEventListener("click", onclickNumber);
    }

    document.getElementById('positive__negative').addEventListener('click', onClickToggleSign);
}

export function getUserInput () {
    return parseFloat(userInput) 
    //nos devuelve un float a partir del string del usuario
}

export function resetUserInput () {
    userInput ="";
}

