document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function() {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Initialize slide index and show the first slide
let slideIndex = 1;
updateSlides(slideIndex); // Change this to updateSlides instead of showSlides

// Next/previous controls
function plusSlides(n) {
  updateSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  updateSlides(slideIndex = n);
}

function updateSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  // Hide all slides
  Array.from(slides).forEach(slide => slide.style.display = "none");
  
  // Remove active status from all dots
  Array.from(dots).forEach(dot => dot.classList.remove("active"));

  // Show current slide and mark dot as active
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

