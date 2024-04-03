class Player {
  constructor(bot = false) {
    this.bot = bot;
  }


  aiShot(board) {
    let random = [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)];
    if(random[0] <= 0) random[0] = 1;
    if(random[1] <= 0) random[1] = 1;
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
