"use strict";

// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и 
// возвращать сообщение в нужном формате.
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

const family = ['Alex', 'Sveta', 'Vova'];

function showFamily(arr) {
    if (arr.length >0 ){
        return `Семья состоит из: ${arr.join(" ")}`;
    }
    else {
        return 'Семья пуста';
    }
}

console.log(showFamily(family));

// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и 
// будет выводить в консоль эти строки в нижнем регистре.

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    return `${arr.join('\n').toLowerCase()}`;
}

console.log(standardizeStrings(favoriteCities));

// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и 
// возвращает эту строку в обратном порядке.
// Пример:
// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'
// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"
// Это очень интересная задача, которую можно решить несколькими способами. 
// Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он 
// думает. Как небольшая подсказка, есть метод, который может вам помочь. И часть 
// дополнительных вариантов решения мы тоже изучим в течении курса.
// Может показать сложной с первого взгляда, но это совсем не так 🙂

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) == 'string') {
        return str.split('').reverse().join('');
    }
   else {
    return "Ошибка!";
   }
}

console.log(reverse(someString));

// 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает 
// деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, 
// второй дополнительный с прочими валютами:
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента:
//  первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что 
//     они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая 
//     сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 
//     'Нет доступных валют'. Функция возвращает строку в нужном виде.

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const newArr = baseCurrencies.concat(additionalCurrencies);

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        return 'Нет доступных валют';
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == missingCurr){
                arr.splice(i, 1);
            }
        }
        return `Доступные валюты:\n${arr.join('\n')}\n`;
    }
}

console.log(availableCurr(newArr, 'USD'));