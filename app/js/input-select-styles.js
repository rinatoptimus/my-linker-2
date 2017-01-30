/**
 * Created by rinat_y on 1/19/17.
 */
$('select').on('change', function(ev) {
    $(this).attr('class', '').addClass($(this).children(':selected').val());
});

// $('select').change(function(){
//     if($(this).val() == '')
//     {
//         $(this).addClass('empty');
//     }
//     else
//     {
//         $(this).removeClass('empty');
//     }
// }).change();