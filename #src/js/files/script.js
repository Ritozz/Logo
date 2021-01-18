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



let categoriesItem = document.querySelectorAll('.categories__item');

categoriesItem.forEach(item => {
   item.addEventListener('change', function (e) {
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

// let categoriesTitle = document.querySelector('.categories__title');
// let categoriesItems = document.querySelectorAll('.categories__item');

// for (let i = 0; i < categoriesItems.length; i++) {
//    let categoriesItem = categoriesItems[i];
//    categoriesItem.addEventListener('change', function (e) {
//       categoriesItem.classList.toggle('_active');

//       let categoriesActiveItems = document.querySelectorAll('.categories__item._active');

//       if (categoriesActiveItems.length > 0) {
//          categoriesTitle.classList.add('_categories');
//          console.log('added');
//       } else {
//          categoriesTitle.classList.remove('_categories');
//          console.log('removed');
//       }
//    });
// }