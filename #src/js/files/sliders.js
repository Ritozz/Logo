//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');

            if (slider.classList.contains('_swiper_scroll')) {
                let sliderScroll = document.createElement('div');
                sliderScroll.classList.add('swiper-scrollbar');
                slider.appendChild(sliderScroll);
            }
        }
        if (slider.classList.contains('_gallery')) {
            //slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
        const sliderScrollItem = sliderScrollItems[index];
        const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
        const sliderScroll = new Swiper(sliderScrollItem, {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: sliderScrollBar,
                draggable: true,
                snapOnRelease: false
            },
            mousewheel: {
                releaseOnEdges: true,
            },
        });
        sliderScroll.scrollbar.updateSize();
    }
}


function sliders_bild_callback(params) { }

if (document.querySelector(".mainslider")) {

    let mainslider = new Swiper('.mainslider__body', {
        /*
        effect: 'fade',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        */
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,
        //touchRatio: 0,
        //simulateTouch: false,
        // loop: true,
        //preloadImages: false,
        //lazy: true,
        // Dotts
        pagination: {
            el: '.mainslider__dots',
            clickable: true,
        },
        // Arrows
        // navigation: {
        //     nextEl: '.about__more .more__item_next',
        //     prevEl: '.about__more .more__item_prev',
        // },
        /*
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
                autoHeight: true,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1268: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
        */
        on: {
            lazyImageReady: function () {
                ibg();
            },
        }
        // And if we need scrollbar
        //scrollbar: {
        //	el: '.swiper-scrollbar',
        //},
    });

    //*                              variant 1                                    

    // let mainsliderImages = document.querySelectorAll(".mainslider__image img");
    // let mainSliderDots = document.querySelectorAll(".mainslider__dots .swiper-pagination-bullet");

    // for (let i = 0; i < mainsliderImages.length; i++) {
    //     let atr = mainsliderImages[i].getAttribute('src');
    //     mainSliderDots[i].style.backgroundImage = `url('${atr}')`;
    //     console.log(mainSliderDots[i]);
    // }
    //*                             Variant 2                                            

    let mainsliderImages = document.querySelectorAll(".mainslider__image img");
    let mainSliderDots = document.querySelectorAll(".mainslider__dots .swiper-pagination-bullet");
    let arr = [];
    let i = 0;

    mainSliderDots.forEach(dot => {
        arr.push(dot);
        return arr;
    })

    mainsliderImages.forEach(image => {
        let atr = image.getAttribute('src');
        arr[i].style.backgroundImage = `url('${atr}')`;
        i++;
    });

}

