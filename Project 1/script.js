// const panels = document.querySelectorAll('.panel');

// panels.forEach((bal) => {
//   bal.addEventListener('click', () => {
//     activeRemove();
//     bal.classList.add('active');
//   });
// });

// function activeRemove() {
//   panels.forEach((bal) => {
//     bal.classList.remove('active');
//   });
// }

const slide = document.querySelectorAll('.panel');

slide.forEach((slideShow) => {
  slideShow.addEventListener('click', () => {
    removeslideShow();
    slideShow.classList.add('active');
  });
});

function removeslideShow() {
  slide.forEach((slideShow) => {
    slideShow.classList.remove('active');
  });
}



