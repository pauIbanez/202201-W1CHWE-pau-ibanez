/* eslint-disable lines-between-class-members */
const cellSorter = (cells) =>
  cells.sort((cell1, cell2) => {
    if (cell1.x > cell2.x) return -1;
    if (cell1.x === cell2.x && cell1.y > cell2.y) return -1;

    return 1;
  });

class Watchlist {
  origin;
  cellSize;
  watchedCells = [];

  constructor(origin, cellSize) {
    this.origin = origin;
    this.cellSize = cellSize;
    this.populate();
  }

  populate() {
    for (let x = -this.cellSize; x <= this.cellSize; x += this.cellSize) {
      for (let y = -this.cellSize; y <= this.cellSize; y += this.cellSize) {
        if (x !== 0 && y !== 0) {
          const trackedCell = {};
          trackedCell.x = this.origin + x;
          trackedCell.y = this.origin + y;

          this.watchedCells.push(trackedCell);
        }
      }
    }
  }
}

const watchlistGenerator = (cells, cellSize) => {
  const watchlists = [];

  const sortedCells = cellSorter(cells);

  sortedCells.forEach((cell) => {
    for (let x = -cellSize; x <= cellSize; x += cellSize) {
      for (let y = -cellSize; y <= cellSize; y += cellSize) {
        const relativepos = { x: cell.x + x, y: cell.y + y };
        console.log(relativepos);
        const watchExists = watchlists.some(
          (watchlist) =>
            watchlist.origin.x === relativepos.x &&
            watchlist.origin.y === relativepos.y
        );
        console.log(watchExists);
        if (!watchExists) {
          const newWatchlist = new Watchlist(relativepos, cellSize);
          watchlists.push(newWatchlist);
          console.log("Added watchlist with pos", relativepos);
        }
      }
    }
  });
  return watchlists;
};

export default watchlistGenerator;
export { watchlistGenerator, cellSorter };
