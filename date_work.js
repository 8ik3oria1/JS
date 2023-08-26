'use strict';

// const now = new Date(); //создаем новую дату и вносим ее в переменную

// console.log(now);

// const now = new Date(2023, 5, 1, 20);

// console.log(now);//2023-06-01T17:00:00.000Z

// const now = new Date(0);

// console.log(now);


//получение компонентов даты

const now = new Date();

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());//в данном случае нумерация идет с воскресенья, и воскресенье = 0
console.log(now.getHours());
console.log(now.getUTCHours());

//getTime и getTimeOfSet

console.log(now.getTimezoneOffset());
console.log(now.getTime());

//установить дату 

console.log(now.setHours(18));
console.log(now);

//метод parse

console.log(Date.parse('2023-08-26'));

//измерение промежутков времени

let start = new Date();

for(let i = 0; i < 100000; i++){
    let sum = i ** 3;
};

let end = new Date();

console.log(end - start);

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date
//https://learn.javascript.ru/date