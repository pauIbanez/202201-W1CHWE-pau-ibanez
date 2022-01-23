/* eslint-disable import/extensions */
import { drawGrid } from "./drawGrid.js";
import { moveCells, drawCell } from "./cellRendering.js";
import { getGridAlignedCoords } from "./gridCoordenates.js";
import { setMouseAction, reset, mouseMoving } from "./canvasMover.js";
// import { runNextGen } from "./gameRunner.js";
// import { watchlistGenerator } from "./watchlist.js";
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

canvas.addEventListener("mousedown", (event) => {
  setMouseAction(true, 1, event);
});

canvas.addEventListener("mouseup", (event) => {
  setMouseAction(
    false,
    1,
    event,
    gridCtx,
    gridCanvas,
    cellCtx,
    cellCanvas,
    paused
  );
});

canvas.addEventListener("mouseleave", () => {
  setMouseAction(undefined, 2);
});

canvas.addEventListener("mousemove", (event) => {
  mouseMoving(event);
});
