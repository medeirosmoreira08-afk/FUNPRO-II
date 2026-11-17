const inputTarefa = document.getElementById('nova-tarefa');
const btnAdicionar = document.getElementById('btn-adicionar');
const listaTarefas = document.getElementById('lista-tarefas');
const contadorEl = document.getElementById('contador');

// 5. Atualiza o contador "X tarefas pendentes"
function atualizarContador() {
  const pendentes = listaTarefas.querySelectorAll('li:not(.concluida)').length;
  contadorEl.innerText = `${pendentes} tarefas pendentes`;
}

// 1, 2 e 4. Cria e adiciona uma nova tarefa com botão "x"
function adicionarTarefa() {
  const texto = inputTarefa.value.trim();

  // Ignora textos vazios
  if (texto === '') {
    inputTarefa.focus();
    return;
  }

  const li = document.createElement('li');

  const btnRemover = document.createElement('button');
  btnRemover.innerText = 'x';
  btnRemover.className = 'btn-remover';

  // Insere o texto e o botão "x" dentro do <li> usando append()
  li.append(texto, btnRemover);
  listaTarefas.append(li);

  // Limpa o input, devolve o foco e atualiza o contador
  inputTarefa.value = '';
  inputTarefa.focus();
  atualizarContador();
}

// Adiciona ao clicar no botão "Adicionar"
btnAdicionar.addEventListener('click', adicionarTarefa);

// Adiciona ao pressionar Enter dentro do input
inputTarefa.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    adicionarTarefa();
  }
});

// 3, 4 e 6. Único listener na <ul> diferenciando clique no item vs botão "x" via e.target
listaTarefas.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-remover')) {
    e.target.parentElement.remove();
    atualizarContador();
  } else if (e.target.tagName === 'LI') {
    e.target.classList.toggle('concluida');
    atualizarContador();
  }
});

/*
====================================================================
RESPOSTA ITEM 4 (Verificação e depuração - <script> no <head>):

1. Por que o código para de funcionar quando <script src="js/app.js"></script> é movido para o <head>?
Porque o navegador lê e executa o HTML de cima para baixo. Quando o <script> está no <head> sem atributos especiais, o JavaScript é executado imediatamente antes de o navegador construir o <body>. Assim, chamadas como document.getElementById('nova-tarefa') retornam null, gerando o erro "Cannot read properties of null (reading 'addEventListener')" no Console.

2. Duas formas de corrigir mantendo o <script> no <head>:
- Forma 1 (atributo defer no HTML):
  <script src="js/app.js" defer></script>
  O atributo "defer" faz o navegador baixar o script em paralelo, mas adia a sua execução até que todo o documento HTML tenha sido completamente analisado (parsed).

- Forma 2 (evento DOMContentLoaded no JS):
  document.addEventListener('DOMContentLoaded', () => {
    // Todo o código de seleção de elementos e addEventListener fica aqui dentro
  });
  Esse evento aguarda a árvore DOM estar totalmente carregada e pronta antes de executar o código JavaScript.
====================================================================
*/