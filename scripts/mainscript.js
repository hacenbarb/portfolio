"use strict";

const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('#overlay');
const hMenu = document.querySelector("#menu");
const body = document.querySelector('body');
const welcome = document.querySelector('.welcome_imgs');
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 1,
    // rootMargin:"0px 0px -100px 0px"
};

btnHamburger.addEventListener('click', function(){
    if(btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');
        overlay.classList.remove('clicked');
        // body.classList.remove('noScroll');
        hMenu.classList.add('hideVisibility');
    }else {
        btnHamburger.classList.add('open');
        overlay.classList.add('clicked');
        // body.classList.add('noScroll');        
        hMenu.classList.remove('hideVisibility');
    }
})

const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll) {
entries.forEach(entry => {
    if(!entry.isIntersecting) {return;}else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    }
})
}, appearOptions);
faders.forEach(fader => {
    appearOnScroll.observe(fader);
})




