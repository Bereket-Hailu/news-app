const imageContainer = document.querySelector('.image-container');
const imageWrapper = document.querySelector('.image-wrapper');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const imageWidth = 350; // Adjust this value to match the width of your images
const imageMargin = 25; // Adjust this value to match the margin between your images

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + imageWrapper.children.length) % imageWrapper.children.length;
  imageWrapper.style.transform = `translateX(-${(currentIndex * (imageWidth + imageMargin))}px)`;
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imageWrapper.children.length;
  imageWrapper.style.transform = `translateX(-${(currentIndex * (imageWidth + imageMargin))}px)`;
});
