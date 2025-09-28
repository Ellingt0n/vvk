$(document).ready(function() {
    $('.catalog-sort__button').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const $sort = $(this).closest('.catalog-sort');
        
        $sort.toggleClass('catalog-sort--active');
        
        $('.catalog-sort').not($sort).removeClass('catalog-sort--active');
    });
    
    $('.catalog-sort__item').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const $this = $(this);
        const $sort = $this.closest('.catalog-sort');
        const $text = $sort.find('.catalog-sort__text');
        const selectedText = $this.text().trim();
        const sortValue = $this.data('value');
        
        $text.text(selectedText);
        
        $sort.removeClass('catalog-sort--active');
        
        console.log('Sort by:', sortValue, selectedText);
    });
    
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.catalog-sort').length) {
            $('.catalog-sort').removeClass('catalog-sort--active');
        }
    });
    
    $('.filter-group__header').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if ($(this).hasClass('filter-group__header--no-submenu')) {
            return;
        }
        
        const $group = $(this).closest('.filter-group');
        const $content = $group.find('.filter-group__content');
        const isActive = $group.hasClass('filter-group--active');
        
        $('.filter-group').not($group).removeClass('filter-group--active');
        $('.filter-group__content').not($content).slideUp(400);
        
        if (isActive) {
            $group.removeClass('filter-group--active');
            $content.slideUp(400);
        } else {
            $group.addClass('filter-group--active');
            $content.slideDown(400);
        }
    });
    
    $('.filter-item__header').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const $item = $(this).closest('.filter-item');
        const $content = $item.find('.filter-item__content');
        const isActive = $item.hasClass('filter-item--active');
        
        $item.siblings('.filter-item').removeClass('filter-item--active');
        $item.siblings('.filter-item').find('.filter-item__content').slideUp(400);
        
        if (isActive) {
            $item.removeClass('filter-item--active');
            $content.slideUp(400);
        } else {
            $item.addClass('filter-item--active');
            $content.slideDown(400);
        }
    });
    
    $('.filter-subitem__header').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const $subitem = $(this).closest('.filter-subitem');
        const $content = $subitem.find('.filter-subitem__content');
        const isActive = $subitem.hasClass('filter-subitem--active');
        
        $subitem.siblings('.filter-subitem').removeClass('filter-subitem--active');
        $subitem.siblings('.filter-subitem').find('.filter-subitem__content').slideUp(400);
        
        if (isActive) {
            $subitem.removeClass('filter-subitem--active');
            $content.slideUp(400);
        } else {
            $subitem.addClass('filter-subitem--active');
            $content.slideDown(400);
        }
    });
    
    $('.filter-item__link, .filter-subitem__link').on('click', function(e) {
        e.preventDefault();
        
        $('.filter-subitem__link').removeClass('filter-subitem__link--selected');
        
        if ($(this).hasClass('filter-subitem__link')) {
            $(this).addClass('filter-subitem__link--selected');
        }
        
    });
    
    $('.catalog-search').on('submit', function(e) {
        e.preventDefault();
        const searchValue = $(this).find('.catalog-search__input').val();
        
        console.log('Search:', searchValue);
    });
    
    $('.catalog__sidebar-filter-mob').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const $filters = $('.catalog__filters');
        const $overlay = $('.catalog__sidebar-overlay');
        
        $filters.addClass('catalog__filters--open');
        $overlay.addClass('catalog__sidebar-overlay--visible');
        
        $('body').addClass('overflow-hidden');
    });
    
    function closeMobileFilter() {
        const $filters = $('.catalog__filters');
        const $overlay = $('.catalog__sidebar-overlay');
        
        $filters.removeClass('catalog__filters--open');
        $overlay.removeClass('catalog__sidebar-overlay--visible');
        
        $('body').removeClass('overflow-hidden');
    }
    
    $('.catalog__sidebar-overlay').on('click', function() {
        closeMobileFilter();
    });
    
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && $('.catalog__filters').hasClass('catalog__filters--open')) {
            closeMobileFilter();
        }
    });
    
    $(document).on('click', function(e) {
        if ($(window).width() <= 1024) {
            const $filters = $('.catalog__filters');
            const $filterButton = $('.catalog__sidebar-filter-mob');
            
            if ($filters.hasClass('catalog__filters--open') && 
                !$filters.is(e.target) && 
                !$filters.has(e.target).length && 
                !$filterButton.is(e.target) && 
                !$filterButton.has(e.target).length) {
                closeMobileFilter();
            }
        }
    });
    
    $('.catalog__sidebar-overlay').off('click').on('click', function() {
        closeMobileFilter();
    });
    
    $(document).off('keydown').on('keydown', function(e) {
        if (e.key === 'Escape' && $('.catalog__filters').hasClass('catalog__filters--open')) {
            closeMobileFilter();
        }
    });
});