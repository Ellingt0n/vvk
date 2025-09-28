jQuery(document).ready(function ($) {
    if (typeof Swiper !== 'undefined') {
        var certificatesSwiper = new Swiper(".certificates__slider", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: false,
            pagination: {
                el: ".certificates__pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".certificates__button-next",
                prevEl: ".certificates__button-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                668: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                1260: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                }
            }
        });
        
        console.log('Certificates swiper initialized');
    } else {
        console.error('Swiper library not found');
    }
});