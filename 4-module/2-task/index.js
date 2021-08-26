function makeDiagonalRed(table) {

  for (i=0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
}

}
