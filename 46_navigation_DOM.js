console.log(document.body);

//console.log(document.head);

console.log(document.documentElement); //получаем html со всем
//содержимым

console.log(document.body.childNodes);//узлы которые дети боди
//получаем псевдомассив
//все что с тегом - дом элемент
// все даже то что не видим - дом узел(к примеру перенос)

//получить первого либо последнего ребенка
console.log(document.body.firstChild);
console.log(document.body.lastChild);

//получить родителя/соседей и детей
console.log(document.querySelector('#current').parentNode); //это перейти 
//к first
//перейти к wrapper, то есть поднятся выше 
console.log(document.querySelector('#current').parentNode.parentNode);

console.log(document.querySelector('[data-current="3"]').nextSibling);//получили тектстовую ноду
//перенос строки --> получить следующего соседа

console.log(document.querySelector('[data-current="3"]').previousSibling);
//получить предыддущего соседа

console.log(document.querySelector('[data-current="3"]').nextElementSibling);
//jплучаем элемент, а не ноду

console.log(document.querySelector('#current').parentElement);//получаем элемент

console.log(document.body.firstElementChild);

//перебрать всех чайлд нодсов которые лежат в боди и избавиться от всех текстовых
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue; //если нода текст прошу пройти дальше цикл
    }
    
    console.log(node);
};