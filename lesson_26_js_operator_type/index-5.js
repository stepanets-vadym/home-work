// *Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор% (залишок від ділення).
var x = 5921;
var y = 0;
for (; x; x = Math.floor(x / 10)) {
  y *= 10;
  y += x % 10;
}
console.log(y);