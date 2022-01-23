/* eslint-disable import/extensions */
import { startDemo } from "./demoRunner.js";

const gridCanvas = document.getElementById("demo-grid-canvas");
gridCanvas.height = 2000;
gridCanvas.width = 2000;
const gridCtx = demoGridCanvas.getContext("2d");

const cellCanvas = document.getElementById("demo-cell-canvas");
cellCanvas.height = 2000;
cellCanvas.width = 2000;
const cellCtx = demoCellCanvas.getContext("2d");

const playButton = document.getElementById("play-button");
const templateButton = document.getElementById("template-button");

const cellSize = 20;
const currentPlayAction = 1;

const demoId = startDemo(gridCanvas, gridCtx, cellCanvas, cellCtx, cellSize);

playButton.addEventListener("click", () => {
  switch (currentPlayAction) {
    case 1:
      break;

    case 2:
      break;

    default:
      break;
  }
});

templateButton.addEventListener("click", () => {});
