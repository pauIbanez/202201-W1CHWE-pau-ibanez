const colGenerator = (cells, cellSize) => {
  const columns = [];

  cells.forEach(() => {
    for (let i = -10; i < 10; cellSize) {
      const columnExist = columns.some((column) => {
        if (column.position === i) return true;
        return false;
      });

      // eslint-disable-next-line no-continue
      if (columnExist) continue;

      columns.push({ position: i });
    }
  });

  return columns;
};

const cellSorter = (cells) =>
  cells.sort((cell1, cell2) => {
    if (cell1.x > cell2.x) return -1;
    if (cell1.x === cell2.x && cell1.y > cell2.y) return -1;

    return 1;
  });

export default colGenerator;
export { colGenerator, cellSorter };
