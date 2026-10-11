$(document).ready(function() {

$("#nameshow").click(function() {
    let name=$("#student-name").text();
   // console.log(name);
    $("#output").text(name);
});

$("#change-name").click(function() {
    $("#student-name").text("Changed to Saugat Parajuli ");
});

$("#show-bio").click(function() {
    let bio=$("#bio").text();
   // console.log(bio);
    $("#output").text(bio);
});

$("#get-input").click(function() {
    let input=$("#nickname-input").val();
    console.log(input);
    $("#output").text(input);
});

$("#change-nickname").click(function() {
    $("#nickname-input").val("jQuery Pro");
});

$("#highlight-card").click(function() {
    $("#profile-card").addClass("highlighted");
    $(".highlighted").css("background-color", "green");
});

$("#remove-highlight").click(function() {
    $("#profile-card").removeClass("highlighted").css("background-color", "");
});

$("#dark-mode").click(function() {
    $("#profile-card").toggleClass("dark-mode");
});

$("#toggle-round").click(function() {
    $("#profile-photo").toggleClass("rounded");
});

$("#profile-photo").mouseenter(function() {
    $(this).addClass("shadow");
});

$("#profile-photo").mouseleave(function() {
    $(this).removeClass("shadow");
});

$("#nickname-input").keydown(function(event) {
    $("#output").text(event.key);
});

$("#red").click(function() {
    $("#profile-card").css("background-color", "red");
});

$("#reset").click(function() {
    $("#profile-card").css("background-color", "");
});

$("#hide-photo").click(function() {
    $("#profile-photo").hide("slow");
});

$("#show-photo").click(function() {
    $("#profile-photo").show("slow");
});

$("#toggle-bio").click(function() {
    $("#bio").toggle();
});

$("#fade-out").click(function() {
    $("#profile-card").fadeOut();
});

$("#fade-in").click(function() {
    $("#profile-card").fadeIn();
});

$("#fade-50").click(function() {
    $("#profile-card").fadeTo(500, 0.5);
});

$("#slide-up-skills").click(function() {
    $("#skills-list").slideUp();
});

$("#slide-down-skills").click(function() {
    $("#skills-list").slideDown();
});

$("#slide-toggle-skills").click(function() {
    $("#skills-list").slideToggle();
});

$("#animate-card").click(function() {
    $("#profile-card")
        .animate({"margin-left": "200px"}, 1000)
        .animate({"margin-left": "0px"}, 1000);
});
})