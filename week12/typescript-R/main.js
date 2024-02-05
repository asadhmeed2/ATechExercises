"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hobby_1 = require("./Hobby");
var Person_1 = require("./Person");
var p1 = new Person_1.Person("Shoobert", 29, 175, 70, []);
p1.grow();
console.log(p1.age); // should print 30
p1.loseWeight(10);
console.log(p1.weight); // should print 60
var h1 = new Hobby_1.Hobby("Skating", 20);
console.log(h1.hobbyName); // should print 'Skating'
console.log(h1.yearsInHobby); // should print 20
p1.addHobby(h1);
p1.addHobby(new Hobby_1.Hobby("Surfing", 3));
console.log(p1.hobbies);
/* should print
 [
   Hobby { hobbyName: 'Skating', years: 20 },
   Hobby { hobbyName: 'Surfing', years: 3 }
 ]
*/
console.log(p1.getHobbiesNames()); // should print [ 'Skating', 'Surfing' ]
