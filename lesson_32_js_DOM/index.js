import { createNewTodoItem } from "./js/todoList.js";
import { registration } from "./js/registration.js";
import { modal } from "./js/modal.js";
import { playList } from "./js/list.js";
import { trafficLights } from "./js/traffic_lights.js";


document.getElementById('js-form').addEventListener('submit', registration);
const toggleRegistrationModal = document.getElementsByClassName('js-toggle-registration-btn');

for (const item of toggleRegistrationModal) {
  item.addEventListener('click', modal);
}


// trafficLights dinamic

document.getElementById('js-light-btn').addEventListener('click',trafficLights)