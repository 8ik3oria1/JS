"use strict";

//события - это сигнал от браузера что что-то произошло(клик, двойной клик, наведение..)

//обработчик - это функция которая обрабатывает событие как только оно произошло
//назначение обработчика событий:
//1. HTML аттрибут
//<button onclick="alert('Click')" id = "btn">Нажми меня</button> --> устаревшее

//2. использовать свойства дом дерева для событий

const btn = document.querySelector('button');

btn.onclick = function(){
    alert('Click');
};

//3. листенеры

btn.addEventListener('click', () => {
    alert('Click');
}); //то есть строго после того как юезр кликнул запускается скрипт
// из плюсов -- можно назначать несколько действий на одно событие

btn.addEventListener('click', () => {
    alert('Second сlick');
});//в данном случае сразу выполниться первый скрипт и потом второй

btn.addEventListener('mouseenter', (e) => {//e-event
    console.log(e.target); //вывести один из свойств ивента
    e.target.remove(); //удаление элемента со страницы по таргету
});

//удаление обработчика событий

const deleteElement = (e) => {
    //e.target.remove();
    console.log(e.target);
};

btn.addEventListener('click', deleteElement);//после того как выполниться клик по элементу удали листенер
btn.removeEventListener('click', deleteElement);

let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    i++;
    if(i == 1){
        btn.removeEventListener('click', deleteElement);//это вызывается когда 
        //что-то произошло и обработчик нам не нужен
    }
};

btn.addEventListener('click', deleteElement);

//всплытие событий

//остановка каких-либо событий в браузере
const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();
});

//опции события
//once - события происходят только один раз

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
})