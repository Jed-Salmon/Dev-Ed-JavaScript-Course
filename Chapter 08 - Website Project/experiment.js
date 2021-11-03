// scroll effects (experimentation)

// Traditional Method
const hikeExp = document.querySelector(".hike-exp");

// window.addEventListener("scroll", scrollReveal);

// function scrollReveal() {
//   const hikePos = hikeExp.getBoundingClientRect().top;
//   const windowHeight = window.innerHeight;
//   if (hikePos < windowHeight / 1.5) {
//     console.log("Blue Baby!");
//     hikeExp.style.color = "blue";
//   }
// }

// Intersection Observer (browser triggers event once element comes into view)
const slide = document.querySelector(".hike");
let options = {
  threshold: 0.5,
};

let observer = new IntersectionObserver(slideAnim, options);

function slideAnim(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      slide.style.background = "white";
    }
  });
}

observer.observe(slide);
