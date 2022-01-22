const calculateNextGen = (cells) => {
  const nextGenCells = [];
  for (const cell of cells) {
    const cellNeighbours = cell.getLiveNeighbours(cells);
    if (cellNeighbours > 2) console.log(cellNeighbours);
  }

  return nextGenCells;
};

export default calculateNextGen;
export { calculateNextGen };
