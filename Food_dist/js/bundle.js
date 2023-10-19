/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calculator() {
        //calculator

        const result = document.querySelector('.calculating__result span');
    
        let sex, height, weight, age, ratio;
    
        if(localStorage.getItem('sex')){
            sex = localStorage.getItem('sex');
        } else {
            sex = 'female';
            localStorage.setItem('sex', 'female');
        };
    
        if(localStorage.getItem('ratio')){
            ratio = localStorage.getItem('ratio');
        } else {
            ratio = 1.375;
            localStorage.setItem('ratio', 1.375);
        };
        
        function initLocalSettings(selector, activeClass){
            const elements = document.querySelectorAll(selector);
    
            elements.forEach(elem => {
                elem.classList.remove(activeClass);
                if (elem.getAttribute('id') === localStorage.getItem('sex')){
                    elem.classList.add(activeClass);
                }
                if(elem.getAttribute('data-ratio') === localStorage.getItem('ratio')){
                    elem.classList.add(activeClass);
                }
    
            });
        }
    
        initLocalSettings('#gender div', 'calculating__choose-item_active');
        initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');
    
        function calcTotal() {
            if (!sex || !height || !weight || !age || !ratio){
                result.textContent = 'Not enough data';
                return;
            }
    
            if (sex === 'female'){
                result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age))*ratio);
            } else {
                result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
            }
        };
    
        calcTotal();
    
        function getStaticInformation(selector, activeClass) {
            const elements = document.querySelectorAll(selector);
    
            elements.forEach(elem => {
                elem.addEventListener('click', (e) => {
                    if (e.target.getAttribute('data-ratio')) {
                        ratio = +e.target.getAttribute('data-ratio');
                        localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                    } else {
                        sex = e.target.getAttribute('id');
                        localStorage.setItem('sex', e.target.getAttribute('id'));
                    }
        
                    elements.forEach(elem => {
                        elem.classList.remove(activeClass);
                    });
        
                    e.target.classList.add(activeClass);
        
                    calcTotal();
                });
            });
        };
    
        getStaticInformation('#gender div', 'calculating__choose-item_active');
        getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');
    
        function getDynamicInformation(selector){
            const input = document.querySelector(selector);
    
    
            input.addEventListener('input', () => {
    
                if(input.value.match(/\D/g)){
                    input.style.border = '1px solid red';
                } else {
                    input.style.border = 'none';
                }
    
                switch(input.getAttribute('id')){
                    case 'height':
                        height = +input.value;
                        break;
                    case 'weight':
                        weight = +input.value;
                        break;
                    case 'age':
                        age = +input.value;
                        break;
                }
            calcTotal();
            });
    
    
        };
    
        getDynamicInformation('#height');
        getDynamicInformation('#weight');
        getDynamicInformation('#age');
    
    
        fetch('http://localhost:3000/menu')
            .then(data => data.json())
            .then(res => console.log(res));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards() {
        //использовать классы для карточек

        class MenuCard {
            constructor(src, alt, title, descr, price, parentSelector, ...classes){
                this.src = src;
                this.alt = alt;
                this.title = title;
                this.descr = descr;
                this.price = price;
                this.classes = classes;//это массив и с ним нужно работать как с массивом дальше
                this.parent = document.querySelector(parentSelector);
                this.transfer = 27;
                this.changeToUAH();
    
            }
    
    
            changeToUAH(){
                this.price = this.price * this.transfer;
            }
    
            render(){
                const element = document.createElement('div');
    
                if (this.classes.length === 0){
                    this.element = 'menu__item';
                    element.classList.add(this.element);
                } else {
                    this.classes.forEach(className => element.classList.add(className));
                }
                element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                `;
                this.parent.append(element);
            }
        }
    
    
        // getResources('http://localhost:3000/menu')
        // .then(data => {
        //     data.forEach(({img, altimg, title, descr, price}) => {
        //         new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        //     });
        // });//перебирает все объекты которые придут с сервера и соответственно выведут в меню
    
        (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResources)('http://localhost:3000/menu')
            .then(data => {data.forEach(({img, altimg, title, descr, price}) => {
                        new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
                    });
                });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modalWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalWindow */ "./js/modules/modalWindow.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function forms(formSelector, modalTimerId) {
    //forms

    const forms = document.querySelectorAll(formSelector);

    const message = {//список фраз что будут показываться юезру после сабмита
        loading: 'img/form/spinner.svg',
        success:'спасибо, скоро мы свяжемся с вами!',
        failure: 'что-то пошло не так'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    

    function bindPostData(form){
        form.addEventListener('submit', (e) => {
            e.preventDefault();//убрать стандартное поведение браузера на событие сабмит

            const statusMessage = document.createElement('img');
            //statusMessage.classList.add('status');
            statusMessage.src = message.loading;//создаем изображение и подставили сразу атрибут src
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `; //добавляем стили 
            //statusMessage.textContent = message.loading;
            //form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage);//чтобы при разных модалках/формах спинер ничего не двигал
            //и отображался красиво

            //request.setRequestHeader('Content-Type', 'application/json');

            const formData = new FormData(form);

            // const object = {};
            // formData.forEach(function(value, key){
            //     object[key] = value;
            // });//более элегантное решение смотри ниже

            const json = JSON.stringify(Object.fromEntries(formData.entries()));//берем формдату превращаем ее в массив массивов, а затем
            //превращаем в классический объект и превращаем ее в json
            //entries-из объекта сделать массив с массивами

            // const request = new XMLHttpRequest();
            // request.open('POST', 'server.php');
            //заменяем на фетч
            // fetch('server.php', {
            //     method: "POST",
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(object)
            // })
            (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json)
            // .then(data => data.text())//nсрока не нужна так как трансформация происходит на уровне функции postData
            .then(data => {
                console.log(data);
                    //statusMessage.textContent = message.success;
                    showThanksModal(message.success);
                    statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();//очистить форму после заполнения
            });
        });
    }
            //request.send(json);

        //     request.addEventListener('load', () =>{
        //         if(request.status === 200){
        //             console.log(request.response);
        //             //statusMessage.textContent = message.success;
        //             showThanksModal(message.success);
        //             statusMessage.remove();
        //             form.reset();//очистить форму после заполнения
        //             // setTimeout(() =>{
        //             //     statusMessage.remove();//удалить сообщение со странице о статусе
        //             // }, 2000);
        //         } else {
        //             showThanksModal(message.failure);
        //             //statusMessage.textContent = message.failure;
        //         }
        //     });
        // });
    //}


    function showThanksModal(message) {
        const previousModalDialog = document.querySelector('.modal__dialog');

        previousModalDialog.classList.add('hide'); //скрываем форму заполнения
        //prevModalDialog.classList.add('hide');
        (0,_modalWindow__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');//добавляем диву классу
        //формируем верстку в этом новом окне 
        thanksModal.innerHTML = `
            <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        //далее мы должны сделать возмодность чтобы юзер мог еще раз заполнить форму
        setTimeout(() => {
            thanksModal.remove();
            previousModalDialog.classList.add('show');
            previousModalDialog.classList.remove('hide');
            (0,_modalWindow__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
        }, 4000);

    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modalWindow.js":
/*!***********************************!*\
  !*** ./js/modules/modalWindow.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   openModal: () => (/* binding */ openModal)
/* harmony export */ });
function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    //modal.classList.toggle('show');//когда кликаем на тригер если класса нет то мы его добавим, если есть то уберем -- это тоже самое что две строчки выше
    document.body.style.overflow = 'hidden';//чтобы страница при открытом модальном окне не прокручивалась
    
    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);//в случае если юзер по клику открыл уже окно
    }
};

function closeModal(modalSelector){//вынесли в данную функцию повторяющийся код
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    //modal.classList.toggle('show');
    document.body.style.overflow = '';//восстановить скролл после закрытия модального окна
}


function modalWindow(triggerSelector, modalSelector, modalTimerId) {
    //модальное окно

    const modalTrigger = document.querySelectorAll(triggerSelector), //обращение к нужным атрибутам
        modal = document.querySelector(modalSelector); //отвечает за само модальное окно

    

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });

    //сделать так чтобы модалка закрывалась по нажатию esc или н область вне окна
    modal.addEventListener('click', (e) =>{
        if(e.target === modal || e.target.getAttribute('data-close') == ''){
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.code === "Escape" && modal.classList.contains('show')){
            closeModal(modalSelector);
        }
    });//закрыть окно по клавише эскейп

    function showModalByScrool() {
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1){
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScrool);//чтобы модалка появлялась только раз
        }
    }

    window.addEventListener('scroll', showModalByScrool);


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalWindow);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    //slider simple version

    const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        next = document.querySelector(nextArrow),
        prev = document.querySelector(prevArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0; 

    if(slides.length < 10){
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    // showSlides(slideIndex);

    // if(slides.length < 10){
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlides(n){
    //     if (n > slides.length){
    //         slideIndex = 1;
    //     }
    //     if(n < 1){
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => item.style.display = 'none');
    //     slides[slideIndex-1].style.display = 'block';

    //     if(slides.length < 10){
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }
    
    // function plusSlides(n){
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });
    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // });

    //slider high level

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
        dots = [];
    indicators.classList.add('carrousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;

    slider.append(indicators);

    function dotSlider(){
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    };

    function slidesCounter(){
        if(slides.length < 10){
            current.textContent = `0${slideIndex}`;
        }else{
            current.textContent = slideIndex;
        }
    };

    for (let i = 0; i < slides.length; i++){
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if(i == 0){
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    };

    function deleteNotDigits(str){
       return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
        if (offset == deleteNotDigits(width) * (slides.length - 1)){
            offset = 0;
        } else {
            offset += deleteNotDigits(width); 
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == slides.length){
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        // if(slides.length < 10){
        //     current.textContent = `0${slideIndex}`;
        // }else{
        //     current.textContent = slideIndex;
        // }
        slidesCounter();

        // dots.forEach(dot => dot.style.opacity = '.5');
        // dots[slideIndex - 1].style.opacity = 1; 
        dotSlider();
    });

    prev.addEventListener('click', () => {
        if (offset == 0){
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == 1){
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        // if(slides.length < 10){
        //     current.textContent = `0${slideIndex}`;
        // }else{
        //     current.textContent = slideIndex;
        // }
        slidesCounter();

        // dots.forEach(dot => dot.style.opacity = '.5');
        // dots[slideIndex - 1].style.opacity = 1;
        dotSlider();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;


            // if(slides.length < 10){
            //     current.textContent = `0${slideIndex}`;
            // }else{
            //     current.textContent = slideIndex;
            // }
            slidesCounter();

            // dots.forEach(dot => dot.style.opacity = '.5');
            // dots[slideIndex - 1].style.opacity = 1;
            dotSlider();
        })
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParenSelector, activeClass) {
    //tabs!
    //сущности на которые будут навешиваться скрипты
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParenSelector);

    //скрыть все нужные нам табы
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
//удаляем активный признак
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }


    //функция для показа табы

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }


    hideTabContent();
    showTabContent();


    //делегирование событий и назначение обработчика клика
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;//если нужно много и часто прописывать event.target

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadline) {
    //timer!

    function getTimeRemaining(endtime) {//установка таймера
        let days, hours, minutes, seconds;

        const t = Date.parse(endtime) - Date.parse(new Date());//получим количество милисекунд до нашего времени дедлайн
            
        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t/(1000*60*60*24)),
            hours = Math.floor(((t/(1000*60*60)) % 24)),
            minutes = Math.floor((t/ 1000 / 60)% 60),
            seconds = Math.floor((t/1000)%60);

        }

            return{
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
    }

    function getZero(num){
        if(num >= 0 && num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    }

    //функция вывода таймера на страницу
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);//обновлять таймер каждую секунду

        updateClock();//добавили чтобы не мигала верстка, так как по умолчанию показыается другой таймер,
        //сделали чтобы сразу был актуальный, функция запускает лишь раз в этом месте

    //функция которая будет обновлять таймер каждую секунду
        
        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if(t.total <= 0){
                clearInterval(timeInterval);
            }

        }
    }
    
    setClock(id, deadline);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResources: () => (/* binding */ getResources),
/* harmony export */   postData: () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
    });

    return await res.json();
};

const getResources = async (url) => {
    const res = await fetch(url);

    if(!res.ok){
        throw new Error(`Couldnt fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modalWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modalWindow */ "./js/modules/modalWindow.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
//const { off } = require("process");








//import {openModal} from './modules/modalWindow';

window.addEventListener('DOMContentLoaded', ()=> {

    const modalTimerId = setTimeout(() => (0,_modules_modalWindow__WEBPACK_IMPORTED_MODULE_1__.openModal)('.modal', modalTimerId), 50000);

    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    (0,_modules_modalWindow__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-modal]', '.modal', modalTimerId);
    (0,_modules_calculator__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"])('form', modalTimerId);
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slide-inner',
        slide: '.offer__slide'

    });
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_6__["default"])('.timer', '2023-11-01');

});


//https://attacomsian.com/blog/javascript-object-property-shorthand
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map