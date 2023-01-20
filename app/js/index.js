import CodersArray from "./CodersArray/CodersArray.js";

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

const object = new CodersArray(firstName, secondName, thirdName, fourthName);

console.log(`Expected output:`);
console.log(expectedObject);
console.log("Output:");
console.log(object);
console.log("Property length test passed");

const otherName = "Carles";
const anotherdName = "Marc";

const expectedLength = 4;

const namesList = new CodersArray("Inge", "Maxi");

const listLength = namesList.push(otherName, anotherdName);

console.log(`Expected output:`);
console.log(expectedLength);
console.log("Output:");
console.log(listLength);
console.log("Method push test passed");
