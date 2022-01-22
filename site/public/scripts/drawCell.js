const drawCell = (ctx, coordenates, cellSize) => {
  const newCoords = getGridAlignedCoords(coordenates);
  ctx.beginPath();
  ctx.fillStyle = "#060";
  ctx.fillRect(newCoords.x, newCoords.y, cellSize, cellSize);

  return newCoords;
};

const moveCells = (cells, translationX, translationY) => {
  const movedCells = cells.map((cell) => ({
    x: cell.x + translationX,
    y: cell.y + translationY,
  }));

  return movedCells;
};

export default drawCell;
export { drawCell, moveCells };
