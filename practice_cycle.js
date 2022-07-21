//Задача 1

for (let i = 5; i <= 10; i++) {
    console.log(i);
}

//Задача 2

for (let i = 20; i <= 20; i--) {
    if (i === 13) {
        break;
    }
    console.log(i);
}

//Задача 3

for (let i = 2; i <= 10; i++) {
    if (i%2 == 0) {
        console.log(i);
    } 
        continue;
}

//Задача 4

for (let i = 2; i <= 16; i++) {
    if (i%2 === 0) {
        continue;
    } else {
        console.log(i);
    }
    
}

//вариант с while

let i = 2;

while (++i <= 16 && i%2 != 0) {   //если ++ стоит до переменной - тогда сначала переменная+1 и потом сравнение,
    //если ++ после переменной - сначало сравнение потом +1
    console.log('iii',i);
    i++;
    console.log('i',i);
} 

//задача 5

const arr = [];
let j = 0;

for (let i = 5; i <= 10; i++) {
    arr[j] = i;
    j++;
}
console.log(arr);

