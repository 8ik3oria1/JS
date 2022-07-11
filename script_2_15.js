//Операторы в JS

"use strict";

console.log('arr'+'-object'); - //конкотинация

//инкримент и дикремент
let incr = 10,
    decr = 10;

incr++; //оператор инкремента - увеличения на единицу(в данном случае это постфиксные операторы)
decr--; //оператор декримента - уменьшения на единицу

console.log(incr);
console.log(decr);

let incr = 10,
    decr = 10;

++incr; //аналогично тому что выше (в данном случае это префиксные операторы)
--decr; //аналогично тому что выше

console.log(incr);
console.log(decr);

let incr = 10,
    decr = 10;

console.log(incr++); //в результате будет 10
console.log(decr--); //в результате будет 10

console.log(5%2); //остаток от деления

//= - присваивание
//== - чтобы что-то сравнить

console.log(2*4 == 8);

//сравнение по типу данных
console.log(2*4 === '8'); //false

// && - И, работает когда 2 и более  являются правдивыми выражениями
// || - ИЛИ - когда хотя бы 1 является правдивым выражением

const isChecked = true,
    isClose = true;

console.log(isChecked && isClose); //true

const isChecked = true,
    isClose = false;

console.log(isChecked && isClose); //false

const isChecked = true,
    isClose = false;

console.log(isChecked || isClose); //true - потому что хотя бы один из аргументов правдивый

//оператор отрицания 
const isChecked = false,
    isClose = false;

console.log(isChecked || !isClose); //true - так как ! изменил false на true

//порядок выполнения операторов
console.log(2+2*2 === 8); //false
// сначала оператор умножения, потом оператор сложения и потом оператор сравнения

console.log(2+2*2 != 8); //true

//!== - строгое сравнение по типу 
console.log(2+2*2 != '6'); //false - здесь сравниваем полученный результат от сложения и умножения и значения 6, то есть 6 не равно 6? не правда
console.log(2+2*2 !== '6'); //true - сравнивается между типами данных полученный результат 6(число) не равно 6(строке) - правда





