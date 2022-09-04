//задача 1

function sayHello(name) {
    return `Привет, ${name}!`;
   }

sayHello();

//задача 2

function returnNeighboringNumbers(number) {
    var result = [];
    var i;
    for (i = 0; i <= 2; i++){
        result[i] = number + (i-1);
    }
    return result;
}

console.log(returnNeighboringNumbers(5));

//задача 3

function getMathResult(x, y) {
    let i;
    let result = '';
    if (typeof(y) == Number && y > 0) {
        for(i = 0; i < y; i++){
            if (i < (y-1)) {
                result += (x*(i+1))+ '---';
            }
            else {
                result += (x*(i+1));
            }
        }
        return result;
    }
    else {
        return(x);
    }
}


console.log(getMathResult(5, 3));

//решение препода

function sayHello(name) {
    return `Привет, ${name}!`;
}

sayHello('Alex');

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

returnNeighboringNumbers(5);

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);