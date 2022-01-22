/* eslint-disable lines-between-class-members */
const cellSorter = (cells) =>
  cells.sort((cell1, cell2) => {
    if (cell1.x > cell2.x) return -1;
    if (cell1.x === cell2.x && cell1.y > cell2.y) return -1;

    return 1;
  });

class Watchlist {
  origin;
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
        let watchExists = false;

        const relativepos = { x: cell.x + x, y: cell.y + y };
        console.log(relativepos);
        for (const watchlist of watchlists) {
          if (
            watchlist.origin.x === relativepos.x &&
            watchlist.origin.y === relativepos.y
          ) {
            watchExists = true;
            break;
          }
        }
        console.log(watchExists);
        if (!watchExists) {
          watchlists.push(new Watchlist(relativepos));
          console.log("Added watchlist with pos", relativepos);
        }
      }
    }
  });
  return watchlists;
};

const cells = [
  { x: 10, y: 10 },
  { x: 30, y: 30 },
];

console.log(watchlistGenerator(cells, 10));

export default watchlistGenerator;
export { watchlistGenerator, cellSorter };
