import Player from "./player";
import GameBoard from "./gameBoard";

const player0 = new Player();
const bot = new Player(true);

const playerGameBoard = new GameBoard();
const botGameBOard = new GameBoard();

while(true){
    if(!player0.myTurn && bot.myTurn){
        playerGameBoard.recieveAttack(bot.aiShot(playerGameBoard))
    }
}

