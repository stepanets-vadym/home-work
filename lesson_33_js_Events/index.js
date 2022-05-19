const MODE = {
  TEXTAREA: 'textarea',
  STATIC: 'static',
  INPUT: 'input',
  LASTMODE: 'lastmode',
};

let activeMode = MODE.STATIC;
let lastMode = MODE.LASTMODE;
const getElementById = (id) => document.getElementById(id);
const createElement = (tag) => document.createElement(tag);

const toggleMode = () => {
  switch (activeMode) {
    case MODE.STATIC: {
      activeMode = MODE.TEXTAREA;
      const block = getElementById('js-edit');
      let text = block.innerText;
      block.innerText = '';
      const textarea = createElement('textarea');
      textarea.id = 'js-textarea';
      textarea.value = text;
      block.appendChild(textarea);
      // if (MODE.LASTMODE) {
      //   activeMode = MODE.INPUT;

      //   const block = getElementById('js-edit');
      //   let text = block.innerText;
      //   block.innerText = '';

      //   const input = createElement('input');
      //   input.id = 'js-input';
      //   input.setAttribute('type', 'text');
      //   input.value = text;
      //   block.appendChild(input);

      //   break;
      // }
      break;
    }

    case MODE.TEXTAREA: {
      activeMode = lastMode;
      // activeMode = MODE.INPUT;
      let text = document.getElementById('js-textarea').value;
      document.getElementById('js-textarea').remove();
      document.getElementById('js-edit').innerText = text;

      break;
    }

    case MODE.LASTMODE: {
      activeMode = MODE.INPUT;

      const block = getElementById('js-edit');
      let text = block.innerText;
      block.innerText = '';

      const input = createElement('input');
      input.id = 'js-input';
      input.setAttribute('type', 'text');
      input.value = text;
      block.appendChild(input);

      break;
    }

    case MODE.INPUT: {
      activeMode = MODE.STATIC;
      // lastMode;
      let text = document.getElementById('js-input').value;
      document.getElementById('js-input').remove();
      document.getElementById('js-edit').innerText = text;
      break;
    }
  }
};
// console.log(toggleMode());
document.getElementById('js-toggle').addEventListener('click', toggleMode);
