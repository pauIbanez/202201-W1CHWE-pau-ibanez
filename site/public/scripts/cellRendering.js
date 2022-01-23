const drawCell = (ctx, coordenates, cellSize) => {
  ctx.beginPath();
  ctx.fillStyle = "#d15e56";
  ctx.fillRect(coordenates.x, coordenates.y, cellSize, cellSize);

  return coordenates;
};

const moveCells = (cells, translationX, translationY) =>
  cells.map((cell) => ({
    x: cell.x + translationX,
    y: cell.y + translationY,
  }));

export default drawCell;
export { drawCell, moveCells };
