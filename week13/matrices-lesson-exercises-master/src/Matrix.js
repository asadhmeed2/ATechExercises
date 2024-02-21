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
    for (let row of this.matrix) {
      let string = "";
      for (let col of row) {
        string += " " + col + " ";
      }
      console.log(string);
    }
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

  findCoordinate(value) {
    for (let row = 0; row < this.matrix.length; row++) {
      for (let col = 0; col < this.matrix[row].length; col++) {
        if (this.matrix[row][col] === value) {
          return { x: col, y: row };
        }
      }
    }
    return null;
  }
}

//You can paste the code from the lesson below to test your solution

let m = new Matrix(3, 4);
console.log(m.findCoordinate(12)); //prints {x: 3, y: 2}
console.log(m.findCoordinate(7)); //prints {x: 2, y: 1}

/* Do not remove the exports below */
module.exports = Matrix;
