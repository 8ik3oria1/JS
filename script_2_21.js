// Логические операторы (или, и, не)

//Условие "И"
//когда условие выполнено (условие отадет true)
const hamburger = true;
const fries = true;

if (hamburger && fries) {
    console.log('Я сыт!');
} //если выполнилось условие hamburger && fries то вывести Я сыт!

const hamburger = true;
const fries = true;

if (hamburger && fries) {
    console.log('Я сыт!');
}

console.log((hamburger&&fries)); //true

//когда условие не выполнено (одно из значений false)
const hamburger = true;
const fries = false;

if (hamburger && fries) {
    console.log('Я сыт!');
} //возвращается false

//если в условиях есть цифры
const hamburger = 5;
const fries = 0;

if (hamburger && fries) {
    console.log('Я сыт!');
} 

console.log((hamburger&&fries)); 

//задача с цифрами
const hamburger = 2;
const fries = 1;

if (hamburger === 3 && fries === 1 ) { 
    //условие если есть три гамбургера и одна картошка 
    //(в случае с картошкой можно указать как hamburger === 3 && fries -- это тоже верно)
    console.log('Все сыты!');
} else {
    console.log('Мы уходим');
}

//задача с цифрами 2
const hamburger = 3;
const fries = 1;
const cola = 0;

if (hamburger === 3 && cola === 1 && fries === 1) { 
    //условие если есть три гамбургера и одна картошка 
    //(в случае с картошкой можно указать как hamburger === 3 && fries -- это тоже верно)
    console.log('Все сыты!');
} else {
    console.log('Мы уходим');
}

//важный момент!!!!
const hamburger = 3;
const fries = 1;
const cola = 1;

console.log(hamburger === 3 && cola && fries); //возвращает 0, в данном случае оператор И выводит первое ложное значение на котором он споткнулся
//если все аргументы правдивые то он вернет последнее значение в условии

if (hamburger === 3 && cola === 1 && fries === 1) { 
    //условие если есть три гамбургера и одна картошка 
    //(в случае с картошкой можно указать как hamburger === 3 && fries -- это тоже верно)
    console.log('Все сыты!');
} else {
    console.log('Мы уходим');
}

//пример 1
console.log(1 && 0); //результат 0 так как 0 это false и оператор споткнулся на нем
console.log(1 && 5); // результат 5 - последнее из значений, сравниваются две правдивые части
console.log(null && 5); //null - это false, соответственно вернуло первое неправдивое значение
console.log(0 && 'fkflkjl'); // 0 - false, соответственно вернуло первое неправдивое значение

//оператор И выводит первое false значение!!! и дальше не идет
//если все значения true то код идет до конца и выводит последнее из значений!!!

//Условие "ИЛИ"
const hamburger = 3;
const fries = 0;
const cola = 0;

if (hamburger || fries || cola) { //хотя бы одно из условий true, в наличии или гамбургер или кола или картошка
    console.log('Все довольны!');
} else {
    console.log('Мы уходим');
}

//как только оператор ИЛИ находит правду он перестает работать!

//если все значения false - выводится последнее значение 
const hamburger = 0;
const fries = 0;
const cola = null;

if (hamburger || fries || cola) { //хотя бы одно из условий true, в наличии или гамбургер или кола или картошка
    console.log('Все довольны!');
} else {
    console.log('Мы уходим');
}

console.log(hamburger || fries || cola); //выведет послднее значение

//пример
let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

//комбинация операторов
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) { //хотя бы одно из условий true, в наличии или 
    //гамбургер или кола или картошка
    console.log('Все довольны!');
} else {
    console.log('Мы уходим');
}

console.log(hamburger === 3 && cola === 2); //false
console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets); //выведет 2 так как выводит хотя бы одно трушное значение,
// и там последнее из правдивых

console.log(hamburger === 3 && (cola === 2 || fries === 3) && nuggets); //скобки изменяют порядок операторов, в данном случае первым
//выполниться условие кола или картошка, затем условие по гамбургеру = 3 и потом уже оператор И

//оператор НЕ
console.log(!0); //не 0 возвращает противоположное значение, то есть 0 - это false, не False - это True --> то есть выведет True 