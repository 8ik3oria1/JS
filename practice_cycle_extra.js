//Задача 1

const result = [];
const arr = [3, 5, 8, 16, 20, 23, 50];

for (let i = 0; i < (arr.length); i++) {
    result[i] = arr[i];
}
console.log(result);

//Задача 2

const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < (data.length); i++) {
    if (typeof(data[i]) == 'number') { //запись условия если переменная число!!!
        data[i] = data[i]*2;

    } else {
        data[i] = data[i] + ' - done';
    }
}
console.log(data);

//Задача 3

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = 0; i < (data.length); i++) {
    result[i] = data[data.length-(i+1)];
}
console.log(result);