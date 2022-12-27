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
//=== OVERLAY SCROLLBARS
if($('.overlay-scrollbar-js').length>0 && typeof $.fn.overlayScrollbars != 'undefined'){
    $('.navbar .menu.overlay-scrollbar-js').overlayScrollbars({ });
}
//=== Initialize Select2 Elements
function select2(){
    if($(".select2").length>0){
        $(".select2").select2();
    }
}
select2();

//=== SELECT2 SEARCH FIELD LESS
function select2Searchless(){
    if($('.select2-searchless').length>0){
        $('.select2-searchless').select2({
            minimumResultsForSearch: -1
        });
    }
}
select2Searchless();

//=== INITIALIZING ICHECK
function icheck(){
    if ($('.i-check').length > 0) {
        $('.i-check').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        });
    }
}
icheck();


$(document).on('click', '.file-uploader-icon', function (e) {
    e.preventDefault();
    let self = $(this);
    self.closest('.file-uploader-wrapper').find('input[type=file]').trigger('click');
});

function dropify(){
    if($('.dropify').length>0){
        $('.dropify').dropify();
    }
}
dropify();


//=== datepicker initialization
function datePicker(){
    let datePickerSelector = $('.datepicker');
    if(datePickerSelector.length>0){
        datePickerSelector.each(function (i, element){
            let startDate = new Date('01/01/1970');
            if($(element).attr('data-start'))
                startDate = new Date();

            $(element).datepicker({
                'autoclose': true,
                'format': 'mm/dd/yyyy',
                'todayHighlight': true,
                'startDate': startDate
            });
        })

    }
}
datePicker();


//=== height fix for ticket add popup
ticketFormHeight();

//=== ticket sold scale
let ticketSellScale = $('.ticket-sell-scale');
if(ticketSellScale.length>0){
    ticketSellScale.each(function (i, element){
        let attr = $(element).attr('data-total');
        if (typeof attr !== 'undefined' && attr !== false) {
            let ticketSoldScale = (100*parseInt($(element).find('.ticket-sold-scale').attr('data-sold')))/parseInt(attr);
            $(element).find('.ticket-sold-scale').css('width', ticketSoldScale+'%');
        }
    })
}

//=== pass active class to the active page
let base_url = window.location.origin,
    host = window.location.host,
    pathString = window.location.pathname,
    pathArray = pathString.split( '/' );
let consoleString = `base url: ${base_url}\nHost: ${host}\n Path: ${pathString}\nPath array: ${pathArray}`;

$('.main-sidebar .sidebar-menu .menu-link').each(function (i, element){
    if($(element).data('route') === pathString){
        $(element).closest('li').addClass('active');
        $(element).closest('.treeview').addClass('active');
    }
});



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

$(document).on('click', '#btn-person-info', function (e) {
    e.preventDefault();
    let self = $(this);
    let formWrapper = self.closest('.form-wrapper');
    let requiredFieldGropus = formWrapper.find('.form-group.required-group');
    let errorMessage = "The field is required";

    //=== FIELD VALIDATION
    requiredFieldGropus.each(function (i, element) {
        singleValidation($(element).find('.form-control'), $(element), 'field-invalid', 'field-validated', 'error-message', errorMessage);
    });

    //=== FOCUS THE INVALID INPUT
    if(formWrapper.find('.form-group .form-control.invalid').length>0){
        formWrapper.find('.form-group .form-control.invalid').first().focus();
        return;
    }
    console.log('all fields are valid!');
});

$(document).on('click', '#create-enroll', function (e) {
    let self = $(this);
    $('.loader-wrapper').addClass('active');
    setTimeout(function () {
        self.closest('.modal').modal('hide');
        $('.loader-wrapper').removeClass('active');
        // Display a success toast, with a title
        toastr.success('Enroll created!')
    },600);
});

//=== open popup form
$(document).on('click', '.popup-form-open-js', function(e){
    e.preventDefault();
    popupFormOpen($(this).attr('data-target'));
})

$(document).on('click', '.popup-form-close-js', function (){
    $(this).closest('.ticket-add-form').removeClass('active');
    $(this).closest('.ticket-add-form').removeClass('visible');
    $('.body-overlayer').removeClass('active');
})

//=== preview switch
$(document).on('click', '.mobile-preview-js', function (e){
    e.preventDefault();
    $(this).closest('.preview-nav').find('li').removeClass('active');
    $(this).closest('li').addClass('active');
    $('.preview-holder').addClass('preview-mobile');
})

