//home work

//Что выведет в консоль код?

console.log( NaN || 2 || undefined );
//2
 
console.log( NaN && 2 && undefined );
//nan
 
console.log( 1 && 2 && 3 );
//3
 
console.log( !1 && 2 || !3 );
//2 неверно, верно false 
 
console.log( 25 || null && !3 );
//25
 
console.log( NaN || null || !3 || undefined || 5);
//5
 
console.log( NaN || null && !3 && undefined || 5);
//5
 
console.log( 5 === 5 && 3 > 1 || 5);
//5 неверно, верно true

//Выполняется ли условие?

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
//да, так как выполняется условие фри 3 и есть нагетсы
//console.log(hamburger === 3 && cola || fries === 3 && nuggets);

//Выполняется ли условие?

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}
//выполнится, выведется 2
//console.log(hamburger || cola || fries === 3 || nuggets)

//Выполняется ли условие?

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
//не выполнится и снова выведется 2 так как все фолс и последние нагетсы=2 --- не верно, выведется false
//console.log(hamburger && cola || fries === 3 && nuggets);




