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