$(document).on('click', '.desktop-preview-js', function (e){
    e.preventDefault();
    $(this).closest('.preview-nav').find('li').removeClass('active');
    $(this).closest('li').addClass('active');
    $('.preview-holder').removeClass('preview-mobile');
})

//=== ticket edit
$(document).on('click', '.ticket-edit-js', ()=>{
    $('.loader-wrapper').addClass('active');
})

//=== addon edit
$(document).on('click', '.addon-edit-js', ()=>{
    $('.loader-wrapper').addClass('active');
})
//=== event type selection
let eventTypeButtonSelector = '.btn-event-type-js';
$(document).on('click', eventTypeButtonSelector, function (e){
    e.preventDefault();
    let self = $(this);
    $(eventTypeButtonSelector).removeClass('active');
    self.addClass('active');
    $(self.attr('data-input-target')).val(self.attr('data-value'));
})

//=== event navigation toggle
$(document).on('click', '.nav-event-navigation-toggler-js', function (e){
    e.preventDefault();
    $('.nav-event-navigation-wrapper').addClass('expanded');
    $('body').addClass('overflow-hidden');
})

$(document).on('click', '.event-navigation-close-js', function (e){
    e.preventDefault();
    $('.nav-event-navigation-wrapper').removeClass('expanded');
    $('body').removeClass('overflow-hidden');
})

/** --Click Action **/



/**
 * -------------------------------------
 * 5. EVENT LISTENER: KEYUP / BLUR
 * -------------------------------------
 */
$(document).on('keyup', '.search-dropdown', function () {
    filterFunction();
});

$(document).on('keyup', '.form-group.required-group .form-control', function (e) {
    let self = $(this);

    if(self.val().length>0){
        self.removeClass('invalid');
        self.closest('.form-group').find('.error-message').remove();
    }
});

$(document).on('blur', '.form-group.required-group .form-control', function (e) {
    let self = $(this);
    let errorMessage = "The field is required";

    //=== FIELD VALIDATION
    singleValidation(self, self.closest('.form-group'),'field-invalid', 'field-validated', 'error-message', errorMessage);
});


/**
 * -------------------------------------
 * 6. EVENT LISTENER: CHANGE
 * -------------------------------------
 */

$(document).on('change', '.form-group.required-group .form-control', function (e) {
    let self = $(this);
    let errorMessage = "The field is required";

    //=== FIELD VALIDATION
    singleValidation(self, self.closest('.form-group'),'field-invalid', 'field-validated', 'error-message', errorMessage);
});

let createUserCheckbox = $('#create-user-checkbox');

createUserCheckbox.on('ifChecked', function () {
    $('#user-password').show();
});

createUserCheckbox.on('ifUnchecked', function () {
    $('#user-password').hide();
});

//=== show password field for private event
$(document).on('change', '.event-access-with-js, .event-access-to-js', function (){
    let self = $(this);
    let targetSelector = self.attr('data-target');
    let selectedOption = self.find('option:selected');
    $(targetSelector).addClass('d-none');
    $(targetSelector).find('input').removeAttr('required');
    if(!selectedOption.attr('data-show')) return;
    $(targetSelector).removeClass('d-none');
    $(targetSelector).find('input').attr('required', 'required');
})


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

/**
 *
 * @param formControl
 * @param formGroup
 * @param invalidClassName
 * @param validClassName
 * @param errorMessageClassName
 * @param errorMessage
 *
 * @effects: check whether the input fields are validate
 * - or not and show warning message as needed
 */
