const burgerButton = document.querySelector('.burger-menu__buton');
const burgerWrapper = document.querySelector('.burger-menu');
const burgerMenu = document.querySelector('.burger-menu__list');

burgerButton.addEventListener('click',handleMenu);

function handleMenu() {
    burgerMenu.classList.toggle('hide-burger');
}

document.addEventListener('click',hideBurger);

function hideBurger(el) {
    let targetInside = burgerWrapper.contains(el.target);
    if(!targetInside) {
        burgerMenu.classList.add('hide-burger');
    }
    else {
        return;
    }
}