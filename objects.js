"use strict";

const obj = new Object(); //создаем новый объект устаревший вариант

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(Object.keys(options)); //метод который создает массив со всеми ключами из объекта
console.log(Object.keys(options).length);//длина объекта

// console.log(options.name); //вывести что-то из объекта

// delete options.name; //удалить что-то из объекта
// console.log(options);

//перебрать все свойства объекта где цикл работает столько раз сколько ключей в этом объекте
for (let key in options) {
    if (typeof(options[key])=== 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`); //здесь идем внутрь объекта в colors и перебираем ключи там
    } } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`); //будем получать значение кей и значение которое присвоено этому кею
    }
};

//у объекта нет свойства length!!!!
//как это можно сделать

let counter = 0;
for (let key in options) {
    if (typeof(options[key])=== 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`); //здесь идем внутрь объекта в colors и перебираем ключи там
    counter++;} } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`); //будем получать значение кей и значение которое присвоено этому кею
    counter++;}
}
console.log(counter);//не совсем корректно в случае вложенности объектов и необъодимости подсчитать верхнеуровневые объекты

//просто счетчик объектов в объекте
let cntr = 0;
for (let key in options) {
    cntr++;
}
console.log(cntr);

//создание методов

const obj = new Object(); //создаем новый объект устаревший вариант

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { //создаем метод который будет работать внутри объекта
        console.log("test");
    }
};

options.makeTest(); //запускаем эту функцию что создали ранее

//деструктуризация объектов -- нужна нам когда нам нужно обратиться к вложенным свойствам
const {border, bg} = options.colors;
console.log(border);


