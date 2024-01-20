const { add, calculateHyp, ArrayManipulator, Exercises } = require("./code");

const exercises = new Exercises();

test("add should return sum of a + b", () => {
  let sum = add(1, 2);
  expect(sum).toBe(3);
});

test("calculateHyp should return the square root of num1 + num2", () => {
  let sqrt = calculateHyp(3, 4);
  expect(sqrt).toBe(5); //
});

test("ArrayManipulator.manipulate()", () => {
  const manipulator = new ArrayManipulator();
  let x = ["food", "item", "location"];
  let y = ["cherry", "lightbulb", "Tazmania"];

  const results = manipulator.manipulate(x, y);
  expect(results).toEqual({
    food: "cherry",
    item: "lightbulb",
    location: "Tazmania",
  });
});

// ex1
test("isEven should return true if num is even", () => {
  const isEven = exercises.isEven(4);

  expect(isEven).toBeTruthy();
  expect(() => exercises.isEven([])).toThrow();
});

//ex2
test("remove at least one element from the array", () => {
  const array = [4, 2, 5];
  const modifiedArray = exercises.removeAtLeastOne([...array]);

  expect(modifiedArray.length).toBeLessThan(array.length);
  expect(() => exercises.removeAtLeastOne([])).toThrow();
});

//ex3
test(`simplify should return a clean string without these symbols: "!", "#", ".", ",", "'"`, () => {
  const complected = "'a!s.,ad'#";

  const simple = exercises.simplify(complected);

  expect(simple).toBe("asad");
  expect(() => exercises.simplify(5)).toThrow();
});

//ex4
test("validate should verify that there is at least on boolean in array", () => {
  const truesMore = [true, false, true];
  const empty = [];
  const falsesMore = [false, false, true];
  const undefinedProp = undefined;

  const isTrue = exercises.validate(truesMore);
  const emptyError = exercises.validate(empty);
  const isFalse = exercises.validate(falsesMore);
  const isUndefined = exercises.validate(undefinedProp);

  expect(isTrue).toBeTruthy();
  expect(emptyError).toEqual({ error: "Need at least one boolean" });
  expect(isFalse).toBeFalsy();
  expect(isUndefined).toEqual({ error: "array cannot be undefined or null" });
});
