/**
 * Created by rinat_y on 1/23/17.
 */
$(".dropdown-menu li a").click(function(){
    var selText = $(this).text();
    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
})

$(function(){
    $(".btn").click(
        function() {
            $('span', this).toggleClass("caret caret-up");
        },
        function() {
            $('span', this).toggleClass("caret caret-up");
        });
});