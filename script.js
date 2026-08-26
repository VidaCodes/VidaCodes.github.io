/* =========================================
   VIDA PORTFOLIO
   MENU + DARK MODE
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-label",
            navLinks.classList.contains("active")
                ? "Close navigation menu"
                : "Open navigation menu"
        );
    });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks?.classList.remove("active");
    });
});


/* =========================================
   DARK MODE
========================================= */

const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("vida-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");

    if (themeToggle) {
        themeToggle.textContent = "☀️";
    }
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const darkModeEnabled =
            document.body.classList.contains("dark-mode");

        themeToggle.textContent =
            darkModeEnabled ? "☀️" : "🌙";

        localStorage.setItem(
            "vida-theme",
            darkModeEnabled ? "dark" : "light"
        );
    });
}


/* =========================================
   SCROLL REVEAL
========================================= */

const animatedSections =
    document.querySelectorAll(".section, .contact-section");

if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

    animatedSections.forEach((section) => {
        revealObserver.observe(section);
    });

} else {

    animatedSections.forEach((section) => {
        section.classList.add("visible");
    });

}


/* =========================================
   PROJECT DATA
========================================= */

const projectData = {

    website: {

        kicker:
            "WEB DESIGN • INDEPENDENT PROJECT",

        title:
            "Green Tea Website",

        description:
            "An independently designed and developed website created as a polished web-design project.",

        bullets: [
            "Designed the page structure and visual presentation.",
            "Built the website using HTML and CSS.",
            "Focused on clear navigation, layout, typography and visual consistency.",
            "Created a responsive presentation suitable for desktop and smaller screens."
        ],

        tags: [
            "HTML",
            "CSS",
            "Web Design",
            "Responsive Design"
        ],

        note:
            "Independent project. The portfolio shows selected screenshots rather than embedding the entire website.",

        media: [

            {
                type: "image",
                src: "assets/website/green-tea.jpg",
                alt: "Green Tea website screenshot",
                caption: "Green Tea website — main view"
            },

            {
                type: "image",
                src: "assets/website/green-tea-1.jpg",
                alt: "Green Tea website screenshot 1",
                caption: "Green Tea website — screen 1"
            },

            {
                type: "image",
                src: "assets/website/green-tea-2.jpg",
                alt: "Green Tea website screenshot 2",
                caption: "Green Tea website — screen 2"
            },

            {
                type: "image",
                src: "assets/website/green-tea-3.jpg",
                alt: "Green Tea website screenshot 3",
                caption: "Green Tea website — screen 3"
            }

        ]

    },


    vidafit: {

        kicker:
            "ANDROID DEVELOPMENT • UNIVERSITY PROJECT",

        title:
            "VidaFit Android App",

        description:
            "A fitness companion Android application with a dashboard for personal fitness information and daily activity tracking.",

        bullets: [
            "Created an Android interface with multiple information cards.",
            "Implemented a dashboard showing BMI, steps, water and exercise information.",
            "Built and tested the application on a physical Android phone.",
            "Debugged layout and interaction issues during development."
        ],

        tags: [
            "Android Studio",
            "Java",
            "XML",
            "UI",
            "Testing"
        ],

        note:
            "Real university project. These screenshots document the application that was built and tested on a physical Android device.",

        media: [

            {
                type: "image",
                src: "assets/vidafit/vidafit-dashboard.jpeg",
                alt: "VidaFit Android dashboard",
                caption: "VidaFit — dashboard"
            },

            {
                type: "image",
                src: "assets/vidafit/vidafit-dashboard-1.jpeg",
                alt: "VidaFit Android screen 1",
                caption: "VidaFit — screen 1"
            },

            {
                type: "image",
                src: "assets/vidafit/vidafit-dashboard-2.jpeg",
                alt: "VidaFit Android screen 2",
                caption: "VidaFit — screen 2"
            },

            {
                type: "image",
                src: "assets/vidafit/vidafit-dashboard-3.jpeg",
                alt: "VidaFit Android screen 3",
                caption: "VidaFit — screen 3"
            },

            {
                type: "image",
                src: "assets/vidafit/vidafit-dashboard-4.jpeg",
                alt: "VidaFit Android screen 4",
                caption: "VidaFit — screen 4"
            }

        ]

    },


    design: {

        kicker:
            "GRAPHIC DESIGN • CREATIVE PORTFOLIO",

        title:
            "Graphic Design Collection",

        description:
            "A curated selection of visual design work including brochures, business cards, banners, posters, cards and digital design pieces.",

        bullets: [
            "Created print and digital layouts with attention to typography and hierarchy.",
            "Worked with images, shapes, text and composition in Photoshop and Canva.",
            "Created practical promotional, event and business design pieces.",
            "Selected a focused set of work to keep the portfolio clean and professional."
        ],

        tags: [
            "Adobe Photoshop",
            "Canva",
            "Layout",
            "Typography",
            "Visual Design"
        ],

        note:
            "This collection contains selected personal and independent creative work. Private material is not included.",

        media: [

            {
                type: "image",
                src: "assets/design/banner-1.jpg",
                alt: "Graphic design banner",
                caption: "Banner design"
            },

            {
                type: "image",
                src: "assets/design/brochure-1.jpg",
                alt: "Graphic design brochure 1",
                caption: "Brochure design 1"
            },

            {
                type: "image",
                src: "assets/design/brochure-2.jpg",
                alt: "Graphic design brochure 2",
                caption: "Brochure design 2"
            },

            {
                type: "image",
                src: "assets/design/business-card-1.jpg",
                alt: "Business card design 1",
                caption: "Business card design 1"
            },

            {
                type: "image",
                src: "assets/design/business-card-2.jpg",
                alt: "Business card design 2",
                caption: "Business card design 2"
            },

            {
                type: "image",
                src: "assets/design/business-card-3.jpg",
                alt: "Business card design 3",
                caption: "Business card design 3"
            },

            {
                type: "image",
                src: "assets/design/business-card-back-1.jpg",
                alt: "Business card back design 1",
                caption: "Business card back 1"
            },

            {
                type: "image",
                src: "assets/design/business-card-back-2.jpg",
                alt: "Business card back design 2",
                caption: "Business card back 2"
            },

            {
                type: "image",
                src: "assets/design/business-card-back-3.jpg",
                alt: "Business card back design 3",
                caption: "Business card back 3"
            },

            {
                type: "image",
                src: "assets/design/digital-design-1.jpg",
                alt: "Digital design 1",
                caption: "Digital design 1"
            },

            {
                type: "image",
                src: "assets/design/digital-design-2.jpg",
                alt: "Digital design 2",
                caption: "Digital design 2"
            },

            {
                type: "image",
                src: "assets/design/digital-design-3.jpg",
                alt: "Digital design 3",
                caption: "Digital design 3"
            },

            {
                type: "image",
                src: "assets/design/digital-design-4.jpg",
                alt: "Digital design 4",
                caption: "Digital design 4"
            },

            {
                type: "image",
                src: "assets/design/event-card-1.jpg",
                alt: "Event card design",
                caption: "Event card design"
            },

            {
                type: "image",
                src: "assets/design/photo-edit-1.jpg",
                alt: "Photo editing work",
                caption: "Photo editing"
            },

            {
                type: "image",
                src: "assets/design/poster-1.jpg",
                alt: "Poster design 1",
                caption: "Poster design 1"
            },

            {
                type: "image",
                src: "assets/design/poster-2.jpg",
                alt: "Poster design 2",
                caption: "Poster design 2"
            },

            {
                type: "image",
                src: "assets/design/poster-3.jpg",
                alt: "Poster design 3",
                caption: "Poster design 3"
            }

        ]

    },


    video: {

        kicker:
            "VIDEO EDITING • CREATIVE PORTFOLIO",

        title:
            "Video Editing Collection",

        description:
            "A small selection of video-editing work demonstrating pacing, transitions, visual composition and product-focused editing.",

        bullets: [
            "Edited selected car and watch/product videos.",
            "Practiced cuts, transitions, timing and visual sequencing.",
            "Used Premiere Pro and related editing tools.",
            "Focused on keeping the final videos clean, engaging and visually consistent."
        ],

        tags: [
            "Premiere Pro",
            "After Effects",
            "Video Editing",
            "Transitions",
            "Storytelling"
        ],

        note:
            "Only work that is appropriate and available to share publicly is included. Private birthday and wedding videos are intentionally not included.",

        media: [

            {
                type: "video",
                src: "assets/video/car.mp4",
                alt: "Car video editing project",
                caption: "Car video edit"
            },

            {
                type: "video",
                src: "assets/video/watch.mp4",
                alt: "Watch video editing project",
                caption: "Watch/product video edit"
            }

        ]

    },


    ir: {

        kicker:
            "INFORMATION RETRIEVAL • GROUP PROJECT",

        title:
            "E-Commerce Information Retrieval",

        description:
            "A group project focused on evaluating the performance and fairness of an information retrieval system for an e-commerce setting.",

        bullets: [
            "Examined search performance and evaluation concepts.",
            "Considered fairness and potential bias in ranking/search systems.",
            "Contributed to research, analysis, documentation and presentation.",
            "Practiced teamwork and evidence-based technical communication."
        ],

        tags: [
            "Information Retrieval",
            "E-Commerce",
            "Evaluation",
            "Fairness",
            "Research"
        ],

        note:
            "Academic group project. This portfolio entry describes the work accurately without claiming ownership of the entire system.",

        media: []

    },


    graphics: {

        kicker:
            "COMPUTER GRAPHICS • COURSEWORK",

        title:
            "Computer Graphics Coursework",

        description:
            "Coursework covering concepts in 2D and 3D computer graphics, animation, rendering and visual computing.",

        bullets: [
            "Studied 2D and 3D graphics concepts.",
            "Learned fundamentals of animation and rendering.",
            "Explored how graphics systems represent and display visual information.",
            "Applied mathematical and technical concepts through coursework."
        ],

        tags: [
            "2D Graphics",
            "3D Graphics",
            "Animation",
            "Rendering",
            "Computer Graphics"
        ],

        note:
            "Presented as coursework rather than a standalone public project because there is not currently a finished 2D/3D piece selected for public showcase.",

        media: []

    }

};


