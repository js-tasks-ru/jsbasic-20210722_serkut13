/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(userName) {
  let stringName = String(userName)
  let space = stringName.indexOf(' ');
  let nameLength = stringName.length;
if (space == -1 && nameLength >3 && stringName != 'null' && stringName != 'undefined')
return true
else
return false 
}


function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName) == true) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
