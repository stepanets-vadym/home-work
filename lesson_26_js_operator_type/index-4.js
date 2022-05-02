// *Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

const summChocolate = (money, chocolatePrice) => {
  let summChocolat =
    typeof money === "number" &&
    !isNaN(money) &&
    typeof chocolatePrice === "number" &&
    !isNaN(chocolatePrice)
      ? money / chocolatePrice
      : console.log("Fuck");
  summChocolat = Math.floor(summChocolat);
  let summBack =
    typeof money === "number" &&
    !isNaN(money) &&
    typeof chocolatePrice === "number" &&
    !isNaN(chocolatePrice)
      ? money - summChocolat * chocolatePrice
      : console.log("Fuck you");
  console.log(summBack);

  return `Number : ${summChocolat}, remainder: ${summBack}`;
};

console.log(summChocolate(10, 8.3));