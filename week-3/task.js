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
    $("#profile-card").removeClass("highlighted");
    
});

$("#dark-mode").click(function() {
    $("#profile-card").toggleClass("dark-mode");
    $(".dark-mode").css({
        "background-color": "#333",
        "color": "#fff"
    });
});

$("#toggle-round").click(function() {
    $("#profile-card").toggleClass("rounded");
});

})