/**
 * Created by rinat_y on 1/23/17.
 */
$("[name='my-checkbox']").bootstrapSwitch();


// my code
$( ".bootstrap-switch" ).click(function() {
    $( this ).toggleClass( "highlight" ); console.log('1111');
});