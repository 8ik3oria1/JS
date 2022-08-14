//вложенные циклы

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

//создать из * фигуру треугольника
// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {

    for (let j = 0; j < i; j++) { //let j = 0 начальная переменная, j < i где i количество раз 
        //выполнения вложенного цикла
        result += '*';
    }

    result += '\n'; //перенос на следующую строку
}

console.log(result);


//как из внутреннего вложенного цикла остановить основной цикл

first: for (let i = 0; i < 3; i++) {
    console.log(`First level ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first; 
            console.log(`Third level ${k}`);
        }
    }
}

//сначала выполняется первое условие например и = 0, с 0 заходим во вложенное условие второго уровня 
//- тут тоже 0, с этим 0 идем в третий уровень и там проходим итерации 3 раза (к = 0-2)
//на 2 выходим в первый уровень, прибавляем +1 
//заходим с 1 во второй уровень, во втором уровне переменная = 0 
// с этим 0 снова идем на третий уровень
// есди бы не было континью то после выполнения всех итераций третьего уровня происходил переход ко второму
//пока там не пройдут тоже все итерации совместно с третьим уровнем