// Handle sub-navigation links
document.querySelectorAll('.sub-nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetCategory = this.getAttribute('data-category');

        // Update active state in sub-nav
        document.querySelectorAll('.sub-nav-link').forEach(l => {
            l.classList.remove('active');
        });
        this.classList.add('active');

        // Show/hide project categories
        document.querySelectorAll('.project-category').forEach(category => {
            category.classList.remove('active');
        });

        const targetElement = document.getElementById(targetCategory);
        if (targetElement) {
            targetElement.classList.add('active');
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set first category as active by default
    const firstCategory = document.querySelector('.project-category');
    if (firstCategory) {
        firstCategory.classList.add('active');
    }

    // Set first sub-nav link as active
    const firstSubNavLink = document.querySelector('.sub-nav-link');
    if (firstSubNavLink) {
        firstSubNavLink.classList.add('active');
    }
});
