$(document).ready(function () {

    window.addEventListener('load', AOS.refresh)
    AOS.init();

    $('.destination-card').slick({
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3,
        prevArrow: '.prev-btn',
        nextArrow: '.next-btn',
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1132,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 580,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 320,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '5px',
                    slidesToShow: 1
                }
            }
        ]
    });


})