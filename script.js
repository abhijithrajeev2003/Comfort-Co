document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const sideDrawer = document.getElementById("sideDrawer");
  const closeButton = document.querySelector(".close-btn");

  hamburger.addEventListener("click", function () {
    sideDrawer.classList.add("open");
  });

  closeButton.addEventListener("click", function () {
    sideDrawer.classList.remove("open");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".new-arrival img").forEach((img) => {
    const originalSrc = img.src;
    const hoverSrc = img.getAttribute("data-hover");

    img.addEventListener("mouseover", () => {
      img.src = hoverSrc;
    });

    img.addEventListener("mouseout", () => {
      img.src = originalSrc;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion-toggle");

  accordions.forEach(function (accordion) {
    accordion.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        accordions.forEach((other) => {
          if (other !== this) {
            other.parentElement.classList.remove("active");
            other.nextElementSibling.style.display = "none";
            other.querySelector(".toggle-icon").classList.remove("rotate");
          }
        });

        this.parentElement.classList.toggle("active");
        const content = this.nextElementSibling;
        const icon = this.querySelector(".toggle-icon");
        if (content.style.display === "block") {
          content.style.display = "none";
          icon.classList.remove("rotate");
        } else {
          content.style.display = "block";
          icon.classList.add("rotate");
        }
      }
    });
  });
});

document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var emailInput = this.querySelector('input[type="email"]');

    if (!emailInput.validity.valid) {
      alert("Please enter a valid email address.");
    } else {
      alert("Thank you for subscribing!");
    }
  });
