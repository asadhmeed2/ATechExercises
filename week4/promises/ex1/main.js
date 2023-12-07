const wordPromice = $.get('https://random-word-api.herokuapp.com/word')

wordPromice.then(wordArray=>{
    const word = wordArray[0];
    $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`).then(books=>{
        if(books.items.length){
            console.log(books.items[0]);
        }
    })
})