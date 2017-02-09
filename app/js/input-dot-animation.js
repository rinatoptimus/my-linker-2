$(function() {
    $("input").on("click", function(e) {
        $(".green-dot").addClass("green-dot-hidden");
        e.stopPropagation()
    });
    $(document).on("click", function(e) {
        if ($(e.target).is("input") === false) {
            $(".green-dot").removeClass("green-dot-hidden");
        }
    });


    $("input").on("click", function(e) {
        $(".green-dot-phone").addClass("green-dot-hidden");
        e.stopPropagation()
    });
    $(document).on("click", function(e) {
        if ($(e.target).is("input") === false) {
            $(".green-dot-phone").removeClass("green-dot-hidden");
        }
    });
});