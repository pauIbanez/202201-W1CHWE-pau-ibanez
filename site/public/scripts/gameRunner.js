/* eslint-disable import/extensions */
import { calculateNextGen } from "./gameStateCalculator.js";
import { drawCell } from "./cellRendering.js";

const runNextGen = (cells, cellsPositions, ctx, canvas) => {
  console.log(cellsPositions);
  const { cellSize } = cells[0];
  const nextGenCells = calculateNextGen(cells, cellsPositions);
  console.log(nextGenCells);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const cell of nextGenCells) {
    drawCell(ctx, cell, cellSize);
    console.log("Drawing cell");
  }
};

export default runNextGen;
export { runNextGen };
