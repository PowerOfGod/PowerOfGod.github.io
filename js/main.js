let btn = document.querySelector('.menu__btn');
let menu = document.querySelector('.menu__list');

const images = document.querySelectorAll('.info__slider-img');
const arrows = document.querySelectorAll('.info__slider-arrow');

let indexSlider = 0;

function show(index) {
    images[indexSlider].classList.remove('active')
    images[index].classList.add('active');
    indexSlider = index;
}

arrows.forEach((e) => {
    e.addEventListener('click', (e) => {
        if(e.target.classList.contains('prev')){
            let index = indexSlider - 1
            if(index < 0){
                index = images.length - 1
            }
            show(index);
        }else if(e.target.classList.contains('next')){
            let index = indexSlider + 1
            if(index >= images.length){
                index = 0
            }
            show(index);
        }
    } )
})

btn.addEventListener('click', function(){
    menu.classList.add("hide");
})


let close = document.querySelector('.menu__close')
close.addEventListener('click', () => {
    menu.classList.remove("hide");
})


