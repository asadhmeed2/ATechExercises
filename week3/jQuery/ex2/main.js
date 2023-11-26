const body = $('body');

body.append(`<input id="input" type="text" placeholder="Human Name"/>`);
body.append(`<button id="add">Add Human</button>`);


const input = $('input');
const button = $('button');
const listUl = $('ul');
const listItem = $('.item:first')

let inputValue = '';

input.change(()=>{
    inputValue = input.val();
});

listUl.on('click','.item',function(){
    $(this).remove();
})

button.click(()=>{
    input.val("");

    const item = listItem.clone();
    $(item).text(inputValue);
    listUl.append(item)
})