function animateBar(triggerElement, onEnterWidth, onLeaveBackWidth) {
  gsap.to(".bar", {
    scrollTrigger: {
      trigger: triggerElement,
      start: "top center",
      end: "bottom bottom",
      scrub: true,
      onEnter: () => {
        gsap.to(".bar", {
          width: onEnterWidth,
          duration: 0.2,
          ease: "none",
        });
      },
      onLeaveBack: () => {
        gsap.to(".bar", {
          width: onLeaveBackWidth,
          duration: 0.2,
          ease: "none",
        });
      },
    },
  });
}
animateBar("#part1", "35%", "0%");
animateBar("#part2", "65%", "35%");
animateBar("#part3", "100%", "65%");
