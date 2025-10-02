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
    const table = document.getElementById("grid"); // 获取表格
    const rows = table.rows;                      // 获取所有行

    // 如果表格当前没有任何行，先添加一行（防止空表格无法加列）
    if (rows.length === 0) {
        addR(); // 直接调用你刚刚写好的 addR()，自动创建一行
        return;
    }

    // 遍历每一行，在末尾添加一个新单元格
    for (let i = 0; i < rows.length; i++) {
        const newCell = document.createElement("td");
        newCell.onclick = function () {
            this.style.backgroundColor = colorSelected; // 点击上色
        };
        rows[i].appendChild(newCell);
    }
}


// Remove a row
function removeR() {
    const table = document.getElementById("grid"); // 找到表格

    // 如果表格是空的，就直接返回（防止出错）
    if (table.rows.length === 0) {
        return;
    }

    // 删除最后一行
    table.deleteRow(-1);
}


// Remove a column
function removeC() {
    const table = document.getElementById("grid"); // 获取表格
    const rows = table.rows;                      // 获取所有行

    // 如果表格没有任何行，直接返回
    if (rows.length === 0) {
        return;
    }

    // 如果表格的第一行没有单元格（没有列），也直接返回
    if (rows[0].cells.length === 0) {
        return;
    }

    // 遍历每一行，删除最后一个单元格
    for (let i = 0; i < rows.length; i++) {
        rows[i].deleteCell(-1); // -1 表示“最后一个单元格”
    }
}


// Set global variable for selected color
let colorSelected = null; // 保持为全局变量

function selectColor() {
  const v = document.getElementById("selectedColorId").value;
  colorSelected = (v === "SELECT") ? null : v;  // 选了默认项就清空；否则使用所选颜色
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
