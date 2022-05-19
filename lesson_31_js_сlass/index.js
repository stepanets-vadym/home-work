import { Marker } from './js/marker.js';
import { EmpTable } from './js/workers.js';
// import { Employee, person, bankTeam } from './js/workers.js';

// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().

// Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().


const wright = new Marker({
  selector: '.js-test-input',
  color: 'red',
  tank: 10,
});

// console.log(wright);

const imput = document.getElementsByClassName('js-test-input')[0];
document.getElementById('js-button').addEventListener('click', () => {
  wright.useMarker(imput.value);
  // console.log(imput.value);
});
document.getElementById('js-button-add').addEventListener('click', () => {
  wright.reloadMarker();
  // console.log(imput.value);
});