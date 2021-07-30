const canvas = document.querySelector("#canvas");
let divList = [];
// create divs;
// take input and form that many divs
// add coloring methods
for (let i = 0; i < 1350; i++) {
  let div = document.createElement("div");
  div.classList.add("items");
  div.textContent = "1";
  divList.push(div);
}
divList.forEach((div) => canvas.appendChild(div));
