jQuery(document).ready(function ($) {
    // =8F80;870F8O A;0945@0 :><0=4K B>;L:> =0 <>18;L=KE CAB@>9AB20E
    let teamSwiper = null;
    
    function initTeamSwiper() {
        if (window.innerWidth <= 768 && !teamSwiper) {
            teamSwiper = new Swiper(".team__grid", {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: false,
                pagination: {
                    el: ".team__pagination",
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    }
                }
            });
            console.log('Team swiper initialized');
        } else if (window.innerWidth > 768 && teamSwiper) {
            teamSwiper.destroy(true, true);
            teamSwiper = null;
            console.log('Team swiper destroyed');
        }
    }

    // =8F80;870F8O ?@8 703@C7:5
    if (typeof Swiper !== 'undefined') {
        initTeamSwiper();
        
        // 5@58=8F80;870F8O ?@8 87<5=5=88 @07<5@0 >:=0
        $(window).on('resize', function() {
            setTimeout(initTeamSwiper, 100);
        });
    } else {
        console.error('Swiper library not found');
    }
});