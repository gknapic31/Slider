$(document).ready(function(){
    $('.arrowR').on('click', function(){
        var currentImg = $('.active');
        var nextImg = currentImg.arrowR();

        if(nextImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').class('z-index', 10);
        }
    });

    $('.arrowL').on('click', function(){
        var currentImg = $('.active');
        var prevImg = currentImg.arrowL();

        if(nextImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').class('z-index', 10);
        }
    });
});