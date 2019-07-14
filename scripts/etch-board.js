//Etch-a-sketch 

//Generate button events
let buttonDrawNormal = document.querySelector("#button-drawmode-normal");
buttonDrawNormal.addEventListener("click", () => {drawMode = "normal"});

let buttonDrawRainbow = document.querySelector("#button-drawmode-rainbow");
buttonDrawRainbow.addEventListener("click", () => {drawMode = "rainbow"});

let buttonResize = document.querySelector("#button-resize");
buttonResize.addEventListener("click", () => resizeScreen());

let buttonReset = document.querySelector("#button-reset");
buttonReset.addEventListener("click", () => { clearScreen(etchGrid); } );


//Default initialization
let drawMode = "normal";

let squaresInRow = 50;
let etchWindow = document.querySelector(".etch-screen");

let etchGrid = generateDivArray(squaresInRow);

initializeEtchScreen(squaresInRow, etchWindow);
initializeEtchGrid(squaresInRow, etchGrid, etchWindow);


function generateDivArray(numberOfSquares) {
    let divArray = [];
    let area = numberOfSquares * numberOfSquares;

    for (let i = 0; i < area; i++) {
        divArray.push(document.createElement("DIV"));
    }

    return divArray;
}

function initializeEtchGrid(rowSquares, divArray, containingElement) {
    let divSize = calculateDivSize(rowSquares, containingElement);
    
    for (let i = 0; i < divArray.length; i++) {
        setDivSize(divArray[i], divSize);
        setClass(divArray[i], "etch-box");
        setDrawEventListener(divArray[i]);

        attachDivToContainer(divArray[i], containingElement);
    }  
}

function initializeEtchScreen(rowSquares, container) {
    let bounds = container.getBoundingClientRect();
    //+1 is a hack, helps maintain proper spacing LUL
    let boundsHeight = (bounds.height / rowSquares) + 1;
    console.log("huh" + boundsHeight);
    
    //gross
    container.setAttribute("style", 
    `
    display: grid;
    grid: repeat(${rowSquares}, ${boundsHeight}px) / repeat(${rowSquares}, ${boundsHeight}px);
    `);
}

function calculateDivSize(length, containingElement) {
    let rectangle = containingElement.getBoundingClientRect();
    console.log(rectangle.width);
    console.log(rectangle.width / length);
    return Math.floor(rectangle.width / length);
}

function setDivSize(divTarget, edgeLength) {
    let lengthString = edgeLength.toString();
    divTarget.style.height = `${lengthString}px`;
    divTarget.style.width = `${lengthString}px`;
}

function setClass(divTarget, className) {
    divTarget.setAttribute("class", className);
}

function setDrawEventListener(divTarget) {
    divTarget.addEventListener("mouseover", () => draw(divTarget));
}

function attachDivToContainer(divTarget, containingElement) {
    containingElement.appendChild(divTarget);
}

function clearScreen(divArray) {
    divArray.forEach((item) => item.style.backgroundColor = "transparent");
}

function resizeScreen() {
    let newSquareCount = prompt("Please enter a value of 50 squares or less.", "40");
    clearScreen(etchGrid);

    if (newSquareCount > 50) { newSquareCount = 50;}
    else if (newSquareCount < 5) { return; }

    squaresInRow = newSquareCount;
    for (let i = 0; i < etchGrid.length; i++) {
        etchWindow.removeChild(etchGrid[i]);
    }
    etchGrid = null;
    etchGrid = generateDivArray(squaresInRow);

    initializeEtchScreen(squaresInRow, etchWindow);
    initializeEtchGrid(squaresInRow, etchGrid, etchWindow);
}

function draw(divTarget) {
    let red = randomInt(256);
    let blue = randomInt(256);
    let green = randomInt(256);

    if (drawMode === "normal") {
        divTarget.style.backgroundColor = "black";
    }
    else if (drawMode === "rainbow"){
        divTarget.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
    }
}


function randomInt(maxExclusive) {
    return Math.floor(Math.random() * maxExclusive);
}


    //attach it to a screen container


    //========================================

    //For the div list, assign a class for styling
    //and any other general style information

    //========================================

    //For the div list, calculate size based on
    //the container size for width and height
    //Formula: SquareLen = ContainerLen / NumberOfSquares

    //========================================

    //Add event listeners for every div to check for mouse overlap
    //if detected, call either a color or randColor function
    //depending on script state

    //========================================

