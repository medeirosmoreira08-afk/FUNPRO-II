const disciplinas = ['Algoritmos', 'Banco de Dados', 'Engenharia de Software', 'Redes'];

// 1. Criando o <h2> com createElement, innerText e appendChild
const titulo = document.createElement('h2');
titulo.innerText = 'Minhas disciplinas';
document.body.appendChild(titulo);
// 2. Criando a <ul> e preenchendo os <li> um a um com forEach e appendChild
const lista = document.createElement('ul');
disciplinas.forEach((disciplina) => {
  const item = document.createElement('li');
  item.innerText = disciplina;
  lista.appendChild(item);
});
document.body.appendChild(lista);
// DESAFIO: Refazendo a lista inserindo todos os <li> de uma vez
const tituloDesafio = document.createElement('h3');
tituloDesafio.innerText = 'Desafio (inserção única com append):';
const listaDesafio = document.createElement('ul');
// Transforma cada string do array em um elemento <li> pronto
const elementosLi = disciplinas.map((disciplina) => {
  const li = document.createElement('li');
  li.innerText = disciplina;
  return li;
});
// O spread operator (...) passa todos os <li> como argumentos simultâneos para o append()
listaDesafio.append(...elementosLi);
document.body.append(tituloDesafio, listaDesafio);