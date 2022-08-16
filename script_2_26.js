//еще раз про аргументы и функции

const usdCurr = 28;
const eurCurr = 32;

function convert (amount, curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);