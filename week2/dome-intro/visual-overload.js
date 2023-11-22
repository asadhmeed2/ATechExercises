const container = document.querySelector('#container');

const HASH_COLOR_LINGTH =6
const NUMBER_OF_BOXS =10

const HASH_CHAR = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

function generateHashColors(){
    let result=''
    for(let i = 0; i < HASH_COLOR_LINGTH; i++){
        const randNum =Math.floor( Math.random() * HASH_CHAR.length)
        result += HASH_CHAR[randNum]
    }
    return `#${result}`
}


function generateBoxs(){
    for(let i =0; i < NUMBER_OF_BOXS; i++){
        const box = document.createElement('div')
        box.onmouseover = function(){
            box.style.backgroundColor = generateHashColors()
        } 
        box.setAttribute('class','box');
        container.appendChild(box)
    }
}

generateBoxs()