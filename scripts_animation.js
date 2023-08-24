
// const timerId = setTimeout(function() {
//     console.log('Hello');
// }, 2000); //через 2 секунды вывести Хеллоу!


//тоже самое что и выше, просто в функции передается аргумент
// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Hello');

// const btn = document.querySelector('.btn');
// let timerId,
// i = 0;

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 2000);
// });


// function logger() {
//     if(i === 3){
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// };

//сбросить счетчик таймаута

//clearInterval(timerId);

//новый пример с использованием рекурсии

// let id = setTimeout(function log(){
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);

//перемещение квадрата на странице

const btn = document.querySelector('.btn');
let timerId,
i = 0;


function myAnimation(){
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame(){
        if(pos == 300){
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    };
};

btn.addEventListener('click', myAnimation);