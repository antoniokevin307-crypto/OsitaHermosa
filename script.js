const reasons = [
  /* Fila 1: O-S-I-T-A-M-I-A-N-O */
  "Osita mía, sos el amor más bonito que tengo.",
  "Siempre me das paz cuando estoy a tu lado.",
  "Inmensamente agradezco tenerte conmigo.",
  "Tu sonrisa me alegra hasta el día más pesado.",
  "A tu lado todo se siente más fácil.",
  "Mi corazón se siente seguro con vos.",
  "Iluminas mi vida con tu forma de ser.",
  "Amo cómo me mirás cuando hablamos.",
  "Nunca me canso de decirte que te amo.",
  "Osita, sos mi mayor bendición.",

  /* Fila 2: S-O-L-O-S-O-N-C-I-E */
  "Sos la persona que quiero abrazar siempre.",
  "Oír tu voz me cambia el ánimo al instante.",
  "Lo que siento por vos es sincero y fuerte.",
  "Orgulloso estoy de tener tu amor.",
  "Sos mi lugar favorito en este mundo.",
  "Ordenás mi corazón cuando todo está revuelto.",
  "No hay día que no piense en vos.",
  "Con vos aprendí lo que es amar de verdad.",
  "Ilusiona mi vida cada plan que hacemos juntos.",
  "Eres mi alegría constante.",

  /* Fila 3: N-R-A-Z-O-N-E-S-P-O */
  "Nada me hace más feliz que verte sonreír.",
  "Rezo cada día por tu bienestar.",
  "Amo tu forma tan dulce de hablarme.",
  "Zonas de mi corazón llevan tu nombre.",
  "Orgulloso me siento de caminar contigo.",
  "Nunca dudes de lo importante que sos para mí.",
  "Eres mi paz en medio de todo.",
  "Sos mi fuerza cuando me siento débil.",
  "Pensar en vos me llena el pecho de amor.",
  "Ocupar tu mano con la mía me hace sentir completo.",

  /* Fila 4: R-Q-U-E-M-I-A-M-O-R */
  "Razones me sobran para amarte cada día.",
  "Quiero cuidarte y estar para vos siempre.",
  "Un abrazo tuyo me calma el alma.",
  "Eres el regalo más lindo que tengo.",
  "Me encanta cómo me hacés sentir amado.",
  "Imaginar mi vida sin vos no tiene sentido.",
  "A tu lado quiero seguir creciendo.",
  "Mi felicidad tiene tu nombre.",
  "Ocupar un lugar en tu corazón es mi mayor orgullo.",
  "Reafirmo cada día que te amo con todo mi ser.",

  /* Fila 5: N-O-C-A-B-E-E-N-U-N */
  "Nunca voy a soltar tu mano.",
  "Orgulloso camino con vos en mi vida.",
  "Cada latido mío late por vos.",
  "Amarte es lo más natural que me nace.",
  "Bendigo el día en que llegaste a mi vida.",
  "Eres mi amor verdadero.",
  "Eres mi pensamiento favorito.",
  "Nunca me falta amor cuando estoy con vos.",
  "Un beso tuyo me llena por completo.",
  "Nada se compara a lo que siento por vos.",

  /* Fila 6: A-P-A-G-I-N-A-T-E-A */
  "Amarte es lo más sincero que me pasa.",
  "Para mí sos mi prioridad.",
  "Agradezco cada momento que compartimos.",
  "Ganas de abrazarte me sobran todos los días.",
  "Imagino un futuro hermoso a tu lado.",
  "Nunca me canso de elegirte.",
  "A tu lado quiero estar siempre.",
  "Te amo con hechos y con palabras.",
  "Eres la dueña de mi corazón.",
  "Afortunado soy por tener tu amor.",

  /* Fila 7: M-O-C-O-N-M-I-A-L-M-A */
  "Mi vida cambió desde que estás conmigo.",
  "Orgulloso me siento de llamarte mi amor.",
  "Contigo todo se siente verdadero.",
  "Osita, sos mi persona favorita.",
  "Nunca olvidés lo mucho que valés para mí.",
  "Mi corazón es tuyo.",
  "Inmensamente feliz soy cuando estoy con vos.",
  "Amo cada detalle tuyo.",
  "Lo nuestro es fuerte y sincero.",
  "Mi lugar favorito es a tu lado.",
  "Alma mía, te amo con todo lo que soy."
];


