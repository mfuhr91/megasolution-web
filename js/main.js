$(document).ready(() => {

    ancho = $(window).width();
    if (ancho >= 1720) {
        $('#slider-marcas').bxSlider({
            minSlides: 6,
            maxSlides: 6,
            moveSlides: 5,
            slideWidth: 800,
            auto: true,
            controls: false,
            infiniteLoop: true
        });
    } if (ancho >= 1540 && ancho < 1720) {
        $('#slider-marcas').bxSlider({

            minSlides: 4,
            maxSlides: 4,
            moveSlides: 3,
            slideWidth: 800,
            auto: true,
            controls: false,
            infiniteLoop: true
        });
    } if (ancho >= 1150 && ancho < 1540) {
        $('#slider-marcas').bxSlider({

            minSlides: 3,
            maxSlides: 3,
            moveSlides: 3,
            slideWidth: 800,
            auto: true,
            controls: false,
            infiniteLoop: true
        });
    } if (ancho >= 950 && ancho < 1150) {
        $('#slider-marcas').bxSlider({

            minSlides: 2,
            maxSlides: 2,
            moveSlides: 2,
            slideWidth: 500,
            auto: true,
            controls: false,
            infiniteLoop: true
        });
    } if (ancho < 950) {
        $('#slider-marcas').bxSlider({

            minSlides: 1,
            pager: false,
            auto: true,
            controls: false,
            infiniteLoop: true
        });
    }

    $('#slider-conectividad, #slider-sonido, #slider-almacenamiento').bxSlider({

        slideWidth: 800,
        auto: true,
        controls: false,
        infiniteLoop: true

    });
    $('#cabecera').fadeIn();
    
    $('#inicio').click(function () {
        if($(window).scrollTop() > 327){
            subir();
        }
    });
    $('#up-button').click(function () {
        if($(window).scrollTop() > 327){
            subir();
        }
    });

    $('#linkContacto').click(function () {
        scrollContacto();
    });

    $('#linkSomos').click(function () {
        scrollSomos();
    });

    posicionarMenu();
   
});

$(window).scroll(function () {
    posicionarMenu();

});

function posicionarMenu() {
    var alturaImg = $('img').outerHeight(true);
    var alturaMenu = $('#menu').outerHeight(true);

    if ($(window).scrollTop() >= alturaImg && screen.width > 530) {
        $('#menu').addClass('fixed');

        
        
    } else {
        $('#menu').removeClass('fixed');
        $('#contenido').css('margin-top', '0');
        if ($(window).width() < 1060) { 
            
            
        }
        
    }
}

   
function subir() {

    $('html, body').animate({
        scrollTop: 0
    }, 1500);

}

function scrollContacto() {
    var alturaMenu = $('#menu').outerHeight(true);
    $('html, body').animate({
        scrollTop: $("#contacto").offset().top - alturaMenu
    }, 1500);

}
function scrollSomos() {
    var alturaMenu = $('#menu').outerHeight(true);
    $('html, body').animate({
        scrollTop: $("#quienes-somos").offset().top - alturaMenu
    }, 1500);

}

// IG FEED

$(document).ready(()=>{
    $.instagramFeed({
            'username': 'megasolutionush',
            'container': "#instagram-feed-demo",
            'display_profile':false,
            'display_biography':false,
            'display_igtv':false,
            'display_gallery':true,
            'styling': false,
            'items': 12


    });
        
});
