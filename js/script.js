/* CHUVA DE CORAÇÕES */

document.addEventListener("DOMContentLoaded", () => {
  const heartsContainer = document.getElementById("hearts-container");

  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '💖';

    // Posição aleatória na largura da tela
    heart.style.left = Math.random() * 100 + 'vw';

    // Tamanho aleatório
    const size = Math.random() * 10 + 20;
    heart.style.fontSize = `${size}px`;

    // Duração aleatória
    const duration = Math.random() * 2 + 3;
    heart.style.animationDuration = `${duration}s`;

    document.body.appendChild(heart);

    // Remove o coração após a animação
    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }

  // Cria um novo coração a cada 200ms
  setInterval(createHeart, 200);
});

/* CONTROLES */

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#mainSlider');
    const carouselInstance = bootstrap.Carousel.getOrCreateInstance(carousel);

    const slides = carousel.querySelectorAll('.carousel-item img');

    slides.forEach(img => {
      img.style.cursor = 'pointer'; // cursor de clique
      img.addEventListener('click', () => {
        carouselInstance.next();
      });
    });
  });

/* TEMPO DE RELACIONAMENTO */

const dataInicio = new Date("2025-09-22T00:00:00");

function atualizarContador() {
  const agora = new Date();

  let anos = agora.getFullYear() - dataInicio.getFullYear();
  let meses = agora.getMonth() - dataInicio.getMonth();
  let dias = agora.getDate() - dataInicio.getDate();
  let horas = agora.getHours() - dataInicio.getHours();
  let minutos = agora.getMinutes() - dataInicio.getMinutes();
  let segundos = agora.getSeconds() - dataInicio.getSeconds();

  // Corrigir valores negativos (fazendo "empréstimos" de unidade maior)
  if (segundos < 0) {
    segundos += 60;
    minutos--;
  }
  if (minutos < 0) {
    minutos += 60;
    horas--;
  }
  if (horas < 0) {
    horas += 24;
    dias--;
  }
  if (dias < 0) {
    meses--;
    const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
    dias += mesAnterior.getDate();
  }
  if (meses < 0) {
    meses += 12;
    anos--;
  }

  // Exibir no HTML
  document.getElementById("contador").innerHTML = `
      ${anos} ano${anos !== 1 ? 's' : ''}, 
      ${meses} mes${meses !== 1 ? 'es' : ''}, 
      ${dias} dia${dias !== 1 ? 's' : ''}, 
      ${horas} hora${horas !== 1 ? 's' : ''}, 
      ${minutos} minuto${minutos !== 1 ? 's' : ''} e 
      ${segundos} segundo${segundos !== 1 ? 's' : ''}
    `;
}

atualizarContador();
setInterval(atualizarContador, 1000);

/* TROCA DE TELA */

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnEntrar');
    const tela = document.getElementById('telaInicial');

    btn.addEventListener('click', () => {
      tela.style.opacity = '0';
      tela.style.transition = 'opacity 0.8s ease';
      setTimeout(() => {
        tela.style.display = 'none';
      }, 800);
    });
  });
