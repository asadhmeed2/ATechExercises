const wordPromice = $.get('https://random-word-api.herokuapp.com/word')

const API_KEY ="vGDiU1FUmxuSg5Jrk71FOkJPAbno5DlX" 

const iframSurce = $('#ifram-template').html()

const iframTemplate = Handlebars.compile(iframSurce);

wordPromice.then(wordArray=>{
    const word = wordArray[0];
    $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`).then(books=>{
        

        if( books.items && books.items.length){
            console.log(books.items[0].volumeInfo.title);
            $('#bookTitle').append(books.items[0].volumeInfo.title)
        }
    })
    $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=${API_KEY}`).then(gifs=>{
        const gifhtml = iframTemplate({src:gifs.data[0]['embed_url']})
        $('#gif').append(gifhtml)
    })
})