let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg_container = document.querySelector(".msg_container");
let winner_msg = document.querySelector(".winner_msg");
let new_game = document.querySelector("#new_game");

let turn0 = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.classList.add("color1");
      box.innerText = "O";
      turn0 = false;
    } else {
      box.classList.add("color2");
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const checkWinner = () => {
  for (pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
  }
};

showWinner = (winner) => {
  stopGame();
  winner_msg.innerText = `The Winner is "${winner}"`;
  msg_container.classList.remove("hide");
};

const stopGame = () => {
  for (let box of boxes) {
    box.disabled = "true";
  }
};

const resetGame = () => {
  for (box of boxes) {
    box.innerText = "";
    box.disabled = false;
    box.classList.remove("color1", "color2");
  }
  turn0 = true;
  msg_container.classList.add("hide");
};

reset.addEventListener("click", resetGame);
new_game.addEventListener("click", resetGame);
