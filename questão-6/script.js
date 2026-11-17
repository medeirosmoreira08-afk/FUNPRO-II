const avisos = document.getElementById('avisos');
// Guardamos o HTML inicial para conseguir demonstrar os passos 1 e 2 em sequência
const htmlOriginal = avisos.innerHTML;

// ============================================================
// 1. Removendo com querySelectorAll + remove()
// ============================================================
const temporariosPasso1 = document.querySelectorAll('.temporario');
temporariosPasso1.forEach((aviso) => {
  aviso.remove();
});
console.log('Após passo 1 (remove):', avisos.innerHTML);

// ============================================================
// 2. Restaurando o HTML e removendo com removeChild()
// ============================================================
avisos.innerHTML = htmlOriginal;

const temporariosPasso2 = avisos.querySelectorAll('.temporario');
temporariosPasso2.forEach((aviso) => {
  // removeChild() precisa ser chamado a partir do elemento pai (avisos)
  avisos.removeChild(aviso);
});
console.log('Após passo 2 (removeChild):', avisos.innerHTML);

// ============================================================
// 3. Criando nova <div> sobre você, estilizando e removendo após 3s
// ============================================================
const divSobreMim = document.createElement('div');
const paragrafoSobreMim = document.createElement('p');

paragrafoSobreMim.innerText = 'Olá! Meu nome é Pablo, estou estudando JavaScript e manipulação do DOM.';
divSobreMim.appendChild(paragrafoSobreMim);

// Estilizando a <div>
divSobreMim.style.backgroundColor = '#e0f2fe';
divSobreMim.style.border = '2px solid #0284c7';
divSobreMim.style.borderRadius = '8px';
divSobreMim.style.padding = '12px 16px';
divSobreMim.style.marginTop = '16px';
divSobreMim.style.color = '#0c4a6e';

document.body.appendChild(divSobreMim);

// Remove a <div> após 3 segundos (3000 milissegundos)
setTimeout(() => {
  divSobreMim.remove();
  console.log('Div sobre mim removida após 3 segundos.');
}, 3000);