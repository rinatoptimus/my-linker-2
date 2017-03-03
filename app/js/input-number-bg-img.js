(function($, undefined){
    $("#input-birth-day").focus(function() {
        var input = $(this);

        if( input.val() == "" ) {
            input.css( {
                "text-indent": "0",
                "background-image": "none",
                "background-position": "50% 50%",
                "background-repeat": "no-repeat"
            });
        }
    });
    $("#input-birth-day").blur(function() {
        var input = $(this);

        if( input.val() == "" ) {
            input.css( {
                "text-indent": "-9999px",
                "background-image": "url('app/img/bg-input-day.png')",
                "background-position": "50% 50%",
                "background-repeat": "no-repeat"
            } );
        }
    });


    $("#input-birth-month").focus(function() {
        var input = $(this);

        if( input.val() == "" ) {
            input.css( {
                "text-indent": "0",
                "background-image": "none",
                "background-position": "50% 50%",
                "background-repeat": "no-repeat"
            });
        }
    });
    $("#input-birth-month").blur(function() {
        var input = $(this);

        if( input.val() == "" ) {
            input.css( {
                "text-indent": "-9999px",
                "background-image": "url('app/img/bg-input-month.png')",
                "background-position": "50% 50%",
                "background-repeat": "no-repeat"
            } );
        }
    });


    $("#input-birth-year").focus(function() {
        var input = $(this);

        if( input.val() == "" ) {
            input.css( {
                "text-indent": "0",
                "background-image": "none",
                "background-position": "50% 50%",
                "background-repeat": "no-repeat"
            });
        }
    });
    $("#input-birth-year").blur(function() {
        var input = $(this);

        if( input.val() == "" ) {
            input.css( {
                "text-indent": "-9999px",
                "background-image": "url('app/img/bg-input-year.png')",
                "background-position": "50% 50%",
                "background-repeat": "no-repeat"
            } );
        }
    });
})(jQuery);