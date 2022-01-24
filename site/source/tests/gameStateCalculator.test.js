import { calculateNextGen } from "../../public/scripts/gameStateCalculator";
import { watchlistGenerator } from "../../public/scripts/watchlist";

describe("Given calculateNextGen", () => {
  describe("When inputed 1 cell with origin {x:20, y:20}", () => {
    test("Then it should return []", () => {
      const cellToCreate = [{ x: 20, y: 20 }];
      const cellSize = 20;
      const prevGenCells = watchlistGenerator(cellToCreate, cellSize);
      const expectedReturn = [];

      const result = calculateNextGen(prevGenCells, cellToCreate);

      expect(result).toStrictEqual(expectedReturn);
    });
  });
});
