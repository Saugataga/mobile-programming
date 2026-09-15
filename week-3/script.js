$(document).ready(function() {
    $(".card").on({
        mouseenter: function() {
            $(this).css("background-color", "#d5ffd5");
        },
        mouseleave: function() {
            $(this).css("background-color", "#fff3f3");
        }

    });


    $('#toggleQR').click(function() {
        $('#qrImage').toggle();
    });
});