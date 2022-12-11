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
if($(".select2").length>0){
    $(".select2").select2();
}

//=== SELECT2 SEARCH FIELD LESS
if($('.select2-searchless').length>0){
    $('.select2-searchless').select2({
        minimumResultsForSearch: -1
    });
}

//=== INITIALIZING ICHECK
if ($('.i-check').length > 0) {
    $('.i-check').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
    });
}

$(document).on('click', '.file-uploader-icon', function (e) {
    e.preventDefault();
    let self = $(this);
    self.closest('.file-uploader-wrapper').find('input[type=file]').trigger('click');
});

if($('.dropify').length>0){
    $('.dropify').dropify();
}

//=== datepicker initialization
if($('.datepicker').length>0){
    let startDate = true;

    $('.datepicker').datepicker({
        'autoclose': true,
        'startDate': new Date()
    });
}

//=== height fix for ticket add popup
ticketFormHeight();
function ticketFormHeight(){
    let heightNav = $('.main-header .navbar').outerHeight();
    let heightTicketHead = $('.ticket-add-form-head').outerHeight();
    let heightTicketFoot = $('.ticket-add-form-foot').outerHeight();
    let minHeightTicketBody = `calc(100vh - ${heightNav+heightTicketHead+heightTicketFoot}px)`;
    $('.ticket-add-form-body').css('height', minHeightTicketBody);
}


//=== pass active class to the active page
let base_url = window.location.origin,
    host = window.location.host,
    pathString = window.location.pathname,
    pathArray = pathString.split( '/' );
let consoleString = `base url: ${base_url}\nHost: ${host}\n Path: ${pathString}\nPath array: ${pathArray}`;
console.log(consoleString);

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

$(document).on('click', '.ticket-add-js', function(){
    $('.ticket-add-form-js').addClass('active');
    $('.body-overlayer').addClass('active');
    setTimeout(function (){
        ticketFormHeight();
        $('.ticket-add-form-js').css('visibility','visible');
    },100);
});

$(document).on('click', '.ticket-add-form-close-js', function (){
    $(this).closest('.ticket-add-form-js').removeClass('active');
    $('.body-overlayer').removeClass('active');
})

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

$('#create-user-checkbox').on('ifChecked', function () {
    $('#user-password').show();
});

$('#create-user-checkbox').on('ifUnchecked', function () {
    $('#user-password').hide();
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
