'use strict';

const box = document.querySelector('.box');

//создать сущность которая будет следить за элементом

let observer = new MutationObserver(mutationRecords => {
    console.log(mutationRecords);
});

//просим эту сущность следить за указанным выше элементом

observer.observe(box, {
    childList: true
});

//если нам больше не нужно отслеживать

observer.disconnect();