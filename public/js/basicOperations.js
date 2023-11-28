import { displayNumber, displayOperation, getScreenContent } from "./displayOperations.js";
import { getUserInput, resetUserInput, setUserInput } from "./InputNumber.js";
import { state } from "./state.js";


function calculate(buttonId) {
    let currentValue = state.workingMemory;

    switch (buttonId) {
        case null:
            currentValue = getUserInput(0);
            break;
        case "plus__sign": {
            const operand = getUserInput(0)
            displayOperation(`${currentValue} + ${operand}`)
            currentValue += operand;
            break;
        }
        case "minus__sign": {
            const operand = getUserInput(0);
            displayOperation(`${currentValue} - ${operand}`)
            currentValue -= operand
            break;
        }
        case "multiplier__sign": {
            const operand = getUserInput(1);
            displayOperation(`${currentValue} * ${operand}`)
            currentValue *= operand
            break;
        }
        case "divisor__sign": {
            const operand = getUserInput(1);
            displayOperation(`${currentValue} / ${operand}`)
            currentValue /= operand
            break;
        }
    }

    resetUserInput();

    state.workingMemory = currentValue;
}

function onClickBasicOperations(event) {
    event.stopPropagation();
    const button = event.target;
    const buttonId = button.id;

    if (getUserInput() === undefined) { 
        setUserInput(getScreenContent());
    }

    calculate(state.lastOperator)

    displayNumber(state.workingMemory)

    if (buttonId !== "equality__sign") {
        state.lastOperator = buttonId;
    } else {
        state.lastOperator = null;
        state.workingMemory = 0;
    }
}

export function initBasicOperations () {
    const operation__buttons = document.querySelectorAll(".basic__operation");

    for (const button of operation__buttons) {
        button.addEventListener("click", onClickBasicOperations);
    }
}
