//Просто общение с пользователем 

"use strict";

//Предупреждение пользователя
alert('Hello');

//Вопрос на который нужно получить да или нет?
const result = confirm('Are you here?'); //далее выбранный ответ записывается в result 
console.log(result); //вывести записанный ответ

//Нужен конкретный ответ от юзера
const answer = prompt('Вам есть 18?', '18'); //далее выбранный ответ записывается в answer
console.log(answer+5);
//!!вся информация полученная от пользователя будет в виде строк (string)!!!

const answer1 = +prompt('Вам есть 18?', '18'); //далее выбранный ответ записывается в answer
// // + перед prompt значит что мы вместо строки получаем number
console.log(typeof(answer1));
//typeof(answer1) - выводит тип полученной информации

//Когда вопросов несколько и нужно их записать в массив
const answers = []; // создали массив

//добавили туда переменные
answers[0] = prompt("What's your name?", "");
answers[1] = prompt("What's your surname?", "");
answers[2] = prompt("How old are you?", "");

// document.write(answers); //выводит ответы на страницу сайта(устаревшая команда)
console.log(typeof(answers)); //в данному случае это объект
// console.log(typeof(null)); //получаем объект - это ошибка(особенность)

//alert, confirm, prompt можно тестировать ТОЛЬКО в браузере, VSCode такого не знает и будет отдавать ошибку 'ReferenceError: prompt is not defined'


