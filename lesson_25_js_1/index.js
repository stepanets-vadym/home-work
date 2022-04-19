// let userName = 'Vadym';
// let userSecondName = 'Stepanets';
// let firstName = 'Arthur';
// let secondName = 'Solodkui';
// let personName = 'Some Mother fucker';



let yourAges = prompt(`В якому році ти народився?`);
alert(`тобі ${2022 - yourAges} років`)

let squarePerimetr = prompt(`Давай вирахуємо периметр квадрату - введи довжину однієї сторони`);
alert(`Периметр твого квадрату = ${squarePerimetr * 4}`);

let areaOfACircle = prompt(`Давай визначимо площу твого кола - задай сюди необхідний радіус`);
alert(`Площа твого кола = ${Math.PI * (areaOfACircle * areaOfACircle)}`);

let koksQuestion = confirm(`Перевозити кокс то діло серьйозне, давай прорахуємо всі деталі!`);
if (koksQuestion == true) {
  let cityDistance = prompt('Яка відстань в кілометрах до твого міста?');
  let travelTime = prompt('За скільки часу плануєш довезти товар?');
  let speedLimit = (cityDistance / travelTime);
  if (speedLimit > 300){
    alert(`То швидкість світла`);
  }
  else
    alert(`Швидкість яка тобі потрібна то - ${speedLimit} км/год`);
}
else alert(`Слабак!`);

const DOLLAR = (32.8);
const EURO = (33.5);
const ZLOTY = (6.97);

alert(`Вітаю у обміннику`);
let moneyQuestion = confirm(`Сьогоднішній курс: Доллар = ${DOLLAR}; Євро = ${EURO}; Злотий = ${ZLOTY}; Бажаєш придбати валюту?`);
if (moneyQuestion == true){
  let currencySelection = prompt(`Обери валюту - якщо потрібні доллари напиши 1, якщо євро напиши 2, якщо злоті напиши 3`);
  if (currencySelection == 1){
    let dollarChange = prompt(`Скільки тобі необхідно долларів?`);
    alert(`З тебе ${dollarChange * DOLLAR} грн`);
  }
  if (currencySelection == 2){
    let euroChange = prompt(`Скільки тобі необхідно євро?`);
    alert(`З тебе ${euroChange * EURO} грн`);
  }
  if (currencySelection == 3){
    let zlotyChange = prompt(`Скільки тобі необхідно злотих?`);
    alert(`З тебе ${zlotyChange * ZLOTY} грн`);
  }
  else alert (`Хлопці у нас тут розумака - виведіть його нахрін`);
}
else alert('Мама казала, мама казала - гроші в бідончику');
