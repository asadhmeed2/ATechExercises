const ZIPCODE_START = "5"

const mappedUsers = users.filter(user=>
    user.address.zipcode[0] === ZIPCODE_START,
    
).map(user =>user.id)

console.log(mappedUsers);

