// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;
let colorInitial = "White";

// Add a row
function addR() {
    // alert("Clicked Add Row");
    let tr = document.createElement("tr");
    tr.setAttribute("id", "row"+numRows);
    document.getElementById("grid").appendChild(tr);

    if(numCols == 0){
        numCols++;
    }

    for(let i = 0; i < numCols; i++){
        let td = document.createElement("td");
        td.setAttribute("id", "col"+i);
        document.getElementById("row"+numRows).appendChild(td);
    }

    numRows++;

}



// Add a column
function addC() {
    // alert("Clicked Add Col");
    if(numRows == 0){
        addR();
        
    }
    else{
        for(let i = 0; i < numRows; i++){
            let td = document.createElement("td");
            td.setAttribute("id", "col"+numCols);
            document.getElementById("row"+i).appendChild(td);
        }

        numCols++;
    }

}



// Remove a row
function removeR() {
    // alert("Clicked Remove Row");

    if(numRows > 0){
        let table = document.getElementById("grid");
        let trLast = table.lastElementChild;
        table.removeChild(trLast);
        
        numRows--;
    }
    else{
        alert("No rows to remove!");
    }


}

// Remove a column
function removeC() {
    // alert("Clicked Remove Col");

    if(numCols > 0){
        for(let i = 0; i < numRows; i++){
            let tr = document.getElementById("row"+i);
            let tdLast = tr.lastElementChild;
            tr.removeChild(tdLast);
        }

        numCols--;
    }
    else{
        alert("No columns to remove!");
    }
}



// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    // alert("Clicked Fill All Uncolored");
    for(let i = 0; i < numRows; i++){
        for(let c = 0; c < numCols; c++){
            let td = document.getElementById("row"+i).children[c];
            if(td.style.backgroundColor == ''){
                td.style.backgroundColor = colorSelected;
            }
        }
    }
}

// Fill all cells
function fillAll(){
    // alert("Clicked Fill All");
    for(let i = 0; i < numRows; i++){
        for(let c = 0; c < numCols; c++){
            let td = document.getElementById("row"+i).children[c];
            td.style.backgroundColor = colorSelected;
        }
    }
}



// Clear all cells
function clearAll(){
    // alert("Clicked Clear All");
    for(let i = 0; i < numRows; i++){
        for(let c = 0; c < numCols; c++){
            let td = document.getElementById("row"+i).children[c];
            td.style.removeProperty("background-color");
        }   
    }

}