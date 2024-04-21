/**
 * Saves the value from 1-5 according to the selected star (no need to use the button)
 * Also modifies the classes according to the selected star number
 */
$(document).ready(function() {
    var selectedRating = null;

    $("input[name='rating']").change(function() {
        selectedRating = $(this).val();
        $("label").removeClass("selected");
        $(this).prevAll("input[name='rating']").next("label").addClass("selected");
        $(this).nextAll("input[name='rating']").next("label").removeClass("selected");
    });

    $("#submitBtn").click(function() {
        alert("Calification: " + selectedRating);
    });
});
