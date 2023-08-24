'use strict';

let str = '';

function amountOfPages(summary){
    for (let i = 1; i <= summary; i++){
        str += i;
    }
}

console.log(amountOfPages(25));