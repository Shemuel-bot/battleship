import Ship from "./ship";

class GameBoard {
  constructor() {
    this.ships = [];
    this.missedAttacks = [];
    this.hitShipsAttacks = [];
    this.allShipCoordinates = []
  }

  specificShipCoodinates(coordinate, length){
    const coordinates = []
    if (length > 1) {
        for (let i = 0; i < length; i += 1) {
          if (i < length / 2)
            coordinates.unshift([Number(coordinate[0]) + -i, Number(coordinate[1])]);
          else {
            const array = [];
            coordinates.forEach((x) => {
              array.push(x[0]);
            });
            coordinates.push([Math.max(...array) + 1, coordinate[1]]);
          }
        }
      } else if (length === 1) coordinates.push(coordinate);
      return coordinates;
  }

  placeShip(coordinate, length) {
    const object = {};
    object.ship = new Ship(length);
    object.coordinates = [];

    if (length > 1) {
      for (let i = 0; i < length; i += 1) {
        if (i < length / 2)
          object.coordinates.unshift([Number(coordinate[0]) + -i, Number(coordinate[1])]);
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
    this.allShipCoordinates.push(...object.coordinates)
  }

  eraseAllShipPlacements(){
    this.allShipCoordinates = []
    this.ships = []
  }

  recieveAttack(coordinate) {
    let contains = false
    this.ships.forEach((x) => {
      x.coordinates.forEach((y)=>{
        if(y[0] === Number(coordinate[0]) && y[1] === Number(coordinate[1])){
            x.ship.hit();
            this.hitShipsAttacks.push(coordinate);
            contains = true
            // eslint-disable-next-line no-useless-return
            return;
        }
      })
    });     
    if(!contains)this.missedAttacks.push(coordinate);
  }

  haveLost() {
    let sunk = false;
    this.ships.forEach((x) => {
      if (x.ship.sunk) sunk = true;
      else sunk = false;
    });
    return sunk;
  }
}
export default GameBoard;
