"use strict";

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '7$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = !prop ? 'Закрыто' : 'Открыто'; 

    return answer;
}

console.log(isOpen(restorantData.openNow)); 

function isAverageLunchPriceTrue(fDish, sDish, average) { 
    console.log(+fDish.price.slice(0, -1));
    console.log(+sDish.price.slice(0, -1));
    console.log(+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)));
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
        return 'Цена ниже средней'; 
    } else {
        return 'Цена выше средней'; 
    } 
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice)); debugger

function transferWaitors(data) { 
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}]; 
    return copy;
}

transferWaitors(restorantData);