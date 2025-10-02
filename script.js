// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    const table = document.getElementById("grid"); // 获取表格
    const newRow = document.createElement("tr");   // 创建新的一行

    // 如果表格还没有列，就创建1个空单元格
    const cols = table.rows[0] ? table.rows[0].cells.length : 1;
    for (let i = 0; i < cols; i++) {
        const newCell = document.createElement("td");
        newCell.onclick = function() {
            this.style.backgroundColor = colorSelected; // 点击时染色
        };
        newRow.appendChild(newCell);
    }

    table.appendChild(newRow); // 把新行添加到表格
}


// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
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
