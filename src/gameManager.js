import Player from "./player";
import GameBoard from "./gameBoard";
import {
  updateAiBoardsHitTargets,
  updateAiBoardsMissedShots,
  updatePlayerBoardsHitTargets,
  updatePlayerBoardsMissedShots,
  displayPlayerShips,
  displayHoveringShips
} from "./DOMinteractions";

let playerGameBoard = new GameBoard();
let botGameBoard = new GameBoard();
const botPlayer = new Player(true);

const randomCoordNumber = () => {
  const num = Math.floor(Math.random() * 7);
  if (num <= 0) return 1;
  return num;
};

const placeBotShips = () => {
  botGameBoard.placeShip([randomCoordNumber(), randomCoordNumber()], 1);
  botGameBoard.placeShip([5, randomCoordNumber()], 4);
  botGameBoard.placeShip([4, randomCoordNumber()], 3);
  botGameBoard.placeShip([7, randomCoordNumber()], 2);
};

const newGame = () => {
  playerGameBoard = new GameBoard();
  botGameBoard = new GameBoard();
  placeBotShips();
};

const attackBoard = (coordinate) => {
    
  if (!botGameBoard.haveLost() && !playerGameBoard.haveLost()) {
    botGameBoard.recieveAttack(coordinate);
    playerGameBoard.recieveAttack(botPlayer.aiShot(playerGameBoard));
    updateAiBoardsMissedShots(botGameBoard.missedAttacks);
    updateAiBoardsHitTargets(botGameBoard.hitShipsAttacks);

    updatePlayerBoardsHitTargets(playerGameBoard.hitShipsAttacks);
    updatePlayerBoardsMissedShots(playerGameBoard.missedAttacks);
  }
};

const placePlayerShips = (coordinate) => {
  if (playerGameBoard.ships.length < 4) {
    playerGameBoard.placeShip(coordinate, playerGameBoard.ships.length + 1);
    displayPlayerShips(playerGameBoard.allShipCoordinates);
  }
};

const displayHoveringPlayerShips = (coordinate) =>{
    if (playerGameBoard.ships.length < 4) {
        displayHoveringShips(playerGameBoard.specificShipCoodinates(coordinate, playerGameBoard.ships.length + 1))
    }
}

export { attackBoard, newGame, placePlayerShips, displayHoveringPlayerShips};