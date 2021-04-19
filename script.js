const gridContainer = document.getElementById('gridContainer');
let gridCell = '';

let colors = ['red', 'green', 'blue', 'purple', 'orange', 'yellow', 'violet', 'pink'];

const gridArea = 554;
let gridSize = 16;
let minGridSize = 4;
let maxGridSize = 100;

const customGridbutton = document.getElementById('customGridButton');
    customGridbutton.addEventListener('click', popUpDisplay);
const popUp = document.getElementById('popUp');
const exitPopUpButton = document.getElementById('exitButton');
    exitPopUpButton.addEventListener('click', popUpDisplayExit);
const newGridInput = document.getElementById('newGrid');
const generateButton = document.getElementById('submitButton');
    generateButton.addEventListener('click', customInputs);

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
    popUpDisplayExit()
}

function createGrid(gridSize) {
    let totalCells = gridSize * gridSize;
    let gridMath = gridArea / totalCells;

    console.log(totalCells)
    for (i = 0; i < totalCells; i++) {
        gridCell = document.createElement('div');
        gridCell.classList.add('gridCell');
        gridCell.style.width = 35 + 'px';
        gridCell.style.height = 35 + 'px';
        gridContainer.appendChild(gridCell);
    
        gridCell.addEventListener('mouseover', function(e) {
            const colorChoice = Math.floor(Math.random() * colors.length);
            e.target.style.backgroundColor = colors[colorChoice];
    
            setTimeout(function(){
                e.target.style.backgroundColor = '';
            }, 400);
        })
    }
}

createGrid(gridSize)