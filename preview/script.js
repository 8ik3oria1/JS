'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;
//если параметры выше не будут существовать, сделать так чтобы ставились пара
//метры по умолчанию

// function changeParams(elem, h, w) {
//     elem.style.height = `${h || 200}px`; //установка параметров по умолчанию через || 200
//     elem.style.width = `${w || 200}px`;
// }

//с использованием nulesh оператора
function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`; //установка параметров по умолчанию через || 200
    elem.style.width = `${w ?? 200}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200);//вычисление площади
}

changeParams(box, newHeight, newWidth);

// let userName;

// console.log(userName ?? 'User');//нулеш оператор проверяет 
//если первое значение нал или андефайнд то нужно вывести Юзер

let userName;
let userKey;

console.log(userName ?? userKey ?? 'User');//сначала проверяем 
//юзернейм, если его не существует, проверяем следующим, если и оно
//не существует то используем последнее

//оператор опциаональной це