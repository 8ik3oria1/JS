"use strict";

//DOM - объектая модель документа

const box = document.getElementById('box');

console.log(box);

//const btns = document.getElementsByTagName('button'); //здесь мы получили псевдомассив!!!

//console.log(btns);

//как получить отдельную каждую кнопку

// const btns = document.getElementsByTagName('button')[1];
// console.log(btns);

//2 sposob

// const btns = document.getElementsByTagName('button');
// console.log(btns[1]);

// //все элементы пытаемся получить через определенный класс
// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// const hearts = document.querySelectorAll('.heart'); //точку ставим для указания класса! так как здесь селектор юзаем
// // console.log(hearts);
// hearts.forEach(item => {
//     console.log(item);
// });//вывести каждый элемент массива сердечек

//при помощи этого мы уже получаем только первый элемент

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);