function func() {
    smth = "string";
};

//без use strict мы создаем лишнюю глобальную переменную которая помещается в глобальный объект window и не может 
//быть удалена сборщиком мусора

//забытые таймеры

// const someRes = getData();
// const node = document.querySelector('.class');

// setInterval(function() {
//     if(node) {
//         node.InnerHTML = someRes;
//     }
// }, 1000);

//обработчики событий на несуществующих элементах

//замыкание
//большой объем данных хранится в замыкании функции

// function outer() {
//     const potentiallyHugeArray = [];
//     return function inner() {
//         potentiallyHugeArray.push('Hello');
//         console.log('Hello!!!');
//     }
// }

// const sayHello = outer();

//ссылки на дом элементы

function createElement() {
    const div = document.createElement('div');
    div.id = 'test';
    return div;
}

const testDiv = createElement();

document.body.append(testDiv);

function deleteElement() {
    document.body.removeChild(document.getElementById('test'));
}

deleteElement();

//исправленный на корректный вариант

function createElement() {
    const div = document.createElement('div');
    div.id = 'test';
    document.body.append(testDiv);
}

createElement();

function deleteElement() {
    document.body.removeChild(document.getElementById('test'));
}

deleteElement();