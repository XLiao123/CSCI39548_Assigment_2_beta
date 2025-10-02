// Declare global variables
let rows = 0;
let cols = 0;
let colorSelected; 

const grid = document.getElementById('grid');
const btnAddRow = document.getElementById('btnAddRow');

function getColumnCount() {
  if (grid.rows.length === 0) return 1;
  return Math.max(1, grid.rows[0].cells.length);
}
// Add a row
function addRow() {
  const cols = getColumnCount();
  const tr = grid.insertRow();
  for (let c = 0; c < cols; c++) {
    const td = tr.insertCell();
    td.className = 'cell'; // used later for coloring features
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
