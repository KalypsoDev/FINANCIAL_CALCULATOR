import { initFunctionInProgress } from "./functionInProgress.js";
import { initInputNumber } from "./InputNumber.js";
import { initBasicOperations } from "./basicOperations.js";
import { initDisplayOperations } from "./displayOperations.js";


document.addEventListener("DOMContentLoaded", () => {
    initFunctionInProgress();
    initInputNumber();
    initBasicOperations();
    initDisplayOperations();
});
