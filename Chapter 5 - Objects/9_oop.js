// 9. Fun Stuff With OOP

class Animator {
  constructor(selector) {
    this.selector = document.querySelector(selector);
  }
  fadeOut(time, toggle = false) {
    if (toggle && this.selector.classList.contains("fadeOut-active")) {
      this.selector.style.opacity = 1;
      this.selector.classList.remove("fadeOut-active");
    } else {
      this.selector.style.transition = `all ${time}s ease`;
      this.selector.style.opacity = 0;
      this.selector.classList.add("fadeOut-active");
    }
  }
  move(time, toggle = false, { x = 0, y = 0 }) {
    if (toggle && this.selector.classList.contains("move-active")) {
      this.selector.style.transform = "translate(0px,0px)";
      this.selector.classList.remove("move-active");
    } else {
      this.selector.style.transition = `all ${time}s ease`;
      this.selector.style.transform = `translate(${x}px, ${y}px)`;
      this.selector.classList.add("move-active");
    }
  }
}

const button = document.querySelector("button");
const intro = new Animator(".intro");
const header = new Animator("h1");
const btnAnim = new Animator("button");

button.addEventListener("click", () => {
  // arrow function since we pass in arguments
  intro.fadeOut(1.5, true);
  header.move(1, true, { x: 100, y: 0 });
  btnAnim.move(1.25, true, { x: 200 });
});

// header.fadeOut(3);
