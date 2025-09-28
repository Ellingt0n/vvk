$(document).ready(function() {
    $('.accordion__header').on('click', function() {
        const $item = $(this).closest('.accordion__item');
        const $content = $item.find('.accordion__content');
        
        if ($item.hasClass('is-active')) {
            $item.removeClass('is-active');
            $content.slideUp(300);
        } else {
            $item.addClass('is-active');
            $content.slideDown(300);
        }
    });
    
    $('.accordion__content').hide();
});