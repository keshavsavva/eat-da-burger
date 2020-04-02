$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        var newDevourState = {
            devoured: 1
        };

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log(`changed devour state to ${newDevourState}`);
                location.reload();
            }
        )
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        var newBurger = {
            name: $("#burgerInput").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log(`Created new Burger!`);
                location.reload();
            }
        );
    });
});