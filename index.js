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

        // Track the darkening level for each square
        let darkeningLevel = 0;

        // Add hover effect to change color and darken progressively
        square.addEventListener('mouseover', () => {
            if (darkeningLevel === 0) {
                // Randomize initial color
                const red = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256);
                const blue = Math.floor(Math.random() * 256);
                square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            }

            // Increase darkening level by 10% on each interaction
            darkeningLevel += 1;
            const currentColor = square.style.backgroundColor;
            square.style.backgroundColor = darkenColor(currentColor, darkeningLevel);
        });

        container.appendChild(square);
    }
}

// Function to progressively darken a color
function darkenColor(rgb, level) {
    // Extract RGB values
    const [r, g, b] = rgb.match(/\d+/g).map(Number);

    // Calculate the darkened color by reducing brightness by 10% each time
    const darkenFactor = 1 - level * 0.1;
    const newR = Math.floor(r * darkenFactor);
    const newG = Math.floor(g * darkenFactor);
    const newB = Math.floor(b * darkenFactor);

    r
