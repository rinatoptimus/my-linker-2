$('.bootstrap-switch-success').click(function(){
    $('.change-label').toggleClass('affirmative negative');
});

$('.bootstrap-switch-danger').click(function(){
    $('.change-label').toggleClass('negative affirmative');
});