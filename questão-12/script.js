const form = document.getElementById('form-cadastro');
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const textareaComentario = document.getElementById('comentario');
const contadorEl = document.getElementById('contador');
const mensagemEl = document.getElementById('mensagem');

// 1. Eventos focus e blur: destaca o campo ativo com borda azul e remove ao sair
const campos = [inputNome, inputEmail, textareaComentario];

campos.forEach((campo) => {
  campo.addEventListener('focus', () => {
    campo.classList.add('em-foco');
  });

  campo.addEventListener('blur', () => {
    campo.classList.remove('em-foco');
  });
});

// 2. Evento input: contador ao vivo no formato "X/140" (vermelho acima de 140)
textareaComentario.addEventListener('input', () => {
  const totalCaracteres = textareaComentario.value.length;
  contadorEl.innerText = `${totalCaracteres}/140`;

  if (totalCaracteres > 140) {
    contadorEl.classList.add('limite-excedido');
  } else {
    contadorEl.classList.remove('limite-excedido');
  }
});

// 3. Evento submit: valida campos vazios, impede reload e limpa o formulário
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = inputNome.value.trim();
  const email = inputEmail.value.trim();
  const comentario = textareaComentario.value.trim();

  if (!nome || !email || !comentario) {
    mensagemEl.innerText = 'Erro: preencha todos os campos antes de enviar.';
    mensagemEl.className = 'erro';
    return;
  }

  mensagemEl.innerText = `Cadastro de ${nome} realizado!`;
  mensagemEl.className = 'sucesso';

  // Limpa os campos e reseta o contador
  form.reset();
  contadorEl.innerText = '0/140';
  contadorEl.classList.remove('limite-excedido');
});