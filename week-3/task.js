$(document).ready(function() {

$("#nameshow").click(function() {
    let name=$("#student-name").text();
    console.log(name);
    $("#output").text(name);
})

$("#change-name").click(function() {
    $("#student-name").text("Changed to Saugat Parajuli ");
})

$("#show-bio").click(function() {
    let bio=$("#bio").text();
    console.log(bio);
    $("#output").text(bio);
})

})