const remakeSquares = () => {
  let y = 8;
  let x = 1;
  for (let i = 0; i < 64; i += 1) {
    if (x > 8) {
      y -= 1;
      x = 1;
    }
    const square0 = document.createElement("div");
    const square1 = document.createElement("div");

    square0.id = `${[x, y]}`;
    square1.id = `${[x, y]}`;
    x += 1;

    square0.style.width = "40px";
    square0.style.height = "40px";
    square1.style.width = "40px";
    square1.style.height = "40px";

    document.getElementById("ai-board").appendChild(square0);
    document.getElementById("player-board").appendChild(square1);
  }
};

document
  .querySelector("button")
  .addEventListener("click", () => remakeSquares());
const removeSquare = () => {};
export { remakeSquares, removeSquare };
