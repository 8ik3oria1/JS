"use strict";

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

//writable - если тру то свойство в объекте можно изменить
//если фолс то только для чтения

//enumerable - если тру то свойство будет перечисляться в циклах,
//если фолс - то циклы будут его игнорировать

//configurable - если тру то свойство можно удалить, а атрибуты
// можно будет изменить

//получение информации
console.log(Object.getOwnPropertyDescriptor(user, 'name'));//чтобы вывести нужные скрытые параметры
//user - объект, 'name' - то свойство флаги которого хотим посмотреть

//изменение флагов
Object.defineProperty(user, 'name', {writable: false});
//user - обращение к объекту, 'name' - обращаемся к свойству которое хотим изменить
//{} - объект с теми флагами которые мы хотим модифицировать
//user.name = 'jdfhjsd'; //здесь будет ошибка так как мы writable смении на фолс

//при помощи defineProperty мы можем создавать новые свойства
Object.defineProperty(user, 'gender', {value: 'male'});//в таком случае все свойства будут в состоянии фолс
console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

//сделать так чтобы в переборе не было видно метода
Object.defineProperty(user, 'showMyPublicData', {enumerable: false});
//вывести все данные из объекта
for (let key in user) console.log(key);

//метод который позволяет редактировать сразу несколько свойств
Object.defineProperties(user, {
    name: {writable:false},
    surname: {writable:false}
});

