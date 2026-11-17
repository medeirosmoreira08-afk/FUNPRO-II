const fila = document.getElementById('fila');
const segundo = document.getElementById('segundo');
const joao = fila.lastElementChild; // Seleciona o <li>João</li>

// Criando os novos itens da lista
const liAna = document.createElement('li');
liAna.innerText = 'Ana';

const liCarlos = document.createElement('li');
liCarlos.innerText = 'Carlos';

const liBeatriz = document.createElement('li');
liBeatriz.innerText = 'Beatriz';

// 1. prepend: insere no INÍCIO de <ol> (antes de Maria)
fila.prepend(liAna);

// 2. before: insere ANTES de João (ficando entre Maria e João)
joao.before(liCarlos);

// 3. append: insere no FINAL de <ol> (depois de João)
fila.append(liBeatriz);

// 4. Criando o parágrafo e passando uma STRING no append()
const paragrafoFim = document.createElement('p');
paragrafoFim.append('Fim da fila');

// 5. after: insere o parágrafo DEPOIS da tag <ol> (como irmão, não dentro da lista)
fila.after(paragrafoFim);

/*
OBSERVAÇÃO SOBRE PASSAR UMA STRING EM VEZ DE UM ELEMENTO:
Diferente de appendChild() (que dá erro se receber texto puro), os métodos append, prepend, before e after aceitam strings diretamente e as convertem automaticamente em nós de texto (Text nodes).
- No código acima, usar paragrafoFim.append('Fim da fila') insere o texto puro dentro do <p>.
- Porém, se passássemos uma string direto na lista — como fila.prepend('Ana') —, o texto entraria solto dentro da <ol> sem tag <li> e não receberia numeração (1., 2., 3.).
*/