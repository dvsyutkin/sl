window.addEventListener('DOMContentLoaded', function () {

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

    



});