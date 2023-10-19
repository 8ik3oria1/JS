//const { off } = require("process");

import tabs from './modules/tabs';
import modalWindow, { openModal } from './modules/modalWindow';
import calculator from './modules/calculator';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import timer from './modules/timer';
//import {openModal} from './modules/modalWindow';

window.addEventListener('DOMContentLoaded', ()=> {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modalWindow('[data-modal]', '.modal', modalTimerId);
    calculator();
    cards();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slide-inner',
        slide: '.offer__slide'

    });
    timer('.timer', '2023-11-01');

});


//https://attacomsian.com/blog/javascript-object-property-shorthand