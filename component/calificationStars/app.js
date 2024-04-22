$(document).ready(function() {
    var selectedRatings = {};
    var namesList = ['rating', 'rating2'];//Name en _inputs y botones submit_ de cada container

    namesList.forEach(element => {
        selectedRatings[element] = null;

        $("input[name='" + element + "']").change(function() {
            var elementName = $(this).attr('name');
            selectedRatings[elementName] = $(this).val();
            $(this).siblings("label").removeClass("selected");
            $(this).prevAll("input[name='" + elementName + "']").next("label").addClass("selected");
            $(this).nextAll("input[name='" + elementName + "']").next("label").removeClass("selected");
        });

    });

    /* Botones submit, deben tener el mismo nombre de los inputs */
    $("#submitBtn").click(function() {
        alert("Calification: " + selectedRatings[$(this).attr('name')]);
    });

    $("#submitBtn2").click(function() {
        alert("Calification: " + selectedRatings[$(this).attr('name')]);
    });
});

