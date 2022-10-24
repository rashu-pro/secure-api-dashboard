/**
 * Created by rashu on 10/24/2022.
 */

/**
 * 1. VARIABLES
 * 2. ON DOCUMENT READY
 * 3. EVENT LISTENER: FOCUS
 * 4. EVENT LISTENER: CLICK
 * 5. EVENT LISTENER: KEYUP / BLUR
 * 6. EVENT LISTENER: CHANGE
 * 7. FUNCTION DEFINITION
 */

/**
 * -------------------------------------
 * 1. VARIABLES
 * * -------------------------------------
 */


/**
 * -------------------------------------
 * 2. ON DOCUMENT READY
 * * -------------------------------------
 */
if($('.overlay-scrollbar-js').length>0 && typeof $.fn.overlayScrollbars != 'undefined'){
    //=== OVERLAY SCROLLBARS
    $('.navbar .menu.overlay-scrollbar-js').overlayScrollbars({ });
}


/**
 * -------------------------------------
 * 4. EVENT LISTENER: CLICK
 * -------------------------------------
 */

//=== Gives focus to the search input field in the dropdown
$(document).on('click', '.dropdown-toggle', function () {
    let self = $(this);
    if(!self.closest('.dropdown').hasClass('open')) return;
    if(self.closest('.dropdown').find('.search-dropdown')) self.closest('.dropdown').find('.search-dropdown').focus();
});

$(document).on('click', '.dropdown-menu-child', function(){
    let self = $(this);
    self.closest('.dropdown-menu').find('.dropdown-menu-child').removeClass('current');
    self.addClass('current');
    self.closest('.dropdown').find('.dropdown-toggle-title').html(self.data('text'));
    self.closest('.dropdown').find('.dropdown-toggle-icon img').attr('src', self.find('img').attr('src'));
});


/**
 * -------------------------------------
 * 5. EVENT LISTENER: KEYUP / BLUR
 * -------------------------------------
 */

$(document).on('keyup', '.search-dropdown', function () {
    filterFunction();
});


/**
 * -------------------------------------
 * 7. FUNCTION DEFINITION
 * -------------------------------------
 */

function filterFunction() {
    let input, filter, ul, li, listSelector, i;
    input = $('.search-dropdown');
    filter = input.val().toUpperCase();
    listSelector = $('.company-dropdown-js .dropdown-menu-child');
    listSelector.each(function(i, element){
        let textValue = $(element).data('text');
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            $(element).removeClass('hide');
            $(element).addClass('show');
        } else {
            $(element).removeClass('show');
            $(element).addClass('hide');
        }
        dropdownHeightDynamic($(element));
    });
}

function dropdownHeightDynamic(self){
    let scrollDiv = self.closest('.dropdown-menu').find('.slimScrollDiv'),
        menuDiv = self.closest('.dropdown-menu').find('.slimScrollDiv .menu');
    const scrollDivInitialHeight = menuDiv.height();
    let listHeight = $('.company-dropdown-js .dropdown-menu-child').height();
    let listCount = $('.company-dropdown-js .dropdown-menu-child.show').length;
    $('.company-dropdown-js .dropdown-menu-child.show').each(function(i, element){
        listHeight = listHeight + $(element).height();
    });
    if(listHeight<scrollDivInitialHeight){
        scrollDiv.height(listHeight);
        return;
    }
    scrollDiv.height(scrollDivInitialHeight);
}
