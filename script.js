const banner = document.querySelector("[data-banner]");

if (banner) {
  const slides = [...banner.querySelectorAll(".hero-image")];
  const dots = [...banner.querySelectorAll(".banner-dots span")];
  let current = 0;

  const showSlide = (index) => {
    slides[current].classList.remove("is-active");
    dots[current]?.classList.remove("is-active");
    current = index;
    slides[current].classList.add("is-active");
    dots[current]?.classList.add("is-active");
  };

  if (slides.length > 1) {
    setInterval(() => {
      showSlide((current + 1) % slides.length);
    }, 4200);
  }
}
