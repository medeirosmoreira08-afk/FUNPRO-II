const contadorEl = document.getElementById('contador');
const btnMais = document.getElementById('btn-mais');
const btnPausar = document.getElementById('btn-pausar');
const btnRetomar = document.getElementById('btn-retomar');

let valor = 0;

// Função nomeada exigida pela questão
const incrementa = () => {
  valor++;
  contadorEl.innerText = valor;
};

// Adiciona o listener inicial ao botão "+1"
btnMais.addEventListener('click', incrementa);

// "Pausar" remove o listener usando a mesma referência da função nomeada
btnPausar.addEventListener('click', () => {
  btnMais.removeEventListener('click', incrementa);
  console.log('Contador pausado.');
});

// "Retomar" adiciona o listener novamente (o navegador evita duplicatas da mesma referência)
btnRetomar.addEventListener('click', () => {
  btnMais.addEventListener('click', incrementa);
  console.log('Contador retomado.');
});

/*
====================================================================
TESTE COM FUNÇÃO ANÔNIMA (como ficaria se trocássemos incrementa):

btnMais.addEventListener('click', () => {
  valor++;
  contadorEl.innerText = valor;
});

btnPausar.addEventListener('click', () => {
  btnMais.removeEventListener('click', () => {
    valor++;
    contadorEl.innerText = valor;
  });
});

EXPLICAÇÃO (Por que não funciona com função anônima?):
Em JavaScript, funções são objetos na memória. Quando criamos uma função anônima no addEventListener e escrevemos outra função anônima no removeEventListener — mesmo que tenham o código idêntico —, o JavaScript cria duas instâncias diferentes na memória com referências distintas.
Como o removeEventListener compara a referência exata da função que foi registrada originalmente, ele não encontra correspondência e o evento nunca é removido. Por isso, para remover um listener depois, é obrigatório usar uma função nomeada ou armazenada em uma variável/constante.
====================================================================
*/