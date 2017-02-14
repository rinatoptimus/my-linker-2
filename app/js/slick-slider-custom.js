$(".slider").not('.slick-initialized').slick()
$(document).ready(function(){
    $('.responsive').slick({
        dots: false,
        arrows: true,
        autoplay: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [



            {
                breakpoint: 1101,
                settings: {
                    slidesToShow: 2,
                    dots: true
                }
            },





            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                // breakpoint: 600,
                breakpoint: 710,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});