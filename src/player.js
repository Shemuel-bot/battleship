class Player {
  constructor(bot = false) {
    this.myTurn = true;
    this.bot = bot;
  }

  switchTurns() {
    this.myTurn ? (this.myTurn = false) : (this.myTurn = true);
  }

  aiShot(board) {
    let random = [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)];
    board.missedAttacks.forEach((x) => {
      if (x[0] === random[0] && x[1] === random[1])
        random = [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)];
      if (x[0] === random[0] && x[1] === random[1])
        random = [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)];
    });
    return random;
  }
}
export default Player;
