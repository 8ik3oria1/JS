//практика ч.2. Применяем условия и циклы

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания

'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB);

//задание 1

// for (let i = 1; i <= 2; i++){
//     prompt('Один из последних просмотренных фильмов?', ""),
//     prompt('На сколько оцените его?', "");
//  };

//задание 2

// let a;
// let b;

// do { 
//     a = prompt('Один из последних просмотренных фильмов?', ""),
//     b = prompt('На сколько оцените его?', "");
//     personalMovieDB.movies[a] = b;
//     console.log(a, b);
// } while ((!a || !b) || (a.length > 50 && a.length != 0));

//задание 3

// while (personalMovieDB.count) {
//     if (personalMovieDB.count < 10) {
//         alert('Просмотрено довольно мало фильмов');
//         break;
//     }
//     else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//         alert('Вы классический зритель');
//         break;
//     }
//     else if (personalMovieDB.count > 30) {
//         alert('Вы киноман');
//         break;
//     }
//     else {
//         alert('Произошла ошибка');
//         break;
//     }
// };

//второй вариант задания 3
// while (personalMovieDB.count) {
//     (personalMovieDB.count < 10)? alert('Просмотрено довольно мало фильмов'): 
//     (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) ? alert('Вы классический зритель'):
//     (personalMovieDB.count > 30)? alert('Вы киноман'): alert('Произошла ошибка');
//     break;
// };

