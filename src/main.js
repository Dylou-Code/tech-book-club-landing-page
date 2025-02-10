import '../src/assets/scss/main.scss';
import {
  animate,
  inView,
} from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";

const buttonIcon = document.querySelector(".primary-button");
const heroTitle = document.querySelector(".hero__text-title");
const heroImage = document.querySelector(".hero__image");
const heroDesc = document.querySelector(".hero__text-description");
const heroCta = document.querySelector(".hero__cta-button");
const heroCtaTestimonial = document.querySelector(
  ".cta-testimonial"
);
const featureImage = document.querySelector(".feature__image");
const featureTitle = document.querySelector(".feature__title");
const featureItems = document.querySelectorAll(".feature__item");
const communityImage = document.querySelector(".community__image");
const communityTitle = document.querySelector(".community__title");
const communityDescription = document.querySelector(
  ".community__description"
);
const journeyTitle = document.querySelector(".journey__title");
const journeySteps = document.querySelectorAll(".journey__step");

// Animations
animate(
  heroTitle,
  { y: [50, 0], opacity: [0, 1] },
  { duration: 1.1, easing: "easeOutExpo" }
);

animate(
  heroImage,
  { y: [30, 0], opacity: [0, 1] },
  { duration: 1, easing: "easeOutExpo", delay: 1 }
);

animate(
  heroDesc,
  { y: [50, 0], opacity: [0, 1] },
  { duration: 1.2, easing: "easeOutExpo", delay: 0.3 }
);

animate(
  heroCta,
  { y: [50, 0], opacity: [0, 1] },
  { duration: 1.2, easing: "easeOutExpo", delay: 0.5 }
);

animate(
  heroCtaTestimonial,
  { y: [50, 0], opacity: [0, 1] },
  { duration: 1.2, easing: "easeOutExpo", delay: 0.7 }
);

inView(featureTitle, ({ target }) => {
  animate(
    target,
    { x: [-20, 0], opacity: [0, 1] },
    { duration: 0.6, easing: "easeOutExpo" }
  );
});
inView(featureImage, ({ target }) => {
  animate(
    target,
    { opacity: [0, 1] },
    { duration: 1.5, easing: "easeOutExpo" }
  );
});


featureItems.forEach((item, index) => {
  inView(
    item,
    () => {
      animate(
        item,
        { x: [-20, 0], opacity: [0, 1] },
        { duration: 0.6, delay: index * 0.2, easing: "easeOutExpo" }
      );
    },
    { once: true }
  );
});

journeySteps.forEach((step, index) => {
  inView(
    step,
    () => {
      animate(
        step,
        { x: [-20, 0], opacity: [0, 1] },
        { duration: 1, delay: index * 0.2, easing: "easeOutExpo" }
      );
    },
    { once: true }
  );
});

inView(journeyTitle, ({ target }) => {
  animate(
    target,
    { y: [-30, 0], opacity: [0, 1] },
    { duration: 1.2, easing: "easeOutExpo" }
  );
});

inView(communityImage, ({ target }) => {
  animate(
    target,
    { opacity: [0, 1] },
    { duration: 1.5, easing: "easeOutExpo" }
  );
});

inView(communityTitle, ({ target }) => {
  animate(
    target,
    { x: [-50, 0], opacity: [0, 1] },
    { duration: 1.2, easing: "easeOutExpo", delay: 0.3 }
  );
});

inView(communityDescription, ({ target }) => {
  animate(
    target,
    { x: [-50, 0], opacity: [0, 1] },
    { duration: 1.2, easing: "easeOutExpo", delay: 0.5 }
  );
});

// debug
// inView(myElement, (element, info) => {
//   console.log("Element", element, " has entered the viewport");
// });
