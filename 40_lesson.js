//замыкание и лексическое окружение

'use strict';

// let number = 5; debugger

// function logNumber() {
//     let number = 4; debugger
//     console.log(number); //функция обращается именно к значению, а не переменной!
// }

// number = 6;

// logNumber(); debugger

//замыкание - это когда функция обращается внутрь себя и если не находит к примеру нужную переменную,
//то начинается поиск вне себя

//лексическое окружение:
//1. внутреннее(local)(environment record)-это объект в котором как свойства хранятся все локальные переменные этой функции
//2. внешнее (script) - то которое соответсвует коду снаружи 

// let number = 5; debugger

// function logNumber() {
//     console.log(number); debugger //функция обращается именно к значению, а не переменной!
// }

// number = 6;

// logNumber(); debugger

//функция всегда получает последнее значение установленных переменных!!!

//каждый вызов функции это создание нового лексического окружения со своими спец. для этого вызова переменными
// и параметрами, смотри ниже пример

// let number = 5; debugger

// function logNumber() {
//     console.log(number); debugger //функция обращается именно к значению, а не переменной!
// }

// number = 6;

// logNumber(); debugger

// number = 8;

// logNumber(); debugger


//новый пример

function createCounter (){
    let counter = 0;

    const myFunction = function(){ debugger
        counter = counter + 1; debugger
        return counter; debugger
    }

    return myFunction;
}

debugger
const increment = createCounter(); debugger
const c1 = increment(); debugger
const c2 = increment(); debugger
const c3 = increment(); debugger

console.log(c1, c2, c3);
