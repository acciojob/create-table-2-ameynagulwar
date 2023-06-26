// script.js

function createTable() {
  var rows = parseInt(prompt("Input number of rows"));
  var columns = parseInt(prompt("Input number of columns"));

  var table = document.getElementById("myTable");
  table.innerHTML = '';

  for (var i = 0; i < rows; i++) {
    var row = document.createElement("tr");

    for (var j = 0; j < columns; j++) {
      var cell = document.createElement("td");
      cell.textContent = "Row-" + i + " Column-" + j;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}
