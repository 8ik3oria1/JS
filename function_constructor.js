'use strict';

// const num = new Number(3);

// console.log(num);


//функция конструктор, с помощью которой можно создавать новых пользователей

// function user(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log(`Hello, ${this.name}!`)
//     };
// }

//использование прототипа, используем в случае если основную функцию мы не можем по какой-то причине изменять

// user.prototype.exit = function(name){
//     console.log(`User ${this.name} exit`)
// };

// const ivan = new user('Ivan', 28);
// const alex = new user('Alex', 20);

// ivan.exit();
// alex.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan, alex);

//конструкторы нужны для создания новых однотипных объектов

//this - контекст вызова

//вызов функции

// function showThis(){
//     console.log(this);
// };
// showThis();

//обычная ф-я: this = window НО если стоит use strict - то будет underfined

// function showThis(a, b){
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a+b;
//     }

//     console.log(sum());
    
// };
// showThis(4, 5);

// const object = {
//     a: 20,
//     b: 15,
//     sum: function(){
//         console.log(this)
//     }
// };
// object.sum();

//контекст у методов объекта это будет сам объект

// const object = {
//     a: 20,
//     b: 15,
//     sum: function(){
//         function shout(){
//             console.log(this);
//         }
//         shout();
//     }
// };
// object.sum(); //=>получаем андефайнд

// function user(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log(`Hello, ${this.name}!`)
//     };
// }

// const ivan = new user('Ivan', 28);
//this в конструкторах и классах - это новый экземпляр объекта

// function sayName(){
//     console.log(this);
//     console.log(this.name);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user);
// sayName.apply(user);
// //функции делают одно и то же


// function count(num){
//     return this*num;
// };

// const double = count.bind(2);
// console.log(double(3));

//ручная привязка this: call, apply, bind

// const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     console.log(this);//здесь зис обращается к самому элементу
//     this.style.backgroundColor = 'red';//hgи клике на кнопку кнопка меняет цвет на красный
// });//при клике получаем саму кнопку в консоле

//стрелочные функции и как они работают с контекстом вызова

// let obj = {
//     num: 5,
//     sayNumber: function(){
//         const say = () => {
//             console.log(this);
//         };

//         say();
//     }
// };

// obj.sayNumber();

//так использована стрелочная функция, то функция берет свой контекст у родителя - в данном случае родитель это метод
//sayNumber, а метод ссылается на своего родителя то есть на объект obj, то есть зис берет контекст объект

//еще один пример

// const double = (a) => {
//     //классичсекий вариант 
//     // return a*2;

// };

// const double = (a) => a*2;//аналог стрелочной функции выше
// const double = a => a*2;//еще один аналог


// btn.addEventListener('click', () => {//теряется контекст вызова, так как у стрелочной функции нет своего контекста и зис = андефайн
//     console.log(this);
//     this.style.backgroundColor = 'red';
// });

//чтобы не было ошибки нам в качестве аргумента нужно передать event

// btn.addEventListener('click', (e) => {
//     e.target.style.backgroundColor = 'red';
// });

//классы

class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

//пример наследования
class ColourRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColour) {
        super(height, width);//вызывает то же самое что было у родителя, строки с зис
        this.text = text;
        this.bgColour = bgColour;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColour}`);
    }
}

const div = new ColourRectangleWithText(25, 10, 'tetetette', 'red');

div.showMyProps();
console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());