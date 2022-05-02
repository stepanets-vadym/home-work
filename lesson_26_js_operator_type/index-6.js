// //* Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
const deposite = (summMonney) => {
  let Procent =
    typeof summMonney === "number" && !isNaN(summMonney)
      ? (summMonney * 0.05) / 12
      : "go away";
  return Procent;
};

console.log(deposite(2000));