/**
 * Created by rinat_y on 1/23/17.
 */
$("[name='my-checkbox']").bootstrapSwitch();


// my code
// $( ".bootstrap-switch" ).click(function() {
//     $( this ).toggleClass( "highlight" ); console.log('1111');
// });

$( ".bootstrap-switch-handle-on" ).click(function() {
    $( ".bootstrap-switch" ).toggleClass( "highlight" ); console.log('1111');
});

// $( ".bootstrap-switch-handle-on" ).click(function() {
//     $( ".bootstrap-switch-label" ).toggleClass( "highlight2" );
// });

// $( ".bootstrap-switch-handle" ).click(function() {
//     $( ".bootstrap-switch-label" ).toggleClass( "highlight2" );
// });