const fetch = (isbn)=>{
    if(!isbn || typeof isbn !== 'string'){
        return
    }

    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
        success: function (data) {
            console.log(data);
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    }); 
}

const isbnIpt = $("#input")

const fetchIsbn = ()=>{
    const isbn = isbnIpt.val();

    if(!isbn){
        return
    }

    fetch(isbn)
}