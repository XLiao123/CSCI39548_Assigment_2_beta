// Declare global variables
let rows = 0;
let cols = 0;
// === Story 2: Add Row ONLY ===

// If you already had globals, you can keep them; not required for add-row
let colorSelected; // unused here, but safe to keep if your HTML references it

const grid = document.getElementById('grid');
const btnAddRow = document.getElementById('btnAddRow');

// Decide how many columns a new row should have.
// If the table is empty, start with 1 column.
// Otherwise, match the first row's column count.
function getColumnCount() {
  if (grid.rows.length === 0) return 1;
  return Math.max(1, grid.rows[0].cells.length);
}

// Create a new row and fill it with the right number of cells.
function addRow() {
  const colCount = getColumnCount();
  const tr = grid.insertRow();
  for (let c = 0; c < colCount; c++) {
    const td = tr.insertCell();
    td.className = 'cell'; // helpful for later stories, harmless now
  }
}

// If you have a button with id="btnAddRow"
if (btnAddRow) btnAddRow.onclick = addRow;

// If your HTML uses onclick="addR()", keep this alias
function addR() {
  addRow();
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
