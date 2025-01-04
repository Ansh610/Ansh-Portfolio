// Mobile Menu Toggle
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    // Scroll to the target section
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Close the mobile menu after clicking a link
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
    }
  });
});

// FAQ Toggle Functionality
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    // Toggle active class for the clicked FAQ item
    item.classList.toggle("active");

    // Get the answer element
    const answer = item.querySelector(".faq-answer");

    // Toggle the max-height for the answer
    if (item.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px"; // Set to the scroll height to expand
    } else {
      answer.style.maxHeight = "0"; // Collapse
    }
  });
});

// Optional: Close the mobile menu when clicking outside of it
document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

// Navbar Highlighting on Scroll
const sections = document.querySelectorAll("section");
const naLinks = document.querySelectorAll(".navbar a");

// Create an IntersectionObserver to observe when sections are in view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const link = document.querySelector(
        `.navbar a[href="#${entry.target.id}"]`
      );

      if (entry.isIntersecting) {
        // Add 'active' class to the nav link when the section is in view
        link.classList.add("active");
      } else {
        // Remove 'active' class when the section is not in view
        link.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.5, // Trigger when 50% of the section is visible
  }
);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});
