/* eslint-disable import/extensions */
import { calculateNextGen } from "./gameStateCalculator.js";
import { drawCell } from "./cellRendering";

const runNextGen = (cells, ctx) => {
  const nextGenCells = calculateNextGen(cells);
  setTimeout(() => {
    for (const cell of nextGenCells) {
      drawCell(ctx, cell.origin, cell.cellSize);
    }
  }, 500);
};

export default runNextGen;
export { runNextGen };
