/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;
let orderNumber;

const personalMovieDB = {
    count: function() {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
        }
        personalMovieDB.count = numberOfFilms;
    },
    movies: function rememberMyFilms() {
        for (let i = 0; i < 2; i++){
                const a = prompt('Один из последних просмотренных фильмов?', ""),
                      b = prompt('На сколько оцените его?', "");
    
                if (a  != null && b != null && a != '' && b != '' && a.length < 50){
                    personalMovieDB.movies[a] = b;
                    console.log('done');
                } else {
                    console.log('error');
                    i--;
                }   
            }
    },
    actors: {},
    genres: function writeYourGenres(callback, orderNumber = 1) {
        for (let i = 0; i <= 2; i++) {
            const a = prompt(`Ваш любимый жанр под номером ${orderNumber}`, "");
            if (a != '' && a  != null) {
                personalMovieDB.genres[i] = a;
                orderNumber++;
            }
            else {
                const a = prompt(`Ваш любимый жанр под номером ${orderNumber}`, "");
                i--;
            }
        }
        callback();
    },
    level: function detectPersonalLevel () {
        if (personalMovieDB.count < 10){
            personalMovieDB.level = 'Просмотрено довольно мало фильмов';
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            personalMovieDB.level = 'Вы классический зритель';
        } else if (personalMovieDB.count >= 30){
            personalMovieDB.level = 'Вы киноман';
        } else {
            personalMovieDB.level = 'Произошла ошибка';
        }
    },
    privat: false
};

function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log(window);
    }
};

function toggleVisibleMyDB() {
    if (personalMovieDB.privat == false) {
        personalMovieDB.privat = true;
    }
    else {
        personalMovieDB.privat = false;
        showMyDB();
    }
};

// function showGenres(orderNumber = 1, i = 0){
//     personalMovieDB.genres.forEach(i => console.log(`Любимый жанр ${orderNumber} - это ${personalMovieDB.genres[i]}`));
// };

personalMovieDB.genres.forEach(genre => {
    console.log(`Любимый жанр ${orderNumber} - это ${personalMovieDB.genres[i]}`);
});

console.log(personalMovieDB);
personalMovieDB.count();
personalMovieDB.movies();
personalMovieDB.level();
personalMovieDB.genres();
personalMovieDB.genres.forEach();
toggleVisibleMyDB();