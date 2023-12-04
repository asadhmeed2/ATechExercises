
const CITY="South Christy";


const allLiveInCity = users.every(user=>user.address.city.toLowerCase() === CITY.toLowerCase())

console.log(allLiveInCity);

