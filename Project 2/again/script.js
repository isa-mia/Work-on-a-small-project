const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circle = document.querySelectorAll('.circle');

activeRun = 1;

next.addEventListener('click', () => {
  activeRun++;
  if (activeRun > circle.length) {
    activeRun = circle.length;
  }
  update();
});

prev.addEventListener('click', () => {
  activeRun--;
  if (activeRun < 1) {
    activeRun = 1;
  }
  update();
});

function update() {
  circle.forEach((circle, ind) => {
    if (ind < activeRun) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const active = document.querySelectorAll('.active');

  progress.style.width =
    ((active.length - 1) / (circle.length - 1)) * 100 + '%';

  if (activeRun === 1) {
    prev.disabled = true;
  } else if (activeRun === circle.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
