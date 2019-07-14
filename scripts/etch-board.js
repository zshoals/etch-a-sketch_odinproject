//Etch-a-sketch steps
    
//Generate a list of divs and store it
//In some sort of array

function generateDivArray(numberOfSquares) {
    for (let i = 0; i < numberOfSquares; i++) {
        let divArray = [];
        divArray.push(document.createElement("DIV"));

        return divArray;
    }
}

function initializeDivArray(divArray, containingElement) {
    for (let i = 0; i < divArray.length; i++){
        setDivSize(divArray[i], containingElement);
        setClassName(divArray[i], "etch-box");
    }
    
    //huh?
    //divArray.foreach(setDivSize(divTarget, containingElement));
    //divArray.foreach(setClass(divTarget));
}

function setDivSize(divTarget, containingElement) {
    //Set the size of each div based on screen size
}

function setClass(divTarget, className){
    //set a class for a respective divtarget with a
    //respective class name
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