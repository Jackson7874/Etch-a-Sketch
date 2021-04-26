const gridContainer = document.getElementById('gridContainer');

let originalGridSize = 16;
const minGridSize = 4;
const maxGridSize = 100;
const boxes = 4;

const clearGridButton = document.getElementById('clearButton');
    clearGridButton.addEventListener('click', createDefaultGrid);
const customGridbutton = document.getElementById('customGridButton');
    customGridbutton.addEventListener('click', popUpDisplay);
const popUp = document.getElementById('popUp');
const exitPopUpButton = document.getElementById('exitButton');
    exitPopUpButton.addEventListener('click', popUpDisplayExit);
const newGridInput = document.getElementById('newGrid');
const generateButton = document.getElementById('submitButton');
    generateButton.addEventListener('click', createNewGrid);

const settingsBar = document.getElementById('settingsBar');
const checkBox = document.getElementById('box1');
    checkBox.checked = true;
const rainbow = document.getElementById('box2');
    rainbow.checked = true;
const color = document.getElementById('box3');
const colorPicker = document.getElementById('colorPicker');
const black = document.getElementById('box4');
const eraser = document.getElementById('box5');

window.addEventListener('load', createDefaultGrid);

function createDefaultGrid() {
    clearGrid();
    defaultGridSize(originalGridSize);
    createGridCells(originalGridSize);
}

function clearGrid() {
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
      gridContainer.removeChild(element);
    });
}

function defaultGridSize(gridSize) {
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
}

function createGridCells(gridSize) {
    for (i = 0; i < gridSize * gridSize; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList = 'gridCell';
        gridCell.setAttribute('id','gridCell')
        gridCell.addEventListener('mouseover', draw);
        gridContainer.appendChild(gridCell);
        originalGridSize = gridSize;
    }
}

function createNewGrid() {
    customInputs()
    clearGrid()
    createGridCells(gridSize)
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

function popUpDisplay() {
    popUp.style.display = 'block';
}

function popUpDisplayExit() {
    popUp.style.display = 'none';
}

function draw(e) {
    if (checkBox.checked == true) {
        if (rainbow.checked == true) {
            const R = Math.floor(Math.random() * 256);
            const G = Math.floor(Math.random() * 256);
            const B = Math.floor(Math.random() * 256);
            e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
        } else if (color.checked == true) {
            let colorChoice = colorPicker.value;
            e.target.style.backgroundColor = colorChoice;
        } else if (black.checked == true) {
            e.target.style.backgroundColor = `rgb(0, 0, 0)`;
        } else if (eraser.checked == true) {
            e.target.style.backgroundColor = `white`;
        } else {
            rainbow.checked = true
        }
    } else {
        return
    }
}