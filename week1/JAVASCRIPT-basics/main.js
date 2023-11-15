/*
 (5 > 2) && false -> falsey 

 !("knife" === "sword") -> truthy

 (1 < 2) || (-1 > -1) || !false -> truthy

 "" -> falsey

 (31 % 5) == "1" -> truthy

 !!true -> truthy

"5th Avenue" != "5th Avenue" -> falsey

52 !== "52" -> truthy

(undefined || null) -> falsey
*/

let a = 3;
let c = 0;
let b = a;
b = a; // b= 3
c = a; // c= 3
b = c; // b= 3
a = b; // a= 3

// a = b = c = 3

//Tesla ai if statment

let boughtTesla = true;
const yearOfTeslaPurchase = 2013;
let isUSCitizen = false;
let currentYear = 2018;

if (!boughtTesla) {
  console.log("Would you like to bey a tesla");
} else {
  if (isUSCitizen) {
    if (currentYear - yearOfTeslaPurchase > 4) {
      console.log("Would you like an upgrade");
    } else {
      console.log("are you satisfied with the car");
    }
  } else {
    console.log(" would you like to move to the US");
  }
}

// arrays
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.splice(1, 2); //[1, 4, 5, 6, 7, 8, 9, 10]
numbers.splice(3, 1, 1); //[1, 4, 5, 1, 7, 8, 9, 10]
numbers.splice(numbers.length - 4); //[1, 4, 5, 1]
numbers.unshift(0); //[0,1, 4, 5, 1]
console.log(numbers);

// objects

// 1
p1 = { name: "Jill", age: 32, city: "asd" };

p2 = { name: "Robert", age: 32, city: "haifa" };

if (p1.city === p2.city && p1.age === p2.age) {
  console.log(`${p1.name} wanted to date ${p2.name}`);
}
if (p1.city !== p2.city) {
  console.log(`${p1.name} wanted to date ${p2.name}, but couldn’t `);
}

// 2

book1 = { tilte: "none1", author: "me" };
book2 = { tilte: "none2", author: "me" };
book3 = { tilte: "none3", author: "me" };

library = {
  books: [book1, book2, book3],
};

// extra
const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

// 3
// const name = prompt("Please enter the name for your reservation");

// if (reservations[name]) {
//   if (!reservations[name].claimed) {
//     reservations[name].claimed =true
//     console.log(`Welcome, ${name}`);
//   } else {
//     console.log("Hmm, someone already claimed this reservation");
//   }
// } else {
//   console.log("You have no reservation");
// }

// 3.1

// if (reservations[name]) {
//   if (!reservations[name].claimed) {
//     reservations[name].claimed =true
//     console.log(`Welcome, ${name}`);
//   } else {
//     console.log("Hmm, someone already claimed this reservation");
//   }
// } else {
//   reservations[name] = { claimed: true };
// }

const lowercaseNameReservations = {};

for (let alfabet in reservations) {
  lowercaseNameReservations[alfabet.toLowerCase()] = reservations[alfabet];
}

// 3.2
if (lowercaseNameReservations[name.toLowerCase()]) {
  if (!lowercaseNameReservations[name.toLowerCase()].claimed) {
    lowercaseNameReservations[name.toLowerCase()].claimed = true;
    console.log(`Welcome, ${name}`);
  } else {
    console.log("Hmm, someone already claimed this reservation");
  }
} else {
  lowercaseNameReservations[name.toLowerCase()] = { claimed: true };
}

console.log(
  "🚀 ~ file: main.js:117 ~ lowercaseNameReservations:",
  lowercaseNameReservations
);
// extinsions

const date = 3;

const kitchen = {
  owner: "Geraldine",
  hasOven: true, // choose one
  fridge: {
    price: 500,
    works: false, // choose one
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "raddish", expiryDate: 2 },
      { name: "bread", expiryDate: 1 },
    ],
  },
};

const faddishExpredInDays = date - kitchen.fridge.items[1].expiryDate;

const foodName = kitchen.fridge.items[1].name;

const haseOven = kitchen.hasOven;

const fridgeWorks = kitchen.fridge.works;
const fridgePrice = kitchen.fridge.price;

if (haseOven && fridgeWorks) {
  console.log(
    `Geraldine’s ${foodName} expired ${faddishExpredInDays} day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the ${foodName} in.`
  );
} else if (!haseOven && fridgeWorks) {
  console.log(
    `Geraldine’s ${foodName} expired ${faddishExpredInDays} day ago. Weird, considering her fridge works. Too bad she doesn’t have an oven to cook the ${foodName} in.`
  );
} else if (haseOven && !fridgeWorks) {
  console.log(
    `Geraldine’s ${foodName} expired ${faddishExpredInDays} day ago. Probably because her fridge doesn’t work. Luckily, she has an oven to cook the ${foodName} in. And she’ll have to pay ${fridgePrice} to fix the fridge.`
  );
} else if (!haseOven && !fridgeWorks) {
  console.log(
    `Geraldine’s ${foodName} expired ${faddishExpredInDays} day ago. Probably because her fridge doesn’t work. Too bad she doesn’t have an oven to cook the ${foodName} in. And she’ll have to pay ${fridgePrice} to fix the fridge.`
  );
}

// loops
// 1
const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

for (let i = 0; i < names.length; i++) {
  people.push({ name: names[i], age: ages[i] });
}

console.log(people);

//2
for (humen of people) {
  console.log(`${humen.name} is ${humen.age} years old`);
}

// 3
const DELETED_INEX = 2;
const posts = [
  { id: 1, text: "Love this product" },
  { id: 2, text: "This is the worst. DON'T BUY!" },
  { id: 3, text: "So glad I found this. Bought four already!" },
];

posts.splice(
  posts.findIndex((post) => post.id === DELETED_INEX),
  1
);

console.log(posts);

//4

const posts2 = [
  {
    id: 1,
    text: "Love this product",
    comments: [],
  },
  {
    id: 2,
    text: "This is the worst. DON'T BUY!",
    comments: [
      { id: 1, text: "Idiot has no idea" },
      { id: 2, text: "Fool!" },
      { id: 3, text: "I agree!" },
    ],
  },
  {
    id: 3,
    text: "So glad I found this. Bought four already!",
    comments: [],
  },
];

const gevingId = 2;

const post = posts2[posts2.findIndex((post) => post.id === gevingId)];

post.comments.splice(
  post.comments.findIndex((comment) => comment.id === 3),
  1
);

console.log("posts2", posts2);

// Extension

const dictionary = {
  A: ["Aardvark", "Abacus", "Actually", "Atomic"],
  B: ["Banana", "Bonkers", "Brain", "Bump"],
  C: ["Callous", "Chain", "Coil", "Czech"],
};

for (alfabet of Object.keys(dictionary)) {
  console.log(`Words that begin with  ${alfabet}:`);
  for (name of dictionary[alfabet]) {
    console.log(name);
  }
}
