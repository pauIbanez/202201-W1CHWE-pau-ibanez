const getGridAlignedCoords = (coordenates) => {
  const newCoordenates = coordenates;

  if (coordenates.x % 10 !== 0) {
    newCoordenates.x = Math.floor(coordenates.x / 10) * 10;
  }

  if (coordenates.y % 10 !== 0) {
    newCoordenates.y = Math.floor(coordenates.y / 10) * 10;
  }
  return newCoordenates;
};

export default getGridAlignedCoords;

export { getGridAlignedCoords };
