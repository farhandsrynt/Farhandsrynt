const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


/* ===============================
   MOBILE MENU
================================ */

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


const navLinks =
    document.querySelectorAll("nav a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* ===============================
   SCROLL REVEAL
================================ */

const revealElements =
    document.querySelectorAll(
        ".portfolio-card, .reflection-card, .profile-grid"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* ===============================
   IMAGE LIGHTBOX
================================ */

const galleryImages =
    document.querySelectorAll(
        ".photo-gallery img"
    );


galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        const overlay =
            document.createElement("div");

        overlay.className =
            "image-lightbox";

        overlay.innerHTML = `

            <div class="lightbox-close">
                ×
            </div>

            <img
                src="${image.src}"
                alt="${image.alt}">

        `;

        document.body.appendChild(
            overlay
        );


        overlay.addEventListener(
            "click",
            () => {

                overlay.remove();

            }
        );

    });

});


/* ===============================
   CONSOLE
================================ */

console.log(
    "E-Portfolio Farhan Desri Yanto berhasil dimuat."
);