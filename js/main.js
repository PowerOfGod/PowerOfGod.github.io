let btn = document.querySelector('.menu__btn');
let menu = document.querySelector('.menu__list');
btn.addEventListener('click', function(){
    menu.classList.add("hide");
})


let close = document.querySelector('.menu__close')
close.addEventListener('click', () => {
    menu.classList.remove("hide");
})
console.log(btn)