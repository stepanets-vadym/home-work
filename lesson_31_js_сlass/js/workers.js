class EmpTable {
  constructor(params) {
    this.employeeList = params.employeeList || [];
  }

  getHTML() {
    const table = document.createElement('table');

    table.border = 3;
    table.borderColor = '#000000';
    const thead = document.createElement('thead');
    const th1 = document.createElement('th');
    th1.innerText = "Ім'я";
    const th2 = document.createElement('th');
    th2.innerText = 'Призвіще';
    const th3 = document.createElement('th');
    th3.innerText = 'Зарплата';
    thead.appendChild(th1);
    thead.appendChild(th2);
    thead.appendChild(th3);
    table.appendChild(thead);
    this.employeeList.forEach((employee) => {
      const tr = document.createElement('tr');
      Object.keys(employee).forEach((key) => {
        const td = document.createElement('td');
        td.innerText = employee[key];
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
    return table;
  }

  generateItem() {}
}
const employeeList = [
  { name: 'John', lastName: 'Barker', salary: 1000 },
  { name: 'Mike', lastName: 'Miller', salary: 1500 },
  { name: 'Annie', lastName: 'Lang', salary: 1250 },
];

console.log(employeeList);
const test = new EmpTable({ employeeList });
console.log(test.getHTML());

document.getElementById('js-table').appendChild(test.getHTML());

export { EmpTable };
