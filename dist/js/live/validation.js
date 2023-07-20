/**
 * Created by rashu on 5/30/2022.
 */

//==== NEW SCRIPT
$(document).on('keyup blur change', '.form-group.required-group .form-control', function (e) {
    let self = $(this);
    singleValidation(self, self.parent());
});

$(document).on('click', '.btn-form-complete-js', function (e) {
    e.preventDefault();
    let self = $(this);
    if (isFieldsValidated(self, "btnForm")) {
        $('#card-info-area').show();
        setTimeout(function (e) {
            $('.payment-information-div .form-group.required-group').first().find('.form-control').focus();
        }, 500);
    }

});


$('.phone-number-mask').inputmask({
    "mask": "(999) 999-9999",
    "onKeyValidation": function (key, result) {
        if (result) {
            // console.log(result);
        }
    }
});


//==== STATES FILLER
let countryField = $('.js-country'),
    stateFieldGroup = $('.state-field-group'),
    statesJson = {
        "Alabama": "Alabama",
        "Alaska": "Alaska",
        "Arizona": "Arizona",
        "Arkansas": "Arkansas",
        "California": "California",
        "Colorado": "Colorado",
        "Connecticut": "Connecticut",
        "Delaware": "Delaware",
        "Florida": "Florida",
        "Georgia": "Georgia",
        "Hawaii": "Hawaii",
        "Idaho": "Idaho",
        "Illinois": "Illinois",
        "Indiana": "Indiana",
        "Iowa": "Iowa",
        "Kansas": "Kansas",
        "Kentucky": "Kentucky",
        "Louisiana": "Louisiana",
        "Maine": "Maine",
        "Maryland": "Maryland",
        "Massachusetts": "Massachusetts",
        "Michigan": "Michigan",
        "Minnesota": "Minnesota",
        "Mississippi": "Mississippi",
        "Missouri": "Missouri",
        "Montana": "Montana",
        "Nebraska": "Nebraska",
        "Nevada": "Nevada",
        "NewHampshire": "NewHampshire",
        "NewJersey": "NewJersey",
        "NewMexico": "NewMexico",
        "NewYork": "NewYork",
        "NorthCarolina": "NorthCarolina",
        "NorthDakota": "NorthDakota",
        "Ohio": "Ohio",
        "Oklahoma": "Oklahoma",
        "Oregon": "Oregon",
        "Pennsylvania": "Pennsylvania",
        "RhodeIsland": "RhodeIsland",
        "SouthCarolina": "SouthCarolina",
        "SouthDakota": "SouthDakota",
        "Tennessee": "Tennessee",
        "Texas": "Texas",
        "Utah": "Utah",
        "Vermont": "Vermont",
        "Virginia": "Virginia",
        "Washington": "Washington",
        "WestVirginia": "WestVirginia",
        "Wisconsin": "Wisconsin",
        "Wyoming": "Wyoming",
        "zUnknown": "zUnknown"
    },
    statesCanadaJson = {
        "Alberta": "Alberta",
        "British Columbia": "British Columbia",
        "Manitoba": "Manitoba",
        "New Brunswick": "New Brunswick",
        "Newfoundland and Labrador": "Newfoundland and Labrador",
        "Northwest Territories": "Northwest Territories",
        "Nova Scotia": "Nova Scotia",
        "Nunavut": "Nunavut",
        "Ontario": "Ontario",
        "Prince Edward Island": "Prince Edward Island",
        "Quebec": "Quebec",
        "Saskatchewan": "Saskatchewan",
        "Yukon": "Yukon"
    };

statesFiller(countryField);

countryField.on('change', function (e) {
    let self = $(this);
    statesFiller(self);
});



//==== FUNCTIONS DEFINITION

//======= EMAIL VALIDATION
function validateMail(formGroup) {
    let pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i,
        email = formGroup.find('.form-control').val();
    if (!pattern.test(email)) {
        return true;
    } else {
        return false;
    }
}

//======= PHONE NUMBER VALIDATION
function validatePhoneNumber(formGroup) {
    let pattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/i,
        phoneNumber = formGroup.find('.form-control').val();
    // if(!pattern.test(phoneNumber)) {
    //     return true;
    // } else {
    //     return false;
    // }
    return pattern.test(phoneNumber);
}


//======= ZIP CODE VALIDATION
function zipCodeValidation(code) {
    let isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(code);
    return isValidZip;
}

