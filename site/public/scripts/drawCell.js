const drawCell = (ctx, coordenates, cellSize) => {
  ctx.beginPath();

  ctx.fillStyle = "#060";
  ctx.fillRect(coordenates.x, coordenates.y, cellSize, cellSize);

  return coordenates;
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
