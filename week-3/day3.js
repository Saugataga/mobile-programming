$(document).ready(function() {
    $("#start-animation").click(function() {
        let div = $(".box");

        div.animate({ left: $(window).width() - div.width() }, 2000)
            .animate({ top: $(window).height() - div.height() }, 2000)
            .animate({ left: 0 }, 2000)
            .animate({ top: 0 }, 2000);
    });

})