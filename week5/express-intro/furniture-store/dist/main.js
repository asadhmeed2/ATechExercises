
const view = $('#display');
const input = $('#input');

const getPrice = function(){
    const name = input.val();

    if(!name){
        return;
    }

    $.get(`priceCheck/${name}`).then((data)=>{
        view.empty();
        view.append(`price : ${data.price}`);
    })
}