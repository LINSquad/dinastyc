'use strict';

(function () {
    //поиск

    var close_search_form = document.querySelector('.close-search-form');
    var search_form_input = document.querySelector('.search-form__input');

    close_search_form.addEventListener('click', function (){
        close_search_form.style = "display: none;";
        search_form_input.style = "display: none;";
    })

    var search_form_button = document.querySelector('.search-form__button');

    search_form_button.addEventListener('click', function (){
        close_search_form.style = "display: block;";
        search_form_input.style = "display: block;";
    })

    //модальное окно
    var close_modal_form = document.querySelector('.close_modal-form');
    var main_button_service = document.querySelector('.main_button_service');
    var footer_button_service = document.querySelector('.footer_button_service');
    var modal_form = document.querySelector('.modal-form-request_a_call');

    close_modal_form.addEventListener('click', function (){
        modal_form.style = "display: none;";
    })

    footer_button_service.addEventListener('click', function (){
        modal_form.style = "display: block;";
    })

    main_button_service.addEventListener('click', function (){
        modal_form.style = "display: block;";
    })

    var close_modal_form_payment_if = document.querySelector('.close_modal-form-payment-if');
    var main_button_payment = document.querySelector('.main_button_payment');
    var footer_button_payment = document.querySelector('.footer_button_payment');
    var modal_form_payment_if = document.querySelector('.modal-form-payment-if');

    close_modal_form_payment_if.addEventListener('click', function (){
        modal_form_payment_if.style = "display: none;";
    })

    footer_button_payment.addEventListener('click', function (){
        modal_form_payment_if.style = "display: block;";
    })

    main_button_payment.addEventListener('click', function (){
        modal_form_payment_if.style = "display: block;";
    })

    var close_modal_form_payment = document.querySelector('.close_modal-form-payment');
    var main_button_payment_if_yes = document.querySelector('.main-button-payment-if-yes');
    var modal_form_payment = document.querySelector('.modal-form-payment');

    close_modal_form_payment.addEventListener('click', function (){
        modal_form_payment.style = "display: none;";
    })

    main_button_payment_if_yes.addEventListener('click', function (){
        modal_form_payment.style = "display: block;";
        modal_form_payment_if.style = "display: none;";
    })

    var close_modal_form_agreement = document.querySelector('.close_modal-text-of-agreement');
    var modal_form_agreement = document.querySelector('.text-of-agreement');

    close_modal_form_agreement.addEventListener('click', function (){
        modal_form_agreement.style = "display: none;";
    })


    var agreements_open = document.querySelectorAll('.text-of-agreement-open');
    for (var i = 0; i < agreements_open.length; i++) {
        agreements_open[i].addEventListener('click', function (){
            modal_form_agreement.style = "display: block;";
        })
    }
})();