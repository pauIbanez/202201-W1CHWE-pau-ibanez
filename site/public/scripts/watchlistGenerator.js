/* eslint-disable lines-between-class-members */
const cellSorter = (cells) =>
  cells.sort((cell1, cell2) => {
    if (cell1.x > cell2.x) return -1;
    if (cell1.x === cell2.x && cell1.y > cell2.y) return -1;

    return 1;
  });

class Watchlist {
  origin = {};
  watchedCells = [];

  constructor(origin) {
    this.origin = origin;
  }
}

const watchlistGenerator = (cells, cellSize) => {
  const watchlists = [];

  const sortedCells = cellSorter(cells);

  sortedCells.forEach((cell) => {
    for (let x = -cellSize; x <= cellSize; x += cellSize) {
      for (let y = -cellSize; y <= cellSize; y += cellSize) {
        const watchExists = watchlists.some(
          (watchlist) =>
            watchlist.origin.x === cell.x + x && watchlist.y === cell.y + y
        );

        // eslint-disable-next-line no-continue
        if (watchExists) continue;

        watchlists.push(new Watchlist({ x, y }));
      }
    }
  });

  return watchlists;
};

const cells = [
  { x: 10, y: 10 },
  { x: 40, y: 40 },
];

console.log(watchlistGenerator(cells, 10));

export default watchlistGenerator;
export { watchlistGenerator, cellSorter };
