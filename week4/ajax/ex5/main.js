

const iframSurce = $('#ifram-template').html()

const iframTemplate = Handlebars.compile(iframSurce);

const results = $("#results") 

const fetch = (topic)=>{
    if(!topic  || typeof topic !== 'string' ){
        return
    }

    $.ajax({
        method: "GET",
        url: `http://api.giphy.com/v1/gifs/search?q=${topic}&api_key=${API_KEY}`,
        success: function (data) {
            results.empty();
            if(!data.data.length > 0){
                return
            }

            const newHtml =iframTemplate({src:data.data[0].embed_url})
            results.append(newHtml)
            
            console.log(data.data[0].embed_url);
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    }); 
}

const ipt = $("#input")

const fetchIsbn = ()=>{
    const searchTerm = ipt.val();
    ipt.val("");

    if(!searchTerm){
        return
    }

    fetch(searchTerm)
}