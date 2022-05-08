let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onClick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider",{
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEL: ".swiper-button-prev",
    },
} );

var swiper = new Swiper(".reviews-slider",{
    grabCursor:true,
    loop:true,
    autoHeight:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPreView: 1,
        },
        700: {
            slidesPreView: 2,
        },
        1000: {
            slidesPreView: 3,
        },
    },
} );

let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;

loadMoreBtn.onClick = () =>{
    let boxes = [...document.querySelectorAll('.packages .box-container .box')];
    for (var i = currentItem; i < currentItem +3; i++){
        boxes[i].getElementsByClassName.display = 'inline-block';
    };
    currentItem +=3;
    if(currentItem >= boxes.length){
        loadMoreBtn.style.display = 'none';
    }
}