import { initInputNumber } from "./InputNumber.js";
import { initFunctionInProgress } from "./functionInProgress.js";
import { initBasicOperations } from "./basicOperations.js";
import { initDisplayOperations } from "./displayOperations.js";

document.addEventListener("DOMContentLoaded", () => {
    initInputNumber();
    initFunctionInProgress();
    initBasicOperations();
    initDisplayOperations();
});
