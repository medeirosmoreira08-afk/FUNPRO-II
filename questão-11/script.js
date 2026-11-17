const inputFaces = document.getElementById('faces');
const btnJogar = document.getElementById('btn-jogar');
const resultadoEl = document.getElementById('resultado');
const listaHistorico = document.getElementById('historico');

let maxFaces = 6;

// Função fornecida no enunciado
function getRandom(min, max) {
  return Math.floor(Math.random() * max) + min;
}

// 2 e 3. Atualizando o máximo de faces usando o evento 'input'
inputFaces.addEventListener('input', () => {
  const valorDigitado = Number(inputFaces.value);
  if (valorDigitado >= 2) {
    maxFaces = valorDigitado;
    console.log('Máximo atualizado para:', maxFaces);
  }
});

/*
EXPLICAÇÃO (Diferença entre os eventos 'change' e 'input'):
- Evento 'change': Só é disparado quando o usuário termina a alteração e confirma o valor — ou seja, ao pressionar Enter, clicar nas setinhas do input ou tirar o foco do campo (blur). Se você apenas digitar "20" e clicar direto no botão sem sair do campo antes, o 'change' só dispara na saída do foco.
- Evento 'input': É disparado imediatamente a cada caractere digitado, apagado ou alterado em tempo real, atualizando o valor de maxFaces instantaneamente enquanto o usuário digita.
*/

// 1 e 4. Jogando o dado e mantendo os últimos 5 resultados no topo da <ul>
btnJogar.addEventListener('click', () => {
  const numeroSorteado = getRandom(1, maxFaces);
  resultadoEl.innerText = numeroSorteado;

  // Cria o <li> e insere no topo da lista com prepend()
  const item = document.createElement('li');
  item.innerText = `D${maxFaces} → ${numeroSorteado}`;
  listaHistorico.prepend(item);

  // Mantém apenas os últimos 5 resultados removendo o mais antigo (último da lista)
  if (listaHistorico.children.length > 5) {
    listaHistorico.lastElementChild.remove();
  }
});