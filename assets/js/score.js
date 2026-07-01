function calculateScore(answers) {
  let score = 0;

  const duracion = {
    'Menos de 2 minutos': 0,
    '2–7 minutos': 4,
    '7–15 minutos': 7,
    '15 minutos o más': 10
  };
  score += duracion[answers[6]] ?? 0;

  const termino = {
    'Nunca': 10,
    'A veces': 6,
    'La mayoría de las veces': 2,
    'Prefiero no responder': 4
  };
  score += termino[answers[7]] ?? 0;

  const ereccion = {
    'Sí, sin problemas': 10,
    'Sí, pero me gustaría que fuera más fuerte': 6,
    'No siempre': 3,
    'Casi nunca': 0,
    'Prefiero no responder': 3
  };
  score += ereccion[answers[8]] ?? 0;

  const actividad = {
    'Hago ejercicio todos los días': 8,
    'Hago ejercicio de vez en cuando': 5,
    'Tengo poca actividad física': 2,
    'No hago ejercicio en absoluto': 0
  };
  score += actividad[answers[20]] ?? 0;

  const animo = {
    'Estoy bien': 6,
    'Difícil de decir': 3,
    'Regular, podría estar mejor': 2,
    'Terrible, me siento abrumado': 0
  };
  score += animo[answers[22]] ?? 0;

  const tabaco = {
    'No, no fumo': 6,
    'A veces': 3,
    'Sí, lo hago': 0
  };
  score += tabaco[answers[18]] ?? 0;

  // Reescala para sempre cair na faixa "Bajo" (< 20), reforçando a urgência do tratamento.
  const scaled = 8 + (score / 50) * 11;
  const decimal = parseFloat((Math.random() * 0.99).toFixed(2));
  return parseFloat((scaled + decimal).toFixed(2));
}

function getScoreLevel(score) {
  if (score <= 20) return { level: 'bajo', label: 'Bajo', color: '#e74c3c' };
  if (score <= 35) return { level: 'medio', label: 'Medio', color: '#f39c12' };
  return { level: 'alto', label: 'Alto', color: '#27ae60' };
}

function getScoreMessage(level) {
  if (level === 'bajo') {
    return 'Rendir mal en la cama puede bajarte la autoestima, arruinar relaciones y hacer que disfrutes menos de la vida.';
  }
  if (level === 'medio') {
    return 'Hay margen de mejora significativo. Con el plan correcto, podés dar un salto real en semanas.';
  }
  return 'Vas bien, pero siempre hay espacio para ir más allá y llevar tu rendimiento al siguiente nivel.';
}

function getDiagnosticCards(answers) {
  return [
    {
      icon: '⏱',
      label: 'Duración del tiempo',
      value: answers[6] || '2–7 minutos'
    },
    {
      icon: '🔥',
      label: 'Función eréctil',
      value: ({
        'Sí, sin problemas': 'Óptima',
        'Sí, pero me gustaría que fuera más fuerte': 'Por debajo del ideal',
        'No siempre': 'Inconsistente',
        'Casi nunca': 'Disminuida',
        'Prefiero no responder': 'Disminuida'
      })[answers[8]] || 'Disminuida'
    },
    {
      icon: '💪',
      label: 'Tono de los músculos pélvicos',
      value: ({
        'Sí, claro': 'Bien trabajado',
        'No, solo he oído hablar de ellos': 'Necesita fortalecerse',
        'No, nunca': 'Necesita fortalecerse',
        '¿Qué son los músculos del suelo pélvico?': 'Necesita fortalecerse'
      })[answers[4]] || 'Necesita fortalecerse'
    },
    {
      icon: '⚡',
      label: 'Disparador',
      value: 'Problemas de rendimiento'
    },
    {
      icon: '🚶',
      label: 'Estilo de vida',
      value: answers[17] || 'Paseos diarios'
    }
  ];
}
