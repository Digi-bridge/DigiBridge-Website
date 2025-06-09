document.addEventListener('DOMContentLoaded', function() {

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Active link highlighting on click
                document.querySelectorAll('header nav ul li a').forEach(link => link.classList.remove('active'));
                this.classList.add('active');

                // Close mobile menu if open and a link is clicked
                if (mainNav && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    if (menuToggle) {
                        menuToggle.classList.remove('open');
                    }
                }
            }
        });
    });





    // Mobile Menu Toggle


    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('header nav ul'); // <ul> for toggling 'active'

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('open'); // optional: for icon animation
        });

        // Close mobile menu when a nav link is clicked (good UX)
        navMenu.querySelectorAll('li a').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('open');
                }
            });
        });
    }



    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Contact Form Submission (Basic - logs to console)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const service = document.getElementById('service').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name && email && message) {
                console.log('Form Submitted:');
                console.log('Name:', name);
                console.log('Email:', email);
                console.log('Service:', service || 'Not specified'); // Handle empty service
                console.log('Message:', message);
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            } else {
                // More specific error
                let errorMessage = "Please fill in all required fields:\n";
                if (!name) errorMessage += "- Name\n";
                if (!email) errorMessage += "- Email\n";
                if (!message) errorMessage += "- Message\n";
                alert(errorMessage);
            }
        });
    }

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section[id]'); // Ensure sections have IDs
    const navLinks = document.querySelectorAll('header nav ul li a');

    if (sections.length > 0 && navLinks.length > 0) {
        window.onscroll = () => {
            let current = ''; 
            const headerOffset = 80; // Adjust based on your fixed header height

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - headerOffset) { // Adjusted offset for better accuracy
                    current = section.getAttribute('id');
                }
            });

             // If scrolled to the very top, default to hero/home
            if (pageYOffset < sections[0].offsetTop - headerOffset) {
                current = sections[0].getAttribute('id'); // Or explicitly 'hero'
                 if (sections[0].getAttribute('id') === 'hero') { // Default to home if first section is hero
                    current = 'hero';
                }
            }


            navLinks.forEach(link => {
                link.classList.remove('active');
                // Check if the link's href matches the current section's ID
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        };
    }


  const hoverElement = document.getElementById('hoverElement');
  const hoverMessage = document.getElementById('hoverMessage');

  // Function to show the message
  function showMessage(messageElement) {
    messageElement.style.visibility = 'visible';
    messageElement.style.opacity = '1';
  }

  // Function to hide the message
  function hideMessage(messageElement) {
    messageElement.style.visibility = 'hidden';
    messageElement.style.opacity = '0';
  }

  // Event listeners for the first element
  hoverElement.addEventListener('mouseenter', () => {
    showMessage(hoverMessage);
  });
  hoverElement.addEventListener('mouseleave', () => {
    hideMessage(hoverMessage);
  });


});