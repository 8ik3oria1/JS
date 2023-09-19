// 'use strict';

// console.log('ЗАпрос данных...');

// const req = new Promise(function(resolve, reject){
//     setTimeout(() =>{
//         console.log('подготовка данных...');
    
//         const product = {
//             name: 'kiwi',
//             price: 2000
//         };
    
//         resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//                     product.status = 'order';
//                     resolve(product);
//                 }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((data) => {
//     console.log(data);
// }).catch(() =>{
//     console.error('Error happened');
// }).finally(() => {
//     console.log('Finally');
// });

//all/raise

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('Done')
// });//ожидает выполнение всех промисов

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('Done')
});//ожидает выполнение хотя бы одного промиса