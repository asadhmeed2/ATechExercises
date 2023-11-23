function StringFormatter (){
    
    
    function capitalizeFirst(text){
        const lowerCaseText = text.toLowerCase();
        const result = lowerCaseText[0].toUpperCase() + lowerCaseText.substr(1)

        return result
    } 

    function toSkewerCase(text){
        let result = '';

        for(let char of text){
            if(char === " "){
                result += '-'
            }else{
                result += char
            }   
        }
        return result;
    } 

    return {
        toSkewerCase,
        capitalizeFirst
    }
}

const stringFormatter = StringFormatter()

console.log(stringFormatter.capitalizeFirst('asAd'));
console.log(stringFormatter.toSkewerCase('as Ad'));