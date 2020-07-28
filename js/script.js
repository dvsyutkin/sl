window.addEventListener('DOMContentLoaded', function () {

    // слайдер компаний
    const sliderTops = $('.tops__wrap .owl-carousel');
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



});