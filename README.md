5 - Projeto do curso 20 projetos com javasript de Matheus Battisti

# Barra de Progresso

Este é um exemplo de código para criar uma barra de progresso em HTML, CSS e JavaScript.

## Descrição

Este projeto consiste em uma implementação simples de uma barra de progresso utilizando HTML, CSS e JavaScript. A barra de progresso exibe visualmente o avanço de uma tarefa ou processo, permitindo ao usuário acompanhar o progresso de forma visual.

## Como usar

1. Adicione o seguinte código HTML no seu arquivo:

```html
<div class="progress-bar">
  <div class="progress"></div>
</div>

<button id="previous-btn">Anterior</button>
<button id="next-btn">Próximo</button>
```

2. Inclua os estilos CSS correspondentes para as classes "progress-bar" e "progress" para obter o efeito visual desejado.

3. Utilize o seguinte código JavaScript para controlar o comportamento da barra de progresso:

```javascript
const progressBar = document.querySelector(".progress");
const previousBtn = document.querySelector("#previous-btn");
const nextBtn = document.querySelector("#next-btn");

let progress = 0;

function updateProgressBar() {
  progressBar.style.width = progress + "%";
}

function nextStep() {
  progress += 10;
  if (progress > 100) progress = 100;
  updateProgressBar();
}

function previousStep() {
  progress -= 10;
  if (progress < 0) progress = 0;
  updateProgressBar();
}

nextBtn.addEventListener("click", nextStep);
previousBtn.addEventListener("click", previousStep);
```

## Contribuição

Sinta-se à vontade para contribuir com melhorias para este projeto. Basta seguir as diretrizes de contribuição e abrir um pull request.

## Licença

Este projeto está licenciado sob a licença [MIT]. Sinta-se livre para utilizá-lo da forma que preferir.