let errorMessage = "The field is required";
function notifyError(formControl, errorMessage) {
    let formGroup = formControl.closest('.form-group');
    formGroup.removeClass('field-validated');
    formGroup.addClass('field-invalid');
    formGroup.find('.error-message').remove();
    formGroup.append('<p class="error-message text-danger m-0 new">' + errorMessage + '</p>');
}

//==== VALIDATION FOR REQUIRED FIELDS
function singleValidation(formControl, formGroup) {
    errorMessage = "The field is required";
    if (formControl.val() !== '') {
        formControl.closest('.form-group.required-group').removeClass('field-invalid');
        formControl.closest('.form-group.required-group').find('.error-message').remove();
        formControl.closest('.form-group.required-group').addClass('field-validated');
        //email validation
        if (formControl.data('validation') === "email") {
            if (formControl.val() != '') {
                errorMessage = "Invalid Email!"
            }
            if (validateMail(formControl.parent())) {
                formControl.closest('.form-group.required-group').removeClass('field-validated');
                notifyError(formControl, errorMessage);
            }
        }

        //phone number validation
        if (formControl.data('validation') === "phone-number") {
            if (formControl.val() != '') {
                errorMessage = "Invalid phone number!"
            }
            if (!validatePhoneNumber(formControl.parent())) {
                formControl.closest('.form-group.required-group').removeClass('field-validated');
                notifyError(formControl, errorMessage);
            }
        }

        //zip code validation
        if (formControl.data('validation') === "zipcode") {
            if (formControl.val() != '') {
                errorMessage = "Invalid ZIP code!"
            }

            if (!zipCodeValidation(formControl.val())) {
                formControl.closest('.form-group.required-group').removeClass('field-validated');
                notifyError(formControl, errorMessage);
            }
        }


        //SELECT FIELD VALIDATION
        if (formControl.val() == 0) {
            formControl.closest('.form-group.required-group').removeClass('field-validated');
            notifyError(formControl, errorMessage);
        }

    } else {
        notifyError(formControl, errorMessage);
    }
}

//==== FIELD VALIDATION CHECK
function isFieldsValidated(self, btnType, formSelector) {
    //let formSelector = $('#vendor-reg-form');
    if (btnType === "btnForm") {
        // formSelector = self.closest('form').find('.form-row-required');
        formSelector = self.closest('.form-row');
    }

    let formGroupRequiredSelector = formSelector.find('.form-row-body .form-group.required-group'),
        formGroupValidatedSelector = formSelector.find('.form-row-body .form-group.field-validated'),
        notValidatedField = formSelector.find('.form-row-body .required-group:not(.field-validated)'),
        status = false;

        
        // return;


    console.log('required form field', formGroupRequiredSelector.length);
    console.log('not validated form field', notValidatedField.length);

    if (btnType === "btnForm" || btnType === "btnPayment") {
        if (notValidatedField.length > 0) {
            console.log('found!');
            notValidatedField.first().find('.form-control').focus();
        } else {
            $('.loader-div').addClass('active');
            setTimeout(function (e) {
                self.closest('.form-row').removeClass('active').addClass('edited');
                self.closest('.form-row').next().addClass('active');
                $('.loader-div').removeClass('active');
            }, 400);
            status = true;
        }
    }
    return status;
}



//==== STATES FILLER
function statesFiller(countryFieldSelector) {
    if (countryFieldSelector.val() == "USA") {
        countryFieldSelector.closest('.form-row').find('.state-field-group .state-holder').html("<select class='form-control state' id='state' name='State'></select>");
        countryFieldSelector.closest('.form-row').find('.state-field-group').find('select').append("<option value='0'>Select a State</option>");
        for (let key in statesJson) {
            countryFieldSelector.closest('.form-row').find('.state-field-group').find('select').append("<option value='" + statesJson[key] + "'>" + statesJson[key] + "</option>")
        }
    } else if (countryFieldSelector.val() == "Canada") {
        countryFieldSelector.closest('.form-row').find('.state-field-group .state-holder').html("<select class='form-control state' id='state' name='State'></select>");
        countryFieldSelector.closest('.form-row').find('.state-field-group').find('select').append("<option value='0'>Select a State</option>");
        for (let key in statesCanadaJson) {
            countryFieldSelector.closest('.form-row').find('.state-field-group').find('select').append("<option value='" + statesCanadaJson[key] + "'>" + statesCanadaJson[key] + "</option>")
        }
    } else {
        countryFieldSelector.closest('.form-row').find('.state-field-group .state-holder').html("<input type='text' class='form-control state' id='state' name='State'>");
    }
}