function singleValidation(formControl, formGroup, invalidClassName, validClassName, errorMessageClassName, errorMessage) {
    errorMessage = "The field is required";
    let paramObj = {
        "formControl": formControl,
        "formGroup": formGroup,
        "invalidClassName": invalidClassName,
        "validClassName": validClassName,
        "errorMessageClassName": errorMessageClassName,
        "errorMessage": errorMessage
    };

    //=== IF FORM GROUP HAS DISPLAY NONE PROPERTIES
    if(formGroup.css('display')==='none') return;

    //=== INPUT FIELD VALIDATION: EMPTY FIELD
    if(formControl.val()===''){
        validationFailed(paramObj);
        return;
    }

    //=== INPUT FIELD VALIDATION: TEXT FIELD
    if(formControl.hasClass('validation-text')){
        formControl.val()!==''?validationSuccess(paramObj):validationFailed(paramObj);
    }

    //=== ONLY NUMBER VALIDATION
    if(formControl.hasClass('validation-number')){
        if(formControl.data('length-min')){
            isNumber(formControl.val())&&formControl.val().length>=formControl.data('length-min')?validationSuccess(paramObj):validationFailed(paramObj);
        }

        if(formControl.data('length-max')){
            isNumber(formControl.val())&&formControl.val().length<formControl.data('length-max')?validationSuccess(paramObj):validationFailed(paramObj);
        }

        if(formControl.data('length-min') && formControl.data('length-max')){
            isNumber(formControl.val()) && formControl.val().length>=formControl.data('length-min') && formControl.val().length<formControl.data('length-max')?validationSuccess(paramObj):validationFailed(paramObj);
        }
    }

    //=== SELECT DROPDOWN VALIDATION
    if(formControl.prop('tagName')==='SELECT'){
        if(formControl.hasClass('select2')){
            formControl.val()!==null?validationSuccess(paramObj):validationFailed(paramObj);
            return;
        }
        formControl.val()!==''?validationSuccess(paramObj):validationFailed(paramObj);
    }

    //=== INPUT FIELD VALIDATION: EMAIL FIELD
    if(formControl.hasClass('validation-email')){
        paramObj.errorMessage = "Invalid Email Address!";
        isEmailValid(formControl.val())?validationSuccess(paramObj):validationFailed(paramObj);
    }
}

/**
 *
 * This function checks whether a given
 * - string is number or not
 *
 * @param string
 * @return {boolean}
 */
function isNumber(string){
    return /^\d+$/.test(string);
}

/**
 *
 * This function checks whether the given value is valid email or not
 * @param email
 * @return {boolean}
 */
function isEmailValid(email){
    return /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i.test(email);
}

/**
 *
 * @param paramObj
 */
function validationSuccess(paramObj){
    paramObj.formControl.removeClass(paramObj.invalidClassName);
    paramObj.formControl.removeClass('invalid');
    paramObj.formControl.addClass('valid');
    paramObj.formGroup.addClass(paramObj.validClassName);
    //=== FOR SELECT 2
    paramObj.formGroup.find('.select2-selection').removeClass(paramObj.invalidClassName);
    paramObj.formGroup.find('.select2-selection').removeClass('invalid');
    paramObj.formGroup.find('.select2-selection').addClass('valid');
    paramObj.formGroup.find('.select2-selection').addClass(paramObj.validClassName);
    //=== REMOVE WARNING TEXT
    paramObj.formGroup.find('.'+paramObj.errorMessageClassName).remove();
}

/**
 *
 * @param paramObj
 */
function validationFailed(paramObj) {
    paramObj.formGroup.removeClass(paramObj.validClassName);
    paramObj.formControl.addClass(paramObj.invalidClassName);
    paramObj.formControl.removeClass('valid');
    paramObj.formControl.addClass('invalid');
    //=== FOR SELECT 2
    paramObj.formGroup.find('.select2-selection').removeClass(paramObj.validClassName);
    paramObj.formGroup.find('.select2-selection').addClass(paramObj.invalidClassName);

    notifyError(paramObj);
}

/**
 *
 * @param paramObj [an oject containg all the parametes]
 * @effects shows error message for invalid field
 */
function notifyError(paramObj) {
    paramObj.formGroup.find('.'+paramObj.errorMessageClassName).remove();
    paramObj.formGroup.append('<p class="'+paramObj.errorMessageClassName+' text-danger">'+paramObj.errorMessage+'</p>');
}


/**
 * Calculate ticket form height
 * - and set footer visible in the footer
 */
function ticketFormHeight(){
    let heightNav = $('.main-header .navbar').outerHeight();
    let heightTicketHead = $('.ticket-add-form-head').outerHeight();
    let heightTicketFoot = $('.ticket-add-form-foot').outerHeight();
    if($('body').width()<768){
        heightNav = 0;
    }
    let minHeightTicketBody = `calc(100vh - ${heightNav+heightTicketHead+heightTicketFoot}px)`;
    $('.ticket-add-form-body').css('height', minHeightTicketBody);
}


/**
 * opens popup form
 * @param popupSelectorClass
 */
function popupFormOpen(popupSelectorClass){
    $(popupSelectorClass).addClass('active');
    $('.body-overlayer').addClass('active');
    setTimeout(function (){
        ticketFormHeight();
        $(popupSelectorClass).addClass('visible');
    },100);
}
