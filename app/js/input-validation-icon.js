/**
 * Created by rinat_y on 1/19/17.
 */
// $(document).ready(function(){
//     function tog(v){return v?'addClass':'removeClass';}
//     $(document).on('input', '.clearable', function(){
//         $(this)[tog(this.value)]('x');
//     }).on('mousemove', '.x', function( e ){
//         $(this)[tog(this.offsetWidth-18 < e.clientX-this.getBoundingClientRect().left)]('onX');
//     });
// });




$(document).ready(function(){
    function tog(v){return v?'addClass':'removeClass';}
    $(document).on('input', '.clearable', function(){
        $(this)[tog(this.value)]('x');
    }).on('mousemove', '.x', function( e ){
        $(this)[tog(this.offsetWidth-18 < e.clientX-this.getBoundingClientRect().left)]('onX');
    });

    // $(function() {
    //     $("input").on("click", function(e) {
    //         $(".green-dot").addClass("green-dot-hidden");
    //         e.stopPropagation()
    //     });
    //     $(document).on("click", function(e) {
    //         if ($(e.target).is("input") === false) {
    //             $(".green-dot").removeClass("green-dot-hidden");
    //         }
    //     });
    // });

});