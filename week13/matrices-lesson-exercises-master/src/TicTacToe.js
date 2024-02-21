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
    this.matrix[rowNum][columnNum] = symbol;
  }
}

let board = new TicTacToe();
board.loadBoard();
// board.print();
//prints
/*
  
.       .       .
.       .       .
.       .       .
*/
let board2 = new TicTacToe();
board2.loadBoard();

board2.play(2, 2, 1);
board2.play(0, 0, 2);
board2.print();
//prints
/*
o       .       .
.       .       .
.       .       x
*/
module.exports = TicTacToe;
