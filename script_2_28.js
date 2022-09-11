//методы и свойства строк и чисел

"use strict";

const str = "test";
const arr = [1, 2, 4];

console.log(str.length); //log - это метод
console.log(arr.length);

//console.dir - dir подобен логу, только выводит элемент в виде объекта
//console.dir(Number);

console.log(str[2]);

//неверный кейс

console.log(str[2] = 'd'); //замена не производится
console.log(str);

//correct case

console.log(str.toUpperCase()); //do str UPPER - превращает строку в верхний регистр, ПРИ этом если затем вызвать 
//строку без апера выведется исходная строка

//найти кусочек строки и с какой позиции он начинается

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); 

console.log(fruit.indexOf("q")); //получаем -1 - значит что кусочек строки не был найден

const logg = "Hello world";

console.log(logg.slice(6, 11)); //вырезать world, последняя цифра - это по какой элемент вырезать, 
//при этом он НЕ включается

console.log(logg.slice(6)); // если нужно обрезать кусочек строки до конца то указываем первый аргумент и все

console.log(logg.substring(6, 11)); //не поддерживает отрицательные значения

console.log(logg.substr(6, 5)); //первый аргумент с какого вырезать, второй сколько вырезать, то есть 5 элементов

//для работы с числами методы

//округление

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));//обрезает до точки
console.log(parseFloat(test));//вернуть в десятичном