// Array de imágenes - se duplican para tener 100
const baseImages = [
  "img/WhatsApp Image 2026-02-05 at 7.45.25 PM.jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.25 PM (1).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.26 PM.jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.26 PM (1).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.26 PM (2).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.26 PM (3).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.26 PM (4).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.26 PM (5).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.26 PM (6).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.27 PM.jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.27 PM (1).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.27 PM (2).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.27 PM (3).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.27 PM (4).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.27 PM (5).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.28 PM.jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.28 PM (1).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.28 PM (2).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.28 PM (3).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.28 PM (4).jpeg"
];

// Duplicar imágenes para tener exactamente 100
const images = [];
for (let i = 0; i < 100; i++) {
  images.push(baseImages[i % baseImages.length]);
}

let currentCardIndex = 0;

// ============================================
// ELEMENTOS DEL DOM
// ============================================

const initialScreen = document.getElementById('initialScreen');
const cardScreen = document.getElementById('cardScreen');
const messageScreen = document.getElementById('messageScreen');
const finalImageScreen = document.getElementById('finalImageScreen');
const finalScreen = document.getElementById('finalScreen');
const coverImage = document.getElementById('coverImage');
const largeCard = document.getElementById('largeCard');
const cardLetter = largeCard.querySelector('.card-letter');
const cardContent = largeCard.querySelector('.card-content');
const nextBtn = document.getElementById('nextBtn');
const skipBtn = document.getElementById('skipBtn');
const progressFill = document.getElementById('progressFill');
const particlesContainer = document.getElementById('particlesContainer');
const continueBtn = document.getElementById('continueBtn');
const messageParticles = document.getElementById('messageParticles');
const finalImageParticles = document.getElementById('finalImageParticles');

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

function startExperience() {
  initialScreen.classList.add('hidden');
  cardScreen.classList.remove('hidden');
  displayCard(0);
}

