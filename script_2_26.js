//еще раз про аргументы и функции

const usdCurr = 28;
const eurCurr = 32;

function convert (amount, curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);

//про важность return

const usdCurr = 28;
const discount = 0.9;

function convert (amount, curr) {
    return curr * amount; //возвращает какой-то результат который можно использовать дальше 
    //и соответственно здесь функция и завершиться!!!! все что дальше работать не будут
}

function promotion(result) {
    console.log(result*discount);
}

const res = convert(500, usdCurr);
promotion(res);
//либо можно так 
//promotion(convert(500, usdCurr));

//когда функция возвращает другую функцию

const usdCurr = 28;
const discount = 0.9;

function convert (amount, curr) {
    return curr * amount; //возвращает какой-то результат который можно использовать дальше 
    //и соответственно здесь функция и завершиться!!!! все что дальше работать не будут
}

function promotion(result) {
    console.log(result*discount);
    return function(){} //вот здесь функция возвращает функцию
}

const res = convert(500, usdCurr);
promotion(res);

//еще один вариант когда return без значения

function test() {
    for (let i = 0; i<5; i++){
        console.log(i);
        if (i === 3) return //фактически это если i = 3 заверши функцию и под капотом вовращается undefined
    }
    console.log('done');
}

test(); //вызов самой функции

//еще одна функция

function doNothing(){};
console.log(doNothing() === undefined);