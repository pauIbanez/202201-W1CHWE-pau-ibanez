const getGridAlignedCoords = (coordenates, cellSize) => {
  const newCoordenates = coordenates;

  if (coordenates.x % 10 !== 0) {
    newCoordenates.x = Math.floor(coordenates.x / 10) * 10;
  }

  if (coordenates.y % 10 !== 0) {
    newCoordenates.y = Math.floor(coordenates.y / 10) * 10;
  }

  if (newCoordenates.x % cellSize !== 0) {
    newCoordenates.x -= cellSize / 2;
  }

  if (newCoordenates.y % cellSize !== 0) {
    newCoordenates.y -= cellSize / 2;
  }
  return newCoordenates;
};

export default getGridAlignedCoords;

export { getGridAlignedCoords };
