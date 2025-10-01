 // Text slider
      document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let slideInterval = setInterval(nextSlide, 3000); // auto-slide every 3 seconds

    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    }

    function prevSlideFn() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      showSlide(currentIndex);
    }

    // Manual controls
    nextBtn.addEventListener('click', () => {
      clearInterval(slideInterval);
      nextSlide();
      slideInterval = setInterval(nextSlide, 3000);
    });

    prevBtn.addEventListener('click', () => {
      clearInterval(slideInterval);
      prevSlideFn();
      slideInterval = setInterval(nextSlide, 3000);
    });

    // Show initial slide
    showSlide(currentIndex);
  });