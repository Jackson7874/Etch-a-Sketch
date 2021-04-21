const gridContainer = document.getElementById('gridContainer');

const originalGridSize = 16;
const minGridSize = 4;
const maxGridSize = 100;

const clearGridButton = document.getElementsById('clearButton')
const customGridbutton = document.getElementById('customGridButton');
    customGridbutton.addEventListener('click', popUpDisplay);
const popUp = document.getElementById('popUp');
const exitPopUpButton = document.getElementById('exitButton');
    exitPopUpButton.addEventListener('click', popUpDisplayExit);
const newGridInput = document.getElementById('newGrid');
const generateButton = document.getElementById('submitButton');
    generateButton.addEventListener('click', createNewGrid);

function popUpDisplay() {
    popUp.style.display = 'block';
}

function popUpDisplayExit() {
    popUp.style.display = 'none';
}

function customInputs() {
    gridSize = newGridInput.value;
    if (gridSize == '') {
        gridSize = 16;
    } else if (gridSize < 4) {
        gridSize = minGridSize;
    } else if (gridSize > 100) {
        gridSize = maxGridSize;
    } else {
        gridSize = newGridInput.value;
    }

    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    popUpDisplayExit()
}

window.addEventListener('load', createDefaultGrid);

function createDefaultGrid() {
    defaultGridSize(originalGridSize);
    createGridCells(originalGridSize);
}

function defaultGridSize(gridSize) {
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
}

function rainbow(e) {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
}

function createGridCells(gridSize) {
    for (i = 0; i < gridSize * gridSize; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList = 'gridCell';
        gridCell.setAttribute('id','gridCell')
        gridCell.addEventListener('mouseover', rainbow);
        gridContainer.appendChild(gridCell);

        if (gridSize >= 90) {
            gridCell.style.borderWidth = '0.1px'
        } else if (gridSize >= 70) {
            gridCell.style.borderWidth = '0.25px'
        } else if (gridSize >= 40) {
            gridCell.style.borderWidth = '0.5px'
        } else {
            gridCell.style.borderWidth = '1px'
        }
    }
}

function clearGrid() {
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
      gridContainer.removeChild(element);
    });
}

function createNewGrid() {
    customInputs()
    clearGrid()
    createGridCells(gridSize)
}