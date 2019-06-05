const Game = require("./game");
const readline = require("readline");

const inputPrompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const game = new Game();

console.log("quit을 입력하면 프로그램이 종료됩니다.");

game.initBoard();

console.log(`===${game.currentStoneState}===의 차례입니다.`);
inputPrompt.setPrompt(
  "행과 열을 나타내는 두 개의 숫자를 공백으로 구분하여 입력하세요. : "
);

inputPrompt.prompt();

inputPrompt.on("line", userInput => {
  userInput = userInput.split(" ");
  row = Number(userInput[0]);
  column = Number(userInput[1]);

  game.updateBoard(row, column);
  console.log(`===${game.currentStoneState}===의 차례입니다.`);
  inputPrompt.prompt();
});

inputPrompt.on("close", () => {
  process.exit();
});
