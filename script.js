document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("#main-nav");
  const mobileMenu = document.querySelector("#mobile-menu");
  const navLinks = document.querySelector(".nav-links");

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
    // Simple animation for the toggle
    const icon = mobileMenu.querySelector("i");
    if (navLinks.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");

      // Set styles for active menu
      navLinks.style.display = "flex";
      navLinks.style.flexDirection = "column";
      navLinks.style.position = "absolute";
      navLinks.style.top = "100%";
      navLinks.style.left = "0";
      navLinks.style.width = "100%";
      navLinks.style.background = "#fff";
      navLinks.style.padding = "2rem";
      navLinks.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
      navLinks.style.display = "none";
    }
  });

  // Intersection Observer for animations on scroll
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible");
      }
    });
  }, observerOptions);

  // Apply animation classes to elements
  const animateElements = document.querySelectorAll(
    ".service-card, .portfolio-item, .section-title, .about-content",
  );
  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
  });

  // Override the Intersection Observer logic for the actual animation
  document.addEventListener("scroll", () => {
    animateElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  });

  // Form submission handling (Prevent default for demo)
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(
        "Thank you for your inquiry. Our premium concierge team will contact you shortly.",
      );
      form.reset();
    });
  }

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});
