// Word Score

//is the string of words have numbers or other non-alphanumeric characters
//if yes than should we ignore them in counting the word characters score
//is the words are supported by spaces only
//is between word have only one space supporter

//are we get strings only do you want me to gard from other types and undefined and null

//if the capitalized string effect the score

// 'asaad is dowing a interview' > interview

//'a' > 'a'

//'' > ''

//' asaad'

//'Asaad '

const highestWordScore = (str) => {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }

  const scores = {};

  let word = "";
  let tempScore = 0;

  for (let i in str) {
    if (str[i] === " ") {
      if (!(str[i - 1] === " ") && i !== 0) {
        scores[word] = tempScore;
        word = "";
        tempScore = 0;
      }
      continue;
    }

    word += str[i];
    tempScore += str[i].charCodeAt(0);
  }

  if (word.length > 0) {
    scores[word] = tempScore;
  }

  let result = "";
  let biggest = 0;

  for (let key in scores) {
    if (scores[key] > biggest) {
      result = key;
    }
  }

  return result;
};

// console.log(highestWordScore("asaad is dowing a interview"));
// console.log(highestWordScore("if you are a winner"));
// console.log(highestWordScore("   i  "));
// console.log(highestWordScore("   i"));
// console.log(highestWordScore("i"));

// What would be Consoled?

// (function () {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2);
//   }, 1000);
//   console.log(3);
//   setTimeout(function () {
//     console.log(4);
//   }, 0);
//   setTimeout(function () {
//     console.log(6);
//   }, 0);
//   console.log(5);
// })();

//log 1
//log 3
//log 5
//log 4
//log 6
//log 2

//unique Characters

//''
//' '
//not string
//what about spaces are thy considered character or to ignore
//is the string has one word in it

const isUniqueCharacters = (str) => {
  const set = new Set();
  const trimStr = str.trim();
  for (let char of trimStr) {
    if (char !== " ") {
      if (set.has(char)) {
        return false;
      }
      set.add(char);
    }
  }
  return true;
};

console.log(isUniqueCharacters("hello"));
console.log(isUniqueCharacters("cat"));
console.log(isUniqueCharacters(" "));

// Chars to Length
