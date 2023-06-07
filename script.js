const progressBar = document.querySelector(".progress");
const previousBtn = document.querySelector("#previous-btn");
const nextBtn = document.querySelector("#next-btn");

let progress = 0;

function updateProgressBar() {
  progressBar.style.width = progress + "%";
}

function updateStep(step) {
  progress += step;
  if (progress > 100) progress = 100;
  if (progress < 0) progress = 0;
  updateProgressBar();
}

nextBtn.addEventListener("click", () => updateStep(10));
previousBtn.addEventListener("click", () => updateStep(-10));
