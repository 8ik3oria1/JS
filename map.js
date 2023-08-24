'use strict';

// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: function() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// }
// console.log(user);

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000, 15000, 25000];

//const map = new Map();

// shops.forEach((shop, i) => {
//     map.set(shop, budget[i]);
// })

//map.set(shops[0], 5000);

//console.log(map);

// map.set(shops[0], 5000)
//     .set(shops[1], 15000)
//     .set(shops[2], 25000);

// console.log(map.get(shops[0]));//получить значение из объекта
// console.log(map.has(shops[0]));//наличие чего то внутри карты
// map.delete(key);//удаляет из карты что-либо
// map.clear();//полностью очисить карту
// map.size;//количество элементов в карте

//console.log(map);//карта это массив массивов!!!

const map = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
})//добавляем к бумаге еще три объекта

console.log(map);

//перебор итерируемых объектов

// for (let shop of map.keys()) {
//     console.log(shop)
// }

//result
// { paper: 400 }
// { rice: 500 }
// { oil: 200 }
// { bread: 50 }

//получить весь список товаров(ключи)

// const goods = [];
// for (let shop of map.keys()) {//превратили карту в массив с объектами
//     goods.push(Object.keys(shop))//[ [ 'paper' ], [ 'rice' ], [ 'oil' ], [ 'bread' ] ]//обращаемся к каждому отдельному объекту
//     //goods.push(Object.keys(shop)[0])//[ 'paper', 'rice', 'oil', 'bread' ]
// }
// console.log(goods);

//получить весь список значений

// for (let price of map.values()){
//     console.log(price);
// }

//results
// 8000
// 5000
// 15000
// 25000

//map.entries


// for (let price of map.entries()){
//     console.log(price);
// }

//results
// [ { paper: 400 }, 8000 ]
// [ { rice: 500 }, 5000 ]
// [ { oil: 200 }, 15000 ]
// [ { bread: 50 }, 25000 ]

// for (let [shop, price] of map.entries()){
//     console.log(price, shop);
// }

//results
// 8000 { paper: 400 }
// 5000 { rice: 500 }
// 15000 { oil: 200 }
// 25000 { bread: 50 }

//еще один метод

// map.forEach((value, key, map)=> {
//     console.log(key, value);
// });

//result 
// { paper: 400 } 8000
// { rice: 500 } 5000
// { oil: 200 } 15000
// { bread: 50 } 25000

//создать карту из объекта

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

const userMap = new Map(Object.entries(user));
console.log(userMap);

//из карты создать объект

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);