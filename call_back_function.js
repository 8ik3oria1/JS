
"use strict";

function first() {
    //do something;
    setTimeout(function(){ //задержка кода
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

//callback - это функция, которая должна быть выполнена после того как другая функция завершила свое выполнение

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошул этот урок!');
}

learnJS('JavaScript', done); //здесь после done не ставим круглые скобки так как мы здесь только передаем функцию
//а не запускаем, то есть мы говорим запусти функицю done когда ты до нее дойдешь