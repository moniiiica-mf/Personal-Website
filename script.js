// Smooth scrolling for main navigation links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        if (target) {
            const offsetTop = target.offsetTop - 130; // Account for fixed nav + sub-nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Update active state
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');

            // Show sub-nav if Projects is clicked
            const subNav = document.querySelector('.sub-nav');
            if (targetId === 'projects') {
                subNav.classList.add('show');
            } else {
                subNav.classList.remove('show');
            }
        }
    });
});

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

// Show/hide sub-nav based on scroll position
window.addEventListener('scroll', () => {
    const projectsSection = document.getElementById('projects');
    const aboutSection = document.getElementById('about');
    const subNav = document.querySelector('.sub-nav');
    const scrollY = window.pageYOffset;

    // Update main nav active state
    if (projectsSection && aboutSection) {
        const projectsTop = projectsSection.offsetTop - 150;
        const aboutTop = aboutSection.offsetTop - 150;

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        if (scrollY >= aboutTop) {
            document.querySelector('.nav-link[href="#about"]')?.classList.add('active');
            subNav.classList.remove('show');
        } else if (scrollY >= projectsTop) {
            document.querySelector('.nav-link[href="#projects"]')?.classList.add('active');
            subNav.classList.add('show');
        }
    }
});

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
    // Show sub-nav by default since Projects section is first
    const subNav = document.querySelector('.sub-nav');
    subNav.classList.add('show');

    // Set Projects nav link as active by default
    document.querySelector('.nav-link[href="#projects"]')?.classList.add('active');

    // Observe project cards for animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
