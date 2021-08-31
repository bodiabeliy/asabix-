const clicker = document.querySelector('.burgger')
const menu = document.querySelector('.header__menu')
const menu2 = document.querySelector('.header__menu-2')
const menu3 = document.querySelector('.header__menu-3')

clicker.addEventListener('click', () => {
    menu.classList.toggle('header__menu--active')
    const section = document.querySelector('.main__container')
    section.classList.toggle('active')

})

const level_1 = document.querySelector('#a')

level_1.addEventListener('click', (e) => {
    e.preventDefault()
    
    menu.classList.remove('header__menu--active')
    menu2.classList.toggle('header__menu--active')



})
const level_2 = document.querySelector('#b')
level_2.addEventListener('click', (e) => {
    e.preventDefault()
    menu2.classList.remove('header__menu--active')
    menu3.classList.toggle('header__menu--active')


})