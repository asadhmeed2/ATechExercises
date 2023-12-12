const capitalize = (str)=> {
    const lowerCaseStrArray = str.toLowerCase().split('');
    
    lowerCaseStrArray[0] = lowerCaseStrArray[0].toUpperCase();

    return lowerCaseStrArray.join('');

}

capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia