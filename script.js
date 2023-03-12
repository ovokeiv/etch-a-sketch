const gridContainer = document.querySelector('#container');
//const sqr = document.querySelectorAll('.square');
const choiceButton = document.querySelector('.choice')
const clearButton = document.querySelector('.clear')
const boxStyle = document.querySelector('.box');

const createBoxes = (gridSize) => {
    let r = gridSize * gridSize
    for (let i = 0; i < r; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        gridContainer.appendChild(div)
    }
}

//creates a 16 x 16 boxes on load and also turns them into grids
window.onload = function () {
    createBoxes(16);
    makeBoxesIntoGrid(16);
};

//lets user pick their grid size
let gridChoice = () => {
    gridSize = prompt('How many boxes per side?, 100 is the max!');
    if (gridSize > 100) {
        alert('Value must not be greater than 100!');
        return;
    } else {
        clearGrid();
        createBoxes(gridSize);
        makeBoxesIntoGrid(gridSize);
    }
};

//restores the boxes background color to white
let clearColor = () => {
    let clearAll = gridContainer.querySelectorAll('div')
    clearAll.forEach(pixel => pixel.style.backgroundColor = '#ffffff')
};
//removes the boxes
function clearGrid() {
    let gridPixels = gridContainer.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
};

//turns the created boxes into grids
const makeBoxesIntoGrid = (gridSize) => {
    const boxStyle = document.querySelector('.box');
    boxStyle.style.gridTemplateColumns = `repeat(${gridSize}, 2fr)`;
    boxStyle.style["grid-template-rows"] = `repeat(${gridSize}, 2fr)`;
};

//leaves a randomly selected pixelated color when mouse mouse over the grid boxed
function changeColor(e) {
    function random(number) {
        return Math.floor(Math.random() * (number + 1));
    };

    const generateRandomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    e.target.style.backgroundColor = generateRandomColor;
}

//event listeners
gridContainer.addEventListener('mouseover', changeColor);
choiceButton.addEventListener('click', gridChoice);
clearButton.addEventListener('click', clearColor);