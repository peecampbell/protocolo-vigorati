'use strict';

// ============================================================
// SVG ASSETS — inline silhouettes
// ============================================================
const SVG = {
  age_18_30: `<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="16" r="13" fill="#e74c3c"/>
    <rect x="45" y="28" width="10" height="8" rx="2" fill="#e74c3c"/>
    <path d="M32 36 L68 36 L62 88 L38 88 Z" fill="#e74c3c"/>
    <path d="M32 42 L12 76 L19 80 L36 52 Z" fill="#e74c3c"/>
    <path d="M68 42 L88 76 L81 80 L64 52 Z" fill="#e74c3c"/>
    <rect x="37" y="88" width="11" height="62" rx="5" fill="#e74c3c"/>
    <rect x="52" y="88" width="11" height="62" rx="5" fill="#e74c3c"/>
  </svg>`,

  age_31_45: `<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="18" r="15" fill="#e74c3c"/>
    <rect x="44" y="32" width="12" height="9" rx="2" fill="#e74c3c"/>
    <path d="M30 41 L70 41 L65 90 L35 90 Z" fill="#e74c3c"/>
    <path d="M30 47 L14 84 L21 87 L35 56 Z" fill="#e74c3c"/>
    <path d="M70 47 L86 84 L79 87 L65 56 Z" fill="#e74c3c"/>
    <rect x="34" y="90" width="13" height="62" rx="5" fill="#e74c3c"/>
    <rect x="53" y="90" width="13" height="62" rx="5" fill="#e74c3c"/>
  </svg>`,

  age_46_55: `<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="18" r="15" fill="#e74c3c"/>
    <rect x="44" y="32" width="12" height="9" rx="2" fill="#e74c3c"/>
    <path d="M26 41 L74 41 L70 90 L30 90 Z" fill="#e74c3c"/>
    <path d="M26 47 L11 82 L18 85 L31 56 Z" fill="#e74c3c"/>
    <path d="M74 47 L89 82 L82 85 L69 56 Z" fill="#e74c3c"/>
    <rect x="30" y="90" width="14" height="62" rx="5" fill="#e74c3c"/>
    <rect x="56" y="90" width="14" height="62" rx="5" fill="#e74c3c"/>
  </svg>`,

  age_56plus: `<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">
    <circle cx="47" cy="19" r="15" fill="#e74c3c"/>
    <rect x="42" y="33" width="10" height="8" rx="2" fill="#e74c3c"/>
    <path d="M28 42 L65 44 L62 90 L30 90 Z" fill="#e74c3c"/>
    <path d="M28 48 L13 80 L20 83 L33 58 Z" fill="#e74c3c"/>
    <path d="M64 46 L76 78 L82 76 L70 52 Z" fill="#e74c3c"/>
    <rect x="80" y="76" width="4" height="50" rx="2" fill="#e74c3c"/>
    <ellipse cx="82" cy="76" rx="7" ry="4" fill="#e74c3c"/>
    <rect x="30" y="90" width="13" height="58" rx="5" fill="#e74c3c"/>
    <rect x="50" y="90" width="13" height="58" rx="5" fill="#e74c3c"/>
  </svg>`,

  body_slim: `<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="16" r="12" fill="#e74c3c"/>
    <rect x="45" y="27" width="10" height="7" rx="2" fill="#e74c3c"/>
    <path d="M39 34 L61 34 L58 90 L42 90 Z" fill="#e74c3c"/>
    <path d="M39 39 L26 76 L32 79 L42 48 Z" fill="#e74c3c"/>
    <path d="M61 39 L74 76 L68 79 L58 48 Z" fill="#e74c3c"/>
    <rect x="41" y="90" width="9" height="62" rx="4" fill="#e74c3c"/>
    <rect x="50" y="90" width="9" height="62" rx="4" fill="#e74c3c"/>
  </svg>`,

  body_average: `<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="18" r="14" fill="#e74c3c"/>
    <rect x="44" y="31" width="12" height="8" rx="2" fill="#e74c3c"/>
    <path d="M33 39 L67 39 L64 90 L36 90 Z" fill="#e74c3c"/>
    <path d="M33 44 L17 80 L24 83 L37 54 Z" fill="#e74c3c"/>
    <path d="M67 44 L83 80 L76 83 L63 54 Z" fill="#e74c3c"/>
    <rect x="35" y="90" width="13" height="62" rx="5" fill="#e74c3c"/>
    <rect x="52" y="90" width="13" height="62" rx="5" fill="#e74c3c"/>
  </svg>`,

  body_heavy: `<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="19" r="16" fill="#e74c3c"/>
    <rect x="44" y="34" width="12" height="7" rx="2" fill="#e74c3c"/>
    <path d="M22 42 L78 42 L73 90 L27 90 Z" fill="#e74c3c"/>
    <path d="M22 47 L8 80 L16 83 L29 56 Z" fill="#e74c3c"/>
    <path d="M78 47 L92 80 L84 83 L71 56 Z" fill="#e74c3c"/>
    <rect x="27" y="90" width="17" height="62" rx="6" fill="#e74c3c"/>
    <rect x="56" y="90" width="17" height="62" rx="6" fill="#e74c3c"/>
  </svg>`,

  office: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="20" r="11" fill="#e74c3c"/>
    <path d="M39 31 L61 31 L59 58 L41 58 Z" fill="#e74c3c"/>
    <path d="M39 35 L24 54 L30 57 L42 42 Z" fill="#e74c3c"/>
    <path d="M61 35 L76 54 L70 57 L58 42 Z" fill="#e74c3c"/>
    <rect x="15" y="62" width="70" height="5" rx="2" fill="#e74c3c" opacity="0.75"/>
    <rect x="20" y="67" width="4" height="18" rx="1" fill="#e74c3c" opacity="0.6"/>
    <rect x="76" y="67" width="4" height="18" rx="1" fill="#e74c3c" opacity="0.6"/>
    <rect x="32" y="52" width="36" height="14" rx="2" fill="#e74c3c" opacity="0.5"/>
  </svg>`,

  walks: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="17" r="11" fill="#e74c3c"/>
    <path d="M39 28 L61 28 L63 56 L37 56 Z" fill="#e74c3c"/>
    <path d="M39 32 L20 50 L26 54 L42 40 Z" fill="#e74c3c"/>
    <path d="M61 32 L75 46 L71 51 L58 40 Z" fill="#e74c3c"/>
    <path d="M40 56 L30 88 L39 88 L46 68 Z" fill="#e74c3c"/>
    <path d="M58 56 L66 76 L59 88 L66 88 L72 64 Z" fill="#e74c3c"/>
  </svg>`,

  physical: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="19" r="11" fill="#e74c3c"/>
    <path d="M35 14 Q50 4 65 14 L67 20 L33 20 Z" fill="#e74c3c" opacity="0.85"/>
    <path d="M39 30 L61 30 L62 60 L38 60 Z" fill="#e74c3c"/>
    <path d="M61 31 L82 18 L87 24 L68 40 Z" fill="#e74c3c"/>
    <rect x="79" y="12" width="14" height="10" rx="2" fill="#e74c3c" opacity="0.8"/>
    <path d="M39 33 L23 52 L29 55 L42 42 Z" fill="#e74c3c"/>
    <rect x="37" y="60" width="11" height="32" rx="4" fill="#e74c3c"/>
    <rect x="52" y="60" width="11" height="32" rx="4" fill="#e74c3c"/>
  </svg>`,

  home: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="18" r="11" fill="#e74c3c"/>
    <path d="M38 29 L62 29 L60 54 L40 54 Z" fill="#e74c3c"/>
    <path d="M38 33 L20 46 L24 52 L40 42 Z" fill="#e74c3c"/>
    <path d="M62 33 L80 48 L76 53 L60 42 Z" fill="#e74c3c"/>
    <rect x="10" y="58" width="80" height="9" rx="3" fill="#e74c3c" opacity="0.7"/>
    <rect x="10" y="56" width="9" height="11" rx="3" fill="#e74c3c" opacity="0.6"/>
    <rect x="81" y="56" width="9" height="11" rx="3" fill="#e74c3c" opacity="0.6"/>
    <rect x="37" y="54" width="11" height="5" rx="2" fill="#e74c3c"/>
    <rect x="52" y="54" width="11" height="5" rx="2" fill="#e74c3c"/>
    <rect x="35" y="67" width="11" height="22" rx="4" fill="#e74c3c"/>
    <rect x="54" y="67" width="11" height="22" rx="4" fill="#e74c3c"/>
  </svg>`,

  bio_day1: `<svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="27" fill="#120808" stroke="#e74c3c" stroke-width="1.5"/>
    <circle cx="28" cy="28" r="14" fill="none" stroke="#e74c3c" stroke-width="2" opacity="0.3"/>
    <ellipse cx="24" cy="28" rx="10" ry="5.5" fill="#e74c3c" transform="rotate(-15 24 28)"/>
    <circle cx="24" cy="28" r="4" fill="#fff" opacity="0.85"/>
    <path d="M33 24 C40 20 44 27 41 32" stroke="#c0392b" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <circle cx="41" cy="32" r="2" fill="#c0392b"/>
  </svg>`,

  bio_day2: `<svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="27" fill="#120808" stroke="#e74c3c" stroke-width="1.5"/>
    <circle cx="28" cy="28" r="16" fill="none" stroke="#e74c3c" stroke-width="2" opacity="0.4"/>
    <circle cx="28" cy="28" r="10" fill="#e74c3c" opacity="0.2"/>
    <ellipse cx="24" cy="26" rx="9" ry="4.5" fill="#e74c3c" transform="rotate(-20 24 26)"/>
    <circle cx="24" cy="26" r="3.5" fill="#fff" opacity="0.85"/>
    <path d="M32 22 C39 18 43 25 40 30" stroke="#c0392b" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <circle cx="40" cy="30" r="2" fill="#c0392b"/>
    <path d="M32 34 C39 31 41 37 37 40" stroke="#c0392b" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.7"/>
    <circle cx="37" cy="40" r="1.5" fill="#c0392b" opacity="0.7"/>
  </svg>`,

  bio_day3: `<svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="27" fill="#120808" stroke="#e74c3c" stroke-width="1.5"/>
    <circle cx="28" cy="28" r="18" fill="none" stroke="#e74c3c" stroke-width="2" opacity="0.4"/>
    <circle cx="28" cy="28" r="12" fill="#e74c3c" opacity="0.25"/>
    <ellipse cx="24" cy="26" rx="9" ry="4.5" fill="#e74c3c" transform="rotate(-20 24 26)"/>
    <circle cx="24" cy="26" r="3.5" fill="#fff" opacity="0.9"/>
    <path d="M32 22 C40 17 44 25 41 30" stroke="#c0392b" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <circle cx="41" cy="30" r="2" fill="#c0392b"/>
    <path d="M32 34 C39 30 42 37 38 40" stroke="#c0392b" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.8"/>
    <circle cx="38" cy="40" r="1.5" fill="#c0392b" opacity="0.8"/>
    <path d="M18 34 C12 37 12 30 15 27" stroke="#c0392b" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.6"/>
    <circle cx="15" cy="27" r="1.5" fill="#c0392b" opacity="0.6"/>
  </svg>`,

  exer_day1: `<svg viewBox="0 0 72 56" xmlns="http://www.w3.org/2000/svg">
    <circle cx="59" cy="22" r="7" fill="white"/>
    <rect x="48" y="24" width="8" height="9" rx="3" fill="white"/>
    <rect x="20" y="27" width="30" height="10" rx="5" fill="white"/>
    <path d="M22 27 L8 10 L14 7 L26 25" fill="white"/>
    <path d="M30 27 L16 10 L22 7 L34 25" fill="white"/>
  </svg>`,

  exer_day2: `<svg viewBox="0 0 72 56" xmlns="http://www.w3.org/2000/svg">
    <circle cx="36" cy="7" r="7" fill="white"/>
    <path d="M28 14 L44 14 L42 34 L30 34 Z" fill="white"/>
    <path d="M14 42 Q36 34 58 42 L56 50 Q36 44 16 50 Z" fill="white"/>
    <path d="M28 20 L14 32 L16 37 L30 26 Z" fill="white"/>
    <path d="M44 20 L58 32 L56 37 L42 26 Z" fill="white"/>
  </svg>`,

  exer_day3: `<svg viewBox="0 0 72 56" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="6" r="6" fill="white"/>
    <path d="M44 12 L56 12 L52 30 L44 28 Z" fill="white"/>
    <path d="M44 28 L32 30 L22 52 L28 54 L36 34 L48 32 Z" fill="white"/>
    <path d="M52 30 L62 28 L70 46 L66 48 L60 32 L54 32 Z" fill="white"/>
    <path d="M44 16 L30 12 L28 18 L42 22 Z" fill="white"/>
    <path d="M56 16 L66 12 L68 18 L58 22 Z" fill="white"/>
  </svg>`
};

