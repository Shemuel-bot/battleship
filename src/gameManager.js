import AI from './ai';
import GameBoard from "./gameBoard";
import {
  updateAiBoardsHitTargets,
  updateAiBoardsMissedShots,
  updatePlayerBoardsHitTargets,
  updatePlayerBoardsMissedShots,
  displayPlayerShips,
  displayHoveringShips,
  displayWinner
} from "./DOMinteractions";

let playerGameBoard = new GameBoard();
let botGameBoard = new GameBoard();
const botPlayer = new AI(true);

const randomCoordNumber = () => {
  const num = Math.floor(Math.random() * 8);
  if (num <= 0) return 1;
  return num;
};

const placeBotShips = () => {
  botGameBoard.placeShip([randomCoordNumber(), randomCoordNumber()], 1);
  botGameBoard.placeShip([5, randomCoordNumber()], 4);
  botGameBoard.placeShip([4, randomCoordNumber()], 3);
  botGameBoard.placeShip([7, randomCoordNumber()], 2);
};

export const newGame = () => {
  playerGameBoard = new GameBoard();
  botGameBoard = new GameBoard();
  placeBotShips();
};

export const attackBoard = (coordinate) => {
  if (!botGameBoard.haveLost() && !playerGameBoard.haveLost()) {
    botGameBoard.recieveAttack(coordinate);
    playerGameBoard.recieveAttack(botPlayer.aiShot(playerGameBoard));
    updateAiBoardsMissedShots(botGameBoard.missedAttacks);
    updateAiBoardsHitTargets(botGameBoard.hitShipsAttacks);

    updatePlayerBoardsHitTargets(playerGameBoard.hitShipsAttacks);
    updatePlayerBoardsMissedShots(playerGameBoard.missedAttacks);
  }
  if(botGameBoard.haveLost())
        displayWinner('You')
  if(playerGameBoard.haveLost())
        displayWinner('CPU')
};

export const placePlayerShips = (coordinate) => {
  if (playerGameBoard.ships.length < 4) {
    playerGameBoard.placeShip(coordinate, playerGameBoard.ships.length + 1);
    displayPlayerShips(playerGameBoard.allShipCoordinates);
  }
};

export const displayHoveringPlayerShips = (coordinate) =>{
    if (playerGameBoard.ships.length < 4) {
        displayHoveringShips(playerGameBoard.specificShipCoodinates(coordinate, playerGameBoard.ships.length + 1))
    }
}
