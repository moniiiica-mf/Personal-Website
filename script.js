// No need for main nav click handling - now uses page links

// Handle sub-navigation links
document.querySelectorAll('.sub-nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);

        // Update active state in sub-nav
        document.querySelectorAll('.sub-nav-link').forEach(l => {
            l.classList.remove('active');
        });
        this.classList.add('active');

        // Show/hide project categories
        document.querySelectorAll('.project-category').forEach(category => {
            category.classList.remove('active');
        });
        const targetCategory = document.getElementById(targetId);
        if (targetCategory) {
            targetCategory.classList.add('active');
        }
    });
});

// Sub-nav is always visible on the projects page (index.html)

// Optional: Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Show sub-nav on projects page (index.html)
    const subNav = document.querySelector('.sub-nav');
    if (subNav) {
        subNav.classList.add('show');
    }

    // Observe project cards for animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
