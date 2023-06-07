// Seleciona os elementos HTML necessários
const progressBar = document.querySelector(".progress");
const previousBtn = document.querySelector("#previous-btn");
const nextBtn = document.querySelector("#next-btn");

// Inicializa a variável de progresso
let progress = 0;

// Função para atualizar a barra de progresso
function updateProgressBar() {
  progressBar.style.width = progress + "%";
}

// Função para avançar ou retroceder na barra de progresso
function updateStep(step) {
  progress += step;

  // Limita o valor do progresso entre 0 e 100
  if (progress > 100) progress = 100;
  if (progress < 0) progress = 0;

  // Atualiza a barra de progresso
  updateProgressBar();
}

// Adiciona um listener de evento de clique para avançar 10% na barra de progresso
nextBtn.addEventListener("click", () => updateStep(10));

// Adiciona um listener de evento de clique para retroceder 10% na barra de progresso
previousBtn.addEventListener("click", () => updateStep(-10));
