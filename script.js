// Function to create the grid squares
function createGrid(size) {
  const container = document.getElementById('container');

  // Clear the container
  container.innerHTML = '';

  // Calculate the square size
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    container.appendChild(square);
  }
}

// Function to handle the hover effect
function hoverEffect(e) {
  e.target.style.backgroundColor = '#000';
}

// Function to reset the grid
function resetGrid() {
  const newSize = parseInt(prompt('Enter the number of squares per side (1-100):'), 10);

  if (newSize >= 1 && newSize <= 100) {
    createGrid(newSize);
    addHoverListeners();
  } else {
    alert('Invalid input. Please enter a number between 1 and 100.');
  }
}

// Function to add hover listeners to the grid squares
function addHoverListeners() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.addEventListener('mouseover', hoverEffect);
  });
}

// Initial grid creation
createGrid(16);
addHoverListeners();

// Reset button event listener
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetGrid);
