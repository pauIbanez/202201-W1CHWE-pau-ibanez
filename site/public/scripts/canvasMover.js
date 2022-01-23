/* eslint-disable import/extensions */
import { getGridAlignedCoords } from "./gridCoordenates.js";
import { drawCell, moveCells } from "./cellRendering.js";
import { drawGrid } from "./drawGrid.js";

let prevMousePos;
let mouseDown = false;
let moving = false;

let cellPositions = [];

const getMousePos = (event) => ({
  x: event.clientX,
  y: event.clientY,
});

const reset = (gridCtx, gridCanvas, cellCtx, cellCanvas, cellSize) => {
  moving = false;
  gridCtx.setTransform(1, 0, 0, 1, 0, 0);
  drawGrid(gridCanvas, gridCtx, cellSize);
  cellCtx.clearRect(0, 0, cellCanvas.width, cellCanvas.height);

  const newCellPositions = cellPositions.map((cell) =>
    drawCell(cellCtx, getGridAlignedCoords(cell, cellSize), cellSize)
  );

  return newCellPositions;
};

const setMouseAction = (
  state,
  action,
  event,
  gridCtx,
  gridCanvas,
  cellCtx,
  cellCanvas,
  paused,
  cellSize
) => {
  console.log("Recieved mouse action");
  mouseDown = state;
  switch (action) {
    case 1:
      if (state) {
        prevMousePos = getMousePos(event);
      } else {
        // eslint-disable-next-line no-param-reassign
        gridCanvas.style.cursor = "pointer";

        if (!moving && paused) {
          const clientInstanciatedCell = getGridAlignedCoords(
            {
              x: event.clientX,
              y: event.clientY,
            },
            cellSize
          );

          const dupped = cellPositions.some(
            (cell) =>
              cell.x === clientInstanciatedCell.x &&
              cell.y === clientInstanciatedCell.y
          );

          if (!dupped) {
            cellPositions.push(
              drawCell(cellCtx, clientInstanciatedCell, cellSize)
            );
          }
        }

        reset(gridCtx, gridCanvas, cellCtx, cellCanvas, cellSize);
      }
      break;

    case 2:
      if (moving) reset(gridCtx, gridCanvas, cellCtx, cellCanvas, cellSize);
      break;

    default:
      break;
  }
};

const mouseMoving = (
  event,
  gridCtx,
  gridCanvas,
  cellCtx,
  cellCanvas,
  cellSize
) => {
  if (!mouseDown) return;
  moving = true;
  // eslint-disable-next-line no-param-reassign
  gridCanvas.style.cursor = "grabbing";
  const mousePosThisFrame = getMousePos(event);

  const mouseFrameOffset = {
    x: mousePosThisFrame.x - prevMousePos.x,
    y: mousePosThisFrame.y - prevMousePos.y,
  };

  gridCtx.translate(mouseFrameOffset.x, mouseFrameOffset.y);

  drawGrid(gridCanvas, gridCtx, cellSize);
  const movedCells = moveCells(
    cellPositions,
    mouseFrameOffset.x,
    mouseFrameOffset.y
  );
  prevMousePos = mousePosThisFrame;

  cellCtx.clearRect(0, 0, cellCanvas.width, cellCanvas.height);
  movedCells.forEach((cell) => {
    drawCell(
      cellCtx,
      { x: cell.x + mouseFrameOffset.x, y: cell.y + mouseFrameOffset.y },
      cellSize,
      false
    );
  });

  cellPositions = movedCells;
};

export default setMouseAction;
export { setMouseAction, mouseMoving };
