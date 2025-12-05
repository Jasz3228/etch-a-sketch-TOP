const gridContainer = document.getElementById("grid-container");
const resizeButton = document.getElementById("btn");
let numOfSquares = 16;

function createGrid(size) {
  // Clear the existing grid
  gridContainer.innerHTML = "";

  // Square size
  const squareSize = 500 / size;


  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.style.width = `${squareSize}px`;
    gridItem.style.height = `${squareSize}px`;
    
    // Add hover effect
    gridItem.addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = "black";
      event.target.style.border = "1px solid white";
    });

    gridContainer.appendChild(gridItem);
  }
}

// Button click handler
resizeButton.addEventListener("click", () => {
  let newSize = prompt("Enter number of squares per side (Max 100):");
  newSize = parseInt(newSize)

  if (newSize && newSize > 0 &&  newSize <= 100) {
    numOfSquares = newSize;
    createGrid(numOfSquares);
  } else {
    alert("Please enter a valid number between 1 and 100");
  }
});
  
createGrid(numOfSquares);


