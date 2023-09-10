const log = function (a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage'); //=> basic rest [ 'operator', 'usage' ] сработал спред оператор где массив


//мы хотим чтобы параметры имели свои значени

function calcOrDouble(number, basis = 2) {//basis = 2 по сути то же самое что строчка ниже
    //basis = basis || 2;//в случае если в базис передается не число или вообще не передалось значение то в рамках
    //сравнения фолс и тру, будет выбрано тру то есть 2

    console.log(number*basis);
};

calcOrDouble(3, 5);