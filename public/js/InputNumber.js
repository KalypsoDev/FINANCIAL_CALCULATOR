import { displayNumber, displayOperation, getScreenContent } from "./displayOperations.js";
import { state } from "./state.js";

let userInput = "";

function onclickNumber(event) {
    event.stopPropagation();
    const button = event.target;
    const text__button = button.innerText.trim();
    userInput += text__button;    
    displayNumber(userInput) 
}

function onClickToggleSign(event) {
    event.stopPropagation();
    if (userInput === '') {
        userInput = getScreenContent();
        if (userInput === '') { 
            return;
        }
    }
    if (userInput[0] === '-') {
        userInput = userInput.replace("-",""); 
    } else {
        userInput = `-${userInput}`; 
    }

    displayNumber(userInput);
}

function onClickPoint(event) {
    event.stopPropagation();
    if (userInput.length === 0 || userInput.includes(".")) {
        return; 
    }
    userInput = `${userInput}.`;

    displayNumber(userInput);
}

function onClickClearAll (event) {
    event.stopPropagation();
    userInput = ""; 
    displayNumber(""); 
    displayOperation(""); 
    state.workingMemory = 0; 
    state.lastOperator = null; 
}

function onClickDelete (event) {
    event.stopPropagation();
    userInput = userInput.substring(0, userInput.length - 1);
    displayNumber(userInput);
}

export function initInputNumber () { 
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
    if (userInput === '') { 
        return neutralElement;
    }
    return parseFloat(userInput);
}

export function resetUserInput () {
    userInput ="";
}

export function setUserInput (value) {
    userInput = value;
}