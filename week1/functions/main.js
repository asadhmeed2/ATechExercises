// 1
function isEven(num) {
  return num % 2 == 0;
}

// 2
function printOddEvenInArray(numbers) {
  for (let num of numbers) {
    console.log(`number ${num} is ${isEven(num) ? "even" : "odd"}`);
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
printOddEvenInArray(numbers);

//3

function isNumberExistInArray(numbers, num) {
  for (let number of numbers) {
    if (num === number) {
      return num === number;
    }
  }
  return false;
}

console.log(isNumberExistInArray(numbers, 10));

//4

const calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
};

const result1 = calculator.add(20, 1);
const result2 = calculator.subtract(30, 9);

console.log(calculator.add(result1, result2));

//5

const increaseByNameLength = (money, name) => name.length * money;

const makeRegal = (name) => `His Royal Highness, ${name.toUpperCase()}`;

const turnToKing = function (name, money) {
  name = name.toUpperCase();
  money = increaseByNameLength(money, name);
  name = makeRegal(name);

  console.log(name + " has " + money + " gold coins");
};

turnToKing("martin luther", 100); // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
