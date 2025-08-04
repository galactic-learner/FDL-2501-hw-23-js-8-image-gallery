// Hooks for Image Gallery
let imageWrapper = Array.from(document.querySelectorAll('.image_wrapper img'));
let previewBody = document.querySelector('.preview_body');
let previewImg = document.querySelector('.preview_img img');
let close = document.querySelector('.close');
let rightArrow = document.querySelector('.right_arrow');
let leftArrow = document.querySelector('.left_arrow');

let currentIndex = 0; // global index

imageWrapper.map((item, index) => {
   item.addEventListener('click', function () {
      currentIndex = index; // update global index

      previewBody.classList.add('preview_active');
      previewImg.src = imageWrapper[currentIndex].src;
   });
});

rightArrow.addEventListener('click', function () {
   currentIndex++;
   if (currentIndex >= imageWrapper.length) {
      currentIndex = 0;
   }
   previewImg.src = imageWrapper[currentIndex].src;
});

leftArrow.addEventListener('click', function () {
   currentIndex--;
   if (currentIndex < 0) {
      currentIndex = imageWrapper.length - 1;
   }
   previewImg.src = imageWrapper[currentIndex].src;
});

close.addEventListener('click', function () {
   previewBody.classList.remove('preview_active');
});
