// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

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
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}