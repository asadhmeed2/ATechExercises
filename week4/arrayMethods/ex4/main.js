const MATCH_LETTER = "c"

MATCH_IDX=0;
const mappedUsers = users.filter(user=>
    user.name.toLowerCase()[MATCH_IDX] === MATCH_LETTER,
    
).map(user =>user.name)

console.log(mappedUsers);

