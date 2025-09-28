jQuery(document).ready(function ($) {
    let advantagesSwiper;
    
    function initAdvantagesSwiper() {
        if ($(window).width() <= 1024) {
            if (!advantagesSwiper) {
                advantagesSwiper = new Swiper(".advantages__slider", {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    pagination: {
                        el: ".advantages__pagination",
                        clickable: true,
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        }
                    }
                });
            }
        } else {
            if (advantagesSwiper) {
                advantagesSwiper.destroy(true, true);
                advantagesSwiper = null;
            }
        }
    }
    
    // Инициализация при загрузке
    initAdvantagesSwiper();
    
    // Переинициализация при изменении размера окна
    $(window).on('resize', function() {
        initAdvantagesSwiper();
    });
});