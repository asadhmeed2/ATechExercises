const Matrix = require("./Matrix");

/* Write your code below */
class EmployeeMatrix extends Matrix {
  loadData(salaryData) {
    this.matrix = salaryData.map((salary) => Object.values(salary));
  }
}

//You can paste the code from the lesson below to test your solution

let data = [
  { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
  { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
  { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
  { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
  { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
  { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 },
];

let m = new EmployeeMatrix();

m.loadData(data);
m.print();
//prints
/*
e10021  Gillian Finance 2000
e10725  Tibor   Design  1200
e10041  Anisha  Finance 2300
e10411  Jakub   Design  1600
e11995  Mar     Design  1300
e10732  Nisha   Design  1200

 Do not remove the exports below */
module.exports = EmployeeMatrix;
