const coordsEl = document.getElementById('coordenadas');
const lista = document.getElementById('lista-itens');
const caixa = document.getElementById('caixa-arrastavel');

// 1. Atualiza clientX e clientY no canto da tela ao mover o mouse
document.addEventListener('mousemove', (e) => {
  coordsEl.innerText = `X: ${e.clientX} | Y: ${e.clientY}`;
});

// 2. Único listener de click na <ul> usando e.target para riscar o <li> clicado
lista.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('riscado');
  }
});

/*
EXPLICAÇÃO (Por que o clique funciona com o listener apenas na <ul> pai?):
Isso acontece graças à propagação de eventos (Event Bubbling) e à técnica de
Delegação de Eventos. Quando você clica em um <li>, o evento de clique nasce nele
e "borbulha" (sobe) na árvore do DOM até alcançar o elemento pai <ul>.
Dentro do listener da <ul>, a propriedade e.target guarda a referência exata do
elemento mais interno que originou o clique (o <li> específico), permitindo
modificá-lo sem precisar registrar um listener individual para cada item.
*/

// 3. Muda a cor de fundo do item sob o cursor com mouseover e mouseout
lista.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.backgroundColor = '#e2e8f0';
  }
});

lista.addEventListener('mouseout', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.backgroundColor = '';
  }
});

// 4. Eventos load e resize no window exibindo window.innerWidth no console
window.addEventListener('load', () => {
  console.log(`Evento load -> Largura inicial da janela: ${window.innerWidth}px`);
});

window.addEventListener('resize', () => {
  console.log(`Evento resize -> Nova largura da janela: ${window.innerWidth}px`);
});

// Desafio: arrastar a <div> usando mousemove e e.buttons
let arrastando = false;
let offsetX = 0;
let offsetY = 0;

caixa.addEventListener('mousedown', (e) => {
  arrastando = true;
  offsetX = e.clientX - caixa.offsetLeft;
  offsetY = e.clientY - caixa.offsetTop;
});

document.addEventListener('mousemove', (e) => {
  // e.buttons === 1 verifica se o botão esquerdo do mouse continua pressionado
  if (arrastando && e.buttons === 1) {
    caixa.style.left = `${e.clientX - offsetX}px`;
    caixa.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener('mouseup', () => {
  arrastando = false;
});