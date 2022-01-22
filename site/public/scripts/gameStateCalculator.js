const calculateNextGen = (cells) => {
  const nextGenCells = [];
  for (const cell of cells) {
    if (cell.getStateForNextGen(cells)) {
      nextGenCells.push(cell);
    }
  }

  return nextGenCells;
};

export default calculateNextGen;
export { calculateNextGen };
