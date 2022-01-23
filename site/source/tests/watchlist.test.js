import { watchlistGenerator } from "../../public/scripts/watchlist";

describe("Given watchlistGenerator", () => {
  describe("When inputed [{x:10, y:10}], 10", () => {
    test("Then it should return 9 watchlists", () => {
      const cellsToGive = [{ x: 10, y: 10 }];
      const cellSize = 20;
      const expectedLenght = 9;

      const result = watchlistGenerator(cellsToGive, cellSize);

      expect(result.length).toBe(expectedLenght);
    });
  });
});
