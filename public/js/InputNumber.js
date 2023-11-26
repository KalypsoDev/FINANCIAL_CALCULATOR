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
        userInput = userInput.replace("-",""); //quitar el signo -
    } else {
        userInput = `-${userInput}`; //añadir el signo -
    }

    displayNumber(userInput);
}

function onClickPoint(event) {
    event.stopPropagation();
    if (userInput.length === 0 || userInput.includes(".")) {
        return; //sale sin hacer nada
    }
    userInput = `${userInput}.`;

    displayNumber(userInput);
}


export function initInputNumber () { //inicializa todos los eventos de la botonera con for o getElement
    const number__buttons = document.querySelectorAll(".number");

    for (const button of number__buttons) {
        button.addEventListener("click", onclickNumber);
    }

    document.getElementById('positive__negative').addEventListener('click', onClickToggleSign);
    document.getElementById('point').addEventListener('click', onClickPoint);
}

export function getUserInput () {
    return parseFloat(userInput) 
    //nos devuelve un float a partir del string del usuario
}

export function resetUserInput () {
    userInput ="";
}

