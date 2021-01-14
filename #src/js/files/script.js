let menuParents = document.querySelectorAll('.menu-sidebar__sublink');

for (let i = 0; i < menuParents.length; i++) {
   const menuParent = menuParents[i];
   menuParent.addEventListener('mouseenter', function (e) {
      menuParent.classList.add('_active');
   });
   menuParent.addEventListener('mouseleave', function (e) {
      menuParent.classList.remove('_active');
   })
}

let menuBurger = document.querySelector('.menu-sidebar__menu-icon');
let menuBurgerBody = document.querySelector('.menu-sidebar__body');

menuBurger.addEventListener('click', function (e) {
   menuBurger.classList.toggle('_active');
   _slideToggle(menuBurgerBody);
});

let categoriesBtn = document.querySelector('.categories__title');
let categoriesBody = document.querySelector('.categories__list');

categoriesBtn.addEventListener('click', function (e) {
   _slideToggle(categoriesBody);
   categoriesBtn.parentElement.classList.toggle('_active');
});