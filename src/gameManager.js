import AI from "./ai";
import GameBoard from "./gameBoard";
import {
  updateAiBoardsHitTargets,
  updateAiBoardsMissedShots,
  updatePlayerBoardsHitTargets,
  updatePlayerBoardsMissedShots,
  displayPlayerShips,
  displayHoveringShips,
  displayWinner,
} from "./DOMinteractions";

let playerGameBoard = new GameBoard();
let botGameBoard = new GameBoard();
const botPlayer = new AI();

const randomCoordNumber = (max) => {
  const num = Math.floor(Math.random() * max);
  if (num <= 0) return 1;
  return num;
};

export const newGame = () => {
  playerGameBoard = new GameBoard();
  botGameBoard = new GameBoard();
};

export const attackBoard = (coordinate) => {
  if (playerGameBoard.ships.length === 4) {
    if (!botGameBoard.haveLost() && !playerGameBoard.haveLost()) {
      botGameBoard.recieveAttack(coordinate);
      playerGameBoard.recieveAttack(botPlayer.aiShot(playerGameBoard));
      updateAiBoardsMissedShots(botGameBoard.missedAttacks);
      updateAiBoardsHitTargets(botGameBoard.hitShipsAttacks);

      updatePlayerBoardsHitTargets(playerGameBoard.hitShipsAttacks);
      updatePlayerBoardsMissedShots(playerGameBoard.missedAttacks);
    }
    if (botGameBoard.haveLost()) displayWinner("You");
    if (playerGameBoard.haveLost()) displayWinner("CPU");
  }
  console.log(botGameBoard.allShipCoordinates);
  console.log(botGameBoard.hitShipsAttacks);
};

export const placePlayerShips = (coordinate) => {
  if (playerGameBoard.ships.length < 4) {
    playerGameBoard.placeShip(coordinate, playerGameBoard.ships.length + 1);
    botGameBoard.placeShip(coordinate, botGameBoard.ships.length + 1);
    displayPlayerShips(playerGameBoard.allShipCoordinates);
  }
};

export const displayHoveringPlayerShips = (coordinate) => {
  if (playerGameBoard.ships.length < 4) {
    displayHoveringShips(
      playerGameBoard.specificShipCoodinates(
        coordinate,
        playerGameBoard.ships.length + 1,
      ),
    );
  }
};
