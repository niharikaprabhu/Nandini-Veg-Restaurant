
function showMenu(categoryId, clickedButton) {

    // Get all menu categories
    const categories = document.querySelectorAll(".menu-category");

    // Hide every category
    categories.forEach(category => {
        category.classList.remove("active");
    });

    // Show the selected category
    document.getElementById(categoryId).classList.add("active");


    // Get all menu tab buttons
    const buttons = document.querySelectorAll(".menu-tab");

    // Remove active style from every button
    buttons.forEach(button => {
        button.classList.remove("active");
    });

    // Highlight the clicked button
    clickedButton.classList.add("active");
}
console.log("Menu script is working!");