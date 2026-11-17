const bloco = document.getElementById('bloco');
const infoEl = document.getElementById('info');

let posX = 100;
let posY = 100;

const cores = ['#2563eb', '#dc2626', '#16a34a', '#d97706', '#7c3aed', '#0891b2'];
let indiceCor = 0;

// 1 e 2. Move o bloco 10px com as setas e exibe e.key e e.timeStamp
document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      posY -= 10;
      e.preventDefault();
      break;
    case 'ArrowDown':
      posY += 10;
      e.preventDefault();
      break;
    case 'ArrowLeft':
      posX -= 10;
      e.preventDefault();
      break;
    case 'ArrowRight':
      posX += 10;
      e.preventDefault();
      break;
  }

  bloco.style.top = `${posY}px`;
  bloco.style.left = `${posX}px`;

  infoEl.innerText = `Última tecla: ${e.key} | timeStamp: ${e.timeStamp.toFixed(2)} ms`;
});

// 3. Troca a cor do bloco sempre que qualquer tecla for solta
document.addEventListener('keyup', () => {
  indiceCor = (indiceCor + 1) % cores.length;
  bloco.style.backgroundColor = cores[indiceCor];
});