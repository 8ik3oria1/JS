"use strict";

// const obj = {
//     name: 'Test'
// }

// //создадим символ - всегда уникальный

// let id = Symbol("id");
// obj[id] = 1;

// console.log(obj[id]);

// const obj = {
//         'name': 'Test',
//         [Symbol('id')]: 1
//     }

// console.log(obj);

// for (let value in obj) console.log(value);


// console.log(Object.getOwnPropertySymbols(obj));//массив символов

//новый пример

// const myAwesomeDB = {
//     movies: [],
//     actors: [],
//     id: 123
// }

// //сторонний код библиотеки

// myAwesomeDB.id = '3232'; //мы не должны разрешать изменять этот параметр

// console.log(myAwesomeDB["id"]);

//как избежать возможности модификации

// const myAwesomeDB = {
//     movies: [],
//     actors: [],
//     [Symbol('id')]: 123
// }

// myAwesomeDB.id = '3232';

// console.log(myAwesomeDB["id"]);
// console.log(myAwesomeDB);

//создание глобального реестра символов

const myAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol.for('id')]: 123
}

console.log(myAwesomeDB[Symbol.for('id')]);