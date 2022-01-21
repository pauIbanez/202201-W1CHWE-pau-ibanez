/* eslint-disable import/extensions */
import { drawGrid } from "./drawGrid.js";

const canvas = document.getElementById("canvas");
canvas.height = window.innerHeight / 2;
canvas.width = window.innerWidth / 2;
const ctx = canvas.getContext("2d");

drawGrid(canvas, ctx, 10);

let start;
const getPos = (e) => ({
  x: e.clientX - canvas.offsetLeft,
  y: e.clientY - canvas.offsetTop,
});

const reset = () => {
  start = null;
  ctx.setTransform(1, 0, 0, 1, 0, 0); // reset translation
  drawGrid(canvas, ctx, 10);
};

canvas.addEventListener("mousedown", (e) => {
  reset();
  start = getPos(e);
});

canvas.addEventListener("mouseup", reset);
canvas.addEventListener("mouseleave", reset);

canvas.addEventListener("mousemove", (e) => {
  // Only move the grid when we registered a mousedown event
  if (!start) return;
  const pos = getPos(e);
  // Move coordinate system in the same way as the cursor
  ctx.translate(pos.x - start.x, pos.y - start.y);
  drawGrid(canvas, ctx, 10);
  start = pos;
});
