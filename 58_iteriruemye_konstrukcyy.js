"use strict";

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

//разница между for in и for of
//for in при использовании на объекте/массиве/строке будет работать с сущностью
//по порядку которая будет являться перечисляемой, то есть у которой 
//enumrable = true
//for in может перебирать не обязательно по порядку, поэтому его не особо 
//рекомендуется применять в строках

for (const key in user) {
    console.log(user[key])
};

const arr = ['b', 'a', 'c'];

for (const key in arr) {
    console.log(arr[key]);
}; //порядок как и в массиве

//for of она проходится по значениям перебираемого объекта

for (const key of arr) {
    console.log(arr[key]);
}; //получаем три раза undefined

for (const key of arr) {
    console.log(key);
}; //всегда перебирается в том порядке в котором есть
//исключает все лишние свойства что могут быть унаследованы


//итерируемый объект - это тот который мы можем использовать в for of

console.dir(arr); //выводит всю инфо по объекту с пропертями

//символ итерейтор - это метод который возвращает объект с методом некст

const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function(){
        console.log('Hello');
    }
};

//чтобы сделать объект селерис перебираемым нам необходимо добавить метод
//символ итерейтор

salaries[Symbol.iterator] = function(){
    return {
        current: this.john,
        last: this.ann,

        next(){
            if (this.current < this.last) {
                this.current = this.current + 500;
                return {done: false, value: this.current} 
            } else {
                return{done: true}
            }
        }
    }
}

for (let res of salaries) {
    console.log(res)
};

//вызвать итератор вручную

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());
