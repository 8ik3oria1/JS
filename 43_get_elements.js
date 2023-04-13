
"use strict";

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

//console.dir(box); //вывести объект

//поменять стиль объекта

// box.style.backgroundColor = 'blue'; //изменить цвет бэкграунда
// box.style.width = '500px'; //изменить ширину 

btns[1].style.borderRadius = '100%'; //изменить радиус

//circles.style.backgroundColor = 'red'; //ничего не произойдет, так как обращается к псевдомассиву, нужно чтобы
//обращение было к конкретному элементу 
//например
circles[0].style.backgroundColor = 'red';


//box.style.width = '500px'; 
box.style.cssText = 'background-color: blue; width: 500px'; //чтобы сразу обновить несколько элементов

//если нужно над несколькими элементами применить одно и то же

// for(let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// };

//аналог который используется чаще всего

hearts.forEach(item => {
    item.style.backgroundColor = 'blue'
});

//

const div = document.createElement('div'); //сохраняет только внутри js-ного файла

//создание текстовых узлов
const text = document.createTextNode('here i am');

div.classList.add('black');
document.body.append(div); //добавляет в конец боди элемент на страницу

//вставить в любого родителя в диф

document.querySelector('.wrapper').append(div);
//кратко
//wrapper.append(div);
//вставить в начало родителя

wrapper.prepend(div);

//before and after вставить до или после

//hearts[0].before(div);

hearts[0].after(div);

//удаление элементов со траницы
circles[0].remove();

//замена элемента другим элементом
hearts[0].replaceWith(circles[1]);

//добавление текста/html объекта

//вписать текст в объект
//div.innerHTML = "Hello World"; //текст
//div.innerHTML = "<h1>Hello World</h1>"; //html

//div.textContent = "Hello"; //only text!

//вставка HTML
div.innerHTML = "<h1>Hello World</h1>";
div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');


