var buttonBack = document.querySelector("#button__back");
var cards = document.querySelectorAll("#card__day__weather");
var cardTitle = document.querySelectorAll("#card__title");

const backToIndex= ()=>{
    window.location = "/"
}

buttonBack.addEventListener("click", backToIndex);
let counter = 0;

cards.forEach((element, index)=>{
    let texto = cardTitle.item(index).innerHTML.toString();
    element.addEventListener("click", ()=>console.log("Hello i'm card "+ texto.trim()))
})