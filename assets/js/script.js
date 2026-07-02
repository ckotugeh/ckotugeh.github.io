/*=========================================
        MOBILE MENU
==========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/*=========================================
        CLOSE MENU WHEN LINK IS CLICKED
==========================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/*=========================================
        TYPING EFFECT
==========================================*/

if (typeof Typed !== "undefined") {

    new Typed("#typing", {

        strings: [

            "Penetration Tester",

            "Security Analyst",

            "Application Developer",

            "Cloud Security Enthusiast",

            "Data Analyst"

        ],

        typeSpeed: 70,

        backSpeed: 40,

        backDelay: 1800,

        loop: true

    });

}

/*=========================================
        PARTICLES
==========================================*/

if (typeof particlesJS !== "undefined") {

    particlesJS("particles-js", {

        particles: {

            number: {

                value: 70,

                density: {

                    enable: true,

                    value_area: 900

                }

            },

            color: {

                value: "#00ff88"

            },

            shape: {

                type: "circle"

            },

            opacity: {

                value: 0.45

            },

            size: {

                value: 3

            },

            line_linked: {

                enable: true,

                distance: 150,

                color: "#00ff88",

                opacity: 0.25,

                width: 1

            },

            move: {

                enable: true,

                speed: 2

            }

        },

        interactivity: {

            events: {

                onhover: {

                    enable: true,

                    mode: "grab"

                }

            }

        }

    });

}

/*=========================================
        STICKY NAVBAR
==========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.padding = "15px 8%";

        navbar.style.background = "#050816";

    } else {

        navbar.style.padding = "20px 8%";

        navbar.style.background = "rgba(5,8,22,.85)";

    }

});

/*=========================================
        ACTIVE NAVIGATION
==========================================*/

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*=========================================
        FADE-UP ANIMATION
==========================================*/

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(

    ".project-card,.skill-card,.cert-card,.lab-card,.contact-card,.writeup-card,.timeline-item,.stat-card"

).forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});

/*=========================================
        SCROLL TO TOP BUTTON
==========================================*/

const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

topButton.className = "top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.opacity = "1";

        topButton.style.visibility = "visible";

    } else {

        topButton.style.opacity = "0";

        topButton.style.visibility = "hidden";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================
        COPYRIGHT YEAR
==========================================*/

const year = new Date().getFullYear();

const footer = document.querySelector(".copyright");

if (footer) {

    footer.innerHTML =

        `© ${year} Charles Otugeh. All Rights Reserved.`;

}

/*=========================================
        PAGE LOADER
==========================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

console.log("%cPortfolio Loaded Successfully",
"color:#00ff88;font-size:16px;font-weight:bold;");