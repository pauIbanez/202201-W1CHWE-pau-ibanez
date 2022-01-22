const drawCell = (ctx, coordenates, cellSize) => {
  ctx.beginPath();

  ctx.fillStyle = "#060";
  ctx.fillRect(coordenates.x, coordenates.y, cellSize, cellSize);

  return coordenates;
};

const moveCells = (cells, offsetX, offsetY) => {
  const movedCells = cells.map((cell) => ({
    x: cell.x - offsetX,
    y: cell.y - offsetY,
  }));

  return movedCells;
};

export default drawCell;
export { drawCell, moveCells };
