const add = function (a, b) {
  return a + b;
};

const calculateHyp = function (num1, num2) {
  return Math.sqrt(num1 * num1 + num2 * num2);
};

class ArrayManipulator {
  manipulate(arr1, arr2) {
    let obj = {};
    for (let i in arr1) {
      obj[arr1[i]] = arr2[i];
    }
    return obj;
  }
}

class Exercises {
  isEven(n) {
    if (typeof n !== "number" || isNaN(n)) {
      throw new Error("n must be a number");
    }

    return n % 2 == 0 ? true : false;
  }

  removeAtLeastOne(arr) {
    if (arr.length === 0) {
      throw new Error("array should not be empty");
    }

    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
    arr.splice(0, numItemsToRemove);
    return arr;
  }

  simplify(str) {
    let symbols = ["!", "#", ".", ",", "'"];
    if (typeof str !== "string") {
      throw new Error("this method only accepts string");
    }

    return str
      .split("")
      .filter((c) => symbols.indexOf(c) == -1)
      .join("");
  }

  validate(booleans) {
    if (!booleans) {
      return { error: "array cannot be undefined or null" };
    }

    let truesNum = 0;
    let falseNum = 0;

    for (let bool of booleans) {
      if (typeof bool === "boolean") {
        if (bool) {
          truesNum++;
        } else {
          falseNum++;
        }
      }
    }

    if (truesNum === 0 && falseNum === 0) {
      return { error: "Need at least one boolean" };
    }

    return truesNum > falseNum;
  }
}

module.exports = { add, calculateHyp, ArrayManipulator, Exercises };
