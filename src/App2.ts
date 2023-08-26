const numberInput2 = document.getElementById("numberInput") as HTMLInputElement;
const progressBar3 = document.getElementById("slider") as HTMLInputElement;
const progressBarText2 = document.getElementById("slider-text") as HTMLSpanElement;

function fillProgressBar2(percentage: number) {
  progressBar.value = percentage.toString();
}

function startFilling2(progress: number, value: number) {
  if (progress <= value) {
    progressBarText.innerText = progress.toString();
    fillProgressBar(progress);
    setTimeout(() => startFilling(progress + 2, value), 2000);
  }
}

function handleNumberInputChange2() {
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
