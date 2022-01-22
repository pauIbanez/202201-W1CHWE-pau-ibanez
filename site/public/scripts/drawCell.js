const getGridAlignedCoords = (coordenates) => {
  const newCoordenates = {};

  if (coordenates.x % 10 !== 0) {
    newCoordenates.x = Math.round(coordenates.x / 10) * 10;
  }

  if (coordenates.y % 10 !== 0) {
    newCoordenates.y = Math.round(coordenates.y / 10) * 10;
  }

  return newCoordenates;
};

const drawCell = (ctx, coordenates, cellSize, align) => {
  let newCoordenates = {};

  newCoordenates = coordenates;
  if (align) {
    newCoordenates = getGridAlignedCoords(coordenates);
  }
  ctx.beginPath();
  ctx.fillStyle = "#060";
  ctx.fillRect(newCoordenates.x, newCoordenates.y, cellSize, cellSize);

  return newCoordenates;
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
