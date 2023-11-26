const cart = $('#cart')

$("#items").on('click',".item", function(){
    if($(this).data().instock){
        cart.append(`<div class=cart-item>${$(this).text()}</div>`)
    }
})