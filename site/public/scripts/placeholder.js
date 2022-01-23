/* eslint-disable import/extensions */
import { drawGrid } from "./drawGrid.js";
import { moveCells, drawCell } from "./cellRendering.js";
import { getGridAlignedCoords } from "./gridCoordenates.js";
import { runNextGen } from "./gameRunner.js";
import { watchlistGenerator } from "./watchlist.js";
// import { scaleCanvas } from "./scaleHandler.js";

const canvas = document.getElementById("grid");
canvas.height = 2000;
canvas.width = 2000;
const ctx = canvas.getContext("2d");
canvas.style.cursor = "pointer";

const cellCanvas = document.getElementById("canvas");
cellCanvas.height = 2000;
cellCanvas.width = 2000;
const cellCtx = cellCanvas.getContext("2d");

const paused = true;

const cellSize = 20;

drawGrid(canvas, ctx, cellSize);

let cellsPositions = [];
let cells = [];

// const firstCell = getGridAlignedCoords({ x: 15, y: 15 });
// cellsPositions.push(drawCell(cellCtx, firstCell, 10));

let prevMousePos;
let mouseDown = false;
let moving = false;

const getMousePos = (event) => ({
  x: event.clientX,
  y: event.clientY,
});

const reset = () => {
  moving = false;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  drawGrid(canvas, ctx, cellSize);
  cellCtx.clearRect(0, 0, cellCanvas.width, cellCanvas.height);

  cellsPositions = cellsPositions.map((cell) =>
    drawCell(cellCtx, getGridAlignedCoords(cell, cellSize), cellSize)
  );
};

canvas.addEventListener("mousedown", (event) => {
  prevMousePos = getMousePos(event);
  mouseDown = true;
});

canvas.addEventListener("mouseup", (event) => {
  mouseDown = false;
  canvas.style.cursor = "pointer";

  if (!moving && paused) {
    const clientInstanciatedCell = getGridAlignedCoords(
      {
        x: event.clientX,
        y: event.clientY,
      },
      cellSize
    );

    const dupped = cellsPositions.some(
      (cell) =>
        cell.x === clientInstanciatedCell.x &&
        cell.y === clientInstanciatedCell.y
    );

    if (!dupped) {
      cellsPositions.push(drawCell(cellCtx, clientInstanciatedCell, cellSize));
    }
  }

  reset();
});
canvas.addEventListener("mouseleave", () => {
  if (moving) reset();
});

canvas.addEventListener("mousemove", (event) => {
  if (!mouseDown) return;
  moving = true;
  canvas.style.cursor = "grabbing";
  const mousePosThisFrame = getMousePos(event);

  // const positionThisFrame = getPos(event);
  // console.log(event.clientX, event.clientY);
  // console.log(positionThisFrame);
  const mouseFrameOffset = {
    x: mousePosThisFrame.x - prevMousePos.x,
    y: mousePosThisFrame.y - prevMousePos.y,
  };

  // console.log(mouseFrameOffset);
  ctx.translate(mouseFrameOffset.x, mouseFrameOffset.y);

  drawGrid(canvas, ctx, cellSize);
  const movedCells = moveCells(
    cellsPositions,
    mouseFrameOffset.x,
    mouseFrameOffset.y
  );
  prevMousePos = mousePosThisFrame;

  cellCtx.clearRect(0, 0, cellCanvas.width, cellCanvas.height);
  movedCells.forEach((cell) => {
    drawCell(
      cellCtx,
      { x: cell.x + mouseFrameOffset.x, y: cell.y + mouseFrameOffset.y },
      cellSize,
      false
    );
  });

  cellsPositions = movedCells;
});

const playAtCurrentState = (speed) => {
  const intervalId = setInterval(() => {
    cells = watchlistGenerator(cellsPositions, cellSize);
    cellsPositions = runNextGen(cells, cellsPositions, cellCtx, cellCanvas);
    console.log(cellsPositions);
  }, speed);
  return intervalId;
};
const pauseId = playAtCurrentState(20000);

export default pauseId;
export { pauseId };
