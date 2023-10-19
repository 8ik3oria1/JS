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

export default modalWindow;
export {closeModal};
export {openModal};