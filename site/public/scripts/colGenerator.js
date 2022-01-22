const watchlistGenerator = (cells, cellSize) => {
  const columns = [];
};

// const cells = [
//   { x: 10, y: 30 },
//   { x: 30, y: 40 },
//   { x: 10, y: 50 },
//   { x: 20, y: 30 },
//   { x: 10, y: 50 },
// ];

// console.log(colGenerator(cells, 10));

const cellSorter = (cells) =>
  cells.sort((cell1, cell2) => {
    if (cell1.x > cell2.x) return -1;
    if (cell1.x === cell2.x && cell1.y > cell2.y) return -1;

    return 1;
  });

export default colGenerator;
export { colGenerator, cellSorter };
