import { getGridAlignedCoords } from "../../public/scripts/gridCoordenates";

describe("Given getGridAlingedCoordenates", () => {
  describe("When inputed {x:57, y:84}", () => {
    test("It should return {x:40, y:80}", () => {
      const coordsToGive = { x: 57, y: 84 };
      const cellSize = 20;
      const expectedResult = { x: 40, y: 80 };

      const result = getGridAlignedCoords(coordsToGive, cellSize);

      expect(JSON.stringify(result)).toBe(JSON.stringify(expectedResult));
    });
  });
});
