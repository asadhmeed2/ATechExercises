const printStarSeries = (num, count) => {
  for (let i = 0; i < count; i++) {
    for (let j = 0; j <= num * 2; j++) {
      if (j <= num) {
        console.log(...new Array(j).fill("*"));
      } else {
        console.log(...new Array(num * 2 - j).fill("*"));
      }
    }
  }
};

printStarSeries(5, 3);

const reverse = function (str) {
  let reversed = "";
  for (let letter of str) {
    reversed = letter + reversed;
  }
  return reversed;
};

console.log(reverse("dog")); //should return "god"
console.log(reverse("race car")); //should return "rac ecar"

//''
//'a'
//'??aa!'
const firstNoneRepeating = (str) => {
  const map = {};

  const strArray = str.split("");

  for (let char of strArray) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char] += 1;
    }
  }

  for (let char of strArray) {
    if (map[char] === 1) {
      return char;
    }
  }
  return "";
};

console.log(firstNoneRepeating("aabbccdee")); // d
console.log(firstNoneRepeating("")); // ''
console.log(firstNoneRepeating("a")); // a
console.log(firstNoneRepeating("abca")); // b

const encrypt = (str) => {
  return str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");
};

console.log(encrypt("caz"));

const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];

const jumble = function (arr1, arr2) {
  let jumbledArr = new Set(arr1);

  for (let num of arr2) {
    jumbledArr.add(num);
  }
  return [...jumbledArr.values()];
};

console.log(jumble(colors, foods));
// could return: ["cheese","teal","cucumber","red","bread","yellow","white","indigo"]

const rawDist = {
  A: 60,
  B: 10,
  C: 10,
  D: 20,
};

const getLetter = () => {
  let maxNum = 0;
  let maxChar = "";

  const keys = Object.keys(rawDist);

  for (let char of keys) {
    if (rawDist.hasOwnProperty(char)) {
      const rand = Math.random() * rawDist[char];
      if (rand > maxNum) {
        maxNum = rand;
        maxChar = char;
      }
    }
  }

  return maxChar;
};

console.log(getLetter());

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert a new node at the end of the list
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  // Display the elements of the linked list
  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(3);
linkedList.append(5);
linkedList.append(1);

const removeDuplicatesInLinkedList = (root) => {
  let prev = root.head;
  if (!prev || !prev.next) {
    return;
  }

  let current = prev.next;

  const set = new Set([prev.data]);

  while (current) {
    if (!set.has(current.data)) {
      set.add(current.data);
      prev = prev.next;
      current = current.next;
    } else {
      current = current.next;
      prev.next = prev.next.next;
    }
  }

  return root;
};

removeDuplicatesInLinkedList(linkedList);

linkedList.display();

const printInLoop = (arr) => {
  let index = 0;
  while (true) {
    console.log(arr[index]);

    index = (index + 1) % arr.length;
  }
};

// printInLoop(["down", "the", "rabbit", "hole"]);

//{}
//[{x:1,y:2}]

const findClosest = (locations, location) => {
  if (
    !location ||
    isNaN(location.x) ||
    isNaN(location.y) ||
    !locations ||
    location.length === 1
  ) {
    return;
  }

  let closest = locations[0];

  for (let loc of locations) {
    if (!isNaN(loc.x) && !isNaN(loc.y)) {
      const locXIsClosest =
        Math.abs(loc.x - location.x) < Math.abs(closest.x - location.x);
      const locYIsClosest =
        Math.abs(loc.y - location.y) < Math.abs(closest.y - location.y);

      if (locXIsClosest && locYIsClosest) {
        closest = loc;
      }
    }
  }

  return closest;
};

let pizzaLocations = [
  { x: 6, y: 12 },
  { x: 3, y: 1 },
  { x: 9, y: 0 },
  { x: 4, y: 10 },
];

let homeLocation = { x: 4, y: 2 };

const closest = findClosest(pizzaLocations, homeLocation); // should return {x: 3, y: 1}

console.log("🚀 ~ closest:", closest);

//str='' secret='' str !== string secret !== string

const secretEncrypt = (str, secret) => {
  if (typeof str !== "string" || typeof secret !== "string") {
    return "";
  }

  if (str === "" || secret === "") {
    return str;
  }

  const minCharCode = "a".charCodeAt(0);

  let secretIndex = 0;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const addedCode = secret.charCodeAt(secretIndex) - minCharCode + 1;
    const newCharCode = str.charCodeAt(i) + addedCode;

    result += String.fromCharCode(newCharCode);
    secretIndex = (secretIndex + 1) % secret.length;
  }

  return result;
};

console.log(secretEncrypt("elephant", "cab")); //hmgsicqu

const secretDecrypt = (str, secret) => {
  if (typeof str !== "string" || typeof secret !== "string") {
    return "";
  }

  if (str === "" || secret === "") {
    return str;
  }

  const minCharCode = "a".charCodeAt(0);

  let secretIndex = 0;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const addedCode = secret.charCodeAt(secretIndex) - minCharCode + 1;
    const newCharCode = str.charCodeAt(i) - addedCode;

    result += String.fromCharCode(newCharCode);
    secretIndex = (secretIndex + 1) % secret.length;
  }

  return result;
};

console.log(secretDecrypt("hmgsicqu", "cab")); //elephant
