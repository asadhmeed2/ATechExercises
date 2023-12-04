const fetch = (queryType, queryValue)=>{
    if(!queryType || !queryValue || typeof queryType !== 'string' || typeof queryValue !== 'string'){
        return
    }

    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
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
    const queryType ="isbn" //ISBN or title
    const queryValue = "9789814561778"

    fetch(queryType, queryValue)
}