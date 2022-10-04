// Задача:

// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. 
// Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, 
// их количество должно быть равно переданному аргументу.
// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

function fib(a) {
    var b = [];
    for (let i = 0; i < a; i++) {
       if (a == 0 || typeof(a) != 'number' || Number.isInteger(a) == false) {
            b[i] = '';
            break;
       }
       if (a >= 1 && a <= 2) {
            b[i] = i;
       }
       if (a > 2){
            if (i >= 0 && i <= 1) {
                b.push(i);   
            }
            if (i >= 2) {
                b.push(b[i-2] + b[i-1]);
            }            
       }
    }
    b = b.join(' ');
    return b;
}

console.log(fib(5.9));

//teacher decision
// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     return result;
// }

// fib(5)
