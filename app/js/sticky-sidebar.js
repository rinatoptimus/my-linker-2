/**
 * Created by rinat_y on 07.12.16.
 */
$('#sidebar').affix({
    offset: {
        top: 0,
        bottom: 300
    }
});

var $body   = $(document.body);
var navHeight = $('.navbar').outerHeight(true) + 10;

// $body.scrollspy-sidebar({
//     target: '#leftCol',
//     offset: navHeight
// });