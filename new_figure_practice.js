//задача со звездочками

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    result += ' '.repeat(lines-i); 
    {
        for (let j = 0; j <= (i+i); j++) { //let j = 0 начальная переменная, j < i где i количество раз 
            result += '*';   
        }
    }

    result += '\n'; //перенос на следующую строку
}

console.log(result);

//     *
//    ***
//   *****
//  *******
// *********