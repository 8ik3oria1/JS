const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

//console.log(btns[0].classList.length);

//console.log(btns[0].classList.item(0));//получить класс который располагается под каким-то индексом

//console.log(btns[1].classList.add('red'));//добавить опреденные классы

//console.log(btns[0].classList.remove('blue'));//удалить ненужный класс

//console.log(btns[0].classList.toggle('blue'));//принцип тот же что и у тогла
//если есть класс - то убрать, если нет - то добавить

//проверка наличия класс на определенном элементе
// if (btns[1].classList.contains('red')){
//     console.log('red')
// };

//если у второй кнопки нет класса ред я буду ее добавлять
//если есть - то убирать
// btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red'); 
//     } else {
//         btns[1].classList.remove('red');
//     }
// });

//использование тогла для задачи выше
// btns[0].addEventListener('click', () => {
//     btns[1].classList.toggle('red');
// });

//делегирование событий

wrapper.addEventListener('click', (event)=> {
    if (event.target && event.target.tagName == "BUTTON") {
        console.log('Hello');
    }
});//при клике на кнопку(любую)выводится хеллоу в консоль

//создание динамического контента на странице
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);