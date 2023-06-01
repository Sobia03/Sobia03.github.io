window.addEventListener("scroll", slideImages);

function slideImages() {
  var imageSection = document.getElementById("image-section");
  var slideContainer = document.querySelector(".slide-container");
  var images = document.querySelectorAll(".slide");
  var sectionTop = imageSection.offsetTop;
  var sectionHeight = imageSection.offsetHeight;
  var slideInAt = window.scrollY + window.innerHeight - sectionHeight / 2;
  var sectionBottom = sectionTop + sectionHeight;
  var isHalfShown = slideInAt > sectionTop;
  var isNotScrolledPast = window.scrollY < sectionBottom;

  if (isHalfShown && isNotScrolledPast) {
    slideContainer.style.transform = "translateX(0)";
    images.forEach(function (image, index) {
      image.style.transitionDelay = index * 0.2 + "s";
    });
  } else {
    slideContainer.style.transform = "translateX(-100%)";
    images.forEach(function (image) {
      image.style.transitionDelay = "0s";
    });
  }
}


const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });