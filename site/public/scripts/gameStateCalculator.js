const calculateNextGen = (cells, cellsPositions) => {
  const nextGenCells = [];
  for (const cell of cells) {
    const cellNeighbours = cell.getLiveNeighbours(cellsPositions);
    let cellWillLive;
    if (cell.alive) {
      if (cellNeighbours < 2) cellWillLive = false;
      else if (cellNeighbours > 3) cellWillLive = false;
      else if (cellNeighbours === 2 || cellNeighbours === 3)
        cellWillLive = true;
    } else if (cellNeighbours === 3) cellWillLive = true;

    if (cellWillLive) nextGenCells.push({ x: cell.origin.x, y: cell.origin.y });
  }

  return nextGenCells;
};

export default calculateNextGen;
export { calculateNextGen };
