//1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными
// и возвращать строку с опытом.

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            ruby: '30%'
        },
        exp: '3 month'
    },
    showAgeAndLangs: function(lang) {
        console.log(`Мне ${personalPlanPeter.age} и я владею языками: ${languages.join(' ').toUpperCase()}`);
    }
};

const {languages, programmingLangs, exp} = personalPlanPeter.skills;

function showExperience(plan) {
    console.log(exp);
    return exp;
}

showExperience(personalPlanPeter);

//Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и 
//возвращать строку в нужном виде.

function showProgrammingLangs(plan) {
    let str = '';
        for (let key in programmingLangs) {
            if (Object.keys(programmingLangs).length > 0) {
                str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
            }
            else {
                return ' ';
            }    
        }
    return str;
}

showProgrammingLangs(personalPlanPeter);

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. 
//При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
// Пример:
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'
// Заметьте, что возраст и языки подставляются автоматически из объекта, 
//а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, 
//то и сообщение тоже изменится.

personalPlanPeter.showAgeAndLangs(personalPlanPeter);