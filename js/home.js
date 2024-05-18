document.addEventListener("DOMContentLoaded", function() {
    // Get the breaking news link
    var breakingNewsLink = document.querySelector("#breakingNews a");

    // Add a click event listener to the breaking news link
    breakingNewsLink.addEventListener("click", function(event) {
        // Prevent the default action of the link (e.g., navigating to a new page)
        event.preventDefault();

        // Display an alert message
        alert("You clicked on the breaking news link!");
    });
});