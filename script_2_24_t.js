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

//task 1 and 2 and 3

// for (let i = 0; i < 2; i++){
//     const a = prompt('Один из последних просмотренных фильмов?', ""),
//           b = prompt('На сколько оцените его?', "");
    
//     if (a  != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }   
// };

// if (personalMovieDB.count < 10){
//     console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30){
//     console.log('Вы киноман');
// } else {
//     console.log('Произошла ошибка');
// };

// console.log(personalMovieDB);

//вариант переписи цикла самостоятельно
for (let i = 1; i <= 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ""),
            b = prompt('На сколько оцените его?', "");

        if ((!a || !b) || (a.length > 50 && a.length != 0)) {
            console.log('error');
            i--;
        }
        else {
            personalMovieDB.movies[a] = b;
        }
     };