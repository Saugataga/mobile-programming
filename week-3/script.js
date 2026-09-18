$(document).ready(function() {
    $(".card").on({
        mouseenter: function() {
            $(this).css({
                "background-color": "#e8f9eb",
            });
        },
        mouseleave: function() {
            $(this).css({
                "background-color": "#fff",
            });
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