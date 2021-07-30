const canvas = document.querySelector("#canvas");
let divList = [];
// create divs; X
// take input and form that many divs X
// add correct size to each div to keep them responsive
// add coloring methods

let gridNum = parseInt(prompt("Enter the grid rows"));
canvas.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
canvas.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;

for (let i = 0; i < gridNum * gridNum; i++) {
  let div = document.createElement("div");
  div.classList.add("grid-items");
  divList.push(div);
}
divList.forEach((div) => canvas.appendChild(div));
