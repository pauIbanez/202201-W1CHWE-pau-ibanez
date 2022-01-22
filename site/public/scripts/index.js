/* eslint-disable import/extensions */
import { drawGrid } from "./drawGrid.js";
import { moveCells, drawCell } from "./drawCell.js";

const canvas = document.getElementById("grid");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const ctx = canvas.getContext("2d");

drawGrid(canvas, ctx, 10);

let cells = [];

cells.push(drawCell(ctx, { x: 15, y: 15 }, 10));

// Grid moving stuff
let startPosition;

const getPos = (event) => ({
  x: event.clientX - canvas.offsetLeft,
  y: event.clientY - canvas.offsetTop,
});

const reset = () => {
  startPosition = null;
  //
  drawGrid(canvas, ctx, 10);

  cells.forEach((cell) => {
    drawCell(ctx, { x: cell.x, y: cell.y }, 10);
  });

  // ctx.setTransform(1, 0, 0, 1, 0, 0);
};

canvas.addEventListener("mousedown", (event) => {
  startPosition = getPos(event);
});

canvas.addEventListener("mouseup", reset);

canvas.addEventListener("mousemove", (event) => {
  // Only move the grid when we registered a mousedown event
  if (!startPosition) return;
  const pos = getPos(event);

  const currentOffset = {
    x: pos.x - startPosition.x,
    y: pos.y - startPosition.y,
  };
  ctx.translate(currentOffset.x, currentOffset.y);
  drawGrid(canvas, ctx, 10);
  const movedCells = moveCells(
    cells,
    pos.x - startPosition.x,
    pos.y - startPosition.y
  );
  startPosition = pos;

  movedCells.forEach((cell) => {
    drawCell(ctx, { x: currentOffset.x, y: currentOffset.y }, 10);
  });

  cells = movedCells;
});
