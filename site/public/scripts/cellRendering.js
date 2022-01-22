const getGridAlignedCoords = (coordenates) => {
  const newCoordenates = coordenates;

  if (coordenates.x % 10 !== 0) {
    newCoordenates.x = Math.round(coordenates.x / 10) * 10;
  }

  if (coordenates.y % 10 !== 0) {
    newCoordenates.y = Math.round(coordenates.y / 10) * 10;
  }
  console.log(newCoordenates);
  return newCoordenates;
};

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
export { drawCell, moveCells, getGridAlignedCoords };
