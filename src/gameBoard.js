import Ship from "./ship";

export default class GameBoard {
  constructor() {
    this.ships = [];
    this.missedAttacks = [];
    this.hitShipsAttacks = [];
    this.allShipCoordinates = [];
  }

  specificShipCoodinates(coordinate, length) {
    const coordinates = [];
    if (length > 1) {
      for (let i = 0; i < length; i += 1) {
        if (i < length / 2)
          coordinates.unshift([
            Number(coordinate[0]) + -i,
            Number(coordinate[1]),
          ]);
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
          object.coordinates.unshift([
            Number(coordinate[0]) + -i,
            Number(coordinate[1]),
          ]);
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
    this.allShipCoordinates.push(...object.coordinates);
    this.allShipCoordinates.forEach((x) => {
      if (Number(x[0]) < 1 || Number(x[0]) > 8)
        this.allShipCoordinates.splice(this.allShipCoordinates.indexOf(x), 2);
    });
    // this here the splicing of the last element the the array isn't work in the forEach
    if (
      this.allShipCoordinates[this.allShipCoordinates.length - 1][0] < 1 ||
      this.allShipCoordinates[this.allShipCoordinates.length - 1][0] > 8
    )
      this.allShipCoordinates.splice(this.allShipCoordinates.length - 1, 1);
  }

  recieveAttack(coordinate) {
    let contains = false;
    this.ships.forEach((x) => {
      x.coordinates.forEach((y) => {
        if (
          Number(y[0]) === Number(coordinate[0]) &&
          Number(y[1]) === Number(coordinate[1])
        ) {
          if (!`${this.hitShipsAttacks}`.includes(`${coordinate}`)) {
            this.hitShipsAttacks.push(coordinate);
            contains = true;
          }
          // eslint-disable-next-line no-useless-return
          return;
        }
      });
    });
    if (!contains) this.missedAttacks.push(coordinate);
  }

  haveLost() {
    console.clear();
    console.log(this.hitShipsAttacks);
    console.log(this.allShipCoordinates);
    if (this.hitShipsAttacks.length === this.allShipCoordinates.length)
      return true;
    return false;
  }
}
