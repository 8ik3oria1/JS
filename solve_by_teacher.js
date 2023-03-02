let numberOfFilms;
let orderNumber;

const personalMovieDB = {
    count: 0,
    movies: {},
    genres: [],
    actors: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.counts = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    rememberMyFilms: function () {
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
    writeYourGenres: function(orderNumber = 1) {
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
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i+1} - это ${item}`);
            });
        }
    },
    detectPersonalLevel: function  () {
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
    showMyDB: function () {
        if (personalMovieDB.privat == false) {
            console.log(window);
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};
