$(document).ready(function() {
    $(".card").on({
        mouseenter: function() {
            $(this).css("background-color", "#d5ffd5");
        },
        mouseleave: function() {
            $(this).css("background-color", "#fff3f3");
        }

    });


    $('#showQR').click(function() {
        $('#qrImage').show();
        $('#hideQR').show();
    });

    $('#hideQR').click(function() {
        $('#qrImage').hide();
        $("#hideQR").hide();
    });
});