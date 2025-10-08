// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let grid = document.getElementById("grid");
    let row = grid.insertRow(numRows);
    if (numCols === 0) {
        let cell = row.insertCell(0);
        cell.onclick = function(){
            this.style.backgroundColor = colorSelected;
        };
        numCols++;
    }
    else{
        for (let i = 0; i < numCols; i++) {
            let cell = row.insertCell(i);
            cell.onclick = function(){
                this.style.backgroundColor = colorSelected;
            };
        }
    }
    numRows++;
}

// Add a column
function addC() {
    let rows = document.getElementsByTagName("tr");
    if(rows.length === 0){
        addR();
        return;
    }
    for (let i = 0; i < numRows; i++) {
        let cell = rows[i].insertCell(numCols);
        cell.onclick = function(){
            this.style.backgroundColor = colorSelected;
        };
    }
    numCols++;
}

// Remove a row
function removeR() {
    if(numRows === 0) return;
    let grid = document.getElementById("grid");
    grid.deleteRow(numRows-1);
    numRows--;
    if(numRows === 0){
        numCols = 0;
    }
}

// Remove a column
function removeC() {
    if(numCols === 0) return;
    let rows = document.getElementsByTagName("tr");
    for (let i = 0; i < numRows; i++) {
        rows[i].deleteCell(numCols-1);
    }
    numCols--;
    if(numCols === 0){
        let grid = document.getElementById("grid");
        grid.innerHTML = "";
        numRows = 0;
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].style.backgroundColor === "" || cells[i].style.backgroundColor === "white") {
            cells[i].style.backgroundColor = colorSelected;
        }
    }
}

// Fill all cells
function fillAll(){
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = colorSelected;
    }
}

// Clear all cells
function clearAll(){
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "white";
    }
}
