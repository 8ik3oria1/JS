'use strict';

// let user = {name: 'Ivan'};

// const arr = [user];
// user = null;

// console.log(user);
// console.log(arr[0]);


//example 2

// let user = {name: 'Ivan'};

// let map = new Map();
// map.set(user, 'data');
// user = null;

// console.log(map.keys());


// let user = {name: 'Ivan'};

// let map = new WeakMap();
// map.set(user, 'data');
// user = null;

// console.log(map.has(user));

//пример использования weakmap на примере чат телеграм

let cache = new WeakMap();

function cacheUser(user) {
    if(!cache.has(user)) {
        cache.set(user, Date.now());
    }
    return cache.get(user);
}

let lena = {name: 'Elena'};
let Alex = {name: 'Alex'};

cacheUser(lena);
cacheUser(Alex);

lena = null;

console.log(cache.has(lena));
console.log(cache.has(Alex));
//в данном случае если мы удаляем ссылку на объект, то удаляется и сам объект из памяти

//weakSet (добавляем только объекты!)
//add/has/delete

let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'Hi', from: 'Sad'},
    {text: 'How', from: 'Test'}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
//readMessages.add(messages[1]);

readMessages.add(messages[0]);
messages.shift();

console.log(readMessages.has(messages[0]));

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/WeakMap

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/WeakSet