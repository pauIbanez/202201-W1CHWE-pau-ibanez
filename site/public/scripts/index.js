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

const cells = [];

cells.push(drawCell(cellCtx, { x: 15, y: 15 }, 10));

// Grid moving stuff
let prevPosition;
let prevMousePos;

const getPos = (event) => ({
  x: event.clientX + canvas.offsetLeft,
  y: event.clientY + canvas.offsetTop,
});

const getMousePos = (event) => ({
  x: event.clientX,
  y: event.clientY,
});

const reset = () => {
  // console.log(prevPosition);
  prevMousePos = null;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  drawGrid(canvas, ctx, 10);

  // cells.forEach((cell) => {
  //   drawCell(cellCtx, { x: cell.x, y: cell.y }, 10);
  // });
};

canvas.addEventListener("mousedown", (event) => {
  // prevPosition = getPos(event);
  // console.log(prevPosition);
  prevMousePos = getMousePos(event);
});

canvas.addEventListener("mouseup", reset);
canvas.addEventListener("mouseleave", reset);

canvas.addEventListener("mousemove", (event) => {
  // Only move the grid when we registered a mousedown event
  if (!prevMousePos) return;

  const mousePosThisFrame = getMousePos(event);

  // const positionThisFrame = getPos(event);
  // console.log(event.clientX, event.clientY);
  // console.log(positionThisFrame);
  const mouseFrameOffset = {
    x: mousePosThisFrame.x - prevMousePos.x,
    y: mousePosThisFrame.y - prevMousePos.y,
  };

  console.log(mouseFrameOffset);
  ctx.translate(mouseFrameOffset.x, mouseFrameOffset.y);

  drawGrid(canvas, ctx, 10);
  // const movedCells = moveCells(cells, currentOffset.x, currentOffset.y);
  prevMousePos = mousePosThisFrame;

  // movedCells.forEach((cell) => {
  //    drawCell(ctx, { x: currentOffset.x, y: currentOffset.y }, 10);
  // });

  // cells = movedCells;
});