function displayCard(index) {
  if (index >= reasons.length) {
    showMessageScreen();
    return;
  }

  currentCardIndex = index;
  const reason = reasons[index];
  const letter = reason.charAt(0);
  const bgImage = images[index];

  // Limpiar partículas anteriores
  particlesContainer.innerHTML = '';

  // Actualizar fondo con imagen difuminada
  largeCard.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('${bgImage}')`;
  largeCard.style.backgroundSize = 'cover';
  largeCard.style.backgroundPosition = 'center';

  // Actualizar contenido
  cardLetter.textContent = letter;
  cardContent.textContent = reason;

  // Actualizar barra de progreso
  const progress = ((index + 1) / reasons.length) * 100;
  progressFill.style.width = progress + '%';

  // Actualizar estado de botones
  skipBtn.disabled = index === 0;
  nextBtn.disabled = false; // Siempre habilitado para poder llegar al mensaje

  // Crear corazones flotantes
  createHearts();
}

function createHearts() {
  const heartCount = Math.floor(Math.random() * 3) + 3;

  for (let i = 0; i < heartCount; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.textContent = '🤍';

      const randomX = Math.random() * 400 - 200;
      heart.style.setProperty('--tx', randomX + 'px');

      const randomLeft = Math.random() * 100;
      heart.style.left = randomLeft + '%';
      heart.style.bottom = '10%';

      const randomDelay = Math.random() * 0.3;
      heart.style.animationDelay = randomDelay + 's';

      particlesContainer.appendChild(heart);

      // Remover después de la animación
      setTimeout(() => heart.remove(), 2500);
    }, i * 200);
  }
}

function nextCard() {
  if (currentCardIndex < reasons.length - 1) {
    displayCard(currentCardIndex + 1);
  } else {
    // Última tarjeta - mostrar pantalla de mensaje
    showMessageScreen();
  }
}

function prevCard() {
  if (currentCardIndex > 0) {
    displayCard(currentCardIndex - 1);
  }
}

function showFinalScreen() {
  cardScreen.classList.add('hidden');
  finalScreen.classList.remove('hidden');
  displayFinalCards();
}

function showMessageScreen() {
  cardScreen.classList.add('hidden');
  messageScreen.classList.remove('hidden');
  createMessageHearts();
}

function createMessageHearts() {
  messageParticles.innerHTML = '';
  
  // Crear muchos corazones flotando aleatoriamente
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.textContent = '🤍';

      const randomX = Math.random() * 600 - 300;
      heart.style.setProperty('--tx', randomX + 'px');

      const randomLeft = Math.random() * 100;
      heart.style.left = randomLeft + '%';
      heart.style.bottom = '-50px';
      heart.style.opacity = Math.random() * 0.5 + 0.3;

      const randomDelay = Math.random() * 0.5;
      heart.style.animationDelay = randomDelay + 's';
      heart.style.animationDuration = (Math.random() * 1 + 2) + 's';

      messageParticles.appendChild(heart);

      setTimeout(() => heart.remove(), 3500);
    }, i * 150);
  }
}

function createFinalImageHearts() {
  finalImageParticles.innerHTML = '';
  
  // Crear muchos corazones para la pantalla final
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.textContent = '🤍';

      const randomX = Math.random() * 800 - 400;
      heart.style.setProperty('--tx', randomX + 'px');

      const randomLeft = Math.random() * 100;
      heart.style.left = randomLeft + '%';
      heart.style.bottom = '-50px';
      heart.style.opacity = Math.random() * 0.6 + 0.2;

      const randomDelay = Math.random() * 0.8;
      heart.style.animationDelay = randomDelay + 's';
      heart.style.animationDuration = (Math.random() * 1.5 + 2.5) + 's';

      finalImageParticles.appendChild(heart);

      setTimeout(() => heart.remove(), 4500);
    }, i * 100);
  }
}

function displayFinalCards() {
  const container = document.getElementById('cards');
  container.innerHTML = '';

  reasons.forEach((text, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    
    // Agregar imagen de fondo
    const bgImage = images[index];
    card.style.backgroundImage = `linear-gradient(135deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.45)), url('${bgImage}')`;

    const letter = document.createElement('div');
    letter.className = 'letter';
    letter.textContent = text.charAt(0);

    const content = document.createElement('div');
    content.className = 'text';
    content.textContent = text;

    card.appendChild(letter);
    card.appendChild(content);
    container.appendChild(card);

    // Agregar evento click para abrir modal
    card.addEventListener('click', () => openCardModal(text, bgImage, text.charAt(0)));

    // Animar cards con delay
    setTimeout(() => {
      card.classList.add('visible');
    }, index * 50);
  });
}

function openCardModal(message, backgroundImage, letter) {
  const modal = document.getElementById('cardModal');
  const modalImage = document.getElementById('modalCardImage');
  const modalLetter = document.getElementById('modalCardLetter');
  const modalMessage = document.getElementById('modalCardMessage');
  
  modalImage.style.backgroundImage = `url('${backgroundImage}')`;
  modalLetter.textContent = letter;
  modalMessage.textContent = message;
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeCardModal() {
  const modal = document.getElementById('cardModal');
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

function showFinalImageScreen() {
  finalScreen.classList.add('hidden');
  finalImageScreen.classList.remove('hidden');
  createFinalImageHearts();
}

// ============================================
// EVENT LISTENERS
// ============================================

// Modal listeners
const cardModal = document.getElementById('cardModal');
const cardModalClose = document.querySelector('.card-modal-close');
const cardModalOverlay = document.querySelector('.card-modal-overlay');

cardModalClose.addEventListener('click', closeCardModal);
cardModalOverlay.addEventListener('click', closeCardModal);

// Cerrar modal con ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !cardModal.classList.contains('hidden')) {
    closeCardModal();
  }
});

coverImage.addEventListener('click', startExperience);
coverImage.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    startExperience();
  }
});

nextBtn.addEventListener('click', nextCard);
skipBtn.addEventListener('click', prevCard);
continueBtn.addEventListener('click', () => {
  messageScreen.classList.add('hidden');
  finalScreen.classList.remove('hidden');
  displayFinalCards();
});

// Navegación con teclado
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' && !cardScreen.classList.contains('hidden')) {
    nextCard();
  } else if (e.key === 'ArrowLeft' && !cardScreen.classList.contains('hidden')) {
    prevCard();
  } else if (e.key === 'Enter' && !messageScreen.classList.contains('hidden')) {
    continueBtn.click();
  }
});

