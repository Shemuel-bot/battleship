import {
  attackBoard,
  newGame,
  placePlayerShips,
  displayHoveringPlayerShips,
} from "./gameManager";

export const updateAiBoardsMissedShots = (array) => {
  const aiBoard = Array.from(document.getElementById("ai-board").childNodes);
  for (let i = 0; i < aiBoard.length; i += 1) {
    const id = `${aiBoard[i].id}`;
    array.forEach((x) => {
      if (x[0] === id.at(0) && x[1] === id.at(2)) {
        aiBoard[i].style.backgroundColor = "#f87171";
      }
    });
  }
};

export const updateAiBoardsHitTargets = (array) => {
  const aiBoard = Array.from(document.getElementById("ai-board").childNodes);
  for (let i = 0; i < aiBoard.length; i += 1) {
    const id = `${aiBoard[i].id}`;
    array.forEach((b) => {
      if (b[0] === id.at(0) && b[1] === id.at(2)) {
        aiBoard[i].style.backgroundColor = "#22d3ee";
      }
    });
  }
};

export const updatePlayerBoardsMissedShots = (array) => {
  const playerBoard = Array.from(
    document.getElementById("player-board").childNodes,
  );
  for (let i = 0; i < playerBoard.length; i += 1) {
    const id = `${playerBoard[i].id}`;
    array.forEach((x) => {
      if (Number(x[0]) === Number(id.at(0)) && Number(x[1]) === Number(id.at(2))) {
        playerBoard[i].style.backgroundColor = "#f87171";
      }
    });
  }
};

export const updatePlayerBoardsHitTargets = (array) => {
  const playerBoard = Array.from(
    document.getElementById("player-board").childNodes,
  );
  for (let i = 0; i < playerBoard.length; i += 1) {
    const id = `${playerBoard[i].id}`;
    array.forEach((b) => {
      if (Number(b[0]) === Number(id.at(0)) && Number(b[1]) === Number(id.at(2))) {
        playerBoard[i].style.backgroundColor = "#22d3ee";
      }
    });
  }
};

export const displayPlayerShips = (array) => {
  const playerBoard = Array.from(
    document.getElementById("player-board").childNodes,
  );
  const ids = [];
  playerBoard.forEach((a) => ids.push(a.id));
  array.forEach((a) => {
    if (ids.includes(`${a[0]},${a[1]}`))
      playerBoard[ids.indexOf(`${a[0]},${a[1]}`)].style.backgroundColor =
        "black";
  });
};

export const displayHoveringShips = (array) => {
  const playerBoard = Array.from(
    document.getElementById("player-board").childNodes,
  );
  const ids = [];
  playerBoard.forEach((a) => ids.push(a.id));
  playerBoard.forEach((b) => {
      b.style.backgroundColor = "white";
  });
  array.forEach((a) => {
    if (ids.includes(`${a[0]},${a[1]}`))
      playerBoard[ids.indexOf(`${a[0]},${a[1]}`)].style.backgroundColor =
        "#a1a1aa";
  });
};

export const displayWinner = (winner) =>{
    document.getElementById('winner-banner').textContent = `${winner}, Won!`
}

const remakeSquares = () => {
  let y = 8;
  let x = 1;
  for (let i = 0; i < 64; i += 1) {
    if (x > 8) {
      y -= 1;
      x = 1;
    }
    const square0 = document.createElement("div");
    const square1 = document.createElement("div");

    square0.style.width = "40px";
    square0.style.height = "40px";
    square1.style.width = "40px";
    square1.style.height = "40px";

    square0.id = [x, y];
    square1.id = [x, y];
    x += 1;

    document.getElementById("ai-board").appendChild(square0);
    document.getElementById("player-board").appendChild(square1);

    square0.addEventListener("click", () => {
      attackBoard([`${square0.id}`.at(0), `${square0.id}`.at(2)]);
    });
    square1.addEventListener("click", () =>
      placePlayerShips([`${square1.id}`.at(0), `${square1.id}`.at(2)]),
    );
    square1.addEventListener("mouseenter", () =>
      displayHoveringPlayerShips([
        `${square1.id}`.at(0),
        `${square1.id}`.at(2),
      ]),
    );
  }
};

const removeSquare = () => {
  const aiBoard = Array.from(document.getElementById("ai-board").childNodes);
  const playerBoard = Array.from(
    document.getElementById("player-board").childNodes,
  );
  aiBoard.forEach((x) => x.remove());
  playerBoard.forEach((x) => x.remove());
};

document.querySelector("button").addEventListener("click", () => {
  removeSquare();
  remakeSquares();
  newGame();
});