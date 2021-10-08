window.addEventListener('DOMContentLoaded', () => {
    if (isMobile.any()) {
        let menuParentsLinks = document.querySelectorAll('.menu-sidebar__sublink > a');
        let submenus = document.querySelectorAll('.submenu');
        let links = document.querySelector('.menu-sidebar__body ul');
        let arrowsMoving = document.querySelectorAll('.menu-sidebar__sublink > a[data-item]');

        function submenuHide() {
            submenus.forEach(submenu => {
                submenu.classList.remove('_activ');
            });
            menuParentsLinks.forEach(function (link) {
                link.parentElement.classList.remove('_activ');
            });
            arrowsMoving.forEach(arrow => {
                arrow.classList.remove('_act');
            })
        }

        function submenuShow(i) {
            if (submenus[i].classList.contains('_activ')) {
                submenus[i].classList.remove('_activ');
                arrowsMoving[i].classList.remove('_act');
            } else {
                submenuHide();
                submenus[i].classList.add('_activ');
                arrowsMoving[i].classList.add('_act');
            }
        }

        links.addEventListener('click', function (e) {
            let target = e.target;
            if (target && target.tagName == 'A') {
                menuParentsLinks.forEach((link, i) => {
                    if (target == link) {
                        e.preventDefault();
                        submenuShow(i);
                        link.parentElement.classList.toggle('_activ');
                    }
                });
            }
        });

    } else {
        let menuParents = document.querySelectorAll('.menu-sidebar__sublink');

        menuParents.forEach(menuParent => {
            menuParent.addEventListener('mouseenter', () => {
                menuParent.classList.add('_active');
            });
            menuParent.addEventListener('mouseleave', () => {
                menuParent.classList.remove('_active');
            });
        })
    }


    let menuBurger = document.querySelector('.menu-sidebar__menu-icon');
    let menuBurgerBody = document.querySelector('.menu-sidebar__body');

    menuBurger.addEventListener('click', function () {
        menuBurger.classList.toggle('_active');
        menuBurgerBody.classList.toggle('_active');
    });

    let categoriesBtn = document.querySelector('.categories__title');
    let categoriesSpan = document.querySelector('.categories__title span');
    let categoriesBody = document.querySelector('.categories__list');

    categoriesBtn.addEventListener('click', function () {
        categoriesBody.classList.toggle('_active');
        categoriesBtn.classList.toggle('_active');
    });

    let categoriesItem = document.querySelectorAll('.categories__item');
    let categoriesItemInput = document.querySelectorAll('.categories__item span');
    let activeArray = [];

    //*               WORKING VARIANT                                                       

    //         if (categoriesActiveItems.length) {
    //             categoriesBtn.classList.add('_categories');
    //             let quantiti = document.querySelector('.quantiti');
    //             quantiti.innerHTML = `${quantiti.getAttribute('data-text')} ${categoriesActiveItems.length}`;
    //         } else {
    //             categoriesBtn.classList.remove('_categories');
    //         }

    //*                                                                                                

    function activeInputs() {
        categoriesItemInput.forEach(item => {
            item.classList.remove('_activee');
            item.addEventListener('click', function () {
                item.classList.toggle('_activee');
            })
        })

        categoriesItem.forEach(function (itemka) {
            itemka.addEventListener('change', (e) => {
                if (itemka.classList.contains('_acti')) {
                    itemka.classList.remove('_acti');
                    activeArray.splice(itemka, 1);
                } else {
                    itemka.classList.add('_acti');
                    activeArray.push(itemka);
                }

                let categoriesActiveItems = document.querySelectorAll('.categories__item._acti');

                if (categoriesActiveItems.length) {
                    categoriesSpan.innerHTML = `Отмечено: ${categoriesActiveItems.length}`;
                    localStorage.setItem('active', activeArray);
                } else {
                    categoriesSpan.innerHTML = `Везде`;
                }
            })
        })
    }

    // function check() {
    //     if (activeArray.length > 0) {
    //         localStorage.setItem('active', activeArray);
    //         console.log('aaaa');
    //         if (localStorage.getItem('active')) {
    //             // JSON.parse(localStorage.getItem('active')).forEach(localItem => {
    //             //     localItem.classList.add('_active');
    //             // });
    //             console.log('ffff');
    //             activeArray.forEach(localItem => {
    //                 localItem.classList.add('_active');
    //                 console.log('uuuuu');
    //             })
    //         }
    //     }
    // }

    activeInputs();
    // check();

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
});