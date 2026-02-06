const reasons = [
  "Osita mía, tu ternura abraza mi alma.",
  "Sonreír es inevitable cuando pienso en ti.",
  "Iluminas mis días incluso en los momentos grises.",
  "Tu voz es el refugio donde siempre quiero volver.",
  "A tu lado todo cobra sentido.",
  "Me haces sentir amado tal como soy.",
  "Incluso en silencio, sé que me entiendes.",
  "Amo profundamente cada parte de ti.",
  "Nunca imaginé amar de esta manera.",
  "Observo el mundo distinto desde que estás en mi vida.",
  "Siempre estás presente en mis pensamientos.",
  "Ojalá todos los días comiencen contigo.",
  "Llenas mi corazón de paz.",
  "Ocurre algo mágico cuando sonríes.",
  "Sabes amar con el corazón abierto.",
  "Ofreciste amor cuando más lo necesitaba.",
  "Nada se compara a lo que siento por ti.",
  "Conectamos de una forma única.",
  "Inspiraste la mejor versión de mí.",
  "Eres mi lugar seguro.",
  "No hay nadie como tú.",
  "Respiro tranquilidad cuando estoy contigo.",
  "Amarte es lo más natural que he hecho.",
  "Zonas oscuras de mi vida se iluminaron por ti.",
  "Obsesión bonita es pensarte.",
  "Nunca me canso de elegirte.",
  "Eres el amor que siempre soñé.",
  "Siempre te elegiría a ti.",
  "Porque contigo soy auténtico.",
  "Ocupas un lugar eterno en mi corazón.",
  "Razones sobran para amarte.",
  "Quiero construir un futuro a tu lado.",
  "Un abrazo tuyo lo cura todo.",
  "Eres mi milagro cotidiano.",
  "Me completas de una manera única.",
  "Imaginar mi vida sin ti ya no es opción.",
  "A tu amor le entregué mi corazón.",
  "Mi paz tiene tu nombre.",
  "Observo amor en cada detalle tuyo.",
  "Reafirmo cada día que te amo.",
  "No hay palabras suficientes para describirte.",
  "Ofreces amor sin medida.",
  "Cuidas mi corazón con ternura.",
  "A tu lado el tiempo se detiene.",
  "Brillas incluso sin darte cuenta.",
  "Eres inmensamente especial para mí.",
  "En cada latido estás tú.",
  "Nunca me sentí tan pleno.",
  "Una vida no basta para amarte.",
  "No hay dudas cuando se trata de ti.",
  "Amo quién soy cuando estoy contigo.",
  "Porque lo nuestro es infinito.",
  "Amarte es mi decisión diaria.",
  "Gracias por existir en mi vida.",
  "Inmensamente agradezco tu amor.",
  "Nunca sueltes mi mano.",
  "A tu lado todo es hogar.",
  "Te amo más de lo que puedo explicar.",
  "Eres mi certeza.",
  "Amo tu esencia, tu alma y tu corazón.",
  "Mi vida es más bonita contigo.",
  "Ojalá siempre seas tú.",
  "Creo profundamente en nosotros.",
  "Observo esperanza en tu mirada.",
  "Nunca dejaré de amarte.",
  "Mi corazón te pertenece.",
  "Incondicionalmente estoy para ti.",
  "A tu amor me entrego por completo.",
  "Libre me siento cuando estoy contigo.",
  "Mi alma te reconoce.",
  "Amarte es mi destino.",
  "Eres mi promesa más bonita.",
  "Siempre quiero cuidarte.",
  "Todo lo que soy nace del amor que te tengo.",
  "Obsesión sana es elegirte.",
  "Esto lo hice con todo mi corazón.",
  "Solo tú inspiras este amor.",
  "Para siempre quiero caminar contigo.",
  "A tu lado quiero todo.",
  "Real es lo que siento por ti.",
  "Amor como el nuestro no se acaba.",
  "Tu amor me sostiene.",
  "Infinito es lo que siento por ti.",
  "Siempre serás tú.",
  "Inmensamente feliz contigo.",
  "Eres mi elección diaria.",
  "Mi lugar seguro eres tú.",
  "Porque te amo con el alma.",
  "Resides en cada parte de mí.",
  "Eres mi todo.",
  "Mi amor es completamente tuyo.",
  "Inevitable fue amarte.",
  "Amor puro es el que siento por ti.",
  "Mi vida tiene tu nombre.",
  "Ojalá nunca olvides cuánto te amo.",
  "Razones sobran, y aun así me faltan.",
  "Eres mi amor eterno.",
  "Todo lo que soy te pertenece.",
  "En cada sueño estás tú.",
  "Reafirmo que te amaré siempre."
];

// Array de imágenes (100 imágenes para cada razón)
const images = [
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
  "img/WhatsApp Image 2026-02-05 at 7.45.28 PM (4).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.28 PM (5).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.28 PM (6).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.29 PM.jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.29 PM (1).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.29 PM (2).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.29 PM (3).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.29 PM (4).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.29 PM (5).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.30 PM.jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.30 PM (1).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.30 PM (2).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.30 PM (3).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.30 PM (4).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.31 PM.jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.31 PM (1).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.31 PM (2).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.31 PM (3).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.31 PM (4).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.31 PM (5).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.32 PM.jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.32 PM (1).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.32 PM (2).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.32 PM (3).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.32 PM (4).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.32 PM (5).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.33 PM.jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.33 PM (1).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.33 PM (2).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.33 PM (3).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.33 PM (4).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.34 PM.jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.35 PM.jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.35 PM (1).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.35 PM (2).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.35 PM (3).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.35 PM (4).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.36 PM.jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.36 PM (1).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.36 PM (2).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.36 PM (3).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.36 PM (4).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.37 PM.jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.37 PM (1).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.37 PM (2).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.37 PM (3).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.38 PM.jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.38 PM (1).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.38 PM (2).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.38 PM (3).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.38 PM (4).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.39 PM.jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.39 PM (1).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.39 PM (2).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.39 PM (3).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.39 PM (4).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.40 PM.jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.40 PM (1).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.40 PM (2).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.40 PM (3).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.40 PM (4).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.41 PM.jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.41 PM (1).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.41 PM (2).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.42 PM.jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.42 PM (1).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.42 PM (2).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.42 PM (3).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.42 PM (4).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.42 PM (5).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.42 PM (6).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.42 PM (7).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.43 PM.jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.43 PM (1).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.43 PM (2).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.43 PM (3).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.43 PM (4).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.43 PM (5).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.43 PM (6).jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.44 PM.jpeg",
  "img/WhatsApp Image 2026-02-05 at 7.45.44 PM (1).jpeg"
];

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

    // Animar cards con delay
    setTimeout(() => {
      card.classList.add('visible');
    }, index * 50);
  });

  // Agregar botón para ver la pantalla final con imagen después de un delay
  

function showFinalImageScreen() {
  finalScreen.classList.add('hidden');
  finalImageScreen.classList.remove('hidden');
  createFinalImageHearts();
}

// ============================================
// EVENT LISTENERS
// ============================================

coverImage.addEventListener('click', startExperience);
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