/* =========================================
   PROJECT MODAL
========================================= */

const modal =
    document.getElementById("projectModal");

const modalClose =
    document.getElementById("modalClose");

const modalKicker =
    document.getElementById("modalKicker");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalBullets =
    document.getElementById("modalBullets");

const modalTags =
    document.getElementById("modalTags");

const modalNote =
    document.getElementById("modalNote");

const modalMedia =
    document.getElementById("modalMedia");


function renderProjectMedia(media = []) {

    if (!modalMedia) return;

    modalMedia.innerHTML = "";

    if (!media.length) {

        modalMedia.innerHTML =
            '<p class="media-empty">No public media selected for this project.</p>';

        return;
    }


    media.forEach((item) => {

        const figure =
            document.createElement("figure");

        figure.className =
            "media-item";


        if (item.type === "video") {

            const video =
                document.createElement("video");

            video.src =
                item.src;

            video.controls =
                true;

            video.preload =
                "metadata";

            video.setAttribute(
                "aria-label",
                item.alt
            );

            figure.appendChild(video);

        } else {

            const image =
                document.createElement("img");

            image.src =
                item.src;

            image.alt =
                item.alt;

            image.loading =
                "lazy";

            figure.appendChild(image);
        }


        const caption =
            document.createElement("figcaption");

        caption.textContent =
            item.caption;

        figure.appendChild(caption);

        modalMedia.appendChild(figure);

    });

}


