'use strict';

const app = '123';

const number = 1;

(function(){
    let number = 2;
    console.log(number);
    console.log(number+3);
}());//анонимная самовызывающаяся функция

console.log(number);

const user = (function(){//приватная фукнция
    const private = function(){
        console.log('I am private')
    };

    return {
        sayHello: private
    };
}());

user.sayHello();