/* eslint-disable import/extensions */
import { calculateNextGen } from "./gameStateCalculator.js";
import { drawCell } from "./cellRendering.js";
import { watchlistGenerator } from "./watchlist.js";

let genCellPositions = [];

const runNextGen = (cells, cellsPositions, ctx, canvas) => {
  const { cellSize } = cells[0];
  const nextGenCells = calculateNextGen(cells, cellsPositions);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const cell of nextGenCells) {
    drawCell(ctx, cell, cellSize);
  }
  return nextGenCells;
};

const runGame = (ctx, canvas, cellPositions, cellSize, speed) => {
  let newCells = [];
  genCellPositions = cellPositions;
  const intervalId = setInterval(() => {
    newCells = watchlistGenerator(genCellPositions, cellSize);
    genCellPositions = runNextGen(newCells, genCellPositions, ctx, canvas);
  }, speed);

  console.log("Returning");
  return intervalId;
};

export default runGame;
export { runGame };
