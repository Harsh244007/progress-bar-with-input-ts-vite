const numberInput = document.getElementById("numberInput") as HTMLInputElement;
const progressBar = document.getElementById("slider") as HTMLInputElement;
const progressBarText = document.getElementById("slider-text") as HTMLSpanElement;

function fillProgressBar(percentage: number) {
  progressBar.value = percentage.toString();
}

function startFilling(progress: number, value: number) {
  if (progress <= value) {
    progressBarText.innerText = progress.toString();
    fillProgressBar(progress);
    setTimeout(() => startFilling(progress + 2, value), 2000);
  }
}

function handleNumberInputChange() {
  let value = parseInt(numberInput.value, 10);
  if (value % 2 !== 0) {
    value += 1;
  }
  value = Math.min(value, 100);
  progressBar.max = value.toString();
  progressBar.value = "0";
  progressBarText.innerText = "0";
  setTimeout(() => startFilling(2, value), 2000);
}

numberInput.addEventListener("input", handleNumberInputChange);
