// count vowels a,e,i,o,u

// ''
// undefined > 0

const countVowels = (str) => {
  const set = new Set(["a", "e", "i", "o", "u"]);

  let count = 0;

  for (let char of str.split("")) {
    if (set.has(char)) {
      count++;
    }
  }
  return count;
};

// console.log(countVowels("aabcde")); // 3

//median Char

// string have duplicates
// string have spacial characters
// spaces
// empty string
// string with odd length
// if we get non string value

const medianChar = (str) => {
  if (typeof str !== "string") {
    return "";
  }

  const charCodeArray = str.split("").map((char) => char.charCodeAt(0));

  const charCodeSet = new Set(charCodeArray);

  if (charCodeSet.size % 2 !== 0 || charCodeSet.size === 0) {
    return "";
  }

  const nonDuplicatesArr = Array.from(charCodeSet.values());

  const maxCharCode = Math.max(...nonDuplicatesArr);
  const minCharCode = Math.min(...nonDuplicatesArr);

  const medianCharCode = (maxCharCode - minCharCode) / 2 + minCharCode;

  if (charCodeSet.has(medianCharCode)) {
    return "";
  }

  const result = String.fromCharCode(medianCharCode);

  return result;
};

// console.log(medianChar("aabcg")); // 'd'
// console.log(medianChar("question")); // o

//find the second biggest element in an array.

//[1,2,3,4] => 3
//[1,2] => 2
//[-2,0] => -2

//[1] => null
//[1,1,1,1] => null
//[] => null
// not an array

const swapTwoNumbers = (num1, num2) => {
  const temp = num2;
  num2 = num1;
  num1 = temp;

  return [num1, num2];
};

const secondBiggest = (nums) => {
  if (!nums || nums.length < 2) {
    return null;
  }

  let biggest = nums[0];
  let secondBiggest = nums[1];

  if (biggest < secondBiggest) {
    const [num1, num2] = swapTwoNumbers(biggest, secondBiggest);

    biggest = num1;
    secondBiggest = num2;
  }

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > biggest) {
      secondBiggest = biggest;
      biggest = nums[i];
    } else if (nums[i] < biggest) {
      if (nums[i] > secondBiggest) {
        secondBiggest = nums[i];
      }
    }
  }

  return secondBiggest;
};

// console.log(secondBiggest([12, 3, 4, 7, 23])); // 12
// console.log(secondBiggest([5, 3, 4, 7, 23])); // 7

//[1,2,3] > [1,2,3]
//[1,1,2,3] > [1,2,3]
//[1] > []
//[] > []
// followed is by 1 number difference
//undefined
// do the result order matter

const followedNumbers = (nums) => {
  if (!nums || nums.length <= 1) {
    return [];
  }

  const numsSet = new Set(nums);

  const resultSet = new Set();

  for (let num of nums) {
    if (numsSet.has(num + 1) || numsSet.has(num - 1)) {
      resultSet.add(num);
    }
  }

  return Array.from(resultSet.values());
};

// console.log(followedNumbers([1, 2, 3])); // [1,2,3]
// console.log(followedNumbers([4, 1, 3])); // [4,3]
// console.log(followedNumbers([1, 2, 4, 1, 3])); // [1,2,4,3]

//[1,2,3] > [1,2,3,1,2,3]
//[1] > [1,1]
//[] > []
//do the input always an array

const duplicateArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  const result = [];

  for (let i = 0; i < arr.length * 2; i++) {
    result[i] = arr[i % arr.length];
  }

  return result;
};

// console.log(duplicateArray([1, 2, 3])); // [1, 2, 3, 1, 2, 3]
// console.log(duplicateArray([1])); //[1,1]
// console.log(duplicateArray([])); //[]
// console.log(duplicateArray("s")); //null

//[1,a,b,3] > [3,a,b,1]
//[a,1] > [a,1]
//[] > []
//is not array return null

const reverseOnlyNumbers = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  if (arr.length <= 1) {
    return arr;
  }

  const numbers = arr.filter((item) => typeof item === "number");

  let numIndex = numbers.length - 1;

  for (let i in arr) {
    if (typeof arr[i] === "number") {
      arr[i] = numbers[numIndex];
      numIndex--;
    }
  }

  return arr;
};

// console.log(reverseOnlyNumbers([1, "w", "e", 2, "r", 7, 8])); // [8,w,e,7,r,2,1]
// console.log(reverseOnlyNumbers([1, "w", null, 2, undefined, 7, 8])); // [8,w,e,7,r,2,1]
// console.log(reverseOnlyNumbers([1])); // [1]
// console.log(reverseOnlyNumbers([])); // []
// console.log(reverseOnlyNumbers(null)); // null

const deepClone = (obj) => {
  const resultObj = {};

  if (Object.keys(obj).length === 0) {
    return resultObj;
  }

  for (let key of Object.keys(obj)) {
    if (typeof obj[key] !== "object") {
      resultObj[key] = obj[key];
    }

    if (Array.isArray(obj[key])) {
      resultObj[key] = deepCloneArray(obj[key]);
    } else if (typeof obj[key] === "object") {
      resultObj[key] = deepClone(obj[key]);
    }
  }
  return resultObj;
};

function deepCloneArray(arr) {
  return arr.map((item) => {
    if (typeof item !== "object") {
      return item;
    }

    if (Array.isArray(item)) {
      return deepCloneArray(item);
    } else {
      return deepClone(item);
    }
  });
}

let x = { a: "b", a2: ["first", "second", []] };
let y = { b: x, b3: ["firtsY", x] };
let z = deepClone(y);

console.log(JSON.stringify(z));
