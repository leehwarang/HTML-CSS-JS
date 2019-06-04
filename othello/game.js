const inputPrompt = require("./command");

class Game {
  constructor(inputPrompt) {
    this.black = new Black(); // 흑돌이 1
    this.white = new White(); // 백돌이 0
    this.board = Array(8)
      .fill(7)
      .map(x => Array(8).fill(7));
    this.prompt = inputPrompt;
  }

  initBoard() {
    this.board[3][3] = 0;
    this.board[4][4] = 0;
    this.board[4][3] = 1;
    this.board[3][4] = 1;
  }

  updateBoard(row, column, firstTurn) {
    let stoneColor = firstTurn === "white" ? 0 : 1;
    this.board[row][column] = stoneColor;

    console.log(this.board);

    if (stoneColor === 0) {
      this.white.turn = false;
      this.black.turn = true;
      firstTurn = "black";
    } else {
      this.white.turn = true;
      this.black.turn = false;
      firstTurn = "white";
    }

    return firstTurn;

    // console.log(`***${firstTurn}***의 차례입니다.`);
    // this.prompt.prompt();
  }
}

class Black {
  constructor() {
    this.stone = 32;
    this.turn = false;
  }
}

class White {
  constructor() {
    this.stone = 32;
    this.turn = true;
  }
}

module.exports = Game;
