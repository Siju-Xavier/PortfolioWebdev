const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCROLL UP & HEADER SHADOW ===============*/
const scrollUp = document.getElementById('scroll-up')
const header = document.getElementById('header')

window.addEventListener('scroll', () => {
   if(scrollUp){
      if(window.scrollY >= 350){
         scrollUp.classList.add('show-scroll')
      } else {
         scrollUp.classList.remove('show-scroll')
      }
   }

   if(header){
      if(window.scrollY >= 50){
         header.style.boxShadow = '0 4px 16px hsla(0, 0%, 0%, .3)'
      } else {
         header.style.boxShadow = 'none'
      }
   }
})

if(scrollUp){
   scrollUp.addEventListener('click', (e) => {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
   })
}