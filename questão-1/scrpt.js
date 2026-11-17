const paragrafoNegrito = document.getElementById("negrito");
console.log(paragrafoNegrito);
const todosLi = document.getElementsByTagName("li");
console.log(todosLi);
const elementosCentralizados = document.getElementsByClassName("centralizado");
console.log(elementosCentralizados);
const linkSegundoParagrafo = document.querySelector("p:nth-of-type(2) a");
console.log(linkSegundoParagrafo);
const todosLiItem = document.querySelectorAll("li.item");
console.log(todosLiItem);
document.getElementsByTagName("p")[0].style.color = "yellow";
document.getElementById("negrito").style.color = "yellow";
document.getElementsByClassName("italico")[0].style.color = "yellow";
/*
Qual método retorna um único elemento e quais retornam uma coleção?
Retornam um único elemento: getElementById e querySelector.
Retornam uma coleção: getElementsByTagName, getElementsByClassName (HTMLCollection) e querySelectorAll (NodeList).

O que acontece se você tentar fazer .style.color direto numa coleção?
Ocorre um erro (TypeError), pois a propriedade .style existe apenas em elementos HTML individuais, e não na coleção inteira. Para funcionar, é necessário acessar um elemento pelo índice (ex: colecao[0].style.color = "yellow") ou percorrer a lista com um loop.
*/