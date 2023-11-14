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
