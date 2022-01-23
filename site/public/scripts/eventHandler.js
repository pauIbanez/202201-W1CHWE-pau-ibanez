import { startDemo } from "./index.js";

const demoGridCanvas = document.getElementById("demo-grid-canvas");
demoGridCanvas.height = 2000;
demoGridCanvas.width = 2000;
const demoGridCtx = demoGridCanvas.getContext("2d");

const demoCellCanvas = document.getElementById("demo-cell-canvas");
demoCellCanvas.height = 2000;
demoCellCanvas.width = 2000;
const demoCellCtx = demoCellCanvas.getContext("2d");

const cellSize = 20;

startDemo(demoGridCanvas, demoGridCtx, demoCellCanvas, demoCellCtx, cellSize);
