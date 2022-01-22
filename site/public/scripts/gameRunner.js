/* eslint-disable import/extensions */
import { calculateNextGen } from "./gameStateCalculator.js";
import { drawCell } from "./cellRendering.js";

const runNextGen = (cells, ctx) => {
  const nextGenCells = calculateNextGen(cells);
  // setTimeout(() => {
  for (const cell of nextGenCells) {
    drawCell(ctx, cell.origin, cell.cellSize);
    console.log("Drawing cell");
  }
  // }, 500);
};

export default runNextGen;
export { runNextGen };
