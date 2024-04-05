class AI {
  constructor(bot = false) {
    this.bot = bot;
  }

  allBoardCoordinates(){
    const positions = [];
    let y = 8;
    let x = 1;
    for (let i = 0; i < 64; i+=1) {
        if (x > 8) {
            y -= 1;
            x = 1;
        }
        positions.push([x, y])
        x+=1;
    }
    return positions;
  }

  IndexOf(positions, element){
    for (let i = 0; i < positions.length; i+=1) {
      if(`${positions[i]}` === `${element}`)
        return i
    }
  }

  aiShot(board) {
    const positions = this.allBoardCoordinates();
    console.clear()
    board.missedAttacks.forEach(element => {
      if(`${positions}`.includes(`${element}`)){
        positions.splice(this.IndexOf(positions, element), 1)
      }
    });
    board.hitShipsAttacks.forEach(element => {
      if(`${positions}`.includes(`${element}`)){
        positions.splice(this.IndexOf(positions, element), 1)
      }
    });
    return positions[Math.floor(Math.random() * positions.length)];
  }

  
}
export default AI;
