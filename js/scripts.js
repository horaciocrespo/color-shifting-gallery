// on document ready
$(function() {
    // mouse events
    $('.gallery-item').mouseenter(function(event) {
        $(this).children('.main-overlay').animate({
            left: "0",
        }, 500, function() {
            $(this).siblings('.secondary-overlay').animate({
                left: "65%"
            }, 500);
        });
    }).mouseleave(function(event) {
        $(this).children('.main-overlay').animate({
            left: "-65%",
        }, 500, function() {
            $(this).siblings('.secondary-overlay').animate({
                left: "100%"
            }, 500);
        });
    });
})