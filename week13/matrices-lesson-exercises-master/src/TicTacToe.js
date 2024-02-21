const Matrix = require("./Matrix");

class TicTacToe extends Matrix {
  constructor() {
    super(3, 3);
  }

  loadBoard() {
    for (let row = 0; row < this.matrix.length; row++) {
      for (let col = 0; col < this.matrix[row].length; col++) {
        this.matrix[row][col] = ".";
      }
    }
  }

  /**
   *
   * @param {number} rowNum
   * @param {number} columnNum
   * @param {number} player
   */
  play(rowNum, columnNum, player) {
    const symbol = player === 1 ? "x" : "o";
    this.alter(rowNum, columnNum, symbol);

    if (this.checkIfWin(symbol)) {
      console.log("Congratulations Player", player);
    }
  }

  checkIfWin(symbol) {
    if (
      this.checkRows(symbol) ||
      this.checkColumns(symbol) ||
      this.checkDiagonal(symbol)
    ) {
      return true;
    }
    return false;
  }

  checkRows(symbol) {
    for (let row of this.matrix) {
      if (row.every((col) => col === symbol)) {
        return true;
      }
    }
    return false;
  }

  checkColumns(symbol) {
    for (let i = 0; i < this.matrix.length; i++) {
      const column = [];
      for (let j = 0; j < this.matrix[i].length; j++) {
        column.push(this.matrix[j][i]);
      }
      if (column.every((col) => col === symbol)) {
        return true;
      }
    }
    return false;
  }

  checkDiagonal(symbol) {
    const diagonal1 = [this.matrix[0][0], this.matrix[1][1], this.matrix[2][2]];
    const diagonal2 = [this.matrix[2][0], this.matrix[1][1], this.matrix[0][2]];
    if (
      diagonal1.every((col) => col === symbol) ||
      diagonal2.every((col) => col === symbol)
    ) {
      return true;
    }
    return false;
  }
}

// let board = new TicTacToe();
// board.loadBoard();
// board.print();
//prints
/*
  
.       .       .
.       .       .
.       .       .
*/
// let board2 = new TicTacToe();
// board2.loadBoard();

// board2.play(2, 2, 1);
// board2.play(0, 0, 2);
// board2.print();
//prints
/*
o       .       .
.       .       .
.       .       x
*/

let board = new TicTacToe();
board.loadBoard();

board.play(2, 2, 1);
board.play(0, 0, 2);
board.play(0, 2, 1);
board.play(1, 0, 2);
board.play(1, 2, 1); //prints Congratulations Player 1

board.print();
//prints
/*
o       .       x
o       .       x
.       .       x
*/
module.exports = TicTacToe;
