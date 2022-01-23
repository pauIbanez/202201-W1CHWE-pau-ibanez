import { Watchlist, watchlistGenerator } from "../../public/scripts/watchlist";

describe("Given watchlistGenerator", () => {
  describe("When inputed [{x:10, y:10}], 20", () => {
    test("Then it should return 9 watchlists", () => {
      const cellsToGive = [{ x: 20, y: 20 }];
      const cellSize = 20;
      const expectedLenght = 9;

      const result = watchlistGenerator(cellsToGive, cellSize);

      expect(result.length).toBe(expectedLenght);
    });
  });

  describe("When inputed [{x:20, y:20}, {x:40, y:40}], 20", () => {
    test("Then it should return 18 watchlists", () => {
      const cellsToGive = [
        { x: 20, y: 20 },
        { x: 40, y: 40 },
      ];
      const cellSize = 20;
      const expectedLenght = 14;

      const result = watchlistGenerator(cellsToGive, cellSize);

      expect(result.length).toBe(expectedLenght);
    });
  });

  describe("When inputed [{x:10, y:10}, {x:30, y:30}], 20", () => {
    test("Then it should return 17 watchlists", () => {
      const cellsToGive = [
        { x: 20, y: 20 },
        { x: 60, y: 60 },
      ];
      const cellSize = 20;
      const expectedLenght = 17;

      const result = watchlistGenerator(cellsToGive, cellSize);
      expect(result.length).toBe(expectedLenght);
    });
  });
  describe("When inputed [{ x: 20, y: 20 }], 20", () => {
    test("Then it should return cell number 4 as alive", () => {
      const cellsToGive = [{ x: 20, y: 20 }];
      const cellSize = 20;
      const expectedCellToBeAlive = 4;

      const result = watchlistGenerator(cellsToGive, cellSize);
      expect(result[expectedCellToBeAlive].alive).toBe(true);
    });

    test("Then it should return cell number 8 as dead", () => {
      const cellsToGive = [{ x: 20, y: 20 }];
      const cellSize = 20;
      const expectedCellToBeDead = 8;

      const result = watchlistGenerator(cellsToGive, cellSize);
      expect(result[expectedCellToBeDead].alive).toBe(false);
    });
  });
});

describe("Given WatchList getLiveNeighbours", () => {
  describe("When inputing [{x: 20, y:20}]", () => {
    test("Then it should return 0", () => {
      const cellsToGive = [{ x: 20, y: 20 }];
      const cellOrigin = { x: 20, y: 20 };
      const cellSize = 20;
      const expectedResult = 0;
      const inicializedWatchList = new Watchlist(cellOrigin, cellSize, true);

      const result = inicializedWatchList.getLiveNeighbours(cellsToGive);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When inputing [{x: 20, y:20},{ x: 40, y: 40 }]", () => {
    test("Then it should return 1", () => {
      const cellsToGive = [
        { x: 20, y: 20 },
        { x: 40, y: 40 },
      ];
      const cellOrigin = { x: 20, y: 20 };
      const cellSize = 20;
      const expectedResult = 1;
      const inicializedWatchList = new Watchlist(cellOrigin, cellSize, true);

      const result = inicializedWatchList.getLiveNeighbours(cellsToGive);

      expect(result).toBe(expectedResult);
    });
  });
});
