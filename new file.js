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

while (personalMovieDB.count) {
        (personalMovieDB.count < 10)? alert('Просмотрено довольно мало фильмов'): 
        (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) ? alert('Вы классический зритель'):
        (personalMovieDB.count > 30)? alert('Вы киноман'): alert('Произошла ошибка');
        break;
    };

