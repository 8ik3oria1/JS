function tabs(tabsSelector, tabsContentSelector, tabsParenSelector, activeClass) {
    //tabs!
    //сущности на которые будут навешиваться скрипты
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParenSelector);

    //скрыть все нужные нам табы
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
//удаляем активный признак
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }


    //функция для показа табы

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }


    hideTabContent();
    showTabContent();


    //делегирование событий и назначение обработчика клика
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;//если нужно много и часто прописывать event.target

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;