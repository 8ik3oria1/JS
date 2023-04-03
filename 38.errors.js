//breakpoint - метка которая позволяет останавливать код на определнном участке
//call stack - как код пришел к данной строчке

//39 Динамическая типизация - это возможность одного типа данных становится другим

// to String
// 1. 
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2. конкатенация - когда мы что-то складываем со строкой => в результате всегда получаем строку
console.log(typeof(5 + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num); //для формирования строки (ссылки на конкретную страницу/раздел)

//передача стилей

const fontSize = 26 + 'px';

//To number

//1.

console.log(typeof(Number('4')));

//2.
//унарный плюс - это знак плюса который ставят перед другим типом данных
console.log(typeof((+'4')));

//3.
console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("Hello", ""); //превращаем любой полученный ответ в число


//to boolean 

//0, '', null, undefined, Nan; --False
//1.
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

//2.

console.log(typeof(Boolean('4')));

//3.

console.log(typeof(!!"44444"));

//!! - перевод в булиновый тип