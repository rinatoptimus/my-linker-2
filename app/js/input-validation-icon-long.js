/**
 * Created by rinat_y on 1/20/17.
 */
$(document).ready(function(){
    function tog(v){return v?'addClass':'removeClass';}
    $(document).on('input', '.clearable-long', function(){
        $(this)[tog(this.value)]('x');
    }).on('mousemove', '.x', function( e ){
        $(this)[tog(this.offsetWidth-18 < e.clientX-this.getBoundingClientRect().left)]('onX');
    });
});