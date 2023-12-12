const validator = require('validator');

const email = 'shoobert@dylan'
const number = '786-329-9958'


//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
console.log(`is ${email} valid email :`,validator.isEmail(email));
//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
console.log(`is ${number} valid a us mobile phone number :`,validator.isMobilePhone(number , "en-US"));

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
console.log(`clean ${text} with blacklist [${blacklist}] validation : ${validator.blacklist(text,blacklist)}`);
//Ultimately, it should print "im so excited"