function openProject(projectKey) {

    const project =
        projectData[projectKey];

    if (!project || !modal) return;


    modalKicker.textContent =
        project.kicker;

    modalTitle.textContent =
        project.title;

    modalDescription.textContent =
        project.description;


    modalBullets.innerHTML =
        project.bullets
            .map((item) => `<li>${item}</li>`)
            .join("");


    modalTags.innerHTML =
        project.tags
            .map((tag) => `<span>${tag}</span>`)
            .join("");


    modalNote.textContent =
        project.note;


    renderProjectMedia(
        project.media
    );


    modal.classList.add("open");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

    modalClose?.focus();

}


function closeProject() {

    if (!modal) return;

    modal.classList.remove(
        "open"
    );

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );


    if (modalMedia) {

        modalMedia
            .querySelectorAll("video")
            .forEach((video) => {
                video.pause();
            });

    }

}


/* =========================================
   PROJECT CLICK EVENTS
========================================= */

document
    .querySelectorAll(".project-clickable")
    .forEach((card) => {

        const activate =
            () => openProject(
                card.dataset.project
            );


        card.addEventListener(
            "click",
            activate
        );


        card.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    activate();
                }

            }
        );

    });


modalClose?.addEventListener(
    "click",
    closeProject
);


modal
    ?.querySelectorAll("[data-close-modal]")
    .forEach((element) => {

        element.addEventListener(
            "click",
            closeProject
        );

    });


document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {
            closeProject();
        }

    }
);


/* =========================================
   STOP BACKGROUND SCROLLING
========================================= */

const modalStyle =
    document.createElement("style");

modalStyle.textContent =
    "body.modal-open { overflow: hidden; }";

document.head.appendChild(
    modalStyle
);


/* =========================================
   CURRENT YEAR
========================================= */

const footer =
    document.querySelector("footer");

if (footer) {

    footer.innerHTML =
        footer.innerHTML.replace(
            "2026",
            new Date().getFullYear()
        );

}