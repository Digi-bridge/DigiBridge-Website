document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling and Active Link Highlighting
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
                document.querySelectorAll('header nav ul li a').forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu');
    const mainNav = document.getElementById('main-nav');
    if (mobileMenuButton && mainNav) {
        mobileMenuButton.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            mobileMenuButton.classList.toggle('is-active');
            mobileMenuButton.setAttribute('aria-expanded', mainNav.classList.contains('active'));
        });
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                mobileMenuButton.classList.remove('is-active');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            });
        });
        document.addEventListener('click', function(event) {
            if (!mobileMenuButton.contains(event.target) && !mainNav.contains(event.target)) {
                mainNav.classList.remove('active');
                mobileMenuButton.classList.remove('is-active');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            }
        });
    }

        // Pricing Modal
    document.querySelectorAll('.pricing-card h3[data-modal]').forEach(h3 => {
        h3.style.cursor = 'pointer';
        h3.addEventListener('click', function() {
            const modalId = h3.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) modal.style.display = 'flex';
        });
    });
    document.querySelectorAll('.modal .close').forEach(btn => {
        btn.addEventListener('click', function() {
            btn.closest('.modal').style.display = 'none';
        });
    });
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Auth modal elements
    const loginModal = document.getElementById('auth-login-modal');
    const signupModal = document.getElementById('auth-signup-modal');
    const openLogin = document.getElementById('open-login');
    const openSignup = document.getElementById('open-signup');
    const closeLogin = document.getElementById('auth-close-login');
    const closeSignup = document.getElementById('auth-close-signup');
    const switchToSignup = document.getElementById('auth-switch-to-signup');
    const switchToLogin = document.getElementById('auth-switch-to-login');

    // Open Login Modal
    if (openLogin) openLogin.onclick = function(e) {
        e.preventDefault();
        loginModal.style.display = 'flex';
    };
    // Open Signup Modal
    if (openSignup) openSignup.onclick = function(e) {
        e.preventDefault();
        signupModal.style.display = 'flex';
    };
    // Close Login Modal
    if (closeLogin) closeLogin.onclick = function() {
        loginModal.style.display = 'none';
    };
    // Close Signup Modal
    if (closeSignup) closeSignup.onclick = function() {
        signupModal.style.display = 'none';
    };
    // Switch to Signup
    if (switchToSignup) switchToSignup.onclick = function(e) {
        e.preventDefault();
        loginModal.style.display = 'none';
        signupModal.style.display = 'flex';
    };
    // Switch to Login
    if (switchToLogin) switchToLogin.onclick = function(e) {
        e.preventDefault();
        signupModal.style.display = 'none';
        loginModal.style.display = 'flex';
    };
    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target === loginModal) loginModal.style.display = 'none';
        if (event.target === signupModal) signupModal.style.display = 'none';
    };
});