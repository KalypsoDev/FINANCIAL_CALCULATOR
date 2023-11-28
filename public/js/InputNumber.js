import { displayNumber, displayOperation, getScreenContent } from "./displayOperations.js";
import { state } from "./state.js";

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
    if (userInput === '') {
        userInput = getScreenContent();
        if (userInput === '') { //si no hay nada en la pantalla
            return; //sale sin hacer nada
        }
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

function onClickClearAll (event) {
    event.stopPropagation();
    userInput = ""; //limpio el input del usuario
    displayNumber(""); //limpio screen
    displayOperation(""); //limpio el historial
    state.workingMemory = 0; //limpio memoria de trabajo
    state.lastOperator = null; //limpio el último operador
}

function onClickDelete (event) {
    event.stopPropagation();
    userInput = userInput.substring(0, userInput.length - 1);
    displayNumber(userInput);
}

export function initInputNumber () { //inicializa todos los eventos de la botonera con for o getElement
    const number__buttons = document.querySelectorAll(".number");

    for (const button of number__buttons) {
        button.addEventListener("click", onclickNumber);
    }

    document.getElementById('positive__negative').addEventListener('click', onClickToggleSign);
    document.getElementById('point').addEventListener('click', onClickPoint);
    document.getElementById('clear__all').addEventListener('click', onClickClearAll);
    document.getElementById('delete').addEventListener('click', onClickDelete);

}

export function getUserInput (neutralElement) {
    if (userInput === '') { //si no mete nada, devuelve elemento neutral
        return neutralElement;
    }
    return parseFloat(userInput);
    //nos devuelve un float a partir del string del usuario
}

export function resetUserInput () {
    userInput ="";
}

export function setUserInput (value) {
    userInput = value;
}