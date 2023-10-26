const gridContainer = document.getElementById('grid-container');

const createGrid = (gridSize) => {
    for (let i = 0; i < gridSize ** 2; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        gridContainer.appendChild(gridCell);
    }
}

createGrid(16);
