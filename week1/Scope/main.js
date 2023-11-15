// Section 1

const run = true;

if (run) {
  let distance = 8; // local block scope
  for (var i = 0; i < distance; i++) {
    console.log("running"); // running x 8
  }
  console.log("Finished running " + distance + " miles"); // Finished running 8 miles
}

console.log("Damn, you see this gal? She ran " + distance + " miles"); //error becouse let dastance is a block scoped and canot be called outside of that block

// Section 2

if (13 == "space") {
  let cowSound = "moo"; // local block scope
} else {
  console.log("Cow says " + cowSound); //error becouse let cowSound is a block scoped and canot be called outside of that block
}

// Section 3

const serveOrders = function (orders) {
  for (let order of orders) {
    // local block scope
    let specialOrder = "special " + order; // local block scope
    console.log("Served a " + specialOrder);
    /*
    spcial fish
    spcial lettuce plate
    spcial curious cheese
    */
  }

  console.log("Finished serving all the orders: " + orders); //["fish", "lettuce plate", "curious cheese"]
};
const allOrders = ["fish", "lettuce plate", "curious cheese"];
serveOrders(allOrders);

// Section 4

const pot = "red pot with earth in it"; // global scope

const getSeed = function () {
  const seed = "brown seed"; //local block scope
};

const plant = function () {
  getSeed();
  console.log("Planting the " + seed + " inside a " + pot); //error becouse let seed is a block scoped and is in another function and canot be called outside of that block
};

plant();

// Section 5

const doesUserExist = function (name) {
  const users = [
    { name: "Shapira", age: 19 },
    { name: "Lucius", age: 23 },
  ]; // local block scope

  for (let u of users) {
    // local block scope
    if (u.name == name) {
      const found = true; // local block scope
    }
  }
  // found is undefined becouse it is block scoped variable inside the if statement
  return found; //error becouse found is a block scoped variable inside the if statement and cannot use it outside
};

const userExists = doesUserExist("Lucius");
if (userExists) {
  // code will stop hear becouse of the error
  console.log("We found the ragamuffin!");
} else {
  console.log("No idea where this person is.");
}

//Section 6

const isEnough = false; //global scope

const makeEnough = function () {
  for (let i = 0; i < 10; i++) {
    if (i > 5) {
      isEnough = true; //  error const canot be changed
    }
  }
};

makeEnough();

if (isEnough) {
  // code will stop hear becouse of the error
  console.log("Finally, sheesh");
} else {
  console.log("Here we go again...");
}
