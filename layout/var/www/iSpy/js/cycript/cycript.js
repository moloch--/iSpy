/* Cycript Modal and hotkey */
$(document).ready(function() {

    /* Lazy load the console */
    $('#cycript-modal').on('show.bs.modal', function() {
        console.log("Loading cycript terminal ...");
        if ($('#cycript-frame').attr("src") === undefined) {
            $('#cycript-frame').attr("src", window.location.origin + "/cycript.html");
        }
    });

    /* Pressed hotkey */
    $(document).keyup(function(e) {
        if (e.keyCode === 192) {
            console.log("[Hotkey] -> Cycript");
            $("#cycript-modal").modal('toggle');
        }
    });

    /* Clicked on Meu */
    $("#cycript-button").click(function() {
        $("#cycript-modal").modal('toggle')
    });

});