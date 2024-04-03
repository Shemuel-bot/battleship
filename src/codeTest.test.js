/* eslint-disable no-undef */
import Ship from './ship';
import GameBoard from './gameBoard'
import Player from './player'

test('checks if Ship hit function works', ()=>{
    const battleShip = new Ship(5);
    battleShip.hit();
    expect(battleShip.hits).toBe(1);
})
test('test if isSunk function on Ship works', ()=>{
    const battleShip = new Ship(5);
    battleShip.hit();
    battleShip.hit();
    battleShip.hit();
    battleShip.hit();
    battleShip.hit();
    expect(battleShip.sunk).toBe(true)
})

test('test if gameBoard can place ships', ()=>{
    const Board = new GameBoard();
    Board.placeShip([4, 4], 4);
    expect(Board.ships).toEqual([
        {
            ship: new Ship(4),
            coordinates:[[3,4],[4, 4],[5,4],[6, 4]]
        }
    ]);
})
test('test if recieveAttack function works', ()=>{
    const Board = new GameBoard();
    Board.placeShip([4,4],1)
    Board.recieveAttack([4,4]);
    expect(Board.ships[0].ship.sunk).toBe(true);
})
test('test if recieveAttack function stores missed attacks', ()=>{
    const Board = new GameBoard();
    Board.placeShip([4,4],1)
    Board.recieveAttack([5,4]);
    expect(Board.missedAttacks).toEqual([
        [5,4]
    ]);
})
test('test if gameboard can check all boats are sunk', ()=>{
    const Board = new GameBoard();
    Board.placeShip([4,4],1)
    Board.recieveAttack([4,4]);
    expect(Board.haveLost()).toBe(true);
})

test('checks if player bot works', ()=>{
    const newPlayer = new Player(true);
    const Board = new GameBoard();
    expect(newPlayer.aiShot(Board)).not.toBeUndefined()
})
test('checks if player bot works', ()=>{
    const newPlayer = new Player(true);
    const Board = new GameBoard();
    Board.recieveAttack([4, 4]);
    expect(newPlayer.aiShot(Board)).not.toEqual([4, 4])
})
test('checks if player bot works', ()=>{
    const newPlayer = new Player(true);
    const Board = new GameBoard();
    Board.recieveAttack([6, 2]);
    expect(newPlayer.aiShot(Board)).not.toEqual([6, 2])
})
test('checks if player bot works', ()=>{
    const newPlayer = new Player(true);
    const Board = new GameBoard();
    Board.recieveAttack([2, 4]);
    expect(newPlayer.aiShot(Board)).not.toEqual([2, 4])
})