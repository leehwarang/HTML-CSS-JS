const inputPrompt = require("./command");

class Game {
  constructor() {
    this.black = new Black(); // 흑돌이 1
    this.white = new White(); // 백돌이 0
    this.board = Array(8)
      .fill(7)
      .map(x => Array(8).fill(7));
    this.currentStoneColor;
    this.currentStoneState = "white";
    this.allDirection = [
      [-1, 0], // 상
      [1, 0], // 하
      [0, -1], // 좌
      [0, 1] // 우
      // [-1, 1],
      // [1, 1],
      // [1, -1],
      // [-1, -1]
    ];
  }

  printBoard() {
    console.log(this.board);
  }

  initBoard() {
    this.board[3][3] = 0;
    this.board[4][4] = 0;
    this.board[3][4] = 1;
    this.board[4][3] = 1;
  }

  changeTurn() {
    if (this.currentStoneState === "white") {
      this.currentStoneState = "black";
      this.currentStoneColor = 1;
    } else {
      this.currentStoneState = "white";
      this.currentStoneColor = 0;
    }

    return this.currentStoneState;
  }

  checkSamePosition(row, column) {
    return this.board[row][column] === 1 || this.board[row][column] === 0;
  }

  searchUniqueDirection(coordinate, index, startRow, startColumn) {
    let changeRowVal = coordinate[0];
    let changeColumnVal = coordinate[1];

    let stack = [[startRow, startColumn]];
    let target, x, y;

    switch (index) {
      case 0: // 상
        while (startRow !== 0) {
          x = startRow + changeRowVal;
          y = startColumn + changeColumnVal;
          target = this.board[x][y];
          if (target === this.currentStoneColor) {
            stack.forEach(val => {
              this.board[val[0]][val[1]] = this.currentStoneColor;
            });
            stack = [];
            break;
          } else if (target === 7) {
            stack = [];
            break;
          } else {
            stack.push([x, y]);
          }
          startRow -= 1;
        }
        break;

      case 1: // 하
        while (startRow !== 7) {
          x = startRow + changeRowVal;
          y = startColumn + changeColumnVal;
          target = this.board[x][y];

          if (target === this.currentStoneColor) {
            stack.forEach(val => {
              this.board[val[0]][val[1]] = this.currentStoneColor;
            });
            stack = [];
            break;
          } else if (target === 7) {
            stack = [];
            break;
          } else {
            stack.push([x, y]);
          }
          startRow += 1;
        }
        break;

      case 2: // 좌
        while (startColumn !== 0) {
          x = startRow + changeRowVal;
          y = startColumn + changeColumnVal;
          target = this.board[x][y];

          if (target === this.currentStoneColor) {
            stack.forEach(val => {
              this.board[val[0]][val[1]] = this.currentStoneColor;
            });
            stack = [];
            break;
          } else if (target === 7) {
            stack = [];
            break;
          } else {
            stack.push([x, y]);
          }
          startColumn -= 1;
        }

      case 3: // 우
        while (startColumn !== 7) {
          x = startRow + changeRowVal;
          y = startColumn + changeColumnVal;
          target = this.board[x][y];

          if (target === this.currentStoneColor) {
            stack.forEach(val => {
              this.board[val[0]][val[1]] = this.currentStoneColor;
            });

            stack = [];
            break;
          } else if (target === 7) {
            stack = [];

            break;
          } else {
            stack.push([x, y]);
          }
          startColumn += 1;
        }
        break;

      default:
        break;
    }
  }

  updateBoard(row, column) {
    this.currentStoneColor = this.currentStoneState === "white" ? 0 : 1;

    if (this.checkSamePosition(row, column)) {
      console.log("이미 돌이 놓여져 있는 자리 입니다.");
      return this.currentStoneState;
    }

    this.allDirection.forEach((coordinate, index) => {
      this.searchUniqueDirection(coordinate, index, row, column);
    });

    this.printBoard();

    this.changeTurn();
  }
}

class Black {
  constructor() {
    this.stone = 32;
  }
}

class White {
  constructor() {
    this.stone = 32;
  }
}

module.exports = Game;
