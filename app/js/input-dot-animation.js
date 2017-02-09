$(function() {
    $(".js-testimonial-input").on("click", function(e) {
        $(".green-dot-name").addClass("green-dot-hidden");
        e.stopPropagation()
    });
    $(document).on("click", function(e) {
        if ($(e.target).is("input") === false) {
            $(".green-dot-name").removeClass("green-dot-hidden");
        }
    });


    $(".input-phone").on("click", function(e) {
        $(".green-dot-phone").addClass("green-dot-hidden");
        e.stopPropagation()
    });
    $(document).on("click", function(e) {
        if ($(e.target).is("input") === false) {
            $(".green-dot-phone").removeClass("green-dot-hidden");
        }
    });

    $("textarea").on("click", function(e) {
        $(".green-dot-testimonial").addClass("green-dot-hidden");
        e.stopPropagation()
    });
    $(document).on("click", function(e) {
        if ($(e.target).is("textarea") === false) {
            $(".green-dot-testimonial").removeClass("green-dot-hidden");
        }
    });
});