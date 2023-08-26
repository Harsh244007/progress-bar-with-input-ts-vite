import "./style.css";

const appDiv = document.getElementById("app");
appDiv!.innerHTML = `
  <h2>
    Give any number to this input. It should be greater than 0 and less than 100.
  </h2>
  <input
    type="number"
    id="numberInput"
    min="1"
    max="100"
    step="2"
    value="0"
  />
  <div id="progress-bar"></div>
  <input
    type="range"
    id="slider"
    step="2"
    defaultValue="0"
  />
  <p>
    Progress Bar Value : <span id="slider-text">0</span>
  </p>
  <h2>See the output above</h2>
`;
