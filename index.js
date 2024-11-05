const root = document.documentElement;
const prediction = document.getElementById('prediction');
let curAngle = getComputedStyle(root).getPropertyValue('--angle');
let angleVal = parseInt(curAngle.slice(0, -3));

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
    prediction.textContent == 'Strong Harris';
  }
}

function poll() {
  angleVal = Math.floor(Math.random() * 181);
  root.style.setProperty('--angle', angleVal + 'deg');
  setPrediction(angleVal);
}
