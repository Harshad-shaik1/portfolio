/* MENU TOGGLE */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');  
    navbar.classList.toggle('active');      
};


/* ACTIVE NAVIGATION ON SCROLL*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            document
                .querySelector('header nav a[href*=' + id + ']')
                .classList.add('active');
        }
    });

    /* Sticky Header */
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Close mobile menu when scrolling */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


/*TYPING ANIMATION*/
var typed = new Typed(".typing-text", {
    strings: ["Software Developer", "UI/UX Designer", "Frontend Developer"],
    typeSpeed: 90,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});


/* SCROLLREVEAL ANIMATIONS*/
ScrollReveal({
    reset: false,
    distance: "65px",
    duration: 1500,
    delay: 200
});

/* Home */
ScrollReveal().reveal('.home-content h3', { origin: 'top' });
ScrollReveal().reveal('.home-content h1', { origin: 'left', delay: 200 });
ScrollReveal().reveal('.home-content p', { origin: 'bottom', delay: 300 });
ScrollReveal().reveal('.social-icons, .btn', { origin: 'bottom', delay: 350, interval: 150 });

/* About */
ScrollReveal().reveal('.about .heading', { origin: 'top' });
ScrollReveal().reveal('.about-content h3', { origin: 'left' });
ScrollReveal().reveal('.about-content p', { origin: 'bottom', interval: 150 });

/* Services */
ScrollReveal().reveal('.services .heading', { origin: 'top' });
ScrollReveal().reveal('.services-box', { 
    origin: 'bottom',
    distance: '80px',
    interval: 120
});

/* Portfolio */
ScrollReveal().reveal('.portfolio .heading', { origin: 'top' });
ScrollReveal().reveal('.portfolio-box', { 
    origin: 'bottom',
    distance: '80px',
    interval: 150,
    scale: 0.9
});

/* Contact */
ScrollReveal().reveal('.contact .heading', { origin: 'top' });
ScrollReveal().reveal('.contact-form', { origin: 'bottom', delay: 200 });
