const controller = new ScrollMagic.Controller();

// Scene 1
const exploreScene = new ScrollMagic.Scene({
  triggerElement: ".hike-exp",
  triggerHook: 0.4, // position threshold
})
  .addIndicators({ colorStart: "white", colorTrigger: "white" })
  .setClassToggle(".hike-exp", "active")
  .addTo(controller);
