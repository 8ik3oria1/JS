'use strict';

const person = {
    name: 'Alex',
    age: 24,

    get userAge(){
        return this.age;
    },

    set userAge(num){
        this.age = num;
    }
};

console.log(person.userAge);