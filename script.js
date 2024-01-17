const navPhone = document.querySelector(".nav-phone-section");
document.querySelector(".burger-menu").addEventListener("click", () => {
  navPhone.classList.add("phoneactive");
});
document.querySelector(".closemenu").addEventListener("click", () => {
  navPhone.classList.remove("phoneactive");
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 100,
  nav: true,

  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 1.3,
    },
  },
});
// scrolltriger
gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(
  ".nav-phone",
  { backgroundColor: "transparent" },
  {
    backgroundColor: "rgba(0, 0, 0, 0.63)",
    scrollTrigger: { trigger: ".demoCar", scrub:3 },
  }
);
