const body = $('body');


const createBox = (id)=>{
    body.append(`<div class="box" id="${id}"></div>`)
}

createBox(1);
createBox(2);

const boxs = $('.box')

let changBgColor = false;

body.on('mouseout',".box", function(){
    if(!changBgColor){
        changBgColor =true;
    }
})

body.on('mouseenter',".box", function(){
  
    
    if(changBgColor){
        $.each(boxs, (index,box)=>{
            if(box.id !== this.id){
                $(box).css('background-color','orange');
            }else{
                $(this).css('background-color','#8e44ad');
            }
        })
        changBgColor= false;
    }
    
})
