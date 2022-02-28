let ham = document.querySelector('.mobile-nav');
let menu=document.querySelector('.main-menu');
let navs =document.querySelector('.menu');
ham.addEventListener('click',mainMenu);

function mainMenu(){
   
  
   if(navs.style.display==='none'){
       navs.style.display='flex';
       navs.classList.add('active');
   }else{
      navs.style.display='none';
   }
 
   //   navs.classList.remove('main-menu');
   
   // if(navs.style.display='flex'){
   //    navs.classList.remove('active');
   // }
}
  
