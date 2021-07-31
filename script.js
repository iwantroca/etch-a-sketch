let divList = [];
let newColor;
let gridNum;
let div;

const canvas = document.querySelector("#canvas");
const resetBtn = document.querySelector("#reset-btn");
const colorSetter = document.querySelector("#color-setter");

function gridSetup() {
  gridNum = parseInt(prompt("Enter the grid rows"));
  canvas.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
  canvas.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
  return gridNum;
}
function createGrid() {
  for (let i = 0; i < gridNum * gridNum; i++) {
    div = document.createElement("div");
    div.classList.add("grid-items");
    divList.push(div);
  }
}
function colorChanger() {
  newColor = colorSetter.value;
  return newColor;
}
function resetCanvas() {
  divList.forEach((div) => (div.style.backgroundColor = "white"));
}

gridSetup();
createGrid();

divList.forEach((div) => canvas.appendChild(div));

const gridItems = document.querySelectorAll(".grid-items");

colorSetter.addEventListener("mouseleave", (e) => colorChanger());

gridItems.forEach((item) =>
  item.addEventListener(
    "mouseenter",
    (e) => (e.target.style.background = newColor ?? "black")
  )
);

resetBtn.addEventListener("click", () => {
  resetCanvas();
  gridSetup();
});
