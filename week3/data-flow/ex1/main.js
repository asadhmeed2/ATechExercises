const posts = [
    {name: "asad", text:"hi"},
    {name: "hmeed", text:"whatsup"},
    {name: "asad", text:"hi"},
    {name: "hmeed", text:"whatsup"}
]

const postsView = $('#postsView')
const submitBtn = $('#btn-submit')

const nameInpt = $('#name')
const textInpt = $('#text')

const render = function(){
    postsView.empty()
    posts.forEach(function(post,idx){
        postsView.append(`<div class="post" id="${idx}"><strong>${post.name}</strong>: ${post.text}</div>`)
    });
}

const emptyInputs = function(){
    nameInpt.val("");
    textInpt.val("");
}

submitBtn.on('click', function(){
    posts.push({name: nameInpt.val(), text: textInpt.val()});
    emptyInputs();
    render();
})

postsView.on('click','.post',function(){
    posts.splice(this.id,1);
    render();
})

render();

