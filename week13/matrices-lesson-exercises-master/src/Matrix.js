/* Write your code below */
class Matrix {
  constructor(row, col) {
    this.matrix = this.generateMatrix(row, col);
  }

  generateMatrix(numRows, numColumns) {
    let matrix = [];
    let num = 1;

    for (let r = 0; r < numRows; r++) {
      matrix.push([]);
      for (let c = 0; c < numColumns; c++) {
        matrix[r].push(num++);
      }
    }
    return matrix;
  }

  get(row, col) {
    return this.matrix[row][col];
  }

  alter(row, col, value) {
    this.matrix[row][col] = value;
  }

  print() {
    console.log(this.matrix);
  }

  printColumn(column) {
    for (let i = 0; i < this.matrix.length; i++) {
      console.log(this.matrix[i][column]);
    }
  }

  printRow(row) {
    for (let i = 0; i < this.matrix[row].length; i++) {
      console.log(this.matrix[row][i]);
    }
  }
}

//You can paste the code from the lesson below to test your solution

let m = new Matrix(3, 4);
m.print();
//prints
/*
1       2       3       4
5       6       7       8
9       10      11      12
*/

m.alter(0, 0, m.get(1, 1));
m.printColumn(0); //prints 6, 5, 9 (separate lines)
m.printRow(0); //prints 6, 2, 3, 4 (separate lines)

/* Do not remove the exports below */
module.exports = Matrix;
