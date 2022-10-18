"use strict";

const arr = [1, 2, 3, 6, 8];
//arr[99] = 0;

arr.pop(); //удаляет последний элемент массива
console.log(arr);

arr.push(10);//добаавляет элемент в конец массива
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) { //аналогичен циклу выше, но работает она только с массивами
    console.log(value); //здесь можно использовать брейк и континью
}

console.log(arr.length);

arr.forEach(function(item, i, arr){//function(item, i, arr) это коллбэк функция
    //item - это элемент массива
    //i-порядковый номер
    //arr-ссылка на массив
    console.log(`${i}: ${item} внутри массива ${arr}`);
});//метод позволяет перебрать все элементы внутри массива -- здесь нельзя использовать брейк и континью

method split
const str = prompt("", "");
const products = str.split(", ");
console.log(products);

метод join
const str = prompt("", "");
const products = str.split(", ");
console.log(products.join('; '));//объединение элементов массива

//метод сорт
const str = prompt("", "");
const products = str.split(", ");
products.sort(); //только для строковых значений
console.log(products.join('; '));


const arr = [10, 23, 13, 6, 28];
//шаблон для сортировки чисел внутри массива
function compareNum(a,b) {
    return a - b;
};

console.log(arr.sort(compareNum));

//псевдомассивы - у них нет никаких методов, это просто структура которая хранит данные