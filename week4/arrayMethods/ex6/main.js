
const SUITE_MATCH="Apt. 950";


const user = users.find(user=>user.address.suite.toLowerCase() === SUITE_MATCH.toLowerCase())

console.log(user.company.name);

