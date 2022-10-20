
"use strict";

let a = 5,
    b = a;

b =  b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; //передает именно ссылку на объект obj
// copy.a = 10;
console.log(copy);
console.log(obj);

//создание копии объекта

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj){
        objCopy[key] = mainObj[key]; //objCopy[key] - создаем свойство
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers); //создали копию

newNumbers.a = 10;
newNumbers.c.x = 10; //если мы клонируем объекты то есть глубокие и поверхностные копии объекта, и если у нас есть вложенная структура - то тогда это ссылочный тип данных, что при изменении меняет родитея в том числе

console.log(newNumbers);
console.log(numbers);

//объединение двух объектов

const add = {
    d: 17,
    e: 20
};

//console.log(Object.assign(numbers, add)); //numbers - это куда мы хотим это все переместить, второй аргумент - которые мы переносим

const clone = Object.assign({}, add); //{} - создаем пустой объект, в него помещается все из эд, это копирование объекта
clone.d = 20;
console.log(add);
console.log(clone);

//copy array

const oldArray = ['a', 'b', 'c'];
const newArray1 = oldArray; //таким образом ложится ссылка на олд эрэй
const newArray = oldArray.slice();//копирование массива

newArray[1] = 'dsaddsa';
console.log(oldArray);
console.log(newArray);

//оператор разварота spread

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

//second example
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7]; //нам нужно этот массив передать в функцию, но в функцию не принимаются массивы, а принимаются отдельные элементы
//соответственно для этого мы используем спред оператор чтобы разбить массив поэлементно и соответственно загнать в функцию

log(...num);

//one more ex

const array = ['a', 'b'];

const newAarray = [...array];


//one more ex
const q = {
    one: 1,
    two: 2
};

const newObj = {...q};