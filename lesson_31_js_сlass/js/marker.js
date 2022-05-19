// Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір, поки в маркері є чорнило; один не пробільний символ — це 0,5% чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера і додай метод для заправки.

// Продемонструй роботу написаних методів.
class Elements {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }
}

class Marker extends Elements {
  constructor(options) {
    super(options.selector);
    this.$el.style.color = options.color;
    this.tank = options.tank;
  }

  useMarker(value) {
    const updateValue = value.replaceAll(' ', '');
    console.log(updateValue);
    const valueLength = updateValue.length;
    if (valueLength) {
      this.tank -= valueLength / 2;
      if (this.tank <= 20 && this.tank >= 1) {
        console.log(`заправте маркер у вас залишилось ${this.tank} %`);
      } else if (this.tank <= 0) {
        this.tank = 0;
        document
          .getElementsByClassName('js-test-input')[0]
          .setAttribute('disabled', 'disabled');
        console.log('у ваз закінчилась фарба, заправте маркер');
      }
    }
    console.log(this.tank);
    document.getElementsByClassName('js-test-input')[0].value = '';
  }

  reloadMarker(paint) {
    paint = +prompt('скільки додати фарби?', '1 - 100');
    console.log(paint);
    if (paint) {
      if (typeof paint === 'number' && !isNaN(paint)) {
        if (paint <= 100 && paint >= 1) {
          this.tank = paint + this.tank;
          document
            .getElementsByClassName('js-test-input')[0]
            .removeAttribute('disabled', 'disabled');
          if (this.tank > 100) {
            this.tank = 100;
          }
          console.log(this.tank);
        } else {
          console.log('Ваше число має бути від 1 до 100');
        }
      } else {
        console.log('ви ввели не вірне значення');
      }
    } else {
      console.log('маркер не доступний');
    }
  }
}


export { Marker };
