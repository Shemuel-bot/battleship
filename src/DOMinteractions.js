const remakeSquares = ()=>{
    for (let i = 0; i < 64; i+=1) {
        const square0 = document.createElement('div');
        const square1 = document.createElement('div');

        square0.style.width = '40px';
        square0.style.height = '40px';
        square1.style.width = '40px';
        square1.style.height = '40px';
        document.getElementById('ai-board').appendChild(square0);
        document.getElementById('player-board').appendChild(square1);
    }
}

document.querySelector('button').addEventListener('click', ()=>remakeSquares())
const removeSquare = ()=>{

}
export {remakeSquares, removeSquare}
