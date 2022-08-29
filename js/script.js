// Функция ymaps.ready() будет вызвана, когда
        // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
        ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
            center: [59.925957, 30.395550],
            zoom: 12
        });
        myMap.geoObjects
        .add(new ymaps.Placemark([59.938757, 30.471690], {
            balloonContent: 'Запись по договоренности',
            iconCaption: 'Бассейн WorkClass'
        }, {
            preset: 'islands#greenDotIconWithCaption'
        }))
        .add(new ymaps.Placemark([59.925574, 30.321545], {
            balloonContent: 'Запись по договоренности',
            iconCaption: 'Бассейн "На Гороховой"'
        }, {
            preset: 'islands#greenDotIconWithCaption'
        }))


    }
    //59.925574, 30.321545

new Glide(".images",{
    type: 'slider',
    perView: 2,
    focusAt: 'center',
    gap: 0,
    startAt: 1,
    breakpoints: {
        1279.98:{
            perView: 2
        },
        993:{
            perView: 1
        }
    }
}).mount();

(function (){
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        }else {
            header.classList.remove('header_active');
        }
    };
}());





(function() {
    const burgerItem  = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem  = document.querySelector('.header__nav-close');
    const menuClose = document.querySelector('.header__list');

    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__menu_active')
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__menu_active')
    });
    menuClose.addEventListener('click', () => {
        menu.classList.remove('header__menu_active')
    });
}())


const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        target.classList.add('active')
        tab.classList.add('active')
    })
})


(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());


