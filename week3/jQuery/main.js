const header = $("h1")
console.log(header);

console.log(jQuery);
console.log($);

const myQuery = function (selector) {
    if (selector[0] == "#") {
        const elementId = selector.split("#")[1] //will return everything after the # in selector 
        return document.getElementById(elementId)
    }
}


console.log(myQuery('#demo'));

// $("h1").css("color", "red")
$("h1").css("color", "blue")

$(".red-div").first().css("color", "red")

$("ul li").first().css("color", "green")

$($("ul li").get(1)).css("color", "pink")

$("#brown-div").css("color", "brown")


$("#b1").addClass("box")
$("#b2").addClass("box")

$("#my-input").val("Terabyte")

const item = $("#item")

const barcode = item.data().barcode
const expirationDate = item.data().date

console.log(`barcode ${barcode} will expire on ${expirationDate}`);

const b1 =$("#b1")

function changeBgColorToBlue(){
    b1.css("background-color",'blue');
    console.log('b1 clicked');
}

b1.hover( changeBgColorToBlue)

$('button').click( ()=>{
    alert($("#my-input").val())
})


const feedme = $(".feedme:first")
console.log("🚀 ~ file: main.js:56 ~ feedme:", feedme)
const body = $("body")

const onCreateNewFeedme =function(){
    const newFeedme = `${$(this).html()}<br/>`;
    body.append( newFeedme)
}

const onRemoveNewFeedme =function(){
    $(this).remove();
}


// $(".feedme:first").click(onCreateNewFeedme)
$(".feedme:first").hover(onRemoveNewFeedme)

