import { displayNumber } from "./displayOperations.js";
import { getUserInput, resetUserInput } from "./InputNumber.js";

const state = {
    workingMemory: 0,
    userMemory: 0,
    lastOperation: null
}

function calculate(buttonId) {
    let currentValue = state.workingMemory;
    switch (buttonId) {
        case null: //cuando no hay operación anterior
            currentValue = getUserInput(0);
            break;
        case "plus__sign":
            currentValue += getUserInput(0);
            break;
        case "minus__sign":
            currentValue -= getUserInput(0);            
            break;
        case "multiplier__sign":
            currentValue *= getUserInput(1);      
            break;
        case "divisor__sign":
            currentValue /= getUserInput(1);            
            break;
    }

    resetUserInput();

    state.workingMemory = currentValue;
}

function onClickBasicOperations(event) {
    event.stopPropagation();
    const button = event.target;
    const buttonId = button.id;


    calculate(state.lastOperation)

    displayNumber(state.workingMemory)
    if (buttonId !== "equality__sign") {
        state.lastOperation = buttonId;
    } else {
        state.lastOperation = null;
        state.workingMemory = 0;
    }
}

export function initBasicOperations () {
    const operation__buttons = document.querySelectorAll(".basic__operation");

    for (const button of operation__buttons) {
        button.addEventListener("click", onClickBasicOperations);
    }
}
