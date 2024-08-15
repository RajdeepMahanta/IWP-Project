document.addEventListener('DOMContentLoaded', function() {
    // Get all the navbar items
    const navbarItems = document.querySelectorAll('.navbar a');

    // Function to remove 'active' class from all navbar items
    function removeActiveClass() {
        navbarItems.forEach(nav => nav.classList.remove('active'));
    }

    // Add click event listeners to each navbar item
    navbarItems.forEach(item => {
        item.addEventListener('click', function(event) {
            // Remove 'active' class from all navbar items
            removeActiveClass();

            // Add 'active' class to the clicked item
            event.currentTarget.classList.add('active');
        });
    });

    // Optional: Highlight the current page based on URL
    const currentPage = window.location.pathname.split('/').pop();
    navbarItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
    });
});
