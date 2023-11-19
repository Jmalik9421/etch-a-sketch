const gridSizeBtn = document.getElementById('grid-size-btn')
const gridContainer = document.getElementById('grid-container');

gridSizeBtn.addEventListener('click', sizeGrid => {
    const size = prompt('Enter grid size: ');
    createGrid(size);
})

const createGrid = (gridSize) => {
    // clear existing grid
    gridContainer.innerHTML = '';

    for (let i = 0; i < gridSize ** 2; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        gridContainer.appendChild(gridCell);

        pixelate(gridCell);
    }
}

const pixelate = (cell) => {
    cell.addEventListener('mouseenter', () => {
        cell.classList.add('grid-cell-active')
    })

    cell.addEventListener('mouseleave', () => {
        cell.classList.remove('grid-cell-active');
    })
}
