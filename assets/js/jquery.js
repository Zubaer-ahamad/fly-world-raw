$(document).ready(function(){

    window.addEventListener('load', AOS.refresh)
    AOS.init();

    $('.destination-card').slick({
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 3,
        prevArrow: '.prev-btn',
        nextArrow: '.next-btn',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '25px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1
                }
            }
        ]
    });




})