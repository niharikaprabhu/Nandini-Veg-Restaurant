
function showMenu(categoryId, clickedButton) {
    // Hide all menu categories
    document.querySelectorAll(".menu-category").forEach(category => {
        category.classList.remove("active");
    });

    // Remove active style from all menu buttons
    document.querySelectorAll(".menu-tab").forEach(button => {
        button.classList.remove("active");
    });

    // Find and show the selected category
    const selectedCategory = document.getElementById(categoryId);

    if (selectedCategory) {
        selectedCategory.classList.add("active");
    }

    // Highlight the clicked button
    if (clickedButton) {
        clickedButton.classList.add("active");
    }
}

// Show the Tiffins category when the page loads
document.addEventListener("DOMContentLoaded", function () {
    const firstCategory = document.getElementById("tiffins");
    const firstButton = document.querySelector(".menu-tab");

    if (firstCategory) {
        document.querySelectorAll(".menu-category").forEach(category => {
            category.classList.remove("active");
        });

        firstCategory.classList.add("active");
    }

    if (firstButton) {
        document.querySelectorAll(".menu-tab").forEach(button => {
            button.classList.remove("active");
        });

        firstButton.classList.add("active");
    }
});
