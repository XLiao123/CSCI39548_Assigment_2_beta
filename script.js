// ----- Global state -----
let numRows = 0;
let numCols = 0;
let colorSelected = null; // 只保留这一份全局变量

// ----- Helpers -----
function makeCell() {
  const td = document.createElement("td");
  td.onclick = function () {
    if (colorSelected) this.style.backgroundColor = colorSelected;
  };
  return td;
}

// ----- Row / Column operations -----
function addR() {
  const table = document.getElementById("grid");
  const tr = document.createElement("tr");

  const cols = table.rows[0] ? table.rows[0].cells.length : 1;
  for (let i = 0; i < cols; i++) tr.appendChild(makeCell());

  table.appendChild(tr);
  numRows++;
}

function addC() {
  const table = document.getElementById("grid");
  const rows = table.rows;

  if (rows.length === 0) {
    addR();
    return;
  }
  for (let i = 0; i < rows.length; i++) rows[i].appendChild(makeCell());
  numCols++;
}

function removeR() {
  const table = document.getElementById("grid");
  if (table.rows.length === 0) return;
  table.deleteRow(-1);
  numRows = Math.max(0, numRows - 1);
}

function removeC() {
  const table = document.getElementById("grid");
  const rows = table.rows;
  if (rows.length === 0) return;
  if (rows[0].cells.length === 0) return;

  for (let i = 0; i < rows.length; i++) rows[i].deleteCell(-1);
  numCols = Math.max(0, numCols - 1);
}

// ----- Color selection -----
function selectColor() {
  const v = document.getElementById("selectedColorId").value;
  colorSelected = (v === "SELECT") ? null : v;
}

// ----- Fill / Clear -----
function fillU() {
  if (!colorSelected) return; // 未选颜色就不做
  const cells = document.querySelectorAll("#grid td");
  cells.forEach(td => {
    if (!td.style.backgroundColor) td.style.backgroundColor = colorSelected;
  });
}

function fillAll() {
  if (!colorSelected) return;
  const cells = document.querySelectorAll("#grid td");
  cells.forEach(td => td.style.backgroundColor = colorSelected);
}

function clearAll() {
  const cells = document.querySelectorAll("#grid td");
  cells.forEach(td => td.style.backgroundColor = "");
}

