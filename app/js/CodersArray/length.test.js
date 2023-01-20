import CodersArray from "./CodersArray";

describe("Given the CodersArray class", () => {
  describe("When it is created with the words 'Carles', 'Marc', 'Inge', 'Maxi'", () => {
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

  describe("When it receives the words ''", () => {
    test("Then it should return { 0 : '', length:1 } ", () => {
      const emptyArray = "";

      const expectedObject = {
        0: "",
        length: 1,
      };

      const object = new CodersArray(emptyArray);

      expect(object).toEqual(expectedObject);
    });
  });
});
