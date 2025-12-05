const gridContainer = document.getElementById("grid-container");
const numOfSquares = 16;

for (let i = 0; i < numOfSquares * numOfSquares; i++) {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  gridContainer.appendChild(gridItem);

  gridItem.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "black";
    event.target.style.border = "1px solid white";
  });

}



