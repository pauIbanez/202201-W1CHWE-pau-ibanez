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

  describe("When inputed 3 cells with origin {x:20, y:0}, {x:20, y:20} and {x:20, y:40} ", () => {
    test("Then it should return and array with 3 spots", () => {
      const cellToCreate = [
        { x: 20, y: 0 },
        { x: 20, y: 20 },
        { x: 20, y: 40 },
      ];
      const cellSize = 20;
      const prevGenCells = watchlistGenerator(cellToCreate, cellSize);
      const expectedArraySize = 3;

      const result = calculateNextGen(prevGenCells, cellToCreate);

      expect(result.length).toBe(expectedArraySize);
    });
  });

  describe("When inputed 3 cells with origin {x:20, y:0}, {x:20, y:20} and {x:20, y:40} ", () => {
    test("Then it should return and array with {x:0, y:20}, {x:20, y:20} and {x:40, y:20}", () => {
      const cellToCreate = [
        { x: 20, y: 0 },
        { x: 20, y: 20 },
        { x: 20, y: 40 },
      ];
      const cellSize = 20;
      const prevGenCells = watchlistGenerator(cellToCreate, cellSize);
      const expectedArray = [
        { x: 0, y: 20 },
        { x: 20, y: 20 },
        { x: 40, y: 20 },
      ];

      const result = calculateNextGen(prevGenCells, cellToCreate);

      expect(result).toStrictEqual(expectedArray);
    });
  });
});
