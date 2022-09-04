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