/* eslint-disable no-undef */
import Ship from './ship';

test('checks if ship hit function works', ()=>{
    const battleShip = new Ship(5);
    battleShip.hit();
    expect(battleShip.hits).toBe(1);
})
test('test if isSunk function on ship works', ()=>{
    const battleShip = new Ship(5);
    battleShip.hit();
    battleShip.hit();
    battleShip.hit();
    battleShip.hit();
    battleShip.hit();
    expect(battleShip.sunk).toBe(true)
})