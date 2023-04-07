"use strict";

// console.log(something);

// create new box with variable
let und;
console.log(und);

// create object
const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

// console.log(obj.name);
console.log(obj["name"]);

let arr = ['plum.png', 'orange.jpeg', 'apple.bmp'];

console.log(arr[1]);

//Разница между объектами и массивами 

const arr = [1, 2, 3];

const arrObj = {
    0: 1,
    1: 2,
    2: 3,
    keyB: '1234'
};

//create key
const b = 'keyB';

// Add new property 
arrObj.b = '1234';
//add to key value
arrObj[b] = '1234'; // arrObj[b] = '1234' === arrObj['keyB'] = '1234'

console.log(arrObj[b]);

// const obj = {a: 1, b: 2};

const obj = {
    'Anna': 500,
    'Alice': 800
};

//Создание вложенных объектов
const arrObj = {
    0: 1,
    1: 2,
    2: 3,
    abc: {
        def: '1234'
    }
};
