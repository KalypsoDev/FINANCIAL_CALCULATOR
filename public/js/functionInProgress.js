function functionInProgress(event) {
    if (event.target.tagName == "BUTTON") {
        alert("Function in progress")
    }
}

export function initFunctionInProgress () {
    const calculator__buttons = document.querySelector("#calculator__buttons");
    calculator__buttons.addEventListener("click", functionInProgress)
}
