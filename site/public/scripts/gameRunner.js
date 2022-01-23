/* eslint-disable import/extensions */
import { calculateNextGen } from "./gameStateCalculator.js";
import { drawCell } from "./cellRendering.js";
import { watchlistGenerator } from "./watchlist.js";
import { cellPositions, updateCellPositions } from "./canvasMover.js";

let genCellPositions = [];

let generationCounter = 0;
let currentLivingCells = 0;
let totalCells = 0;

const generationCounterText = document.getElementById("generationCounter");
const currentCellsCounterText = document.getElementById("currentCellsCounter");
const totalCellsCounterText = document.getElementById("totalCellsCounter");

const runNextGen = (cells, cellsPositions, ctx, canvas) => {
  const { cellSize } = cells[0];
  const nextGenCells = calculateNextGen(cells, cellsPositions);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const cell of nextGenCells) {
    drawCell(ctx, cell, cellSize);
  }
  return nextGenCells;
};

const stopGame = (gameId) => {
  clearInterval(gameId);
};

const updateCounters = () => {
  generationCounterText.innerText = generationCounter;
  currentCellsCounterText.innerText = currentLivingCells;
  totalCellsCounterText.innerText = totalCells;
};

const runGame = (ctx, canvas, cellSize, speed) => {
  let newCells = [];
  genCellPositions = cellPositions;
  return setInterval(() => {
    if (genCellPositions.length === 0) {
      return;
    }
    newCells = watchlistGenerator(genCellPositions, cellSize);
    genCellPositions = runNextGen(newCells, genCellPositions, ctx, canvas);
    updateCellPositions(genCellPositions);
    updateCounters();

    generationCounter += 1;
    currentLivingCells = genCellPositions.length;
    totalCells += currentLivingCells;
  }, speed);
};

const clearCanvas = () => {
  genCellPositions = [];
  generationCounter = 0;
  currentLivingCells = 0;
  totalCells = 0;
  updateCounters();
};

export default runGame;
export { runGame, clearCanvas, stopGame, runNextGen };
