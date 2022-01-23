/* eslint-disable import/extensions */
import { runGame } from "./gameRunner.js";
import { drawDemoGrid } from "./drawGrid.js";

const demoSpeed = 100;

const demoCellPositions = [
  { x: 180, y: 120 },
  { x: 180, y: 140 },
  { x: 180, y: 160 },
  { x: 660, y: 100 },
  { x: 660, y: 120 },
  { x: 680, y: 120 },
  { x: 680, y: 100 },
  { x: 100, y: 360 },
  { x: 100, y: 380 },
  { x: 120, y: 380 },
  { x: 120, y: 360 },
  { x: 300, y: 360 },
  { x: 300, y: 380 },
  { x: 300, y: 400 },
  { x: 320, y: 420 },
  { x: 340, y: 440 },
  { x: 360, y: 440 },
  { x: 320, y: 340 },
  { x: 340, y: 320 },
  { x: 360, y: 320 },
  { x: 400, y: 340 },
  { x: 420, y: 360 },
  { x: 420, y: 380 },
  { x: 420, y: 400 },
  { x: 440, y: 380 },
  { x: 380, y: 380 },
  { x: 400, y: 420 },
  { x: 500, y: 360 },
  { x: 500, y: 340 },
  { x: 500, y: 320 },
  { x: 520, y: 320 },
  { x: 520, y: 340 },
  { x: 520, y: 360 },
  { x: 540, y: 300 },
  { x: 540, y: 380 },
  { x: 580, y: 300 },
  { x: 580, y: 280 },
  { x: 580, y: 380 },
  { x: 580, y: 400 },
  { x: 780, y: 320 },
  { x: 780, y: 340 },
  { x: 800, y: 340 },
  { x: 800, y: 320 },
  { x: 220, y: 640 },
  { x: 220, y: 660 },
  { x: 220, y: 680 },
  { x: 220, y: 760 },
  { x: 220, y: 780 },
  { x: 220, y: 800 },
  { x: 260, y: 720 },
  { x: 280, y: 720 },
  { x: 300, y: 720 },
  { x: 180, y: 720 },
  { x: 160, y: 720 },
  { x: 140, y: 720 },
];

const stopDemo = (demoId) => {
  clearInterval(demoId);
};

const startDemo = (
  demoGridCanvas,
  demoGridCtx,
  demoCellCanvas,
  demoCellCtx,
  cellSize
) => {
  drawDemoGrid(cellSize, demoGridCtx, demoGridCanvas);

  const demoIntervalId = runGame(
    demoCellCtx,
    demoCellCanvas,
    demoCellPositions,
    cellSize,
    demoSpeed
  );
  return demoIntervalId;
};

export default startDemo;
export { startDemo, stopDemo };
