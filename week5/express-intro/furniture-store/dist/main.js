
const view = $('#display');
const input = $('#input');
const bayInput = $('#bay-input');

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

const bay = function(){
    const name = bayInput.val();

    if(!name){
        return;
    }

    $.get(`buy/${name}`).then((data)=>{
        console.log(data);
        const {item:{name,price,inventory}} = data;
        view.empty();
        view.append(`Congratulations, you’ve just bought ${name} for ${price}. There are ${inventory} left now in the store.`)
    })
}