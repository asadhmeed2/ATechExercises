const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }

const commentOnWeather = (temp)=> `It's ${determineWeather(temp)}`;

const result1 = commentOnWeather(30) //returns "It's hot"
const result2 = commentOnWeather(22) //returns "It's cold"

console.log(result1);
console.log(result2);