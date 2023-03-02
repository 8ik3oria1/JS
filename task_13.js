"use strict";

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

console.log(shoppingMallData.budget);

function isBudgetEnough(data) {
    let sumS = 0;
    let sumV = 0;
    if (!data.hasOwnProperty('shops')){
        return 'Бюджета недостаточно';
    };
    for (let i = 0; i < shoppingMallData.shops.length; i++) {
        const S = shoppingMallData.shops[i].width*shoppingMallData.shops[i].length;
        const V = S*shoppingMallData.height;
        sumS += S; 
        sumV += V;
        console.log(sumV);
    }
    console.log(sumV);
    const payment = shoppingMallData.moneyPer1m3*sumV;
    console.log(payment);
    if (shoppingMallData.budget <= payment){
        console.log('Бюджета недостаточно');
    }
    else {
        console.log('Бюджета достаточно');
    }
};

isBudgetEnough(shoppingMallData);