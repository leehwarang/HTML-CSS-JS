const inputPrompt = require("./command");

class Game {
  constructor() {
    this.black = new Black(); // 흑돌이 1
    this.white = new White(); // 백돌이 0
    this.board = Array(8)
      .fill(7)
      .map(x => Array(8).fill(7));
    this.currentTurnColor;
    this.currentTurnStone = "white";
    this.allDirection = [
      [-1, 0], // 상
      [1, 0], // 하
      [0, -1], // 좌
      [0, 1], // 우
      [-1, 1], //오른쪽 대각선 위
      [1, 1], // 오른쪽 대각선 아래
      [-1, -1], // 왼쪽 대각선 위
      [1, -1] // 왼쪽 대각선 아래
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
    if (this.currentTurnStone === "white") {
      this.currentTurnStone = "black";
      this.currentTurnColor = 1;
    } else {
      this.currentTurnStone = "white";
      this.currentTurnColor = 0;
    }
  }

  setCurrentStoneColor() {
    this.currentTurnColor = this.currentTurnStone === "white" ? 0 : 1;
  }

  checkSamePosition(row, column) {
    return this.board[row][column] === 1 || this.board[row][column] === 0;
  }

  calculateCoordinate(
    selectedRowVal,
    changeRowVal,
    selectedColumnVal,
    changeColumnVal
  ) {
    let x = selectedRowVal + changeRowVal;
    let y = selectedColumnVal + changeColumnVal;
    let target = this.board[x][y];
    return target;
  }

  reverseStone(stack) {
    stack.forEach(val => {
      this.board[val[0]][val[1]] = this.currentTurnColor;
    });
  }

  // judgeTarget(target, stack) {
  //   if (target === this.currentTurnColor) {
  //     this.reverseStone(stack);
  //     // break;
  //   } else if (target === 7) {
  //     // break;
  //     return;
  //   } else {
  //     stack.push([x, y]);
  //     return stack;
  //   }
  // }

  // 위 두가지 경우에 break 시켰다면 호출한 부분에서의 while문을 빠져 나가야함
  // 제일 아래의 경우만 return stack하여 while 문이 계속 작동하도록 해야함

  searchUniqueDirection(coordinate, index, selectedRowVal, selectedColumnVal) {
    let changeRowVal = coordinate[0];
    let changeColumnVal = coordinate[1];

    let stack = [[selectedRowVal, selectedColumnVal]];
    let x, y, target;

    switch (index) {
      case 0: // 상  [-1, 0]
        while (selectedRowVal !== 0) {
          selectedRowVal += changeRowVal;
          selectedColumnVal += changeColumnVal;
          target = this.board[selectedRowVal][selectedColumnVal];

          if (target === this.currentTurnColor) {
            this.reverseStone(stack);
            break;
          } else if (target === 7) {
            break;
          } else {
            stack.push([selectedRowVal, selectedColumnVal]);
          }
        }
        break;

      case 1: // 하  [1, 0]
        while (selectedRowVal !== 7) {
          selectedRowVal += changeRowVal;
          selectedColumnVal += changeColumnVal;
          target = this.board[selectedRowVal][selectedColumnVal];

          if (target === this.currentTurnColor) {
            this.reverseStone(stack);
            break;
          } else if (target === 7) {
            break;
          } else {
            stack.push([selectedRowVal, selectedColumnVal]);
          }
        }
        break;

      case 2: // 좌  [0, -1]
        while (selectedColumnVal !== 0) {
          selectedRowVal += changeRowVal;
          selectedColumnVal += changeColumnVal;
          target = this.board[selectedRowVal][selectedColumnVal];

          if (target === this.currentTurnColor) {
            this.reverseStone(stack);
            break;
          } else if (target === 7) {
            break;
          } else {
            stack.push([selectedRowVal, selectedColumnVal]);
          }
        }

      case 3: // 우  [0, 1]
        while (selectedColumnVal !== 7) {
          selectedRowVal += changeRowVal;
          selectedColumnVal += changeColumnVal;
          target = this.board[selectedRowVal][selectedColumnVal];

          if (target === this.currentTurnColor) {
            this.reverseStone(stack);
            break;
          } else if (target === 7) {
            break;
          } else {
            stack.push([selectedRowVal, selectedColumnVal]);
          }
        }
        break;

      case 4: // 오른쪽 대각선 위 [-1, 1]
        while (selectedRowVal !== 0 || selectedColumnVal !== 7) {
          selectedRowVal += changeRowVal;
          selectedColumnVal += changeColumnVal;
          target = this.board[selectedRowVal][selectedColumnVal];

          if (target === this.currentTurnColor) {
            this.reverseStone(stack);
            break;
          } else if (target === 7) {
            break;
          } else {
            stack.push([selectedRowVal, selectedColumnVal]);
          }
        }
        break;

      case 5: // 오른쪽 대각선 아래 [1, 1]
        while (selectedRowVal !== 7 || selectedColumnVal !== 7) {
          selectedRowVal += changeRowVal;
          selectedColumnVal += changeColumnVal;
          target = this.board[selectedRowVal][selectedColumnVal];

          if (target === this.currentTurnColor) {
            this.reverseStone(stack);
            break;
          } else if (target === 7) {
            break;
          } else {
            stack.push([selectedRowVal, selectedColumnVal]);
          }
        }
        break;

      case 6: // 왼쪽 대각선 위 [-1, -1]
        while (selectedRowVal !== 0 || selectedColumnVal !== 0) {
          selectedRowVal += changeRowVal;
          selectedColumnVal += changeColumnVal;
          target = this.board[selectedRowVal][selectedColumnVal];

          if (target === this.currentTurnColor) {
            this.reverseStone(stack);
            break;
          } else if (target === 7) {
            break;
          } else {
            stack.push([selectedRowVal, selectedColumnVal]);
          }
        }
        break;

      case 7: // 왼쪽 대각선 아래 [1, -1]
        while (selectedRowVal !== 7 || selectedColumnVal !== 0) {
          selectedRowVal += changeRowVal;
          selectedColumnVal += changeColumnVal;
          target = this.board[selectedRowVal][selectedColumnVal];

          if (target === this.currentTurnColor) {
            this.reverseStone(stack);
            break;
          } else if (target === 7) {
            break;
          } else {
            stack.push([selectedRowVal, selectedColumnVal]);
          }
        }
        break;

      default:
        break;
    }
  }

  updateBoard(row, column) {
    this.setCurrentStoneColor();

    if (this.checkSamePosition(row, column)) {
      console.log("이미 돌이 놓여져 있는 자리 입니다.");
      return;
    }

    this.allDirection.forEach((coordinate, index) => {
      this.searchUniqueDirection(coordinate, index, row, column);
      // searchUniqueDirection 했을 시에, 하나의 탐색이라도 성공했다면 게임을 그대로 진행
      // 하나의 탐색이라도 하지 못했다면 현재 Turn 에게 다시 입력을 받아야함
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
