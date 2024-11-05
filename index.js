const root = document.documentElement;
const prediction = document.getElementById('prediction');
let curAngle = getComputedStyle(root).getPropertyValue('--angle');
let angleVal = parseInt(curAngle.slice(0, -3));
const modal = document.getElementById('modal');
const modalClose = document.getElementById('close-modal');
let count = 0;

function showModal() {
  modal.classList.add('show-modal');
}

function closeModal() {
  modal.classList.remove('show-modal');
}

function setPrediction(angleVal) {
  if (angleVal <= 45) {
    prediction.textContent = 'Strong Trump';
  } else if (angleVal > 45 && angleVal < 90) {
    prediction.textContent = 'Lean Trump';
  } else if (angleVal === 90) {
    prediction.textContent = 'Toss-up';
  } else if (angleVal > 90 && angleVal < 135) {
    prediction.textContent = 'Lean Harris';
  } else if (angleVal >= 135) {
    prediction.textContent = 'Strong Harris';
  }
}

function poll() {
  angleVal = Math.floor(Math.random() * 181);
  root.style.setProperty('--angle', angleVal + 'deg');
  setPrediction(angleVal);
  count++;
  if (count > 10) {
    kornacki();
    count = 0;
  }
}

modalClose.addEventListener('click', closeModal);
window.addEventListener('click', e => {
  e.target === modal ? closeModal() : false;
});

function kornacki() {}
