/* eslint-disable import/extensions */
import { drawGrid } from "./drawGrid.js";
import { moveCells, drawCell } from "./drawCell.js";

const canvas = document.getElementById("grid");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const ctx = canvas.getContext("2d");

const cellCanvas = document.getElementById("canvas");
cellCanvas.height = window.innerHeight;
cellCanvas.width = window.innerWidth;
const cellCtx = cellCanvas.getContext("2d");

drawGrid(canvas, ctx, 10);

let cells = [];

cells.push(drawCell(cellCtx, { x: 15, y: 15 }, 10, true));

let prevMousePos;
let moving = false;

const getMousePos = (event) => ({
  x: event.clientX,
  y: event.clientY,
});

const reset = () => {
  // prevMousePos = null;
  moving = false;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  drawGrid(canvas, ctx, 10);

  cells.forEach((cell) => {
    drawCell(cellCtx, { x: cell.x, y: cell.y }, 10, false);
  });
};

canvas.addEventListener("mousedown", (event) => {
  prevMousePos = getMousePos(event);
  moving = true;
});

canvas.addEventListener("mouseup", reset);
canvas.addEventListener("mouseleave", reset);

canvas.addEventListener("mousemove", (event) => {
  if (!moving) return;

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
