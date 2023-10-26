const gridContainer = document.getElementById('grid-container');

const createGrid = (gridSize) => {
    for (let i = 0; i < gridSize ** 2; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        gridContainer.appendChild(gridCell);

        gridCell.addEventListener('mouseenter', () => {
            gridCell.classList.add('grid-cell-active')
        })

        gridCell.addEventListener('mouseleave', () => {
            gridCell.classList.remove('grid-cell-active');
        })
    }
}

createGrid(16);

gridCell.addEventListener('mouseenter', () => {
    gridCell.style.backgroundColor = 'yellow';
})

gridCell.addEventListener('mouseleave', () => {
    gridCell.style.backgroundColor = 'red';
})