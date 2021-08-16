let calculator = {
  read: function(num1,num2) {calculator.a = num1, calculator.b = num2},
  sum: function() {return calculator.a + calculator.b},
  mul: function() {return calculator.a * calculator.b},



};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
