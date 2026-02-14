const reasons = [
  /* Fila 1: O-S-I-T-A-M-I-A-N-O */
  "Osita mía, eres mi alma gemela.",
  "Siempre te veo feliz y eres mi sonrisa.",
  "Infinitamente te amo cada día.",
  "Tu amor completa todo en mí.",
  "Amo profundamente quién eres tú.",
  "Mi vida comienza cada día contigo.",
  "Inspiras la mejor versión de mí mismo.",
  "Adoro cada momento vivido a tu lado.",
  "Nunca dejaré de amarte jamás.",
  "Osita, eres mi destino marcado.",
  /* Fila 2: S-O-L-O-S-O-N-C-I-E */
  "Somos un amor verdadero y real.",
  "Ofreces lo que siempre he buscado.",
  "Loco estoy de amor por ti.",
  "Osas con tu corazón sin medida.",
  "Siempre juntos es mi único deseo.",
  "Observo esperanza en tu mirada certera.",
  "Nunca te soltaré de mi mano.",
  "Conectamos de una forma única.",
  "Ilusiones todas incluyen tu nombre.",
  "Eres exactamente todo lo que necesito.",
  /* Fila 3: N-R-A-Z-O-N-E-S-P-O */
  "Nada se compara a lo que siento.",
  "Resides completamente en mi alma.",
  "Amo tu esencia, alma y ser.",
  "Zozobra desaparece cuando te veo.",
  "Ojalá envejezcamos juntos para siempre.",
  "Nada existe sin tu presencia acá.",
  "Eternamente estaremos juntos siempre.",
  "Sinceramente te amo con todo ser.",
  "Presencia tuya es mi mayor alegría.",
  "Observo amor en cada detalle tuyo.",
  /* Fila 4: R-Q-U-E-M-I-A-M-O-R */
  "Razones sobran para amarte siempre.",
  "Quiero construir un futuro a tu lado.",
  "Un abrazo tuyo lo cura todo.",
  "Eres mi milagro cotidiano.",
  "Me completas de una manera única.",
  "Imaginar mi vida sin ti ya no es opción.",
  "A tu amor le entregué mi corazón.",
  "Mi paz tiene tu nombre.",
  "Oto sentido tiene la vida sin ti.",
  "Reafirmo cada día que te amo.",
  /* Fila 5: N-O-C-A-B-E-E-N-U-N */
  "Nunca me sentí tan pleno.",
  "Ojalá todos los días comiencen contigo.",
  "Conecta tu alma con la mía.",
  "Amas con tu corazón sin medida.",
  "Brillas intensamente en mi vida diaria.",
  "Eres mi verdadero amor eterno.",
  "Eterno es el amor que siento por ti.",
  "Noche y día pienso en ti siempre.",
  "Undo los días sin verte contigo.",
  "Nunca dejaré ir tu mano jamás.",
  /* Fila 6: A-P-A-G-I-N-A-T-E-A */
  "Amor sincero es lo que siento siempre.",
  "Para siempre te amaré sin medida.",
  "Abrazo el futuro si vienes conmigo.",
  "Giardina mi alma solo tu presencia.",
  "Iré contigo a donde sea necesario.",
  "Nacemos juntos en cada amanecer.",
  "Ardo en fuego de amor por ti.",
  "Te amaré sin fin ni término.",
  "Eres la respuesta exacta de mi alma.",
  "Afortunado me siento cada día.",
  /* Fila 7: M-O-C-O-N-M-I-A-L-M */
  "Mi corazón late solo por ti.",
  "Observo esperanza en tu mirada.",
  "Cuarenta razones tengo en tu sonrisa.",
  "Osita, eres mi promesa más bonita.",
  "Nunca imaginé amar de esta manera.",
  "Mi mundo gira alrededor tuyo.",
  "Increíble es lo que sentimos juntos.",
  "Amo cada segundo junto a ti.",
  "Lindo es amar como nosotros amamos.",
  "Mi felicidad es verte feliz.",
  "Alma mía, te amo para siempre."
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

