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
        margin: 50,
        loop: true,
        center:true,
        responsive: {
            0: {
                items: 1,
            },
            720: {
                items: 3
            },
            960: {
                items: 3.3
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
        margin: 50,
        loop: true,
        center:true,
        responsive: {
            0: {
                items: 1,
            },
            720: {
                items: 3
            },
            960: {
                items: 3.3
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
        margin: 50,
        loop: true,
        center:true,
        responsive: {
            0: {
                items: 1,
            },
            720: {
                items: 3
            },
            960: {
                items: 3.3
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



});