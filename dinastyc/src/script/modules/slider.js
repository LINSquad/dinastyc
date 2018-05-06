'use strict';

(function () {
    var sliders = document.querySelector('.slider').querySelectorAll('li');
    var menu_sliders = document.querySelectorAll('.main-slider__res');

    if(sliders[0] !== undefined) {
        sliders[0].addEventListener('click', function() {
            var menu_sliders_active = document.querySelector('.main-slider__active');
            var slider_active = document.querySelector('.slider').querySelector('.active');

            for (var i = 1; i < menu_sliders.length; i++) {
                if (menu_sliders_active.className === menu_sliders[i].className) {
                    menu_sliders[i].classList = 'main-slider__res slider__' + i;
                    menu_sliders[i - 1].classList = 'main-slider__res slider__' + (i - 1) + ' main-slider__active main-slider__active__bottom';
                    slider_active.classList = '';
                    sliders[i].classList = 'active';
                }
            }
            if (menu_sliders_active.className === menu_sliders[0].className) {
                menu_sliders[0].classList = 'main-slider__res slider__1';
                menu_sliders[menu_sliders.length - 1].classList = 'main-slider__res slider__' + (menu_sliders.length - 1) + ' main-slider__active main-slider__active__bottom';
                slider_active.classList = '';
                sliders[sliders.length - 2] .classList = 'active';
            }
        })
    }


    if(sliders[sliders.length - 1] !== undefined) {
        sliders[sliders.length - 1].addEventListener('click', function() {
            var menu_sliders_active = document.querySelector('.main-slider__active');
            var slider_active = document.querySelector('.slider').querySelector('.active');

            for (var i = 0; i < menu_sliders.length - 1; i++) {
                if (menu_sliders_active.className === menu_sliders[i].className) {
                    menu_sliders[i].classList = 'main-slider__res slider__' + (i);
                    menu_sliders[i + 1].classList = 'main-slider__res slider__' + (i + 1) + ' main-slider__active main-slider__active__top';
                    slider_active.classList = '';
                    sliders[i + 2] .classList = 'active';
                }
            }
            if (menu_sliders_active.className === menu_sliders[menu_sliders.length - 1].className) {
                menu_sliders[menu_sliders.length - 1].classList = 'main-slider__res slider__' + (menu_sliders.length - 1);
                menu_sliders[0].classList = 'main-slider__res slider__' + 1 + ' main-slider__active main-slider__active__top';
                slider_active.classList = '';
                sliders[1] .classList = 'active';
            }
        })
    }

    //Отзывы

    var arrowRight = document.querySelector('.reviews__right-arrow');
    var arrowLeft = document.querySelector('.reviews__left-arrow');
    var reviews = document.querySelectorAll('.review');
    var reviewTop = document.querySelector('.review-top');

    if(reviews[0].className === reviewTop.className) {
        arrowRight.style = "display: none;";
        arrowLeft.style = "display: block;";
    } else if(reviews[reviews.length - 1].className === reviewTop.className) {
        arrowRight.style = "display: block;";
        arrowLeft.style = "display: none;";
    } else {
        arrowLeft.style = "display: block;";
        arrowRight.style = "display: block;";
    }

    if(arrowLeft !== undefined) {
        arrowLeft.addEventListener('click', function() {
            var reviews = document.querySelectorAll('.review');
            var reviewTop = document.querySelector('.review-top');
            for(var i = 0; i < reviews.length - 1; i++) {
                if(reviews[i].className === reviewTop.className) {
                    reviews[i].classList = "review review-none review-none-animation-right";
                    reviews[i + 1].classList = "review review-top review-animation-left";
                    if(reviews[i + 2] !== undefined) {
                        reviews[i + 2].classList = "review review-substrate";
                    }
                }
            }
            reviewTop = document.querySelector('.review-top');
            if(reviews[0].className === reviewTop.className) {
                arrowRight.style = "display: none;";
                arrowLeft.style = "display: block;";
            } else if(reviews[reviews.length - 1].className === reviewTop.className) {
                arrowRight.style = "display: block;";
                arrowLeft.style = "display: none;";
            } else {
                arrowLeft.style = "display: block;";
                arrowRight.style = "display: block;";
            }
        })
    }

    if(arrowRight !== undefined) {
        arrowRight.addEventListener('click', function() {
            var reviews = document.querySelectorAll('.review');
            var substrate = document.querySelector('.review-substrate');
            var reviewTop = document.querySelector('.review-top');
            for(var i = 1; i < reviews.length; i++) {
                if(reviews[i].className === reviewTop.className) {
                    reviews[i].classList = "review review-substrate review-sub-animation-right";
                    reviews[i - 1].classList = "review review-top review-animation-right";
                    if(substrate !== null){
                        substrate.classList = "review review-none";
                    }
                }
            }

            reviewTop = document.querySelector('.review-top');
            if(reviews[0].className === reviewTop.className) {
                arrowRight.style = "display: none;";
                arrowLeft.style = "display: block;";
            } else if(reviews[reviews.length - 1].className === reviewTop.className) {
                arrowRight.style = "display: block;";
                arrowLeft.style = "display: none;";
            } else {
                arrowLeft.style = "display: block;";
                arrowRight.style = "display: block;";
            }
        })
    }

})();