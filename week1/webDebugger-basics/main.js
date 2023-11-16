// 1
function foo() {
  let sum = 0;
  for (let i = 1000; i < 2000; i++) {
    if (i % 203 === 0) {
      sum += getSecondDigit(i);
    } else if (i % 497 === 0) {
      sum += getLastDigit(i);
    } else if (i % 293 === 0) {
      sum += getLastDigit(i * 13);
    }
  }
  return sum;
}

function getSecondDigit(number) {
  return parseInt(number.toString().split("")[0]);
}

function getLastDigit(number) {
  return parseInt(number.toString().split("")[number.length - 1]);
}

// foo();

/*
q 1: Is there a time when getSecondDigit is being called with the number 1623 as a parameter?
a: no the clossest namber to 1623 that the getSecondDigit wase called with is 1624

q 2: How many times getLastDigit is being called when i % 293 === 0?
a :3 times when i === 1172 and 1465 and 1758

q 3: Is there a time when getLastDigit is being called with a number parameter that has 1 as it’s last digit?
what is the value of that number parameter?
a: yes the number 1491

*/

function foo() {
  let sum = 0;
  for (let i = 1000; i < 2000; i++) {
    if (i % 203 === 0) {
      sum += getSecondDigit(i);
    } else if (i % 497 === 0) {
      sum += getLastDigit(i);
    } else if (i % 293 === 0) {
      sum += getLastDigit(i * 13);
    }
  }
  return sum;
}

function getSecondDigit(number) {
  return parseInt(number.toString().split("")[0]);
}

function getLastDigit(number) {
  let numberLength = number.toString().length;
  return parseInt(number.toString().split("")[numberLength - 1]);
}

foo();

/*
q 1: What is the largest value of number % 18 when calling getSecondDigit ?
a : the largest value of number % 18 is 17

q 2: What is the value of sum * 33 after the first time getLastDigit is being called?
a : the first time getLastDigit was called the value of sun * 33 was 231

*/
