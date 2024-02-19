const getBalance = function (bankOperations) {
  let balance = 0;
  for (let op of bankOperations) {
    balance += op;
  }
  return balance;
};

getBalance([-27, -43, -2400, -700, 15000, 58]);

// O(n)

const printSome = function (complaints) {
  for (let i = 1; i < complaints.length; i = i * 2)
    console.log(complaints[i].text);
};

//O(log(n))

const allSides = [
  { a: 3, b: 4 },
  { a: 15, b: 21 },
  { a: 41, b: 8 },
  { a: 12, b: 6 },
];

const relevantSides = allSides.filter((s) => s.a % 3 == 0);
const getHype = function (sides) {
  let a = sides.a;
  let b = sides.b;
  let sumOfSquares = a * a + b * b;
  return Math.sqrt(sumOfSquares);
};

// for (let sides of relevantSides) {
//   console.log(getHype(sides));
// }

//O(1)

const studentAnswers = {
  brBlds: {
    1: "a",
    2: "a",
    3: "c",
  },
  dvOna: {
    1: "a",
    2: "c",
    3: "c",
  },
  nmPrz: {
    1: "a",
    2: "b",
    3: "a",
  },
};
const studentGithubs = ["brBlds", "dvOna", "nmPrz"];

const distributions = {
  1: {},
  2: {},
  3: {},
};

const getDistributions = function (studentAnswers) {
  studentGithubs.forEach((sg) => {
    let answers = studentAnswers[sg];

    Object.keys(answers).forEach((questionNumber) => {
      let letterAnswer = answers[questionNumber];

      distributions[questionNumber][letterAnswer]
        ? distributions[questionNumber][letterAnswer]++
        : (distributions[questionNumber][letterAnswer] = 1);
    });
  });

  return distributions;
};

// getDistributions(studentAnswers);

//O(mn)

const sendEmails = (email, recepients) =>
  recepients.forEach((r) => r.sendEmail(email));

const emailManager = function () {
  let email = generateEmail();

  $.get("/recepients", function (recepients) {
    sendEmails(email, recepients);
  });
};
// O(n)

// ex6
function findDuplicates(arr) {
  const items = {};
  for (let item of arr) {
    if (!items[item]) {
      items[item] = 1;
    } else {
      console.log(`${ages[i]} has a duplicate`);
    }
  }
}

//ex7
//we store the data in map as _id => employee

const employees = {
  ax01: { _id: "ax01", name: "Ray", age: 28, salary: 1300 },
  qs84: { _id: "qs84", name: "Lucius", age: 31, salary: 840 },
  bg33: { _id: "bg33", name: "Taylor", age: 18, salary: 2700 },
};

function findEmployeeSalary(employeeID) {
  return employees[employeeID].salary;
}

//ex8

let numbers = [
  24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427,
  442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852,
  896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272,
  1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667,
  1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198,
  2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554,
  2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932,
  2962, 2984, 2987,
];

function findIndex(numbers, num) {
  let right = numbers.length - 1;
  let left = 0;
  let med = 0;

  if (numbers[right] === num) {
    return right;
  }

  if (numbers[left] === num) {
    return left;
  }

  while (right > left) {
    med = Math.ceil((right - left) / 2) + left;

    if (num > numbers[med]) {
      left = med;
    } else if (num < numbers[med]) {
      right = med;
    } else {
      return med;
    }
  }
}

//ex 9
//red O(n^2)
//green O(1)
//yellow O(log(n))
//blue O(n)
