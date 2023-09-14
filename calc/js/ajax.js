'use strict';

const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');


inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();//создаем запрос к серверу 

    request.open('GET', 'js/current.json');//собирает настройки чтобы в дальнейшем сделать запрос между ФЕ к БЕ
    request.setRequestHeader('Content-Type', 'application/json; charset = utf-8');
    request.send();

    //status//статус нашего запроса
    //statusText- текстовое описание 
    //response - ответ от сервера
    //readyState - текущее состояние нашего запроса

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value/data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'something went wrong';
        }
    });


});