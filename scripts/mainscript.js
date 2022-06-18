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
document.querySelectorAll('.header_menu > a').forEach(el => el.addEventListener('click', () => {
    document.querySelectorAll('.header_links > a').forEach(a => {
        a.classList.remove('active');
        (el.textContent === a.textContent) ? a.classList.add('active') : null ;
    });
    document.querySelectorAll('.header_menu > a').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    btnHamburger.classList.remove('open');
    overlay.classList.remove('clicked');
    hMenu.classList.add('hideVisibility');
}))
document.querySelectorAll('.header_links > a').forEach(el => el.addEventListener('click', () => {
    document.querySelectorAll('.header_menu > a').forEach(a => {
        a.classList.remove('active');
        (el.textContent === a.textContent) ? a.classList.add('active') : null ;
    });
    document.querySelectorAll('.header_links > a').forEach(a => a.classList.remove('active'));
    el.classList.add('active');
}))
document.getElementById('headerHome').addEventListener('click' , () => {
    document.querySelectorAll('.header_menu > a').forEach(a => {
        a.classList.remove('active');
    });
    document.querySelectorAll('.header_links > a').forEach(a => {
        a.classList.remove('active');
    });
    document.querySelectorAll('.header_links > a')[0].classList.add('active')
    document.querySelectorAll('.header_menu > a')[0].classList.add('active')
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




