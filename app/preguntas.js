const preguntas = [
  {
    id: 1,
    pregunta: "¿Cuál es la capital de España?",
    opciones: ["Barcelona", "Madrid", "Sevilla", "Valencia"],
    respuesta: "Madrid"
  },
  {
    id: 2,
    pregunta: "¿Cuál es el planeta más grande del sistema solar?",
    opciones: ["Marte", "Saturno", "Júpiter", "Neptuno"],
    respuesta: "Júpiter"
  },
  {
    id: 3,
    pregunta: "¿Cuántos continentes hay en el modelo de siete continentes?",
    opciones: ["5", "6", "7", "8"],
    respuesta: "7"
  },
  {
    id: 4,
    pregunta: "¿Quién escribió Don Quijote de la Mancha?",
    opciones: [
      "Federico García Lorca",
      "Miguel de Cervantes",
      "Lope de Vega",
      "Francisco de Quevedo"
    ],
    respuesta: "Miguel de Cervantes"
  },
  {
    id: 5,
    pregunta: "¿Cuál es el océano más grande del mundo?",
    opciones: [
      "Atlántico",
      "Índico",
      "Ártico",
      "Pacífico"
    ],
    respuesta: "Pacífico"
  },
  {
    id: 6,
    pregunta: "¿Cuántos lados tiene un hexágono?",
    opciones: ["5", "6", "7", "8"],
    respuesta: "6"
  },
  {
    id: 7,
    pregunta: "¿Qué gas absorben principalmente las plantas durante la fotosíntesis?",
    opciones: [
      "Oxígeno",
      "Nitrógeno",
      "Dióxido de carbono",
      "Hidrógeno"
    ],
    respuesta: "Dióxido de carbono"
  },
  {
    id: 8,
    pregunta: "¿En qué país se encuentran las pirámides de Guiza?",
    opciones: ["México", "Egipto", "Grecia", "India"],
    respuesta: "Egipto"
  },
  {
    id: 9,
    pregunta: "¿Cuántos días tiene un año bisiesto?",
    opciones: ["364", "365", "366", "367"],
    respuesta: "366"
  },
  {
    id: 10,
    pregunta: "¿Cuál es el resultado de 8 × 7?",
    opciones: ["48", "54", "56", "64"],
    respuesta: "56"
  },
  {
    id: 11,
    pregunta: "¿Cuál es el animal terrestre más rápido?",
    opciones: ["León", "Guepardo", "Caballo", "Leopardo"],
    respuesta: "Guepardo"
  },
  {
    id: 12,
    pregunta: "¿Qué idioma se habla principalmente en Brasil?",
    opciones: ["Español", "Francés", "Portugués", "Italiano"],
    respuesta: "Portugués"
  },
  {
    id: 13,
    pregunta: "¿Cuál es el símbolo químico del oro?",
    opciones: ["Ag", "Au", "Fe", "Go"],
    respuesta: "Au"
  },
  {
    id: 14,
    pregunta: "¿Quién pintó la Mona Lisa?",
    opciones: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Claude Monet"
    ],
    respuesta: "Leonardo da Vinci"
  },
  {
    id: 15,
    pregunta: "¿Cuántos minutos tiene una hora?",
    opciones: ["30", "45", "60", "90"],
    respuesta: "60"
  },
  {
    id: 16,
    pregunta: "¿Cuál es la montaña más alta del mundo sobre el nivel del mar?",
    opciones: ["K2", "Mont Blanc", "Everest", "Kilimanjaro"],
    respuesta: "Everest"
  },
  {
    id: 17,
    pregunta: "¿Qué órgano bombea la sangre por el cuerpo humano?",
    opciones: ["Pulmón", "Hígado", "Cerebro", "Corazón"],
    respuesta: "Corazón"
  },
  {
    id: 18,
    pregunta: "¿En qué continente se encuentra Argentina?",
    opciones: ["Europa", "Asia", "América del Sur", "África"],
    respuesta: "América del Sur"
  },
  {
    id: 19,
    pregunta: "¿Cuál es el satélite natural de la Tierra?",
    opciones: ["Fobos", "La Luna", "Europa", "Titán"],
    respuesta: "La Luna"
  },
  {
    id: 20,
    pregunta: "¿A qué temperatura hierve el agua al nivel del mar?",
    opciones: ["50 °C", "75 °C", "100 °C", "120 °C"],
    respuesta: "100 °C"
  },
  {
    id: 21,
    pregunta: "¿Quién escribió Romeo y Julieta?",
    opciones: [
      "William Shakespeare",
      "Charles Dickens",
      "Oscar Wilde",
      "Jane Austen"
    ],
    respuesta: "William Shakespeare"
  },
  {
    id: 22,
    pregunta: "¿Cuál es la moneda oficial de Japón?",
    opciones: ["Yuan", "Won", "Yen", "Dólar"],
    respuesta: "Yen"
  },
  {
    id: 23,
    pregunta: "¿Cuántos huesos tiene aproximadamente un adulto humano?",
    opciones: ["106", "206", "306", "406"],
    respuesta: "206"
  },
  {
    id: 24,
    pregunta: "¿Qué país tiene forma de bota?",
    opciones: ["Portugal", "Italia", "Croacia", "Noruega"],
    respuesta: "Italia"
  },
  {
    id: 25,
    pregunta: "¿Cuál es el resultado de la raíz cuadrada de 144?",
    opciones: ["10", "11", "12", "14"],
    respuesta: "12"
  },
  {
    id: 26,
    pregunta: "¿Qué instrumento se utiliza para medir la temperatura?",
    opciones: ["Barómetro", "Termómetro", "Higrómetro", "Anemómetro"],
    respuesta: "Termómetro"
  },
  {
    id: 27,
    pregunta: "¿En qué año llegó el ser humano a la Luna por primera vez?",
    opciones: ["1959", "1965", "1969", "1975"],
    respuesta: "1969"
  },
  {
    id: 28,
    pregunta: "¿Cuál es el mamífero más grande del mundo?",
    opciones: [
      "Elefante africano",
      "Tiburón ballena",
      "Ballena azul",
      "Jirafa"
    ],
    respuesta: "Ballena azul"
  },
  {
    id: 29,
    pregunta: "¿Cuántos colores tiene tradicionalmente el arcoíris?",
    opciones: ["5", "6", "7", "8"],
    respuesta: "7"
  },
  {
    id: 30,
    pregunta: "¿Cuál es la capital de Francia?",
    opciones: ["Roma", "París", "Bruselas", "Lyon"],
    respuesta: "París"
  },
  {
    id: 31,
    pregunta: "¿Qué parte de la célula contiene principalmente el ADN?",
    opciones: ["Membrana", "Citoplasma", "Núcleo", "Ribosoma"],
    respuesta: "Núcleo"
  },
  {
    id: 32,
    pregunta: "¿Cuál es el idioma con más hablantes nativos del mundo?",
    opciones: ["Inglés", "Español", "Hindi", "Chino mandarín"],
    respuesta: "Chino mandarín"
  },
  {
    id: 33,
    pregunta: "¿Qué país regaló la Estatua de la Libertad a Estados Unidos?",
    opciones: ["Reino Unido", "Francia", "Alemania", "Canadá"],
    respuesta: "Francia"
  },
  {
    id: 34,
    pregunta: "¿Cuántos jugadores de un equipo de fútbol hay en el campo al comenzar un partido?",
    opciones: ["9", "10", "11", "12"],
    respuesta: "11"
  },
  {
    id: 35,
    pregunta: "¿Cuál es el metal cuyo símbolo químico es Fe?",
    opciones: ["Flúor", "Hierro", "Fósforo", "Francio"],
    respuesta: "Hierro"
  },
  {
    id: 36,
    pregunta: "¿En qué país se originaron los Juegos Olímpicos antiguos?",
    opciones: ["Italia", "Grecia", "Egipto", "Turquía"],
    respuesta: "Grecia"
  },
  {
    id: 37,
    pregunta: "¿Cuál es el desierto cálido más grande del mundo?",
    opciones: [
      "Desierto de Gobi",
      "Desierto del Sahara",
      "Desierto de Atacama",
      "Desierto de Sonora"
    ],
    respuesta: "Desierto del Sahara"
  },
  {
    id: 38,
    pregunta: "¿Qué planeta es conocido como el planeta rojo?",
    opciones: ["Venus", "Marte", "Mercurio", "Urano"],
    respuesta: "Marte"
  },
  {
    id: 39,
    pregunta: "¿Cuántas teclas tiene un piano estándar moderno?",
    opciones: ["66", "76", "88", "98"],
    respuesta: "88"
  },
  {
    id: 40,
    pregunta: "¿Cuál es la capital de Australia?",
    opciones: ["Sídney", "Melbourne", "Canberra", "Perth"],
    respuesta: "Canberra"
  },
  {
    id: 41,
    pregunta: "¿Qué científico formuló la teoría de la relatividad?",
    opciones: [
      "Isaac Newton",
      "Galileo Galilei",
      "Albert Einstein",
      "Nikola Tesla"
    ],
    respuesta: "Albert Einstein"
  },
  {
    id: 42,
    pregunta: "¿Cuál es el órgano más grande del cuerpo humano?",
    opciones: ["Hígado", "Cerebro", "Piel", "Pulmón"],
    respuesta: "Piel"
  },
  {
    id: 43,
    pregunta: "¿Qué país es famoso por la Torre de Pisa?",
    opciones: ["Grecia", "Italia", "Francia", "España"],
    respuesta: "Italia"
  },
  {
    id: 44,
    pregunta: "¿Cuántos grados tiene un ángulo recto?",
    opciones: ["45°", "90°", "180°", "360°"],
    respuesta: "90°"
  },
  {
    id: 45,
    pregunta: "¿Qué vitamina produce el cuerpo principalmente con la exposición solar?",
    opciones: [
      "Vitamina A",
      "Vitamina B12",
      "Vitamina C",
      "Vitamina D"
    ],
    respuesta: "Vitamina D"
  },
  {
    id: 46,
    pregunta: "¿Cuál es la capital de Canadá?",
    opciones: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    respuesta: "Ottawa"
  },
  {
    id: 47,
    pregunta: "¿Qué fuerza nos mantiene sobre la superficie de la Tierra?",
    opciones: ["Magnetismo", "Gravedad", "Fricción", "Electricidad"],
    respuesta: "Gravedad"
  },
  {
    id: 48,
    pregunta: "¿Cuál es el primer elemento de la tabla periódica?",
    opciones: ["Helio", "Oxígeno", "Hidrógeno", "Carbono"],
    respuesta: "Hidrógeno"
  },
  {
    id: 49,
    pregunta: "¿En qué deporte se utiliza una raqueta y un volante?",
    opciones: ["Tenis", "Bádminton", "Squash", "Pádel"],
    respuesta: "Bádminton"
  },
  {
    id: 50,
    pregunta: "¿Cuántos planetas hay en el sistema solar?",
    opciones: ["7", "8", "9", "10"],
    respuesta: "8"
  }
];