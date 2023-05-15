const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

const burgerClick = ()=>{
    hamburger.classList.toggle('hamburger--active');
    menu.classList.toggle('nav--active');
};

hamburger.addEventListener("click",burgerClick,false);

const list = document.querySelectorAll('.menu-each-element');

const menuHide = () => {
    if(hamburger.classList.contains('hamburger--active') &&
    !menu.classList.contains('nav--active')){
        hamburger.classList.remove('hamburger--active');
        menu.classList.add('nav--active');
    }
}

list.forEach(e => e.addEventListener("click", menuHide))
