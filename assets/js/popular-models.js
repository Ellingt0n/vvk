jQuery(document).ready(function ($) {
    // Слайдер популярных моделей
    if (typeof Swiper !== 'undefined') {
        var popularModelsSwiper = new Swiper(".popular-models__slider", {
            slidesPerView: 4,
            spaceBetween: 30,
            loop: false,
            pagination: {
                el: ".popular-models__pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".popular-models__button-next",
                prevEl: ".popular-models__button-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                668: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                1260: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            }
        });
        
        console.log('Popular models swiper initialized');
    } else {
        console.error('Swiper library not found');
    }
});