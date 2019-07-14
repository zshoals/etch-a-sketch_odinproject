//Etch-a-sketch steps
    
//Generate a list of divs and store it
//In some sort of array

let etchWindow = document.querySelector("etch-screen");
let etchGrid = generateDivArray(40);

initializeDivArray(etchGrid, etchWindow);


function generateDivArray(numberOfSquares) {
    for (let i = 0; i < numberOfSquares; i++) {
        let divArray = [];
        divArray.push(document.createElement("DIV"));

        return divArray;
    }
}

function initializeDivArray(divArray, containingElement) {
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
    return rectangle.length / length;
}

function setDivSize(divTarget, edgeLength) {
    divTarget.setAttribute("height", edgeLength);
    divTarget.setAttribute("width", edgeLength);
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
    divTarget.setAttribute("background-color", "black");
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

}