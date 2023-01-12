"use strict";

//метод на строке, то есть он оборачивает строку в объект, потом использует метод и возвращает обратно
let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100
};

const john = {
    health: 100
};

//устаревший формат
john.__proto__ = soldier; //мы установили прототипом солдата Джона
console.log(john); //получаем только то что есть у Джона
console.log(john.armor); //получаем значение от прототипа --> 100

//если мы в прототип добавим функцию, то и у Джона она появится
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello!");
    }
};

const john = {
    health: 100
};

//устаревший формат
// john.__proto__ = soldier; //мы установили прототипом солдата Джона

Object.setPrototypeOf(john, soldier); //1-м указываем объект, 2-м - прототип
john.sayHello();

//создание объекта с прототипом
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello!");
    }
};

const john = Object.create(soldier); //создаем объект Джон который будет прототипно наследоваться от солдата
john.sayHello();