function personIconSVG(active) {
  const c = active ? '#e74c3c' : '#3a3a5a';
  return `<svg class="person-icon" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="10" r="7" fill="${c}"/>
    <path d="M4 30 Q4 20 18 20 Q32 20 32 30 L32 33 L4 33 Z" fill="${c}"/>
  </svg>`;
}

// ============================================================
// SCREENS ARRAY
// ============================================================
const SCREENS = [
  // 0 — Tela 01: Age
  {
    id: 'age', type: 'IMAGE_CARD_GRID', questionNumber: null, showBack: false, showLogo: true,
    storeAs: 1, autoAdvance: true,
    headline: 'Plan para mejorar el rendimiento\nsexual según tu edad',
    subtitle: 'QUIZ DE 3 MINUTOS', showFooter: true,
    options: [
      { label: '18–30', img: 'HOMEM 25 ANOS.png' },
      { label: '31–45', img: 'HOMEM 35 ANOS.png' },
      { label: '46–55', img: 'HOMEM 50 ANOS.png' },
      { label: '56+',   img: 'HOMEM 65 ANOS.png' }
    ]
  },
  // 1 — Social proof: Day progress
  {
    id: 'socialProofDays', type: 'DAY_PROGRESS', questionNumber: null, showBack: false,
    headline1: '150.000+ PERSONAS',
    headline2: 'han elegido VIGORATI',
    days: [
      { day: 'DÍA 1',  desc: 'Activación del suelo pélvico', bioSvg: SVG.bio_day1, exerImg: 'IMAGEM 1.png' },
      { day: 'DÍA 14', desc: 'Control y mayor resistencia',  bioSvg: SVG.bio_day2, exerImg: 'IMAGEM 2.png' },
      { day: 'DÍA 24', desc: 'Rendimiento sexual máximo',    bioSvg: SVG.bio_day3, exerImg: 'IMAGEM 3.png' }
    ],
    body: 'Ya ayudamos a más de 150.000 hombres a mejorar su rendimiento sexual.'
  },
  // 2 — Tela 02: Body type
  {
    id: 'bodyType', type: 'RADIO_IMAGE', questionNumber: 2, showBack: true,
    storeAs: 2, autoAdvance: true, headline: 'Elige tu tipo de cuerpo',
    options: [
      { label: 'Delgado',  img: '103_1.webp' },
      { label: 'Promedio', img: '103_2.webp' },
      { label: 'Pesado',   img: '103_3.webp' }
    ]
  },
  // 2 — Tela 03: Objectives
  {
    id: 'objectives', type: 'CHECKBOX_MULTI', questionNumber: 3, showBack: true,
    storeAs: 3, headline: 'Elige tus objetivos', subtitle: 'Seleccioná todo lo que aplique',
    options: [
      { label: 'Durar más durante el sexo', emoji: '🕔' },
      { label: 'Tener orgasmos más intensos', emoji: '🔝' },
      { label: 'Obtener erecciones más firmes', emoji: '⚡' }
    ]
  },
  // 3 — Tela 04: Pelvic floor
  {
    id: 'pelvicFloor', type: 'RADIO_EMOJI', questionNumber: 4, showBack: true,
    storeAs: 4, autoAdvance: true,
    headline: '¿Has probado alguna vez a ejercitar los músculos del suelo pélvico?',
    options: [
      { label: 'Sí, claro', emoji: '💪' },
      { label: 'No, solo he oído hablar de ellos', emoji: '😴' },
      { label: 'No, nunca', emoji: '😐' },
      { label: '¿Qué son los músculos del suelo pélvico?', emoji: '🤔' }
    ]
  },
  // 4 — Educativa A: Pelvic floor info
  {
    id: 'edu_pelvic', type: 'EDUCATIONAL', questionNumber: null, showBack: true,
    headline: 'Que tengas buenas erecciones y dures más depende de cómo tengas los músculos del suelo pélvico.',
    body: 'Un suelo pélvico fuerte es la clave para tener erecciones duras y durar en la cama tanto como quieras.',
    badge: 'Investigación de Harvard',
    img: '104_ValueProp.webp'
  },
  // 5 — Tela 06: Duration
  {
    id: 'duration', type: 'RADIO_PLAIN', questionNumber: 6, showBack: true,
    storeAs: 6, autoAdvance: true, headline: '¿Cuánto dura tu relación sexual en promedio?',
    options: [
      { label: 'Menos de 2 minutos' }, { label: '2–7 minutos' },
      { label: '7–15 minutos' }, { label: '15 minutos o más' }
    ]
  },
  // 6 — Tela 07: Early ending
  {
    id: 'earlyEnding', type: 'RADIO_EMOJI', questionNumber: 7, showBack: true,
    storeAs: 7, autoAdvance: true,
    headline: '¿Con qué frecuencia terminás antes de lo que te gustaría?',
    options: [
      { label: 'Nunca', emoji: '😊' }, { label: 'A veces', emoji: '😕' },
      { label: 'La mayoría de las veces', emoji: '😟' }, { label: 'Prefiero no responder', emoji: '🤐' }
    ]
  },
  // 7 — Tela 08: Erection quality
  {
    id: 'erectionQuality', type: 'RADIO_EMOJI', questionNumber: 8, showBack: true,
    storeAs: 8, autoAdvance: true, headline: '¿Siempre se te pone dura cuando tenés sexo?',
    options: [
      { label: 'Sí, sin problemas', emoji: '😎' },
      { label: 'Sí, pero me gustaría que fuera más fuerte', emoji: '🙂' },
      { label: 'No siempre', emoji: '😟' }, { label: 'Casi nunca', emoji: '😢' },
      { label: 'Prefiero no responder', emoji: '🤐' }
    ]
  },
  // 8 — Tela 09: Emotional impact
  {
    id: 'emotionalImpact', type: 'CHECKBOX_MULTI', questionNumber: 9, showBack: true,
    storeAs: 9, headline: '¿Cómo te hace sentir tu rendimiento sexual?',
    subtitle: 'Seleccioná todo lo que aplique',
    options: [
      { label: 'Abrumado', emoji: '😤' }, { label: 'Nervioso', emoji: '😰' },
      { label: 'Mi estado de ánimo fluctúa', emoji: '😔' },
      { label: 'Mi confianza ha disminuido', emoji: '😔' },
      { label: 'Poca motivación y energía', emoji: '😴' },
      { label: 'Ninguna de las anteriores', emoji: '😶' }
    ]
  },
  // 9 — Prova Social A
  {
    id: 'socialProof1', type: 'SOCIAL_PROOF', questionNumber: null, showBack: true,
    headline: 'A 9 de cada 10 hombres les va mejor en la cama gracias al programa VIGORATI.',
    img: '110_ValueProp.webp',
    testimonial: {
      quote: '"En solo 3 semanas ya sentí mejoras reales, y ahora no quiero parar. ¡No me acuerdo la última vez que disfruté tanto mi vida íntima!"',
      author: 'Chris C.'
    },
    badge: 'Estudio del BJGP sobre los ejercicios de Kegel y la disfunción eréctil'
  },
  // 10 — Tela 11: Relationship
  {
    id: 'relationship', type: 'RADIO_EMOJI', questionNumber: 11, showBack: true,
    storeAs: 11, autoAdvance: true,
    headline: '¿Tenés miedo de que el tema del sexo esté enfriando tu relación?',
    options: [
      { label: 'Sí, es una gran preocupación', emoji: '😢' },
      { label: 'Algo, lo tengo en mente', emoji: '😟' },
      { label: 'No estoy seguro', emoji: '🤔' }, { label: 'No, para nada.', emoji: '😊' }
    ]
  },
  // 11 — Tela 12: Frequency
  {
    id: 'frequency', type: 'RADIO_PLAIN', questionNumber: 12, showBack: true,
    storeAs: 12, autoAdvance: true, headline: '¿Cuántas veces tirás cada mes, más o menos?',
    options: [
      { label: 'Menos de 3 veces al mes' }, { label: '3–6 veces al mes' },
      { label: '7–15 veces al mes' }, { label: 'Más de 15 veces al mes' },
      { label: 'Prefiero no responder' }
    ]
  },
  // 12 — Tela 13: Avoid sex
  {
    id: 'avoidSex', type: 'STATEMENT_RADIO', questionNumber: 13, showBack: true,
    storeAs: 13, autoAdvance: true,
    statement: '"Evito el sexo porque me preocupa mi rendimiento"',
    headline: '¿Te identificás con esta afirmación?',
    options: [
      { label: 'Sí', emoji: '😔' }, { label: 'Algo', emoji: '😟' },
      { label: 'No', emoji: '😊' }, { label: 'No estoy seguro', emoji: '🤔' }
    ]
  },
  // 13 — Tela 14: Diet
  {
    id: 'diet', type: 'RADIO_PLAIN', questionNumber: 14, showBack: true,
    storeAs: 14, autoAdvance: true,
    headline: '¿Cómo describirías tu alimentación en general?',
    options: [
      { label: 'Muy saludable' }, { label: 'Bastante equilibrada' },
      { label: 'Regular, podría mejorar' }, { label: 'Muy desordenada' }
    ]
  },
  // 14 — Tela 15: Quick solutions
  {
    id: 'quickSolutions', type: 'RADIO_PLAIN', questionNumber: 15, showBack: true,
    storeAs: 15, autoAdvance: true,
    headline: '¿Has probado alguna solución de acción rápida para mejorar tu vida íntima?',
    options: [
      { label: 'Sí, las uso regularmente' }, { label: 'Sí, las he probado ocasionalmente' },
      { label: 'No, no tomo ninguna' }, { label: 'Prefiero no responder' }
    ]
  },
  // 15 — Comparison table
  {
    id: 'comparison', type: 'COMPARISON_TABLE', questionNumber: null, showBack: true,
    headline: 'El programa VIGORATI es mejor que las soluciones rápidas',
    subtitle: 'Descubrí los beneficios a largo plazo de un enfoque natural y holístico',
    rows: [
      'Durar más en la cama', 'Mejorar la erección', 'Resultado a largo plazo',
      'Sin efectos negativos', 'Aumentar la confianza en uno mismo'
    ]
  },
  // 16 — Tela 17: Typical day
  {
    id: 'typicalDay', type: 'IMAGE_CARD_GRID', questionNumber: 17, showBack: true,
    storeAs: 17, autoAdvance: true, headline: 'Por favor, describí tu día típico',
    options: [
      { label: 'En la oficina', svg: SVG.office }, { label: 'Paseos diarios', svg: SVG.walks },
      { label: 'Trabajo físico', svg: SVG.physical }, { label: 'En casa', svg: SVG.home }
    ]
  },
  // 17 — Tela 18: Smoking
  {
    id: 'smoking', type: 'RADIO_PLAIN', questionNumber: 18, showBack: true,
    storeAs: 18, autoAdvance: true, headline: '¿Fumás?',
    options: [{ label: 'Sí, lo hago' }, { label: 'No, no fumo' }, { label: 'A veces' }]
  },
  // 18 — Tela 19: Sleep
  {
    id: 'sleep', type: 'RADIO_PLAIN', questionNumber: 19, showBack: true,
    storeAs: 19, autoAdvance: true, headline: '¿Cómo calificarías la calidad de tu sueño?',
    options: [
      { label: 'Muy mala, casi no duermo bien' }, { label: 'Regular, me despierto cansado' },
      { label: 'Bastante buena' }, { label: 'Excelente' }
    ]
  },
  // 19 — Tela 20: Physical activity
  {
    id: 'activity', type: 'RADIO_PLAIN', questionNumber: 20, showBack: true,
    storeAs: 20, autoAdvance: true, headline: '¿Cuál es tu nivel de actividad física?',
    options: [
      { label: 'Hago ejercicio todos los días' }, { label: 'Hago ejercicio de vez en cuando' },
      { label: 'Tengo poca actividad física' }, { label: 'No hago ejercicio en absoluto' }
    ]
  },
  // 20 — Tela 21: Alcohol
  {
    id: 'alcohol', type: 'RADIO_PLAIN', questionNumber: 21, showBack: true,
    storeAs: 21, autoAdvance: true, headline: '¿Consumís alcohol con frecuencia?',
    options: [
      { label: 'Nunca o casi nunca' }, { label: 'Ocasionalmente (fines de semana)' },
      { label: 'Regularmente (varias veces por semana)' }, { label: 'Con frecuencia' }
    ]
  },
  // 21 — Tela 22: Mood
  {
    id: 'mood', type: 'RADIO_PLAIN', questionNumber: 22, showBack: true,
    storeAs: 22, autoAdvance: true,
    headline: '¿Cómo calificarías tu estado de ánimo recientemente?',
    options: [
      { label: 'Terrible, me siento abrumado' }, { label: 'Regular, podría estar mejor' },
      { label: 'Estoy bien' }, { label: 'Difícil de decir' }
    ]
  },
  // 22 — Tela 23: Negative thoughts
  {
    id: 'negThoughts', type: 'STATEMENT_RADIO', questionNumber: 23, showBack: true,
    storeAs: 23, autoAdvance: true,
    statement: '¿Te bajoneás con lo que pensás de vos antes o después de coger?',
    headline: 'por ejemplo, "Sé que no voy a poder tener una erección esta noche"',
    isExample: true,
    options: [
      { label: 'Sí', emoji: '😔' }, { label: 'No', emoji: '😊' },
      { label: 'A veces', emoji: '😟' }, { label: 'No estoy seguro', emoji: '🤔' }
    ]
  },
  // 23 — Tela 24: Motivation
  {
    id: 'motivation', type: 'RADIO_EMOJI', questionNumber: 24, showBack: true,
    storeAs: 24, autoAdvance: true,
    headline: '¿Qué tan motivado estás para cambiar tu situación ahora mismo?',
    options: [
      { label: 'Muy motivado, quiero empezar hoy', emoji: '💪' },
      { label: 'Bastante motivado', emoji: '😊' },
      { label: 'Algo motivado, pero tengo dudas', emoji: '😕' },
      { label: 'Todavía no estoy seguro', emoji: '😐' }
    ]
  },
  // 24 — Tela 25: Result dashboard
  {
    id: 'dashboard', type: 'RESULT_DASHBOARD', questionNumber: 25, showBack: true,
    headline: 'El resumen de tu perfil', subtitle: 'Nivel de rendimiento sexual'
  },
  // 25 — Tela 26: Authority
  {
    id: 'authority', type: 'AUTHORITY', questionNumber: null, showBack: false,
    headline: 'ESTÁS EN BUENAS MANOS',
    bullets: [
      'El programa VIGORATI fue creado por expertos en el tema del rendimiento sexual masculino.',
      'No solo incluye técnicas que funcionan de verdad, sino también consejos prácticos de los mejores coaches de intimidad.',
      'Ya ayudó a miles de hombres en todo el mundo a mejorar su vida sexual.',
      'Y lo mejor: todos los programas se adaptan a vos y a lo que querés lograr.'
    ]
  },
  // 26 — Loading
  { id: 'loading', type: 'LOADING', questionNumber: null, showBack: false },
  // 27 — Tela 27: Email
  {
    id: 'email', type: 'EMAIL_CAPTURE', questionNumber: 27, showBack: false, storeAs: 'email'
  },
  // 28 — Plan listo
  {
    id: 'planReady', type: 'PLAN_READY', questionNumber: null, showBack: false,
    headline: 'Tu plan de 4 semanas para mejorar tu rendimiento sexual está listo',
    img: 'Offer_chart.webp',
    bullets: [
      'Nuestro algoritmo inteligente armó un plan hecho a tu medida, según lo que querés lograr.',
      'Cubre las cinco áreas clave del equilibrio sexual para ayudarte a durar más y tener mejores erecciones.',
      'Incluye prácticas probadas científicamente para que rindas mejor en la cama.',
      'Y mucho más...'
    ]
  }
];

