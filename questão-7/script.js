const foto = document.getElementById('foto');

// 1. Acessando diretamente como propriedades do objeto DOM
console.log('foto.alt:', foto.alt);
console.log('foto.autor:', foto.autor);

/*
EXPLICAÇÃO (Por que foto.autor dá undefined?):
O navegador cria automaticamente propriedades no objeto DOM apenas para os atributos HTML padrão reconhecidos pela especificação daquela tag (como "id", "src" e "alt" na tag <img>).
Como "autor" é um atributo personalizado (não padrão do HTML), o navegador o mantém na lista de atributos HTML do elemento, mas não cria uma propriedade correspondente diretamente no objeto JavaScript (HTMLImageElement), retornando undefined.
*/

// 2. Lendo o atributo personalizado com getAttribute
const autor = foto.getAttribute('autor');
console.log('Atributo autor via getAttribute:', autor);

// 3. Alterando src e criando title com setAttribute
foto.setAttribute('src', 'https://picsum.photos/300');
foto.setAttribute('title', 'Imagem aleatória de 300x300 pixels');

// 4. Verificando e removendo o atributo alt
if (foto.hasAttribute('alt')) {
  foto.removeAttribute('alt');
  console.log('Atributo "alt" encontrado e removido com sucesso.');
}

// 5. Percorrendo foto.attributes e listando nome = valor
console.log('--- Lista final de atributos da imagem ---');
for (const attr of foto.attributes) {
  console.log(`${attr.name} = ${attr.value}`);
}