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
        modal = document.querySelector('.modal'), //отвечает за само модальное окно
        modalCloseBtn = document.querySelector('[data-close]');

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

    modalCloseBtn.addEventListener('click', closeModal);

    //сделать так чтобы модалка закрывалась по нажатию esc или н область вне окна
    modal.addEventListener('click', (e) =>{
        if(e.target === modal){
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.code === "Escape" && modal.classList.contains('show')){
            closeModal();
        }
    });//закрыть окно по клавише эскейп


    const modalTimerId = setTimeout(openModal, 3000);

    function showModalByScrool() {
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1){
            openModal();
            window.removeEventListener('scroll', showModalByScrool);//чтобы модалка появлялась только раз
        }
    }

    window.addEventListener('scroll', showModalByScrool);
});

//https://attacomsian.com/blog/javascript-object-property-shorthand




