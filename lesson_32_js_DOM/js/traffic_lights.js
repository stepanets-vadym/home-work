//* Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.
// const getElementById = (id) => document.getElementById(id);
const LIGTHS = {
  RED: 'red',
  YELLOW: 'yellow',
  GREEN: 'green',
};
let active = null;

const trafficLights = () => {
  console.log(active);
  // to default
  const items = document.getElementsByClassName('js-light');
  // console.log(items);
  for (const item of items) {
    item.classList.remove('active');
  }
  // check active
  switch (active) {
    case LIGTHS.RED: {
      items[1].classList.add('active');
      active = LIGTHS.YELLOW;
      break;
    }
    case LIGTHS.YELLOW: {
      items[2].classList.add('active');
      active = LIGTHS.GREEN;
      break;
    }
    default: {
      items[0].classList.add('active');
      active = LIGTHS.RED;
    }
  }
  console.log(active);
};

export { trafficLights };
