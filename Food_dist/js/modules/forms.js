import { closeModal, openModal} from "./modalWindow";
import { postData } from "../services/services";

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
            postData('http://localhost:3000/requests', json)
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
        openModal('.modal', modalTimerId);

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
            closeModal('.modal');
        }, 4000);

    }
}

export default forms;