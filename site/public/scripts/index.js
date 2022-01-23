/* eslint-disable import/extensions */
import { startDemo, stopDemo } from "./demoRunner.js";
import {
  setMouseAction,
  mouseMoving,
  cellPositions,
  updateCellPositions,
} from "./canvasMover.js";
import { drawGrid } from "./drawGrid.js";
import { clearCanvas, runGame, stopGame } from "./gameRunner.js";

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
const gameHTML = document.getElementById("game-menu");
const mainGameButton = document.getElementById("main-button");
const resetGameButton = document.getElementById("reset-button");
const quitGameButton = document.getElementById("quit-button");
const speedGameSlider = document.getElementById("slider");
const gameInfo = document.getElementById("game-info");
const gameControlls = document.getElementById("game-controls");

let paused = true;
const cellSize = 20;
const currentPlayAction = 1;
let gameSpeed = 300;

const demoId = startDemo(gridCanvas, gridCtx, cellCanvas, cellCtx, cellSize);
let gameId;

playButton.addEventListener("click", () => {
  switch (currentPlayAction) {
    case 1:
      stopDemo(demoId, cellCtx, cellCanvas);
      paused = true;
      mainUI.classList.add("start-hide");
      drawGrid(gridCanvas, gridCtx, cellSize);
      gameHTML.classList.remove("hide");
      gameInfo.classList.add("info-start");
      gameControlls.classList.add("game-start");
      break;

    case 2:
      break;

    default:
      break;
  }
});

templateButton.addEventListener("click", () => {});

gridCanvas.addEventListener("mousedown", (event) => {
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
    cellSize
  );
});

gridCanvas.addEventListener("mouseleave", () => {
  setMouseAction(undefined, 2);
});

gridCanvas.addEventListener("mousemove", (event) => {
  mouseMoving(
    event,
    gridCtx,
    gridCanvas,
    cellCtx,
    cellCanvas,
    cellSize,
    paused
  );
});

mainGameButton.addEventListener("click", () => {
  if (paused && cellPositions.length !== 0) {
    paused = false;
    gameId = runGame(cellCtx, cellCanvas, cellSize, gameSpeed);
    console.log();
    mainGameButton.innerText = "Pause";
  } else if (!paused) {
    paused = true;
    stopGame(gameId);
    mainGameButton.innerText = "Start";
  }
});

resetGameButton.addEventListener("click", () => {
  paused = true;
  stopGame(gameId);
  mainGameButton.innerText = "Start";
  cellCtx.clearRect(0, 0, cellCanvas.width, cellCanvas.height);
  updateCellPositions([]);
  clearCanvas();
});

quitGameButton.addEventListener("click", () => {
  window.location.reload();
});

speedGameSlider.oninput = () => {
  gameSpeed = 1000 - speedGameSlider.value;
  stopGame(gameId);
  gameId = runGame(cellCtx, cellCanvas, cellSize, gameSpeed);
};