// ============================================================
// STATE
// ============================================================
const state = {
  currentScreen: 0,
  answers: {},
  score: 0,
  email: '',
  loadingPaused: false,
  popups: { p1: false, p2: false },
  totalQuestions: 27,
  _loadingInterval: null,
  _carouselInterval: null,
  _textInterval: null
};

// ============================================================
// UTILITIES
// ============================================================
const app = document.getElementById('app');

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function clearIntervals() {
  clearInterval(state._loadingInterval);
  clearInterval(state._carouselInterval);
  clearInterval(state._textInterval);
  state._loadingInterval = null;
  state._carouselInterval = null;
  state._textInterval = null;
}

function transitionTo(fn) {
  app.style.transition = 'opacity 0.15s ease';
  app.style.opacity = '0';
  setTimeout(() => { fn(); app.style.opacity = '1'; }, 150);
}

// ============================================================
// HEADER
// ============================================================
function buildHeader(screen) {
  const hasProgress = screen.questionNumber !== null;
  const hasBack = screen.showBack;
  if (!hasProgress && !hasBack) return '';
  const pct = hasProgress ? (screen.questionNumber / state.totalQuestions) * 100 : 0;
  const counter = hasProgress ? String(screen.questionNumber).padStart(2, '0') + ' / ' + state.totalQuestions : '';

  return `<div class="quiz-header">
    ${hasBack ? `<button class="back-btn" id="back-btn" aria-label="Volver">&#8592;</button>` : ''}
    ${hasProgress ? `<div class="progress-wrap">
      <div class="progress-bar-track">
        <div class="progress-bar-fill" style="width:${pct}%"></div>
      </div>
      <span class="question-counter">${counter}</span>
    </div>` : ''}
  </div>`;
}

// ============================================================
// NAVIGATION
// ============================================================
function goNext() {
  if (state.currentScreen >= SCREENS.length - 1) return;
  clearIntervals();
  state.currentScreen += 1;
  transitionTo(() => renderScreen(state.currentScreen));
}

function goBack() {
  if (state.currentScreen <= 0) return;
  clearIntervals();
  state.currentScreen -= 1;
  transitionTo(() => renderScreen(state.currentScreen));
}

function attachBack() {
  const btn = document.getElementById('back-btn');
  if (btn) btn.addEventListener('click', goBack);
}

// ============================================================
// RENDER: IMAGE_CARD_GRID  (telas 01 + 17)
// ============================================================
function renderImageCardGrid(screen) {
  const cards = screen.options.map((o, i) => {
    const media = o.img
      ? `<div class="image-card-photo-wrap"><img src="${esc(o.img)}" alt="${esc(o.label)}" class="image-card-photo" loading="lazy"></div>`
      : o.svg;
    const cls = o.img ? 'image-card has-photo' : 'image-card';
    return `<div class="${cls}" data-val="${esc(o.label)}" data-i="${i}">
      ${media}
      <span class="image-card-label">${esc(o.label)}</span>
    </div>`;
  }).join('');

  if (screen.showLogo) {
    app.innerHTML = `<div class="screen" style="padding-top:24px;">
      <img src="VIGORATI - LOGO.png" alt="VIGORATI" class="site-logo-img">
      <p class="logo-subtitle">${esc(screen.subtitle)}</p>
      <h1 class="screen-headline">${esc(screen.headline)}</h1>
      <div class="image-card-grid">${cards}</div>
      <div class="spacer"></div>
      <p class="quiz-footer">Al continuar, aceptás nuestros
        <a href="#">Términos de uso</a>,
        <a href="#">Política de privacidad</a> y
        <a href="#">Política de cookies</a>.
      </p>
    </div>`;
  } else {
    app.innerHTML = `<div class="screen">
      ${buildHeader(screen)}
      <h1 class="screen-headline">${esc(screen.headline)}</h1>
      <div class="image-card-grid">${cards}</div>
      <div class="spacer"></div>
    </div>`;
    attachBack();
  }

  document.querySelectorAll('.image-card').forEach(card => {
    card.addEventListener('click', () => {
      if (screen.storeAs) state.answers[screen.storeAs] = card.dataset.val;
      document.querySelectorAll('.image-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      if (screen.autoAdvance) setTimeout(goNext, 180);
    });
  });

  if (screen.storeAs && state.answers[screen.storeAs]) {
    document.querySelectorAll('.image-card').forEach(c => {
      if (c.dataset.val === state.answers[screen.storeAs]) c.classList.add('selected');
    });
  }
}

// ============================================================
// RENDER: RADIO_IMAGE  (tela 02)
// ============================================================
function renderRadioImage(screen) {
  const cards = screen.options.map((o, i) => {
    const media = o.img
      ? `<div class="radio-img-wrap"><img src="${esc(o.img)}" alt="${esc(o.label)}" class="radio-img" loading="lazy"></div>`
      : o.svg;
    const cls = o.img ? 'radio-image-card has-img' : 'radio-image-card';
    return `<div class="${cls}" data-val="${esc(o.label)}" data-i="${i}">
      ${media}
      <span class="image-card-label">${esc(o.label)}</span>
    </div>`;
  }).join('');

  app.innerHTML = `<div class="screen">
    ${buildHeader(screen)}
    <h1 class="screen-headline">${esc(screen.headline)}</h1>
    <div class="radio-image-grid">${cards}</div>
    <div class="spacer"></div>
  </div>`;

  attachBack();

  document.querySelectorAll('.radio-image-card').forEach(card => {
    card.addEventListener('click', () => {
      if (screen.storeAs) state.answers[screen.storeAs] = card.dataset.val;
      document.querySelectorAll('.radio-image-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      if (screen.autoAdvance) setTimeout(goNext, 180);
    });
  });

  if (screen.storeAs && state.answers[screen.storeAs]) {
    document.querySelectorAll('.radio-image-card').forEach(c => {
      if (c.dataset.val === state.answers[screen.storeAs]) c.classList.add('selected');
    });
  }
}

// ============================================================
// RENDER: RADIO_PLAIN / RADIO_EMOJI
// ============================================================
function renderRadioOption(screen) {
  const isEmoji = screen.type === 'RADIO_EMOJI';
  const items = screen.options.map((o, i) =>
    `<button class="option-card" data-val="${esc(o.label)}" data-i="${i}">
      ${isEmoji
        ? `<span class="option-emoji">${o.emoji || ''}</span>`
        : `<span class="radio-indicator"></span>`}
      <span class="option-text">${esc(o.label)}</span>
    </button>`
  ).join('');

  app.innerHTML = `<div class="screen">
    ${buildHeader(screen)}
    <h1 class="screen-headline">${esc(screen.headline)}</h1>
    <div class="options-list">${items}</div>
    <div class="spacer"></div>
  </div>`;

  attachBack();

  const saved = screen.storeAs ? state.answers[screen.storeAs] : null;

  document.querySelectorAll('.option-card').forEach(card => {
    if (card.dataset.val === saved) card.classList.add('selected');

    card.addEventListener('click', () => {
      if (screen.storeAs) state.answers[screen.storeAs] = card.dataset.val;
      document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      if (screen.autoAdvance) setTimeout(goNext, 220);
    });
  });
}

// ============================================================
// RENDER: CHECKBOX_MULTI
// ============================================================
function renderCheckboxMulti(screen) {
  const items = screen.options.map((o, i) =>
    `<button class="checkbox-card" data-val="${esc(o.label)}" data-i="${i}">
      <span class="checkbox-indicator"></span>
      ${o.emoji ? `<span class="option-emoji">${o.emoji}</span>` : ''}
      <span class="option-text">${esc(o.label)}</span>
    </button>`
  ).join('');

  app.innerHTML = `<div class="screen">
    ${buildHeader(screen)}
    <h1 class="screen-headline">${esc(screen.headline)}</h1>
    ${screen.subtitle ? `<p class="screen-subtitle">${esc(screen.subtitle)}</p>` : ''}
    <div class="checkbox-list">${items}</div>
    <div class="spacer"></div>
    <div class="btn-continue-wrap">
      <button class="btn-primary" id="continue-btn" disabled>Continuar →</button>
    </div>
  </div>`;

  attachBack();

  const continueBtn = document.getElementById('continue-btn');
  const savedArr = Array.isArray(state.answers[screen.storeAs]) ? state.answers[screen.storeAs] : [];
  const selected = new Set(savedArr);

  function refresh() {
    document.querySelectorAll('.checkbox-card').forEach(card => {
      const on = selected.has(card.dataset.val);
      card.classList.toggle('selected', on);
      card.querySelector('.checkbox-indicator').textContent = on ? '✓' : '';
    });
    continueBtn.disabled = selected.size === 0;
  }

  refresh();

  document.querySelectorAll('.checkbox-card').forEach(card => {
    card.addEventListener('click', () => {
      const v = card.dataset.val;
      selected.has(v) ? selected.delete(v) : selected.add(v);
      if (screen.storeAs) state.answers[screen.storeAs] = Array.from(selected);
      refresh();
    });
  });

  continueBtn.addEventListener('click', () => { if (selected.size > 0) goNext(); });
}

// ============================================================
// RENDER: STATEMENT_RADIO
// ============================================================
function renderStatementRadio(screen) {
  const items = screen.options.map((o, i) =>
    `<button class="option-card" data-val="${esc(o.label)}" data-i="${i}">
      <span class="option-emoji">${o.emoji || ''}</span>
      <span class="option-text">${esc(o.label)}</span>
    </button>`
  ).join('');

  const topContent = screen.isExample
    ? `<div class="statement-block">${esc(screen.statement)}</div>
       <p class="statement-example">${esc(screen.headline)}</p>`
    : `<div class="statement-block">${esc(screen.statement)}</div>
       <p class="screen-subtitle">${esc(screen.headline)}</p>`;

  app.innerHTML = `<div class="screen">
    ${buildHeader(screen)}
    ${topContent}
    <div class="options-list">${items}</div>
    <div class="spacer"></div>
  </div>`;

  attachBack();

  document.querySelectorAll('.option-card').forEach(card => {
    card.addEventListener('click', () => {
      if (screen.storeAs) state.answers[screen.storeAs] = card.dataset.val;
      document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      if (screen.autoAdvance) setTimeout(goNext, 220);
    });
  });
}

// ============================================================
// RENDER: EDUCATIONAL
// ============================================================
function renderEducational(screen) {
  let infographic;
  if (screen.img) {
    infographic = `<img src="${esc(screen.img)}" alt="" class="edu-img" loading="lazy">`;
  } else {
    const bars = screen.bars.map(b =>
      `<div class="edu-bar-row">
        <span class="edu-bar-label">${esc(b.label)}</span>
        <div class="edu-bar-track">
          <div class="edu-bar-fill ${b.cls}"></div>
        </div>
      </div>`
    ).join('');
    infographic = `<div class="edu-infographic">${bars}</div>`;
  }

  app.innerHTML = `<div class="screen edu-screen">
    ${buildHeader(screen)}
    <h2 class="screen-headline">${esc(screen.headline)}</h2>
    ${infographic}
    <p class="edu-text">${esc(screen.body)}</p>
    <div class="edu-badge">🛡 ${esc(screen.badge)}</div>
    <div class="spacer"></div>
    <button class="btn-primary" id="continue-btn">Continuar →</button>
  </div>`;

  attachBack();
  document.getElementById('continue-btn').addEventListener('click', goNext);
}

// ============================================================
// RENDER: SOCIAL_PROOF
// ============================================================
function renderSocialProof(screen) {
  const visual = screen.img
    ? `<img src="${esc(screen.img)}" alt="" class="social-proof-img" loading="lazy">`
    : `<div class="person-grid">${Array.from({ length: 10 }, (_, i) => personIconSVG(i < 9)).join('')}</div>`;

  app.innerHTML = `<div class="screen social-proof-screen">
    ${buildHeader(screen)}
    <h2 class="social-proof-headline">${esc(screen.headline)}</h2>
    ${visual}
    <div class="social-testimonial">
      <p>${esc(screen.testimonial.quote)}</p>
      <span class="author">— ${esc(screen.testimonial.author)}</span>
    </div>
    <div class="edu-badge">🛡 ${esc(screen.badge)}</div>
    <div class="spacer"></div>
    <button class="btn-primary" id="continue-btn">Continuar →</button>
  </div>`;

  attachBack();
  document.getElementById('continue-btn').addEventListener('click', goNext);
}

// ============================================================
// RENDER: DAY_PROGRESS
// ============================================================
function renderDayProgress(screen) {
  const cardsHTML = screen.days.map(d => `
    <div class="day-card">
      <div class="day-bio-icon">${d.bioSvg}</div>
      <div class="day-card-center">
        <div class="day-card-label">${esc(d.day)}</div>
        <div class="day-card-desc">${esc(d.desc)}</div>
      </div>
      <div class="day-exer-icon">
        ${d.exerImg
          ? `<img src="${esc(d.exerImg)}" alt="${esc(d.day)}" class="day-exer-img" loading="lazy">`
          : d.exerSvg}
      </div>
    </div>
  `).join('');

  app.innerHTML = `<div class="screen day-progress-screen">
    <div class="day-stat-headline">
      <span class="day-stat-num">${esc(screen.headline1)}</span><br>
      <span class="day-stat-sub">${esc(screen.headline2)}</span>
    </div>
    <div class="day-cards">${cardsHTML}</div>
    <p class="day-body-text">${esc(screen.body)}</p>
    <div class="spacer"></div>
    <button class="btn-primary" id="continue-btn">Continuar →</button>
  </div>`;

  document.getElementById('continue-btn').addEventListener('click', goNext);
}

// ============================================================
// RENDER: COMPARISON_TABLE
// ============================================================
function renderComparisonTable(screen) {
  const rows = screen.rows.map(benefit =>
    `<tr>
      <td>${esc(benefit)}</td>
      <td class="col-quick"><span class="cross">✗</span></td>
      <td class="col-vigorati"><span class="check">✓</span></td>
    </tr>`
  ).join('');

  app.innerHTML = `<div class="screen">
    ${buildHeader(screen)}
    <h2 class="screen-headline">${esc(screen.headline)}</h2>
    <p class="comparison-subtitle">${esc(screen.subtitle)}</p>
    <div class="comparison-table-wrap">
      <table class="comparison-table">
        <thead>
          <tr>
            <th class="col-benefit">Beneficio</th>
            <th class="col-quick">Sol. Rápidas</th>
            <th class="col-vigorati-d">VIGORATI</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    <div class="spacer"></div>
    <button class="btn-primary" id="continue-btn">Continuar →</button>
  </div>`;

  attachBack();
  document.getElementById('continue-btn').addEventListener('click', goNext);
}

// ============================================================
// RENDER: RESULT_DASHBOARD
// ============================================================
function renderResultDashboard(screen) {
  state.score = calculateScore(state.answers);
  const lvl = getScoreLevel(state.score);
  const msg = getScoreMessage(lvl.level);
  const cards = getDiagnosticCards(state.answers);
  const pct = Math.min(Math.max(((state.score - 10) / 40) * 100, 2), 97);

  const cardsHTML = cards.map(c =>
    `<div class="diagnostic-card">
      <span class="diagnostic-icon">${c.icon}</span>
      <div class="diagnostic-info">
        <div class="diagnostic-label">${esc(c.label)}</div>
        <div class="diagnostic-value">${esc(c.value)}</div>
      </div>
    </div>`
  ).join('');

  app.innerHTML = `<div class="screen">
    ${buildHeader(screen)}
    <h2 class="screen-headline">${esc(screen.headline)}</h2>
    <p class="dashboard-subtitle">${esc(screen.subtitle)}</p>

    <div class="score-bar-wrap">
      <div class="score-bar-labels">
        <span>10</span><span>20</span><span>30</span><span>40</span><span>50</span>
      </div>
      <div class="score-bar-track" id="score-track">
        <div class="score-bar-fg"></div>
        <div class="score-tooltip" id="score-tooltip">Tú • ${state.score}</div>
        <div class="score-indicator" id="score-indicator"></div>
      </div>
      <div class="score-range-labels">
        <span>Bajo</span><span style="margin-left:auto;margin-right:auto;">Medio</span><span>Alto</span>
      </div>
    </div>

    <div class="score-alert">
      <div class="score-alert-title">⚠️ Nivel de rendimiento ${esc(lvl.label)}</div>
      <div class="score-alert-text">${esc(msg)}</div>
    </div>

    <div class="diagnostic-cards">${cardsHTML}</div>
    <button class="btn-primary" id="continue-btn">Continuar →</button>
  </div>`;

  attachBack();
  document.getElementById('continue-btn').addEventListener('click', goNext);

  setTimeout(() => {
    const ind = document.getElementById('score-indicator');
    const tip = document.getElementById('score-tooltip');
    if (ind) ind.style.left = pct + '%';
    if (tip) tip.style.left = pct + '%';
  }, 120);
}

// ============================================================
// RENDER: AUTHORITY
// ============================================================
function renderAuthority(screen) {
  const bullets = screen.bullets.map(b =>
    `<div class="authority-item">
      <div class="authority-bullet">▶</div>
      <p class="authority-text">${esc(b)}</p>
    </div>`
  ).join('');

  app.innerHTML = `<div class="screen" style="padding-top:32px;">
    <h2 class="authority-headline">${esc(screen.headline)}</h2>
    <div class="authority-list">${bullets}</div>
    <div class="spacer"></div>
    <button class="btn-primary" id="continue-btn">Continuar →</button>
  </div>`;

  document.getElementById('continue-btn').addEventListener('click', goNext);
}

// ============================================================
// RENDER: LOADING
// ============================================================
const LOADING_TEXTS = [
  'Recopilando tus respuestas...',
  'Analizando tus resultados...',
  'Priorizando los desafíos...',
  'Creando tu plan personalizado...'
];

const TESTIMONIALS_DATA = [
  {
    initial: 'R', name: 'Ricardo', info: 'México · Verificado · hace 4 días',
    title: '"Sin esto, estaría perdido"',
    body: 'Me siento 20 años más joven en mi vida íntima. Esta aplicación es mi ventaja secreta para tener más confianza.'
  },
  {
    initial: 'M', name: 'Matías', info: 'Argentina · Verificado · hace 2 días',
    title: '"¡Muchas gracias!"',
    body: '¡Ahora puedo durar una hora entera! Después de usar VIGORATI por 2 meses, mi pareja admite que hice un progreso asombroso.'
  },
  {
    initial: 'D', name: 'Daniel', info: 'Colombia · Verificado · ayer',
    title: '"¡VIGORATI es el verdadero MVP!"',
    body: 'Un enfoque complejo: esa es la diferencia entre VIGORATI y otros cursos. Tu antigua normalidad estaba por debajo del promedio, y ahora podés llevar tu vitalidad a un nuevo nivel.'
  }
];

function testimonialHTML(t) {
  return `<div class="testimonial-header">
    <div class="testimonial-avatar">${t.initial}</div>
    <div class="testimonial-meta">
      <div class="testimonial-name">${esc(t.name)}</div>
      <div class="testimonial-info">${esc(t.info)}</div>
    </div>
    <div class="testimonial-stars">★★★★★</div>
  </div>
  <div class="testimonial-title">${esc(t.title)}</div>
  <div class="testimonial-body">${esc(t.body)}</div>`;
}

function updateCircle(pct) {
  const arc = document.querySelector('.progress-arc');
  const lbl = document.querySelector('.percent-label');
  if (!arc) return;
  arc.style.strokeDashoffset = 282.74 * (1 - pct / 100);
  if (lbl) lbl.textContent = Math.round(pct) + '%';
}

function showPopup(num) {
  state.loadingPaused = true;
  const q = num === 1
    ? '¿Estás inclinado a terminar lo que has comenzado?'
    : '¿Te gustaría aumentar tu confianza en ti mismo?';
  const overlay = document.getElementById('loading-popup');
  if (!overlay) return;
  overlay.innerHTML = `<div class="popup-card">
    <p class="popup-label">Para avanzar, especificá</p>
    <p class="popup-question">${esc(q)}</p>
    <div class="popup-buttons">
      <button class="btn-ghost" id="pop-no">No</button>
      <button class="btn-primary" id="pop-si">Sí →</button>
    </div>
  </div>`;
  overlay.classList.add('visible');
  const dismiss = () => { overlay.classList.remove('visible'); state.loadingPaused = false; };
  document.getElementById('pop-no').addEventListener('click', dismiss);
  document.getElementById('pop-si').addEventListener('click', dismiss);
}

function renderLoading() {
  state.popups = { p1: false, p2: false };

  app.innerHTML = `<div class="loading-screen">
    <h2 class="loading-title">Analizando tu perfil...</h2>
    <div class="progress-circle-wrap">
      <svg viewBox="0 0 100 100">
        <circle class="circle-bg" cx="50" cy="50" r="45"/>
        <circle class="progress-arc" cx="50" cy="50" r="45"
          style="stroke-dasharray:282.74;stroke-dashoffset:282.74;"/>
      </svg>
      <div class="percent-label">0%</div>
    </div>
    <p class="loading-status" id="loading-status">${LOADING_TEXTS[0]}</p>
    <div class="loading-social">
      <strong>Más de 150.000 personas</strong>
      han elegido nuestra aplicación
    </div>
    <div class="testimonial-carousel">
      <div class="testimonial-card" id="testimonial-card">
        ${testimonialHTML(TESTIMONIALS_DATA[0])}
      </div>
    </div>
  </div>
  <div class="popup-overlay" id="loading-popup"></div>`;

  let progress = 0;
  const TICK = 60;
  const STEP = 100 / (8000 / TICK);

  state._loadingInterval = setInterval(() => {
    if (state.loadingPaused) return;
    progress += STEP;

    if (progress >= 45 && !state.popups.p1) {
      progress = 45;
      state.popups.p1 = true;
      showPopup(1);
    } else if (progress >= 99 && !state.popups.p2) {
      progress = 99;
      state.popups.p2 = true;
      showPopup(2);
    }

    if (progress >= 100) {
      progress = 100;
      clearInterval(state._loadingInterval);
      updateCircle(100);
      setTimeout(() => {
        state.currentScreen = SCREENS.findIndex(s => s.id === 'email');
        transitionTo(() => renderScreen(state.currentScreen));
      }, 500);
      return;
    }

    updateCircle(progress);
  }, TICK);

  let tIdx = 0;
  state._textInterval = setInterval(() => {
    tIdx = (tIdx + 1) % LOADING_TEXTS.length;
    const el = document.getElementById('loading-status');
    if (el) el.textContent = LOADING_TEXTS[tIdx];
  }, 2000);

  let cIdx = 0;
  state._carouselInterval = setInterval(() => {
    cIdx = (cIdx + 1) % TESTIMONIALS_DATA.length;
    const card = document.getElementById('testimonial-card');
    if (!card) return;
    card.style.opacity = '0';
    setTimeout(() => {
      card.innerHTML = testimonialHTML(TESTIMONIALS_DATA[cIdx]);
      card.style.transition = 'opacity 0.4s';
      card.style.opacity = '1';
    }, 400);
  }, 4000);
}

// ============================================================
// RENDER: EMAIL_CAPTURE
// ============================================================
function renderEmailCapture(screen) {
  app.innerHTML = `<div class="screen" style="padding-top:24px;">
    ${buildHeader(screen)}
    <h1 class="email-headline">
      Ingresá tu correo electrónico para acceder a tu
      <span>Plan Personalizado</span>
    </h1>
    <div class="email-input-wrap">
      <span class="input-icon">✉</span>
      <input type="email" id="email-field" class="email-input"
        placeholder="Introduce tu correo electrónico"
        autocomplete="email" value="${esc(state.email)}"/>
    </div>
    <p class="email-privacy">🔒 Respetamos tu privacidad</p>
    <div class="spacer"></div>
    <button class="btn-primary" id="continue-btn" disabled>Continuar →</button>
  </div>`;

  const input = document.getElementById('email-field');
  const btn   = document.getElementById('continue-btn');
  const valid = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const refresh = () => { btn.disabled = !valid(input.value.trim()); };
  refresh();
  input.addEventListener('input', refresh);

  btn.addEventListener('click', () => {
    const email = input.value.trim();
    if (!valid(email)) return;
    state.email = email;
    localStorage.setItem('vigorati_email', email);
    goNext();
  });

  input.addEventListener('keydown', e => { if (e.key === 'Enter' && !btn.disabled) btn.click(); });
}

// ============================================================
// RENDER: PLAN_READY
// ============================================================
function renderPlanReady(screen) {
  const last = screen.bullets.length - 1;
  const bullets = screen.bullets.map((b, i) => `
    <div class="plan-ready-item${i === last ? ' muted' : ''}">
      <div class="plan-ready-bullet">›</div>
      <p class="plan-ready-text">${esc(b)}</p>
    </div>`
  ).join('');

  app.innerHTML = `<div class="screen" style="padding-top:32px;">
    <h1 class="plan-ready-headline">${esc(screen.headline)}</h1>
    <img src="${esc(screen.img)}" alt="" class="plan-ready-chart" loading="lazy">
    <div class="plan-ready-list">${bullets}</div>
    <div class="spacer"></div>
    <button class="btn-primary" id="continue-btn">Continuar →</button>
  </div>`;

  document.getElementById('continue-btn').addEventListener('click', () => {
    localStorage.setItem('vigorati_timer', String(10 * 60));
    window.location.href = '/oferta';
  });
}

// ============================================================
// MAIN DISPATCHER
// ============================================================
function renderScreen(index) {
  const screen = SCREENS[index];
  if (!screen) return;
  switch (screen.type) {
    case 'IMAGE_CARD_GRID':   return renderImageCardGrid(screen);
    case 'RADIO_IMAGE':       return renderRadioImage(screen);
    case 'RADIO_EMOJI':
    case 'RADIO_PLAIN':       return renderRadioOption(screen);
    case 'CHECKBOX_MULTI':    return renderCheckboxMulti(screen);
    case 'STATEMENT_RADIO':   return renderStatementRadio(screen);
    case 'EDUCATIONAL':       return renderEducational(screen);
    case 'SOCIAL_PROOF':      return renderSocialProof(screen);
    case 'DAY_PROGRESS':      return renderDayProgress(screen);
    case 'COMPARISON_TABLE':  return renderComparisonTable(screen);
    case 'RESULT_DASHBOARD':  return renderResultDashboard(screen);
    case 'AUTHORITY':         return renderAuthority(screen);
    case 'LOADING':           return renderLoading(screen);
    case 'EMAIL_CAPTURE':     return renderEmailCapture(screen);
    case 'PLAN_READY':        return renderPlanReady(screen);
  }
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => renderScreen(0));
