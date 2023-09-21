'use strict';

//filter

const names = ['Alex', 'Ivan', 'Ksenia', 'Abregita'];

//получить имена которые меньше 5 символов

const shortNames = names.filter(function(name){
    return name.length < 5;
});

console.log(shortNames);


//map

const answers = ['IvAn', 'AnnA', 'Hello'];

//получить имена в нормальном формате

const result = answers.map(item => item.toLowerCase());


//every/some

const some = [4, 'test', 'net'];

console.log(some.some(item => typeof(item) === 'number'));

console.log(some.every(item => typeof(item) === 'number'));

//reduce - собрать массив в одно целое

// const arr = [4, 5, 1, 3, 6];

// const result1 = arr.reduce((sum, current) => sum + current);

const arr = ['apple', 'plum', 'pear'];

const result1 = arr.reduce((sum, current) => `${sum}, ${current}`); //apple, plum, pear

console.log(result1);

//еще один пример

const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

const newArray = Object.entries(obj)
.filter(item => item[1] === 'person')
.map(item => item[0]);

console.log(newArray);

