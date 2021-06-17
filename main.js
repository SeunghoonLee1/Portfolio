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
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

//Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', ()=>{
  navbarMenu.classList.toggle('open');
});

//Project filtering
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project'); //project들이 담긴 배열이 리턴됨.

workBtnContainer.addEventListener('click', (e)=>{
  //category__count(span임)를 클릭하는경우 data-set에 아무 값도 없으므로, 
  //그span의 부모(button) 이 선택되도록 아래에 두번째 경우를 설정
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if(filter == null){
    return;
  }

  //Remove selection from the previous item and select the new one.
  const active = document.querySelector('.category__btn.selected');  
  active.classList.remove('selected');
  console.log(`e.target.nodeName : ${e.target.nodeName}`);
  const target = e.target.nodeName ==='BUTTON' ? e.target : e.target.parentNode;
  console.log(`target.nodeName : ${target.nodeName}`);
  target.classList.add('selected');

  projectContainer.classList.add('anim-out');

  setTimeout(() => {
    projects.forEach((project) => {
      if(filter === '*' || filter === project.dataset.type){
        project.classList.remove('invisible');
      }else{
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});

//Handle scrolling when tapping on the 'home__contact' button
const contactButton = document.querySelector('.home__contact');

contactButton.addEventListener('click', (event)=>{
  scrollIntoView('#contact');
});

const arrowUpButton = document.querySelector('.arrow--up');
arrowUpButton.addEventListener('click', ()=>{
  scrollIntoView('#home');
});



//Make home slowly fade to transparent as the window scrolls down.
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () =>{  
  home.style.opacity = 1 - window.scrollY / homeHeight;

  //Show "arrow up" button when scrolling down
  arrowUpButton.style.opacity = window.scrollY / homeHeight;
  home.backg
});






//반복되는 기능들(scrolling) function으로 만들자!
function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}