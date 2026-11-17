const paragrafoData = document.getElementById('data');
const botaoB = document.getElementById('btn-b');
const botaoC = document.getElementById('btn-c');

const mostraData = () => {
  paragrafoData.innerText = Date();
};

const mostraSegundo = () => {
  console.log('segundo');
};

// 2. Botão B: atribuindo onclick duas vezes com funções diferentes
botaoB.onclick = mostraData;
botaoB.onclick = mostraSegundo; // A segunda atribuição sobrescreve a primeira

// 3. Botão C: adicionando dois listeners com addEventListener
botaoC.addEventListener('click', mostraData);
botaoC.addEventListener('click', mostraSegundo); // Os dois listeners são mantidos

/*
RESPOSTA DISCURSIVA:

1. O que aconteceu ao atribuir duas funções no Botão B x Botão C?
- No Botão B (.onclick): Como "onclick" é uma propriedade comum do objeto DOM, a segunda atribuição (botaoB.onclick = mostraSegundo) sobrescreveu a primeira. Ao clicar no Botão B, a data NÃO aparece na tela — apenas "segundo" é exibido no Console.
- No Botão C (addEventListener): O método registra ouvintes em uma fila sem apagar os anteriores. Ao clicar no Botão C, as duas funções executam na ordem em que foram adicionadas: a data aparece na tela E "segundo" é exibido no Console.

2. Por que os parênteses aparecem na forma 1, mas não nas formas 2 e 3?
- Na forma 1 (onclick="mostraData()"), o valor do atributo HTML é uma string de código JavaScript que o navegador envolve internamente numa função wrapper para executar somente quando o clique ocorrer; por isso precisamos dos parênteses para invocar mostraData() naquele momento.
- Nas formas 2 e 3 (botaoB.onclick = mostraData e addEventListener('click', mostraData)), estamos passando a referência da própria função como um valor/objeto para o navegador chamar depois. Se colocássemos parênteses — mostraData() —, a função seria executada imediatamente no carregamento da página, passando seu retorno (undefined) em vez da função em si.
*/