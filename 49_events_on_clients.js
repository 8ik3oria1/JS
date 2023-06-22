//touchstart - касание элемента
//touchmove - если палец движется вместе с элементом
//touchend - палец оторвался от элемента
//touchenter - палец зашел на предел элемента
//touchleave - палец ушел за пределы элемента
//touchcancel - палец вышел за пределы браузера


window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault(); //отменить стандартное поведение браузера
    
        console.log('start');
        console.log(e.touches);
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault(); //отменить стандартное поведение браузера
    
        console.log('move');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault(); //отменить стандартное поведение браузера
    
        console.log('end');
    });
});

//3 свойства при работе с устройствами

//touches - список всех пальцев что взаимодействуют с экраном
//targetTouches - список пальцев взаимодействующих именно с этим элементом
//changedTouches - список пальцев участвующих в событии
