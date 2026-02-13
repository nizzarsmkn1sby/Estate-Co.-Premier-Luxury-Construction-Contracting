document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("#main-nav");
  const mobileMenu = document.querySelector("#mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  const icon = mobileMenu.querySelector("i");

  // Sticky Header Logic
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // Mobile Menu Toggle
  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    if (navLinks.classList.contains("active")) {
      icon.classList.replace("fa-bars", "fa-times");
    } else {
      icon.classList.replace("fa-times", "fa-bars");
    }
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      icon.classList.replace("fa-times", "fa-bars");
    });
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll(
    ".service-card, .portfolio-item, .section-title, .about-content, .metric-item, .contact-box"
  );

  animateElements.forEach((el) => {
    el.classList.add("fade-in-prepare");
    observer.observe(el);
  });

  // Form submission handling
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(
        "Terima kasih atas pertanyaan Anda. Tim pramutamu premium kami akan segera menghubungi Anda.",
      );
      form.reset();
    });
  }

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      
      const target = document.querySelector(targetId);
      if (target) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
