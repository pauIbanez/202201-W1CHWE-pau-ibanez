/* eslint-disable import/extensions */
import { startDemo } from "./demoRunner.js";

const demoGridCanvas = document.getElementById("demo-grid-canvas");
demoGridCanvas.height = 2000;
demoGridCanvas.width = 2000;
const demoGridCtx = demoGridCanvas.getContext("2d");

const demoCellCanvas = document.getElementById("demo-cell-canvas");
demoCellCanvas.height = 2000;
demoCellCanvas.width = 2000;
const demoCellCtx = demoCellCanvas.getContext("2d");

const playButton = document.getElementById("play-button");
const templateButton = document.getElementById("template-button");

const cellSize = 20;

const demoId = startDemo(
  demoGridCanvas,
  demoGridCtx,
  demoCellCanvas,
  demoCellCtx,
  cellSize
);

playButton.addEventListener("click", () => {});
