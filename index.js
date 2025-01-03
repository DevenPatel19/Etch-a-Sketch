const container = document.querySelector('.container');
const resetButton = document.getElementById('reset-button');
const newGridButton = document.getElementById('new-grid-button');

// Function to create the grid
function createGrid(squaresPerSide) {
    container.innerHTML = ''; // Clear existing grid
    const totalSquares = squaresPerSide * squaresPerSide;
    const squareSize = 960 / squaresPerSide;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Add hover effect to change color
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = '#333';
        });

        container.appendChild(square);
    }
}

// Reset button functionality
resetButton.addEventListener('click', () => {
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
});

// New grid button functionality
newGridButton.addEventListener('click', () => {
    let squaresPerSide = parseInt(prompt('Enter the number of squares per side (max 100):'), 10);

    if (squaresPerSide > 100) {
        alert('Please enter a number less than or equal to 100.');
        return;
    }

    if (!squaresPerSide || squaresPerSide <= 0) {
        alert('Please enter a valid number.');
        return;
    }

    createGrid(squaresPerSide);
});

// Initial grid
createGrid(16);
