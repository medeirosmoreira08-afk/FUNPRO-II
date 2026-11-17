const caixa = document.getElementById('caixa');

// 1. Aplicando estilos diretamente com a propriedade style (notação camelCase)
caixa.style.backgroundColor = '#f1f5f9';
caixa.style.padding = '20px';
caixa.style.border = '3px dashed #64748b';
caixa.style.fontSize = '18px';

// 2. Manipulando as classes .destaque e .escuro com classList
// Adicionando .destaque
caixa.classList.add('destaque');
console.log('Contém .destaque após add?', caixa.classList.contains('destaque')); // true

// Removendo .destaque e adicionando .escuro
caixa.classList.remove('destaque');
console.log('Contém .destaque após remove?', caixa.classList.contains('destaque')); // false

caixa.classList.add('escuro');
console.log('Contém .escuro após add?', caixa.classList.contains('escuro')); // true

// Usando toggle para alternar: remove .escuro (estava ativa) e ativa .destaque (estava inativa)
caixa.classList.toggle('escuro');
caixa.classList.toggle('destaque');
console.log('Classes finais aplicadas:', caixa.className);

/*
RESPOSTA DISCURSIVA (Quando é melhor usar style e quando é melhor usar classList?):

- Quando usar .style:
  É melhor para ajustes pontuais e valores dinâmicos calculados em tempo real pelo JavaScript — como mover um elemento conforme as coordenadas (X, Y) do mouse, definir a largura percentual de uma barra de progresso ou aplicar uma cor escolhida pelo usuário.

- Quando usar .classList:
  É a melhor opção na maioria dos casos para alternar estados visuais (como tema escuro, item selecionado, destaque ou alerta de erro), pois mantém o código organizado (CSS cuida da aparência e JS controla o comportamento), permite aplicar várias regras de estilo de uma só vez e facilita a manutenção e reutilização.
*/