/* eslint-disable lines-between-class-members */

class Watchlist {
  origin;
  cellSize;
  watchedCells = [];
  alive;

  constructor(origin, cellSize, alive) {
    this.origin = origin;
    this.cellSize = cellSize;
    this.alive = alive;
    this.populate();
  }

  populate() {
    for (let x = -this.cellSize; x <= this.cellSize; x += this.cellSize) {
      for (let y = -this.cellSize; y <= this.cellSize; y += this.cellSize) {
        // console.log("seeing cell", x, y);
        if (x === 0 && y === 0) {
          // console.log("skipping cell ", x, y);
        } else {
          this.watchedCells.push({
            x: this.origin.x + x,
            y: this.origin.y + y,
          });
        }
      }
    }
  }

  getLiveNeighbours(cellsList) {
    let aliveNeighbours = 0;
    for (const watchedCell of this.watchedCells) {
      if (
        cellsList.some(
          (cell) => cell.x === watchedCell.x && cell.y === watchedCell.y
        )
      ) {
        console.log("Cell detected at ", watchedCell.x, watchedCell.y);
        aliveNeighbours += 1;
      }
    }

    return aliveNeighbours;
  }
}

const watchlistGenerator = (cells, cellSize) => {
  console.log(cells.length);
  const watchlists = [];

  cells.forEach((cell) => {
    for (let x = -cellSize; x <= cellSize; x += cellSize) {
      for (let y = -cellSize; y <= cellSize; y += cellSize) {
        const relativepos = { x: cell.x + x, y: cell.y + y };
        const watchExists = watchlists.some(
          (watchlist) =>
            watchlist.origin.x === relativepos.x &&
            watchlist.origin.y === relativepos.y
        );
        if (!watchExists) {
          let newWatchlist;
          if (
            cells.some(
              (cellAlive) =>
                cellAlive.x === relativepos.x && cellAlive.y === relativepos.y
            )
          ) {
            newWatchlist = new Watchlist(relativepos, cellSize, true);
          } else {
            newWatchlist = new Watchlist(relativepos, cellSize, false);
          }

          watchlists.push(newWatchlist);
        }
      }
    }
  });

  return watchlists;
};

export default watchlistGenerator;
export { watchlistGenerator };
