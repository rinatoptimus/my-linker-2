$(document).ready(function(){
    $('.collapsed').click(function(){
        $(this).find($('.fa')).toggleClass('down');
    })


    $('.btn').click(function(){
        $(this).find($('.fa-long-arrow-down')).toggleClass('show');
        $(this).find($('.fa-long-arrow-up')).toggleClass('hide');
    })

});