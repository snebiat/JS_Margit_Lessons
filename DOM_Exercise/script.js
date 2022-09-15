const open_modal_btn = document.querySelector('#open_modal');
const close_modal_btn = document.querySelector('#close_modal');

const modal = document.querySelector('#overlay');
const backtotop = document.querySelector('#back_to_top');
const header = document.querySelector('header');

const hamburger_menu = document.querySelector('#mob_button');
const nav = document.querySelector('nav');
let links = document.querySelectorAll('nav ul li a'); /* possible to do the actual element with the html tags */

window.onscroll = function () {
    scrollFunction();
}

const scrollFunction = () => {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('bg');
        backtotop.style.display = 'block';
    }
    else {
        header.classList.remove('bg');
        backtotop.style.display = 'none';
    }
}

const getToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const openModal = () => {
    modal.style.display = "fixed"; 
}

const closeModal = () => {
    modal.style.display = "none";
}

const mobMenu = () => {
    if (nav.classList.contains('responsive')) {
        nav.classList.remove('responsive');
        document.body.style.overflow = '';
    }
    else {
        nav.classList.add('responsive');
        document.body.style.overflow = 'hidden'; // when the mobmenu is open, don't let the user to scroll the content
    }
}

for (const link of links) { /* to check if the link is clicked and call the mobMenu again to show and hide the mobmenu  */
    link.addEventListener('click', mobMenu)
}

backtotop.addEventListener('click', getToTop);
open_modal_btn.addEventListener('click', openModal);
close_modal_btn.addEventListener('click', closeModal);
hamburger_menu.addEventListener('click', mobMenu)