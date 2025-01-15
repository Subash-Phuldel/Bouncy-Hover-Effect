const pink = document.querySelector(".pink");
const link = document.querySelector(".link");

const hoverAnimation = gsap.timeline({ paused: true });

hoverAnimation.to(".pink", {
  width: "calc(100% + 2.8rem)",
  duration: 0.5,
  ease: "Elastic.easeOut(0.5)",
});

hoverAnimation.to(".pink", {
  width: "4rem",
  left: "calc(100% - 2.9rem)",
  duration: 0.5,
  ease: "Elastic.easeOut(0.5)",
});

link.addEventListener("mouseenter", () => {
  hoverAnimation.play();
});

link.addEventListener("mouseleave", () => {
  hoverAnimation.reverse();
});
