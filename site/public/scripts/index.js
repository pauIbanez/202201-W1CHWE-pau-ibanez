/* eslint-disable import/extensions */
import { startDemo, stopDemo } from "./demoRunner.js";
import { setMouseAction, mouseMoving } from "./canvasMover.js";
import { drawGrid } from "./drawGrid.js";

const gridCanvas = document.getElementById("grid-canvas");
gridCanvas.height = 2000;
gridCanvas.width = 2000;
const gridCtx = gridCanvas.getContext("2d");

const cellCanvas = document.getElementById("cell-canvas");
cellCanvas.height = 2000;
cellCanvas.width = 2000;
const cellCtx = cellCanvas.getContext("2d");

const playButton = document.getElementById("play-button");
const templateButton = document.getElementById("template-button");
const mainUI = document.getElementById("main-ui");

let paused = false;
const cellSize = 20;
const currentPlayAction = 1;

const demoId = startDemo(gridCanvas, gridCtx, cellCanvas, cellCtx, cellSize);

playButton.addEventListener("click", () => {
  switch (currentPlayAction) {
    case 1:
      stopDemo(demoId, cellCtx, cellCanvas);
      paused = true;
      mainUI.classList.add("start-hide");
      drawGrid(gridCanvas, gridCtx, cellSize);
      break;

    case 2:
      break;

    default:
      break;
  }
});

templateButton.addEventListener("click", () => {});

gridCanvas.addEventListener("mousedown", (event) => {
  console.log("Cliek");
  setMouseAction(true, 1, event);
});

gridCanvas.addEventListener("mouseup", (event) => {
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

gridCanvas.addEventListener("mouseleave", () => {
  setMouseAction(undefined, 2);
});

gridCanvas.addEventListener("mousemove", (event) => {
  mouseMoving(event);
});
