"use strict";

function factorial(data) {
    if (Number.isInteger(data) && data > 0) {
        let total = data;

        for (let i = 1; i < data; i++) {
            total *= (data-i);
        }

        return total;
    }
    else {
        if (Number.isInteger(data)){
            return factorial(1);
        }
        else {
            return 'Ошибка';
        }
    }
}

console.log(factorial('test'));

//n! = n * (n - 1) * (n - 2) * ...*1

//решение препода

// function factorial(n) {
//     if (typeof(n) !== 'number' || !Number.isInteger(n)) {
//         return "Ошибка, проверьте данные";
//     }

//     if (n >= 1) {
//         return n * factorial(n - 1);
//     } else {
//         return 1;
//     }

//     // Более короткий вариант, который вы можете встретить
//     // Но не учитывает отрицательные значения
//     return n ? n * factorial(n - 1) : 1;
// }

// factorial(5)