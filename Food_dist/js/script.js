window.addEventListener('DOMContentLoaded', ( )=> {
//tabs!
    //сущности на которые будут навешиваться скрипты
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    //скрыть все нужные нам табы
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
//удаляем активный признак
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }


    //функция для показа табы

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }


    hideTabContent();
    showTabContent();


    //делегирование событий и назначение обработчика клика
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;//если нужно много и часто прописывать event.target

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

//timer!

    const deadline = '2023-07-27';

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
    
    setClock('.timer', deadline);

    //модальное окно

    const modalTrigger = document.querySelectorAll('[data-modal]'), //обращение к нужным атрибутам
        modal = document.querySelector('.modal'); //отвечает за само модальное окно

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        //modal.classList.toggle('show');//когда кликаем на тригер если класса нет то мы его добавим, если есть то уберем -- это тоже самое что две строчки выше
        document.body.style.overflow = 'hidden';//чтобы страница при открытом модальном окне не прокручивалась
        clearInterval(modalTimerId);//в случае если юзер по клику открыл уже окно
    };

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal(){//вынесли в данную функцию повторяющийся код
        modal.classList.add('hide');
        modal.classList.remove('show');
        //modal.classList.toggle('show');
        document.body.style.overflow = '';//восстановить скролл после закрытия модального окна
    }

    //сделать так чтобы модалка закрывалась по нажатию esc или н область вне окна
    modal.addEventListener('click', (e) =>{
        if(e.target === modal || e.target.getAttribute('data-close') == ''){
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.code === "Escape" && modal.classList.contains('show')){
            closeModal();
        }
    });//закрыть окно по клавише эскейп


    const modalTimerId = setTimeout(openModal, 50000);

    function showModalByScrool() {
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1){
            openModal();
            window.removeEventListener('scroll', showModalByScrool);//чтобы модалка появлялась только раз
        }
    }

    window.addEventListener('scroll', showModalByScrool);

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


    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
        'menu__item'

    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14,
        '.menu .container',
        'menu__item'

    ).render();


    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        21,
        '.menu .container',
        'menu__item'

    ).render();

    //forms

    const forms = document.querySelectorAll('form');

    const message = {//список фраз что будут показываться юезру после сабмита
        loading: 'img/form/spinner.svg',
        success:'спасибо, скоро мы свяжемся с вами!',
        failure: 'что-то пошло не так'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form){
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

            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;
            });

            // const request = new XMLHttpRequest();
            // request.open('POST', 'server.php');
            //заменяем на фетч
            fetch('server.php', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(object)
            }).then(data => data.text())
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
        openModal();

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
            closeModal();
        }, 4000);

    }
});


//https://attacomsian.com/blog/javascript-object-property-shorthand