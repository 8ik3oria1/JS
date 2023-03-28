const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'John', 'Vasya'];

function sortStudentsByGroups(arr) {
    const a = arr.sort();
    let count = 3;
    let i = 0;
    let finalList = [];
    while (i < count){
        const j = a.shift();
        if (!!finalList[i]){
            finalList[i].push(j);
        } else {
            finalList[i] = [j];
        }
        if (finalList[i].length == 3){
            i++;
        }
    }

    let str = '-';
    if (a.length > 0 ){
        str = a.join(", " );
    }
    const item = `Оставшиеся студенты: ${str}`;
    finalList.push(item);
};


sortStudentsByGroups(students);