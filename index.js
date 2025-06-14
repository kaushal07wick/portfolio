document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  menuButton.addEventListener("click", function () {
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("block");
    } else {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("block");
    }
  });

  // Close the mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !mobileMenu.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("block");
    }
  });
});

// Detect when elements come into view
document.addEventListener("DOMContentLoaded", function () {
  // Add blur effect initially
  const animatedElements = document.querySelectorAll(".animate-from-bottom");
  animatedElements.forEach((el) => {
    el.style.filter = "blur(4px)";
  });
  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
  // Function to handle scroll and trigger animations
  function handleScroll() {
    animatedElements.forEach((element) => {
      if (isInViewport(element) && element.style.opacity === "0") {
        element.style.animation = "fadeInUp 0.8s forwards";
        element.style.animationDelay = element.style.getPropertyValue(
          "--delay"
        );
      }
    });
  }
  // Initial check for elements in viewport
  handleScroll();
  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);
});
