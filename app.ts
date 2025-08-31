const inputs = document.querySelectorAll(
  ".setting input"
) as NodeListOf<HTMLInputElement>;
const result = document.querySelector(".result") as HTMLElement;

function updateValue(e: Event) {
  const targetInput = e.target as HTMLInputElement;
  const targetValue = targetInput.value;

  if (targetInput.id === "size") {
    result.style.width = targetValue + "px";
    result.style.height = targetValue + "px";
  }

  if (targetInput.id === "color") {
    const JSText = document.querySelector(".JS") as HTMLSpanElement;
    result.style.backgroundColor = targetValue;
    JSText.style.color = targetValue;
  }

  if (targetInput.id === "blur") {
    result.style.filter = `blur(${targetValue}px)`;
  }
}


inputs.forEach((input) => input.addEventListener("input", updateValue));

