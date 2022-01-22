const calculateNextGen = (cells) => {
  const nextGenCells = [];
  for (const cell of cells) {
    console.log(cell);
    cell.getStateForNextGen(cells);
    if (cell.alive) {
      nextGenCells.push(cell);
    }
  }

  return nextGenCells;
};

export default calculateNextGen;
export { calculateNextGen };
