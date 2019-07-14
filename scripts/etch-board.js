//Etch-a-sketch steps
    
//Generate a list of divs and store it
//In some sort of array

let squaresInRow = 50;
let etchWindow = document.querySelector(".etch-screen");
let etchGrid = generateDivArray(squaresInRow);

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

    let divSize = calculateDivSize(divArray.length, containingElement);
    
    for (let i = 0; i < divArray.length; i++) {
        setDivSize(divArray[i], divSize);
        setClass(divArray[i], "etch-box");
        setDrawEventListener(divArray[i]);

        attachDivToContainer(divArray[i], containingElement);
    }  
}

function calculateDivSize(length, containingElement) {
    let rectangle = containingElement.getBoundingClientRect();
    return rectangle.width / length;
}

function setDivSize(divTarget, edgeLength) {
    let lengthString = edgeLength.toString();
    divTarget.style.height = `${lengthString}px`;
    console.log(divTarget.style.height);
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

function draw(divTarget) {
    divTarget.style.backgroundColor = "black";
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

