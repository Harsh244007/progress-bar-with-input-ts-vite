const numberInput = document.getElementById("numberInput");
const progressBar = document.getElementById("slider");
const progressBarText = document.getElementById("slider-text");

function fillProgressBar(percentage) {
  console.log(percentage);
  progressBar.value = `${percentage}`;
}
(function () {
  progressBarText.innerText = progressBar.value;
})();

progressBar.addEventListener("input", () => {
  progressBarText.innerText = progressBar.value;
});
function startFilling(progress, value) {
  if (progress <= value) {
    progressBarText.innerText = progress;
    fillProgressBar(progress);
    setTimeout(() => startFilling(progress + 2, value), 2000);
  }
}

numberInput.addEventListener("input", () => {
  let value = parseInt(numberInput.value, 10);
  if (value % 2 !== 0) {
    value += 1;
  }
  value = Math.min(value, 100);
  progressBar.max = `${value}`;
  progressBar.value = `0`;
  progressBarText.innerText = 0;
  setTimeout(() => startFilling(2, value), 2000);
});
