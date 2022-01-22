/* eslint-disable import/extensions */
import { drawGrid } from "./drawGrid.js";
import { moveCells, drawCell } from "./cellRendering.js";
import { getGridAlignedCoords } from "./gridCoordenates.js";
import { runNextGen } from "./gameRunner.js";
import { watchlistGenerator } from "./watchlist.js";

const canvas = document.getElementById("grid");
canvas.height = 2000;
canvas.width = 2000;
const ctx = canvas.getContext("2d");

const cellCanvas = document.getElementById("canvas");
cellCanvas.height = 2000;
cellCanvas.width = 2000;
const cellCtx = cellCanvas.getContext("2d");

let paused = true;

drawGrid(canvas, ctx, 10);

let cells = [];

const firstCell = getGridAlignedCoords({ x: 15, y: 15 });
cells.push(drawCell(cellCtx, firstCell, 10));

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
  drawGrid(canvas, ctx, 10);
  cellCtx.clearRect(0, 0, cellCanvas.width, cellCanvas.height);

  cells = cells.map((cell) =>
    drawCell(cellCtx, getGridAlignedCoords(cell), 10)
  );
};

canvas.addEventListener("mousedown", (event) => {
  prevMousePos = getMousePos(event);
  mouseDown = true;
});

canvas.addEventListener("mouseup", (event) => {
  mouseDown = false;

  if (!moving && paused) {
    const clientInstanciatedCell = getGridAlignedCoords({
      x: event.clientX,
      y: event.clientY,
    });

    const dupped = cells.some(
      (cell) =>
        cell.x === clientInstanciatedCell.x &&
        cell.y === clientInstanciatedCell.y
    );

    if (!dupped) {
      cells.push(drawCell(cellCtx, clientInstanciatedCell, 10));
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

  drawGrid(canvas, ctx, 10);
  const movedCells = moveCells(cells, mouseFrameOffset.x, mouseFrameOffset.y);
  prevMousePos = mousePosThisFrame;

  cellCtx.clearRect(0, 0, cellCanvas.width, cellCanvas.height);
  movedCells.forEach((cell) => {
    drawCell(
      cellCtx,
      { x: cell.x + mouseFrameOffset.x, y: cell.y + mouseFrameOffset.y },
      10,
      false
    );
  });

  cells = movedCells;
});

const run = (cellsList) => {
  setTimeout(() => {
    paused = false;
    runNextGen(watchlistGenerator(cellsList), cellCtx);
    console.log("Loaded next gen");
  }, 5000);
};

run(cells);
