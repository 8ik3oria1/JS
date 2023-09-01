'use strict';

const num = new Number(3);

console.log(num);


//функция конструктор, с помощью которой можно создавать новых пользователей

function user(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`Hello, ${this.name}!`)
    };
}

//использование прототипа, используем в случае если основную функцию мы не можем по какой-то причине изменять

user.prototype.exit = function(name){
    console.log(`User ${this.name} exit`)
};

const ivan = new user('Ivan', 28);
const alex = new user('Alex', 20);

ivan.exit();
alex.exit();

ivan.hello();
alex.hello();

console.log(ivan, alex);

//конструкторы нужны для создания новых однотипных объектов