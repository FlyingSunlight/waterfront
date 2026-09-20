// Velkommen til Norge — interactions
(function () {
  "use strict";

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // --- sticky nav: appear once the hero has scrolled away ---
  var nav = document.querySelector(".site-nav");
  var hero = document.querySelector(".hero");
  if (nav && hero && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      nav.classList.toggle("is-visible", !entries[0].isIntersecting);
    }, { threshold: 0.04 }).observe(hero);
  } else if (nav) {
    nav.classList.add("is-visible");
  }

  // --- scroll reveal ---
  if (!prefersReduced && "IntersectionObserver" in window) {
    var targets = document.querySelectorAll(".section .container > *");
    targets.forEach(function (el) { el.classList.add("reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    targets.forEach(function (el) { io.observe(el); });
  }

  // --- smooth anchors, offset for the fixed nav ---
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var y = target.getBoundingClientRect().top + window.pageYOffset - 54;
      window.scrollTo({ top: y, behavior: prefersReduced ? "auto" : "smooth" });
      history.replaceState(null, "", id);
    });
  });

  // --- highlight the current section in the nav ---
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.site-nav a[href^="#"]'));
  var sections = navLinks
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);
  if (sections.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var href = "#" + entry.target.id;
        navLinks.forEach(function (a) {
          a.classList.toggle("is-current", a.getAttribute("href") === href);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  }
})();
