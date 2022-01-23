/* eslint-disable import/extensions */
import { calculateNextGen } from "./gameStateCalculator.js";
import { drawCell } from "./cellRendering.js";
import { watchlistGenerator } from "./watchlist.js";
import { cellPositions, updateCellPositions } from "./canvasMover.js";

let genCellPositions = [];

const clearCanvas = () => {
  genCellPositions = [];
};

const runNextGen = (cells, cellsPositions, ctx, canvas) => {
  const { cellSize } = cells[0];
  const nextGenCells = calculateNextGen(cells, cellsPositions);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const cell of nextGenCells) {
    drawCell(ctx, cell, cellSize);
  }
  return nextGenCells;
};

const runGame = (ctx, canvas, cellSize, speed) => {
  let newCells = [];
  genCellPositions = cellPositions;
  const intervalId = setInterval(() => {
    newCells = watchlistGenerator(genCellPositions, cellSize);
    genCellPositions = runNextGen(newCells, genCellPositions, ctx, canvas);
    updateCellPositions(genCellPositions);
  }, speed);

  return intervalId;
};

const stopGame = (gameId) => {
  clearInterval(gameId);
};

export default runGame;
export { runGame, clearCanvas, stopGame, runNextGen };
