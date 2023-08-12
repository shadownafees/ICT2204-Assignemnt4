/* Image Slider
const images = document.querySelectorAll('.slider img');
const imageSrcs = ['pics/i1.jpg', 'pics/i2.jpg', 'pics/i3.jpg', 'pics/i4.jpg', 'pics/i5.jpg', 'pics/i6.jpg'];

images.forEach((image, i) => {
  image.src = imageSrcs[i];
  if (i === 0) {
    image.style.display = 'block'; // Display the first image initially
  }
});

let index = 0;

function changeImage() {
  images[index].style.display = 'none';
  index = (index + 1) % images.length;
  images[index].style.display = 'block';
}

setInterval(changeImage, 3000); // Change image every 3 seconds
*/
let slider = document.querySelector(".slider");
let currentSlide = 0;
let totalSlides = slider.querySelectorAll(".wrapper .left > div").length - 1;

slider.querySelector(".controls .up").addEventListener("click", function () {
  if (currentSlide == 0) {
    return;
  }
  currentSlide--;
  slider.querySelector(".wrapper .left div").style.marginTop = `${
    currentSlide * -100
  }vh`;
  slider.querySelector(".wrapper .right div").style.marginTop = `${
    (totalSlides - currentSlide) * -100
  }vh`;
});

slider.querySelector(".controls .down").addEventListener("click", function () {
  if (currentSlide == totalSlides) {
    return;
  }
  currentSlide++;
  slider.querySelector(".wrapper .left div").style.marginTop = `${
    currentSlide * -100
  }vh`;
  slider.querySelector(".wrapper .right div").style.marginTop = `${
    (totalSlides - currentSlide) * -100
  }vh`;
});
// Smooth Scrolling
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Animated Transitions between Sections
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight * 0.8) {
      section.classList.add('active');
    }
  });
});

// Fade-In Effects for Elements
const fadeElements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  fadeElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < window.innerHeight * 0.8) {
      element.classList.add('active');
    }
  });
});

// Form Validation
function validateForm() {
  var nameInput = document.querySelector('.contact__input[name="name"]');
  var emailInput = document.querySelector('.contact__input[name="email"]');
  var messageInput = document.querySelector('.contact__input[name="message"]');
  
  var name = nameInput.value.trim();
  var email = emailInput.value.trim();
  var message = messageInput.value.trim();
  
  if (name === '' || email === '' || message === '') {
      alert('All fields are required.');
      return false;
  }

  // Basic email validation
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
  }

  return true; // Allow form submission
}
