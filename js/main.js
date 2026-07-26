// goro's × Trans Women concept site — interactions
(function () {
  "use strict";

  // --- sticky nav: show after hero ---
  var nav = document.querySelector(".site-nav");
  var hero = document.querySelector(".hero");
  if (nav && hero && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      nav.classList.toggle("is-visible", !entries[0].isIntersecting);
    }, { threshold: 0.05 }).observe(hero);
  } else if (nav) {
    nav.classList.add("is-visible");
  }

  // --- scroll reveal ---
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!prefersReduced && "IntersectionObserver" in window) {
    var targets = document.querySelectorAll(
      ".section .container > *, .hero .container > *"
    );
    targets.forEach(function (el) { el.classList.add("reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    targets.forEach(function (el) { io.observe(el); });
  }

  // --- smooth anchor offset for fixed nav ---
  document.querySelectorAll('.site-nav a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      var y = target.getBoundingClientRect().top + window.pageYOffset - 52;
      window.scrollTo({ top: y, behavior: prefersReduced ? "auto" : "smooth" });
    });
  });
})();
