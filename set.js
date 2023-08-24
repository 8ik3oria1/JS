//особый вид коллекций в виде массива, где каждый вид значений может повторяться
//только один раз

'use strict';

// const arr = [1, 1, 2, 2, 4, 5, 6, 5];

// const set = new Set(arr);
// console.log(set);

// const arr = ['Alex', 'Anna', 'Oleg', 'Alex'];
// const set = new Set(arr);

// console.log(set);

//методы сета
//add - 

const arr = ['Alex', 'Anna', 'Oleg', 'Alex'];
const set = new Set(arr);
set.add('Ivan');

console.log(set);

// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// for (let value of set) console.log(value);
//result
// Alex
// Anna
// Oleg
// Ivan

// set.forEach((value, valueAgaing, set) => {
//     console.log(value, valueAgaing);
// })
//result
// Alex Alex
// Anna Anna
// Oleg Oleg
// Ivan Ivan

//console.log(set.values());
//result
//[Set Iterator] { 'Alex', 'Anna', 'Oleg', 'Ivan' }

//set.keys();

//функция помощника

function unique(arr) {
    //return new Set(arr);
    return Array.from(new Set(arr)); //сетом убираем дубли, и потом добавляем оставшиеся значения в новый массив но уже без дублей
}