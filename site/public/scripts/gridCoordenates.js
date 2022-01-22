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

const getMouseToGridCoordenates = (coordenates) => {
  console.log(coordenates);
};

export default getGridAlignedCoords;

export { getGridAlignedCoords, getMouseToGridCoordenates };
