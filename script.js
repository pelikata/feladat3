let board = document.querySelector("#chessboard");

for (let i = 0; i < 8; i++) {
  for (let k = 0; k < 8; k++) {
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    board.appendChild(newCell);
    console.log(i + k);
    if ((i + k) % 2 == 0) {
      newCell.classList.add("white");
    }
  }
}
