const todoList = document.getElementById("js-todo-list");
const createElement = (tagName) => document.createElement(tagName);

const createNewTodoItem = () => {
  let todoInputValue = document.getElementById("js-todo-input").value;
  if (todoInputValue) {
    if (todoInputValue.length >= 5) {
      let li = createElement("li");
      let span = createElement("span");
      let spanX = createElement("span");
      let remuveButton = createElement("button");

      li.classList.add("list__item");
      remuveButton.classList.add("list__btn");

      span.innerText = todoInputValue;
      spanX.innerText = "[delete]";
      todoList.appendChild(li);
      li.appendChild(span);
      li.appendChild(remuveButton);
      remuveButton.appendChild(spanX);
      remuveButton.setAttribute("type", "button");
      remuveButton.addEventListener("click", () => {
        li.remove();
      });
      document.getElementById("js-todo-input").value = "";
    } else {
      alert("your value must be greater than 5 characters");
    }
  } else {
    alert("you did not enter a value");
  }
};

document
  .getElementById("js-todo-button")
  ?.addEventListener("click", createNewTodoItem);

document.getElementById("js-todo-input")?.addEventListener("keyup", (e) => {
  if (e.code === "Enter") createNewTodoItem();
});







const modalWindowContent = document.getElementById('js-modal_window__content');

const createWindowModel = () => {

  let modalWindow = $modal({
    title: 'Modal Window',
    content: '<img src="./assets/img/pingviny-madagaskara.pnj.jpg" alt="" style="display: block; height: auto; max-width: 100%;">',
    footerButton: [
      { class: 'btn btn__cancel', text: 'Закрыть', handler: 'modalHandlerCancel' }
    ]
  });
  let openButton = createElement('button');
  modalWindowContent.appendChild(openButton);
  openButton.innerText = 'Open';

}

createWindowModel();