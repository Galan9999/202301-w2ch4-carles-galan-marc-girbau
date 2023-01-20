import CodersArray from "./CodersArray";

describe("Given the list of names 'Inge' and 'Maxi' created from the CodersArray class", () => {
  describe("When 'Carles' and 'Marc' names are pushed to appended to the end of the list", () => {
    test("Then the length of the list should be 4", () => {
      const firstName = "Carles";
      const secondName = "Marc";

      const expectedLength = 4;

      const namesList = new CodersArray("Inge", "Maxi");

      const listLength = namesList.push(firstName, secondName);

      expect(listLength).toBe(expectedLength);
    });
  });
});
