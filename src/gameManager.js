import Player from "./player";
import GameBoard from "./gameBoard";

let newPlayer = new Player();
let newAi = new Player(true);
let playerBoard = GameBoard();
let aiBoard = GameBoard();

const newGame = () => {
  newPlayer = new Player();
  newAi = new Player(true);
  playerBoard = GameBoard();
  aiBoard = GameBoard();
};

export { newAi, newPlayer, playerBoard, aiBoard, newGame};
