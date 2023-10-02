'use strict';

const funds = [
    {amount: 1400},
    {amount: 2400},
    {amount: 1000},
    {amount: 500},
    {amount: 10400},
    {amount: 11400}
];

const getPositiveIncomeAmount = (data) => {
    return data.filter(item => item.amount >= 0)
    .map(item => item.amount)
    .reduce((sum, current) => sum + current);
};

const getTotalIncomeAmount = (data) => {
    if(data.some(item => item.amount < 0)){
        return data.map(item => item.amount)
        .reduce((sum, current) => sum + current);
    }
    else{
        return getPositiveIncomeAmount(data);
    }
};
