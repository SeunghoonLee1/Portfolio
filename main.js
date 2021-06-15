'use strict';

// Make navbar transparent when it is on the top.
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if(window.scrollY > navbarHeight){
    navbar.classList.add('navbar--dark');
  }else{
    navbar.classList.remove('navbar--dark');
  }
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) =>{
  const target = event.target;
  const link = target.dataset.link;
  if(link == null){
    return;
  }
  scrollIntoView(link);
});

//Handle scrolling when tapping on the 'home__contact' button
const contactButton = document.querySelector('.home__contact');

contactButton.addEventListener('click', (event)=>{
  scrollIntoView('#contact');
});

//반복되는 기능들(scrolling) function으로 만들자!
function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}