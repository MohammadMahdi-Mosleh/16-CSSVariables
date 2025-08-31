"use strict";
const inputs = document.querySelectorAll(".setting input");
const result = document.querySelector(".result");
function updateValue(e) {
    const targetInput = e.target;
    const targetValue = targetInput.value;
    if (targetInput.id === "size") {
        result.style.width = targetValue + "px";
        result.style.height = targetValue + "px";
    }
    if (targetInput.id === "color") {
        const JSText = document.querySelector(".JS");
        result.style.backgroundColor = targetValue;
        JSText.style.color = targetValue;
    }
    if (targetInput.id === "blur") {
        result.style.filter = `blur(${targetValue}px)`;
    }
}
inputs.forEach((input) => input.addEventListener("input", updateValue));
