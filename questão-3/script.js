const usarInnerHTML = () => {
  const saida = document.getElementById('saida');
  saida.innerHTML = '<strong>Olá, Universo</strong>';
};

const usarInnerText = () => {
  const saida = document.getElementById('saida');
  saida.innerText = '<strong>Olá, Universo</strong>';
};

/*
RESPOSTA DISCURSIVA:

1. Diferença observada:
- Com innerHTML, o navegador interpreta a string como marcação HTML real. Por isso, a tag <strong> é renderizada e o texto aparece em negrito ("Olá, Universo").
- Com innerText, o navegador trata toda a string literalmente como texto puro. As tags <strong> não são processadas e aparecem escritas na tela ("<strong>Olá, Universo</strong>").

2. Por que usar innerHTML com texto digitado pelo usuário é perigoso?
- Porque expõe a aplicação a ataques de XSS (Cross-Site Scripting). Se um usuário inserir código malicioso (como tags <script> ou atributos de evento como <img src="x" onerror="...">) e esse conteúdo for inserido na página via innerHTML, o navegador executará o script invasor, permitindo o roubo de dados de sessão (cookies/tokens) ou manipulação maliciosa da página.
*/