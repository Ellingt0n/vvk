$(document).ready(function() {
    $('#phone').on('input', function() {
        let value = this.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value[0] !== '7') {
                value = '7' + value;
            }
            if (value.length > 11) {
                value = value.substring(0, 11);
            }
            
            let formatted = '+7';
            if (value.length > 1) {
                formatted += ' (' + value.substring(1, 4);
            }
            if (value.length >= 4) {
                formatted += ') ' + value.substring(4, 7);
            }
            if (value.length >= 7) {
                formatted += '-' + value.substring(7, 9);
            }
            if (value.length >= 9) {
                formatted += '-' + value.substring(9, 11);
            }
            this.value = formatted;
        }
    });
    
    $('#phone').val('+7 (');
    
    $('#openPopupBtn').on('click', function(e) {
        e.preventDefault();
        openPopup();
    });
    
    $('#closePopupBtn').on('click', function(e) {
        e.preventDefault();
        closePopup();
    });
    
    $('#popupOverlay').on('click', function(e) {
        if (e.target === this) {
            closePopup();
        }
    });
    
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && $('#popupOverlay').hasClass('popup-overlay--visible')) {
            closePopup();
        }
    });
    
    function openPopup() {
        $('#popupOverlay').addClass('popup-overlay--visible');
        $('body').addClass('popup-open');
    }
    
    function closePopup() {
        $('#popupOverlay').removeClass('popup-overlay--visible');
        $('body').removeClass('popup-open');
    }
    
    
    $('.popup').on('click', function(e) {
        e.stopPropagation();
    });
});