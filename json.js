'use strict';

const person = {
    name: 'Alex',
    tel: '+9876756545',
    parents: {
        mom: 'Jane',
        dad: 'Ivan'
    }
};

// console.log(JSON.stringify(person));

// console.log(JSON.parse(JSON.stringify(person)));

//сделать глубокую копию объекта
const clone = JSON.parse(JSON.stringify(person));//полностью независит от первоначального объекта
clone.parents.mom = 'Ann';
console.log(person);
console.log(clone);
