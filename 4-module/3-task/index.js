function highlight(table) {
  let headers = Array.from(table.rows[0].cells).map(x => x.innerText)
  // ниже задал переменные для номера столбца для каждого хедера, чтобы порядок присылаемых заголовков не влиял на код
  nameColumn = headers.indexOf('Name')
  ageColumn = headers.indexOf('Age')
  genderColumn = headers.indexOf('Gender')
  statusColumn = headers.indexOf('Status')

  for (i = 0; i < table.rows.length; i++) {
      switch (table.rows[i].cells[statusColumn].dataset.available) {
          case 'true':
              table.rows[i].classList.add('available');
              break;
          case 'false':
              table.rows[i].classList.add('unavailable');
              break;
          default:
              table.rows[i].setAttribute('hidden', true);
              break;
      }
      switch (table.rows[i].cells[genderColumn].innerHTML) {
          case 'm':
              table.rows[i].classList.add('male');
              break;
          case 'f':
              table.rows[i].classList.add('female');
              break;
          default:
              break;
      }
      switch (true) {
          case (Number(table.rows[i].cells[ageColumn].innerHTML) < 18):
              table.rows[i].style.textDecoration = 'line-through';
              break;
          default:
              break;
      }
  }
}