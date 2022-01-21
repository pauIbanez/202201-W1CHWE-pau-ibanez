/* eslint-disable import/extensions */
import { drawGrid } from "./drawGrid.js";

const canvas = document.getElementById("canvas");
canvas.height = window.innerHeight / 2;
canvas.width = window.innerWidth / 2;
const ctx = canvas.getContext("2d");

drawGrid(canvas, ctx, 10);

// Grid moving stuff
let startPosition;
const getPos = (event) => ({
  x: event.clientX - canvas.offsetLeft,
  y: event.clientY - canvas.offsetTop,
});

const reset = () => {
  startPosition = null;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  drawGrid(canvas, ctx, 10);
};

canvas.addEventListener("mousedown", (event) => {
  reset();
  startPosition = getPos(event);
});

canvas.addEventListener("mouseup", reset);

canvas.addEventListener("mousemove", (event) => {
  // Only move the grid when we registered a mousedown event
  if (!startPosition) return;
  const pos = getPos(event);
  // Move coordinate system in the same way as the cursor
  ctx.translate(pos.x - startPosition.x, pos.y - startPosition.y);
  drawGrid(canvas, ctx, 10);
  startPosition = pos;
});
