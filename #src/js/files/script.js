let menuParents = document.querySelectorAll('.menu-sidebar__sublink');

menuParents.forEach(menuParent => {
    menuParent.addEventListener('mouseenter', () => {
        menuParent.classList.add('_active');
    });
    menuParent.addEventListener('mouseleave', () => {
        menuParent.classList.remove('_active');
    });
})

let menuBurger = document.querySelector('.menu-sidebar__menu-icon');
let menuBurgerBody = document.querySelector('.menu-sidebar__body');

menuBurger.addEventListener('click', function () {
    menuBurger.classList.toggle('_active');
    menuBurgerBody.classList.toggle('_active');
});


let categoriesBtn = document.querySelector('.categories__title');
let categoriesBody = document.querySelector('.categories__list');

categoriesBtn.addEventListener('click', function (e) {
    _slideToggle(categoriesBody);
    categoriesBtn.classList.toggle('_active');
});

let categoriesItem = document.querySelectorAll('.categories__item');

categoriesItem.forEach(item => {
    item.addEventListener('change', function () {
        item.classList.toggle('_active');
        let categoriesActiveItems = document.querySelectorAll('.categories__item._active');
        if (categoriesActiveItems.length) {
            categoriesBtn.classList.add('_categories');
            let quantiti = document.querySelector('.quantiti');
            quantiti.innerHTML = `${quantiti.getAttribute('data-text')} ${categoriesActiveItems.length}`;
        } else {
            categoriesBtn.classList.remove('_categories');
        }
    });
})

//*                                cart                                               

let cartParent = document.querySelector('[data-cart]');
let cart = document.querySelector('.info-header__cart');
let headerLine = document.querySelector('[data-cartmove]');

window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth < 550) {
        cart.remove();
        headerLine.append(cart);
    } else {
        cartParent.append(cart);
    }
});