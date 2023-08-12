const numberInput = document.getElementById('numberInput');
const progressBar = document.getElementById('slider');

function fillProgressBar(percentage) {
  progressBar.style.value = `${percentage}%`;
  progressBar.value = `${percentage}%`;
}

function startFilling(progress) {
  if (progress <= 100) {
    fillProgressBar(progress);
    setTimeout(() => startFilling(progress + 2), 2000);
  }
}

numberInput.addEventListener('input', () => {
  let value = parseInt(numberInput.value, 10);
  if (value % 2 !== 0) {
    value += 1;
  }
  value = Math.min(value, 100); // Ensure the value doesn't exceed 100
  fillProgressBar(0);
  setTimeout(() => startFilling(2), 2000);
});
