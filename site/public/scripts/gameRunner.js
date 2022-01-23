/* eslint-disable import/extensions */
import { calculateNextGen } from "./gameStateCalculator.js";
import { drawCell } from "./cellRendering.js";
import { watchlistGenerator } from "./watchlist.js";

const runNextGen = (cells, cellsPositions, ctx, canvas) => {
  const { cellSize } = cells[0];
  const nextGenCells = calculateNextGen(cells, cellsPositions);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const cell of nextGenCells) {
    drawCell(ctx, cell, cellSize);
  }
  return nextGenCells;
};

const runGame = (ctx, canvas, cellPositions, cells, cellSize, speed) => {
  const intervalId = setInterval(() => {
    cells = watchlistGenerator(cellPositions, cellSize);
    cellPositions = runNextGen(cells, cellPositions, ctx, canvas);
  }, speed);
  return intervalId;
};

export default runGame;
export { runGame };
