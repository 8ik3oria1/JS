'use strict';

// localStorage.setItem('number', 5);

// console.log(localStorage.getItem('number'));

// //localStorage.removeItem('number');

// localStorage.clear();


const checkBox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');


if(localStorage.getItem('isChecked')){//проверяем что элемент есть и он равен тру
    checkBox.checked = true;
}

if(localStorage.getItem('bg') === 'changed'){
    form.style.backgroundColor = 'red';
}

checkBox.addEventListener('change', () => {//сохраняем этот чек бокс в статусе тру
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if(localStorage.getItem('bg') === 'changed'){
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});