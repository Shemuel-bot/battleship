import Ship from "./ship";

class GameBoard {
  constructor() {
    this.ships = [];
    this.missedAttacks = [];
  }

  placeShip(coordinate, length) {
    const object = {};
    object.ship = new Ship(length);
    object.coordinates = [];

    if (length > 1) {
      for (let i = 0; i < length; i += 1) {
        if (i < length / 2)
          object.coordinates.unshift([coordinate[0] + -i, coordinate[1]]);
        else {
          const array = [];
          object.coordinates.forEach((x) => {
            array.push(x[0]);
          });
          object.coordinates.push([Math.max(...array) + 1, coordinate[1]]);
        }
      }
    } else if (length === 1) object.coordinates.push(coordinate);

    this.ships.push(object);
  }

  recieveAttack(coordinate) {
    this.ships.forEach((x) => {
      if (
        x.coordinates[this.ships.indexOf(x)][0] === coordinate[0] &&
        x.coordinates[this.ships.indexOf(x)][1] === coordinate[1]
      )
        x.ship.hit();
    else
        this.missedAttacks.push(coordinate)

    });
  }

  haveLost(){
    let sunk = false;
    this.ships.forEach((x)=>{
        if(x.ship.sunk)
            sunk = true;
        else
            sunk = false
    })
    return sunk
  }
}
export default GameBoard;
