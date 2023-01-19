import CodersArray from "./CodersArray";

describe("Given the CodersArray class", () => {
  describe("When it receives the words 'Carles', 'Marc', 'Inge', 'Maxi'", () => {
    test("Then it should return { 0 : 'Carles', 1 : 'Marc', 2 : 'Inge', 3 : 'Maxi', length :'4' } ", () => {
      const firstName = "Carles";
      const secondName = "Marc";
      const thirdName = "Inge";
      const fourthName = "Maxi";

      const expectedObject = {
        0: "Carles",
        1: "Marc",
        2: "Inge",
        3: "Maxi",
        length: 4,
      };

      const object = new CodersArray(
        firstName,
        secondName,
        thirdName,
        fourthName
      );

      expect(object).toEqual(expectedObject);
    });
  });
});
