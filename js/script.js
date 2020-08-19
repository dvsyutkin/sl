window.addEventListener('DOMContentLoaded', function () {

    // слайдер hero
    const   sliderHero = $('.hero .owl-carousel'),
            heroPrev = document.querySelector('.hero__prev'),
            heroNext = document.querySelector('.hero__next');
    sliderHero.owlCarousel($.extend({}, {
        dots: false,
        margin: 10,
        items: 1
    }));
    heroNext.addEventListener('click', function () {
        sliderHero.trigger('next.owl.carousel');
    });
    heroPrev.addEventListener('click', function () {
        sliderHero.trigger('prev.owl.carousel');
    });

    sliderHero.on('initialized.owl.carousel changed.owl.carousel', function(event) {

        var $menuCounterThis = $('.counter'), // Контейнер вывода текущего слайда
            $menuCounterTotal = $('.counter__total'), // Контейнер вывода общего количества слайдов
            menuCloned = $( this ).find( '.cloned' ).length, // Количество клонированных элементов
            menuIndex = event.item.index, // Номер текущего слайда
            curentSlider,
            menuCount = event.item.count; // Общее количество слайдов (без клонированных)
      
        if ( menuIndex > menuCount ) {
            curentSlider = menuIndex - menuCloned + ( menuCloned - menuCount );
        } else {
            curentSlider = menuIndex;
        }
        curentSlider = curentSlider +1;
        $menuCounterThis.text('0' + curentSlider);
        $menuCounterTotal.text('0' + menuCount );
      
      });

    // слайдер ТОП - предложения
    const   sliderTops = $('.tops__wrap .owl-carousel'),
            topsPrev = document.querySelector('.tops .section__arrow_prev'),
            topsNext = document.querySelector('.tops .section__arrow_next');
    sliderTops.owlCarousel($.extend({}, {
        dots: true,
        loop: true,
        center:true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                center: true,
                margin: 0
            },
            600: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3,
                center:true,
                margin: 10
            },
            1440: {
                items: 4.5
            }
        }

    }));
    topsNext.addEventListener('click', function () {
        sliderTops.trigger('next.owl.carousel');
    });
    topsPrev.addEventListener('click', function () {
        sliderTops.trigger('prev.owl.carousel');
    });

    // слайдер Акции
    const   sliderStock = $('.stock__wrap .owl-carousel'),
            stockPrev = document.querySelector('.stock .section__arrow_prev'),
            stockNext = document.querySelector('.stock .section__arrow_next');
    sliderStock.owlCarousel($.extend({}, {
        dots: true,
        loop: true,
        center:true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                center: true,
                margin: 0
            },
            600: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3,
                center:true,
                margin: 10
            },
            1440: {
                items: 4.5
            }
        }

    }));
    stockNext.addEventListener('click', function () {
        sliderStock.trigger('next.owl.carousel');
    });
    stockPrev.addEventListener('click', function () {
        sliderStock.trigger('prev.owl.carousel');
    });

    // слайдер Тоавры под заказ
    const   sliderOrder = $('.order__wrap .owl-carousel'),
            orderPrev = document.querySelector('.order .section__arrow_prev'),
            orderNext = document.querySelector('.order .section__arrow_next');
    sliderOrder.owlCarousel($.extend({}, {
        dots: true,
        loop: true,
        center:true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                center: true,
                margin: 0
            },
            600: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3,
                center:true,
                margin: 10
            },
            1440: {
                items: 4.5
            }
        }

    }));
    orderNext.addEventListener('click', function () {
        sliderOrder.trigger('next.owl.carousel');
    });
    orderPrev.addEventListener('click', function () {
        sliderOrder.trigger('prev.owl.carousel');
    });

    // input Mask
    const selector = document.querySelector(".input-phone");
    let im = new Inputmask("+7 (999) 999 - 99 - 99");
    im.mask(selector);

    // фоорма поиска моб. версии
    const   searchMmobBtnClose = document.querySelector('.search-mob-btn-close'),
            searchMobBox = document.querySelector('.search-mob__box'),
            btnSearchMob = document.querySelector('.btn__search_m');


    btnSearchMob.addEventListener('click', () =>{
        searchMobBox.style.left = '0';
    });
    searchMmobBtnClose.addEventListener('click', () =>{
        searchMobBox.style.left = '-100%';
    });

    
    // избранные
    const   cardLike = document.querySelectorAll('.card__like '),
            spanLike = document.querySelector('.chosen-count'),
            spanLikeMob = document.querySelector('.menu-mob__chosen-count');

    let count = 0;
    cardLike.forEach(element => {
        element.addEventListener('click', function() {
            if(this.classList.contains('like')) {
                this.classList.remove('like');
                count -= 1;
            } else {
                this.classList.add('like');
                count += 1;
            }
            spanLike.innerHTML = count;
            spanLikeMob.innerHTML = count;
        });
        if(element.classList.contains('like')) {
            count = count + 1;
        }
    });

    spanLike.innerHTML = count;
    spanLikeMob.innerHTML = count;

    // кнопки меню и каталог товаров
    const   catalogBtn = document.querySelector('.mob__catalog-btn-box '),
            menuBtn = document.querySelector('.btn-menu'),
            catalog = document.querySelectorAll('.catalog')[1],
            menuMob = document.querySelector('.menu-mob');
    
    catalogBtn.addEventListener('click', function() {
        if(catalog.classList.contains('catalog__visible')){
            catalog.classList.remove('catalog__visible');
            this.style.background = 'none';
        } else {
            catalog.classList.add('catalog__visible');
            this.style.background = '#F02929';
        }
    });  

    menuBtn.addEventListener('click', function() {
        if(menuMob.classList.contains('menu-mob__visible')){
            menuMob.classList.remove('menu-mob__visible');
            this.style.background = 'none';
        } else {
            menuMob.classList.add('menu-mob__visible');
            this.style.background = '#F02929';
        }
    });
});