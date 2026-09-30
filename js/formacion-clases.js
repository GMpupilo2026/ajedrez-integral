// Contenido del curso "Formación Ajedrez" — AjedrezIntegral.
//
// 8 clases presenciales de 5 horas (300 minutos) cada una. Cada clase trae:
//   - agenda:       plan minuto a minuto (la suma de `min` es siempre 300)
//   - contenido:    teoría por secciones, con ejemplos en tablero
//                   (posición FEN + jugadas en SAN + comentario por jugada)
//   - diapositivas: la presentación para proyectar en el aula
//   - practicas:    ejercicios en tablero interactivo
//   - preguntas:    control de comprensión de opción múltiple
//   - tarea:        trabajo para la casa
//
// Tipos de práctica:
//   tipo 'mate'    → el alumno juega las jugadas del bando que mueve; el
//                    rival responde solo con la línea de `linea`. En la última
//                    jugada se acepta CUALQUIER jugada que dé mate (por si hay
//                    más de un mate), y en las anteriores solo la de `linea`.
//                    `mateEn` = número de jugadas propias.
//   tipo 'jugada'  → se acepta cualquiera de las jugadas de `soluciones`.
//                    Si hay `linea`, "Ver solución" la reproduce completa.
//
// Todas las posiciones, líneas y soluciones se verificaron con chess.js
// 0.10.3 (posición legal, jugadas legales, que el mate sea mate y que en
// los ejercicios de mate en 2 o 3 la primera jugada sea la única que lo
// fuerza). Si se toca una posición, hay que volver a verificarla.

window.FORMACION_CURSO = {
  titulo: 'Formación Ajedrez',
  subtitulo: 'Del primer movimiento a la primera partida de torneo',
  descripcion: 'Curso presencial de 8 clases de 5 horas para aprender ajedrez de forma completa y ordenada: reglas, mates básicos, aperturas, táctica, patrones de mate, finales, estrategia y cálculo. Cada clase combina teoría con presentación, ejemplos en tablero, ejercicios interactivos, partidas temáticas y análisis.',
  duracionClaseMin: 300,
  publico: 'Principiantes absolutos y jugadores de club que quieren ordenar su formación (desde 10 años).',
  materiales: [
    'Tablero y piezas por pareja de alumnos (o tablero mural / proyector para el profesor)',
    'Relojes de ajedrez (uno por pareja) a partir de la clase 3',
    'Planillas de anotación impresas',
    'Esta página abierta en el proyector (modo Presentación) y en los dispositivos de los alumnos (Prácticas)',
  ],
  metodologia: [
    'Cada bloque de teoría dura como máximo 45–50 minutos y siempre va seguido de práctica.',
    'Dos descansos de 15 minutos por clase: la atención cae mucho después de 90 minutos seguidos.',
    'Todas las clases terminan con partidas temáticas (se empieza desde una posición del tema del día) y con un análisis colectivo.',
    'El control de comprensión y la tarea cierran cada clase y se revisan al comienzo de la siguiente.',
  ],

  clases: [
    // =====================================================================
    // CLASE 1
    // =====================================================================
    {
      numero: 1,
      titulo: 'El tablero, las piezas y las reglas',
      icono: '♟️',
      nivel: 'Inicial',
      resumen: 'Conocer el tablero, cómo se mueve y captura cada pieza, las jugadas especiales (enroque, captura al paso y coronación), la notación algebraica y cómo termina una partida: jaque mate o tablas.',
      objetivos: [
        'Colocar correctamente el tablero y las piezas en la posición inicial.',
        'Mover y capturar con las seis piezas sin errores.',
        'Ejecutar el enroque, la captura al paso y la coronación, y conocer sus condiciones.',
        'Leer y escribir jugadas en notación algebraica.',
        'Distinguir jaque, jaque mate y ahogado, y conocer los demás tipos de tablas.',
      ],
      agenda: [
        { min: 15, tipo: 'inicio', bloque: 'Bienvenida y presentación del curso', detalle: 'Presentación del profesor y de los alumnos, objetivos del curso, normas del aula y breve historia del ajedrez (origen en la India, el chaturanga, llegada a España).' },
        { min: 45, tipo: 'teoria', bloque: 'El tablero y el movimiento de las piezas', detalle: 'Filas, columnas y diagonales; "casilla clara a la derecha"; posición inicial; movimiento y captura de torre, alfil, dama, rey, caballo y peón. Diapositivas 1–6.' },
        { min: 30, tipo: 'practica', bloque: 'Práctica guiada: juegos de piezas', detalle: 'Minijuegos por parejas: "la guerra de peones" (solo peones; gana quien llega primero a la última fila), "caballo recolector" (tocar todas las casillas marcadas con el caballo) y "torre contra peones".' },
        { min: 15, tipo: 'descanso', bloque: 'Descanso', detalle: '' },
        { min: 45, tipo: 'teoria', bloque: 'Jugadas especiales y notación', detalle: 'Enroque corto y largo (5 condiciones), captura al paso, coronación. Notación algebraica: nombres de piezas (R, D, T, A, C), capturas, jaques, enroques. Diapositivas 7–10 y ejemplos en tablero.' },
        { min: 40, tipo: 'practica', bloque: 'Ejercicios interactivos', detalle: 'Prácticas 1 a 6 de esta página (mates en 1 sencillos, enroque, al paso, coronación). Dictado de jugadas: el profesor dicta una partida corta y los alumnos la reproducen en su tablero.' },
        { min: 15, tipo: 'descanso', bloque: 'Descanso', detalle: '' },
        { min: 20, tipo: 'teoria', bloque: 'Cómo termina la partida', detalle: 'Jaque, las tres formas de salir del jaque, jaque mate, ahogado, material insuficiente, triple repetición, regla de las 50 jugadas y tablas de mutuo acuerdo. Diapositivas 11–12.' },
        { min: 50, tipo: 'juego', bloque: 'Primeras partidas completas', detalle: 'Partidas libres por parejas sin reloj, anotando las jugadas. El profesor recorre las mesas corrigiendo movimientos ilegales y la notación. Se rotan las parejas cada partida.' },
        { min: 15, tipo: 'analisis', bloque: 'Revisión colectiva', detalle: 'Se comentan en el tablero mural los errores de reglas más frecuentes vistos durante las partidas (enroque ilegal, peón que captura de frente, ahogados sin querer).' },
        { min: 10, tipo: 'cierre', bloque: 'Control de comprensión y tarea', detalle: 'Preguntas de control de esta clase y explicación de la tarea.' },
      ],
      contenido: [
        {
          titulo: 'El tablero',
          texto: 'El tablero tiene 64 casillas (8×8) alternando claras y oscuras. Las filas horizontales se numeran del 1 al 8 (empezando por el lado de las blancas) y las columnas verticales se nombran de la "a" a la "h" (de izquierda a derecha, vistas por las blancas). Cada casilla tiene un nombre único: columna + fila, por ejemplo e4. Las diagonales son líneas de casillas del mismo color.',
          puntos: [
            'Regla de oro para colocar el tablero: la casilla de la esquina inferior derecha de cada jugador debe ser clara ("blanca a la derecha").',
            'La dama se coloca en la casilla de su color: dama blanca en d1 (clara), dama negra en d8 (oscura).',
            'El centro del tablero son las casillas d4, e4, d5 y e5; el centro ampliado va de c3 a f6.',
            'Siempre empiezan las blancas.',
          ],
          ejemplo: {
            titulo: 'Posición inicial',
            fen: 'start',
            jugadas: [],
            comentarios: [],
            nota: 'Primera fila: torre, caballo, alfil, dama, rey, alfil, caballo, torre. Segunda fila: los ocho peones.',
          },
        },
        {
          titulo: 'Cómo se mueven y capturan las piezas',
          texto: 'Todas las piezas capturan del mismo modo en que se mueven, ocupando la casilla de la pieza rival, excepto el peón. Ninguna pieza puede saltar sobre otras, excepto el caballo.',
          puntos: [
            'Torre (T): en línea recta por filas y columnas, tantas casillas como quiera.',
            'Alfil (A): en diagonal, tantas casillas como quiera. Cada alfil se queda siempre en casillas de un mismo color.',
            'Dama (D): combina torre y alfil; es la pieza más poderosa.',
            'Rey (R): una casilla en cualquier dirección. Nunca puede ir a una casilla atacada.',
            'Caballo (C): en "L" (dos casillas en una dirección y una en perpendicular). Salta sobre las piezas y siempre cambia de color de casilla.',
            'Peón: avanza una casilla hacia adelante (dos si está en su casilla inicial) y captura en diagonal hacia adelante. Nunca retrocede.',
          ],
          ejemplo: {
            titulo: 'Una apertura para ver moverse a todas las piezas',
            fen: 'start',
            jugadas: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'd3', 'Nf6', 'Nc3', 'd6', 'Bg5', 'h6', 'Bxf6', 'Qxf6'],
            comentarios: [
              'El peón de rey avanza dos casillas desde su casilla inicial.',
              'Las negras responden igual y ocupan el centro.',
              'El caballo salta en "L" y ataca el peón de e5.',
              'El caballo negro defiende el peón.',
              'El alfil sale en diagonal y apunta a f7.',
              'Las negras hacen lo mismo y apuntan a f2.',
              'El peón avanza una sola casilla: abre la diagonal del otro alfil.',
              'El segundo caballo negro sale y ataca el peón de e4.',
              'El caballo defiende e4.',
              'El peón abre la diagonal del alfil de c8.',
              'El alfil clava al caballo de f6 contra la dama.',
              'El peón ataca al alfil.',
              'Captura: el alfil ocupa la casilla del caballo (se anota con "x").',
              'La dama recaptura moviéndose en diagonal. Se cambiaron un alfil por un caballo.',
            ],
          },
        },
        {
          titulo: 'El enroque',
          texto: 'Es la única jugada en la que se mueven dos piezas: el rey se desplaza dos casillas hacia una torre y la torre salta al otro lado del rey. Sirve para poner al rey a salvo y conectar las torres.',
          puntos: [
            'Enroque corto (O-O): hacia la torre de h. Enroque largo (O-O-O): hacia la torre de a.',
            'Condición 1: ni el rey ni esa torre se han movido antes.',
            'Condición 2: no hay piezas entre el rey y la torre.',
            'Condición 3: el rey no está en jaque.',
            'Condición 4: el rey no pasa por una casilla atacada.',
            'Condición 5: el rey no queda en jaque al terminar (como cualquier jugada).',
            'Se mueve primero el rey (tocar primero la torre, según el reglamento, obliga a mover la torre).',
          ],
          ejemplo: {
            titulo: 'Enroque corto de ambos bandos',
            fen: 'start',
            jugadas: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'O-O', 'Nf6', 'd3', 'O-O'],
            comentarios: [
              '', '', 'Sale el caballo: queda libre f1…', '', '…y sale el alfil: el camino entre el rey y la torre de h1 está despejado.', '',
              'Enroque corto: el rey va de e1 a g1 y la torre de h1 a f1.',
              '', '', 'Las negras también enrocan corto: rey a g8, torre a f8.',
            ],
          },
        },
        {
          titulo: 'La captura al paso',
          texto: 'Si un peón avanza dos casillas desde su posición inicial y queda al lado de un peón rival, ese peón rival puede capturarlo como si hubiera avanzado solo una casilla. Solo se puede hacer en la jugada inmediatamente siguiente; si no, el derecho se pierde.',
          puntos: [
            'Solo la pueden hacer los peones, y solo contra peones.',
            'El peón que captura termina en la casilla que el otro "saltó".',
            'Es obligatoria solo si es la única jugada legal (por ejemplo, para salir de un jaque).',
          ],
          ejemplo: {
            titulo: 'Al paso en la Defensa Alekhine',
            fen: 'start',
            jugadas: ['e4', 'Nf6', 'e5', 'd5', 'exd6'],
            comentarios: [
              '', 'El caballo ataca e4.', 'El peón avanza y ataca al caballo.',
              'El peón negro avanza DOS casillas y queda junto al peón blanco de e5.',
              '¡Captura al paso! El peón de e5 captura en d6 como si el negro hubiera jugado d6. El peón de d5 desaparece.',
            ],
          },
        },
        {
          titulo: 'La coronación',
          texto: 'Cuando un peón llega a la última fila se cambia obligatoriamente por una dama, torre, alfil o caballo del mismo color (casi siempre dama). Se puede tener más de una dama.',
          puntos: [
            'Se anota con "=" y la pieza elegida: e8=D (en notación inglesa, e8=Q).',
            'A veces conviene coronar caballo (subpromoción) para dar jaque o evitar un ahogado.',
          ],
          ejemplo: {
            titulo: 'El peón corona',
            fen: '8/4P3/8/8/8/2k5/8/4K3 w - - 0 1',
            jugadas: ['e8=Q'],
            comentarios: ['El peón llega a e8 y se convierte en dama.'],
          },
        },
        {
          titulo: 'Jaque, jaque mate y tablas',
          texto: 'Un rey está en jaque cuando está atacado. Hay tres formas de salir del jaque: mover el rey, capturar la pieza que da jaque o interponer una pieza. Si no hay ninguna, es jaque mate y la partida termina. Si el bando que mueve no está en jaque pero no tiene ninguna jugada legal, es ahogado y la partida es tablas.',
          puntos: [
            'Tablas por ahogado (el rey no está en jaque y no hay jugadas legales).',
            'Tablas por material insuficiente (por ejemplo, rey contra rey, o rey y alfil contra rey).',
            'Tablas por triple repetición de la misma posición.',
            'Tablas por la regla de las 50 jugadas sin capturas ni movimientos de peón.',
            'Tablas de mutuo acuerdo.',
          ],
          ejemplo: {
            titulo: 'El mate del loco: el más rápido posible',
            fen: 'start',
            jugadas: ['f3', 'e5', 'g4', 'Qh4#'],
            comentarios: [
              'Mala jugada: debilita la diagonal del rey.',
              '', 'Otro error grave: la diagonal e1–h4 queda abierta.',
              'Jaque mate en 2 jugadas: el rey no puede moverse, no se puede capturar la dama y no se puede tapar el jaque.',
            ],
          },
        },
        {
          titulo: 'Ejemplo de ahogado',
          texto: 'Juegan negras. El rey negro de h8 no está en jaque, pero todas sus casillas (g8, g7 y h7) están controladas por la dama y el rey blancos, y no tiene otras piezas. Es ahogado: tablas, aunque las blancas tengan una dama de ventaja.',
          puntos: ['Con mucha ventaja, antes de cada jugada hay que preguntarse: "¿le dejo alguna jugada al rival?".'],
          ejemplo: {
            titulo: 'Ahogado',
            fen: '7k/5Q2/6K1/8/8/8/8/8 b - - 0 1',
            jugadas: [],
            comentarios: [],
            nota: 'Negras sin jugadas legales y sin jaque: tablas por ahogado.',
          },
        },
      ],
      diapositivas: [
        { titulo: 'Formación Ajedrez · Clase 1', subtitulo: 'El tablero, las piezas y las reglas', puntos: ['5 horas · teoría + práctica + partidas', 'Objetivo: jugar una partida completa respetando todas las reglas'], nota: 'Presentarse, preguntar quién ya sabe mover las piezas para formar parejas equilibradas.' },
        { titulo: 'El tablero', puntos: ['64 casillas: 8 filas (1–8) × 8 columnas (a–h)', 'Casilla clara a la derecha', 'Cada casilla tiene nombre: columna + fila (e4)'], fen: '8/8/8/8/8/8/8/8 w - - 0 1', nota: 'Pedir que nombren casillas señaladas al azar. Juego rápido: "¿de qué color es g5?".' },
        { titulo: 'La posición inicial', puntos: ['Torre, caballo, alfil, dama, rey, alfil, caballo, torre', 'La dama en su color', 'Empiezan las blancas'], fen: 'start' },
        { titulo: 'Torre y alfil', puntos: ['Torre: filas y columnas', 'Alfil: diagonales, siempre del mismo color', 'No saltan piezas'], fen: '8/8/8/3R4/8/8/5B2/8 w - - 0 1', nota: 'Contar cuántas casillas controla cada pieza desde el centro: torre 14, alfil de f2 9.' },
        { titulo: 'Dama y rey', puntos: ['Dama = torre + alfil', 'Rey: una casilla en cualquier dirección', 'El rey nunca puede ir a una casilla atacada'], fen: '8/8/8/3Q4/8/8/8/4K3 w - - 0 1' },
        { titulo: 'Caballo y peón', puntos: ['Caballo: en "L", salta piezas, cambia de color', 'Peón: avanza 1 (o 2 desde el inicio)', 'Peón: captura en diagonal hacia adelante'], fen: '8/8/8/8/4N3/8/3P4/8 w - - 0 1' },
        { titulo: 'El enroque', puntos: ['O-O corto · O-O-O largo', 'Rey y torre sin mover', 'Sin piezas en medio', 'El rey no está en jaque, no pasa por casilla atacada ni termina en jaque'], fen: 'r3k2r/pppppppp/8/8/8/8/PPPPPPPP/R3K2R w KQkq - 0 1', nota: 'Demostrar en el tablero mural los dos enroques.' },
        { titulo: 'La captura al paso', puntos: ['Peón que avanza dos casillas y queda al lado de un peón rival', 'Se captura como si hubiera avanzado una', 'Solo en la jugada siguiente'], fen: 'rnbqkb1r/ppp1pppp/5n2/3pP3/8/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 3' },
        { titulo: 'La coronación', puntos: ['El peón que llega a la última fila se transforma', 'Dama, torre, alfil o caballo', 'Notación: e8=D'], fen: '8/4P3/8/8/8/2k5/8/4K3 w - - 0 1' },
        { titulo: 'Notación algebraica', puntos: ['R rey · D dama · T torre · A alfil · C caballo · (peón sin letra)', 'Cf3 · Axc6 · exd5 · O-O · e8=D', '+ jaque · # mate · ! buena · ? mala'], nota: 'En los libros en inglés: K, Q, R, B, N. Esta página usa la notación inglesa en los tableros.' },
        { titulo: 'Jaque y jaque mate', puntos: ['Salir del jaque: mover el rey, capturar o interponer', 'Si no se puede: jaque mate', 'El mate del loco: 1.f3 e5 2.g4 Dh4#'], fen: 'rnb1kbnr/pppp1ppp/8/4p3/6Pq/5P2/PPPPP2P/RNBQKBNR w KQkq - 1 3' },
        { titulo: 'Las tablas', puntos: ['Ahogado', 'Material insuficiente', 'Triple repetición', '50 jugadas', 'Mutuo acuerdo'], fen: '7k/5Q2/6K1/8/8/8/8/8 b - - 0 1', nota: 'Insistir en el ahogado: es la forma más frustrante de no ganar una partida ganada.' },
      ],
      practicas: [
        { titulo: 'Mate con la torre', tipo: 'mate', mateEn: 1, fen: '6k1/5ppp/8/8/8/8/8/R5K1 w - - 0 1', linea: ['Ra8#'], enunciado: 'Juegan blancas y dan mate en 1.', explica: 'La torre llega a la octava fila. El rey negro está encerrado por sus propios peones: es el "mate del pasillo".' },
        { titulo: 'Mate con la dama', tipo: 'mate', mateEn: 1, fen: '7k/8/6K1/8/8/8/8/5Q2 w - - 0 1', linea: ['Qf8#'], enunciado: 'Juegan blancas y dan mate en 1.', explica: 'La dama da jaque por la octava fila y el rey blanco controla g7 y h7.' },
        { titulo: 'Rey y torre', tipo: 'mate', mateEn: 1, fen: 'k7/2K5/8/8/8/8/8/4R3 w - - 0 1', linea: ['Ra1#'], enunciado: 'Juegan blancas y dan mate en 1.', explica: 'La torre da jaque por la columna a y el rey blanco de c7 controla b7 y b8.' },
        { titulo: 'Enroca', tipo: 'jugada', fen: 'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4', soluciones: ['O-O'], enunciado: 'Juegan blancas. Pon el rey a salvo con un enroque (mueve el rey dos casillas).', explica: 'O-O: el rey va a g1 y la torre a f1. Se cumplen todas las condiciones: el rey y la torre no se movieron, f1 y g1 están libres y ninguna de esas casillas está atacada.' },
        { titulo: 'Captura al paso', tipo: 'jugada', fen: 'rnbqkb1r/ppp1pppp/5n2/3pP3/8/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 3', soluciones: ['exd6'], enunciado: 'Las negras acaban de jugar d7–d5. Juegan blancas: captura ese peón.', explica: 'exd6 al paso: el peón de e5 va a d6 y el peón de d5 desaparece. Solo es posible en esta jugada.' },
        { titulo: 'Corona', tipo: 'jugada', fen: '8/4P3/8/8/8/2k5/8/4K3 w - - 0 1', soluciones: ['e8=Q'], enunciado: 'Juegan blancas. Convierte el peón en dama.', explica: 'e8=D. El peón llega a la última fila y se transforma en dama.' },
      ],
      preguntas: [
        { enunciado: '¿Cuántas casillas tiene el tablero?', opciones: ['60', '64', '72', '81'], correcta: 1, explica: '8 filas × 8 columnas = 64.' },
        { enunciado: '¿En qué casilla empieza la dama blanca?', opciones: ['e1', 'd1', 'd8', 'c1'], correcta: 1, explica: 'La dama va en la casilla de su color: la blanca en d1 (clara).' },
        { enunciado: '¿Cuál de estas NO es una condición para enrocar?', opciones: ['El rey no se ha movido', 'El rey no está en jaque', 'La dama no se ha movido', 'No hay piezas entre el rey y la torre'], correcta: 2, explica: 'La dama no influye en el enroque; solo importan el rey, la torre y las casillas del camino.' },
        { enunciado: 'El bando que mueve no está en jaque y no tiene ninguna jugada legal. ¿Qué ocurre?', opciones: ['Pierde', 'Pasa el turno', 'Tablas por ahogado', 'Debe mover el rey igualmente'], correcta: 2, explica: 'Es ahogado y la partida termina en tablas.' },
        { enunciado: '¿Qué significa la jugada "Cxe5+"?', opciones: ['El caballo va a e5', 'El caballo captura en e5 y da jaque', 'El caballo captura en e5 y da mate', 'El rey captura en e5'], correcta: 1, explica: 'C = caballo, x = captura, + = jaque.' },
      ],
      tarea: [
        'Jugar 3 partidas completas (en casa o en línea) anotando todas las jugadas en planilla.',
        'Escribir de memoria las 5 condiciones del enroque y las 5 formas de tablas.',
        'Reproducir en el tablero la partida del ejemplo "Una apertura para ver moverse a todas las piezas" leyendo solo la notación.',
      ],
    },

    // =====================================================================
    // CLASE 2
    // =====================================================================
    {
      numero: 2,
      titulo: 'Valor de las piezas y mates básicos',
      icono: '♜',
      nivel: 'Inicial',
      resumen: 'Aprender cuánto vale cada pieza para decidir los cambios, y dominar los mates básicos que todo jugador debe saber hacer sin pensar: dos torres (la escalera), dama y rey, y torre y rey, evitando siempre el ahogado.',
      objetivos: [
        'Conocer el valor relativo de las piezas y usarlo para decidir capturas y cambios.',
        'Dar mate con dos torres usando la técnica de la escalera.',
        'Dar mate con dama y rey en menos de 10 jugadas desde posiciones sencillas.',
        'Dar mate con torre y rey usando la oposición de los reyes.',
        'Reconocer y evitar el ahogado.',
      ],
      agenda: [
        { min: 15, tipo: 'inicio', bloque: 'Repaso y revisión de la tarea', detalle: 'Revisión de las planillas de la tarea. Preguntas rápidas de reglas (enroque, al paso, ahogado).' },
        { min: 35, tipo: 'teoria', bloque: 'El valor de las piezas', detalle: 'Tabla de valores (peón 1, caballo 3, alfil 3, torre 5, dama 9, rey = la partida). Cambios buenos y malos, la "calidad", contar atacantes y defensores. Diapositivas 1–4.' },
        { min: 25, tipo: 'practica', bloque: 'Práctica: ¿gano o pierdo material?', detalle: 'El profesor muestra posiciones con capturas posibles y los alumnos cuentan el balance antes de capturar. Juego por parejas "come y cuenta".' },
        { min: 15, tipo: 'descanso', bloque: 'Descanso', detalle: '' },
        { min: 50, tipo: 'teoria', bloque: 'Mates básicos: escalera, dama y torre', detalle: 'Mate con dos torres (escalera), mate con dama (encerrar al rey en una caja y acercar el rey propio), mate con torre (oposición de reyes y jugada de espera). Diapositivas 5–10 con los ejemplos en tablero.' },
        { min: 45, tipo: 'practica', bloque: 'Ejercicios interactivos y práctica contra el compañero', detalle: 'Prácticas de esta página. Después, por parejas: uno tiene rey y dama (o rey y torre) y el otro solo rey; se cuenta cuántas jugadas tarda en dar mate y se cambian los papeles.' },
        { min: 15, tipo: 'descanso', bloque: 'Descanso', detalle: '' },
        { min: 15, tipo: 'teoria', bloque: 'El ahogado: la trampa del final ganado', detalle: 'Posiciones típicas de ahogado con dama. Regla práctica: "antes de mover, cuenta las casillas del rey rival".' },
        { min: 55, tipo: 'juego', bloque: 'Partidas completas con "tablas prohibidas"', detalle: 'Partidas por parejas. Regla especial de la clase: si alguien tiene un mate básico en el tablero y ahoga, pierde la partida. Se anota.' },
        { min: 20, tipo: 'analisis', bloque: 'Análisis de finales jugados', detalle: 'Se reproducen en el mural los finales de las partidas en los que se tardó mucho en dar mate o hubo ahogado.' },
        { min: 10, tipo: 'cierre', bloque: 'Control de comprensión y tarea', detalle: '' },
      ],
      contenido: [
        {
          titulo: 'El valor relativo de las piezas',
          texto: 'Para decidir si una captura o un cambio conviene, se usa una escala aproximada de valores. No es una ley exacta (una pieza activa vale más que una encerrada), pero sirve para no regalar material.',
          puntos: [
            'Peón = 1 · Caballo = 3 · Alfil = 3 (algo más en posiciones abiertas) · Torre = 5 · Dama = 9.',
            'El rey no tiene valor de cambio: perderlo es perder la partida. En el final, como pieza de ataque, vale unos 4 puntos.',
            'Ganar "la calidad" es cambiar una pieza menor (3) por una torre (5).',
            'La pareja de alfiles suele ser una ventaja.',
            'Antes de capturar, cuenta: ¿cuántas piezas atacan esa casilla y cuántas la defienden? ¿Qué vale lo que entrego y lo que recibo?',
          ],
        },
        {
          titulo: 'Mate con dos torres: la escalera',
          texto: 'Las torres se turnan: una corta al rey en una fila y la otra da jaque en la fila siguiente, empujándolo hasta el borde. Si el rey se acerca a una torre, esa torre se aleja al otro extremo del tablero, lejos del rey.',
          puntos: [
            'Una torre corta, la otra da jaque: el rey retrocede una fila cada vez.',
            'Si el rey amenaza una torre, llévala al lado contrario del tablero.',
            'No hace falta el rey propio.',
          ],
          ejemplo: {
            titulo: 'La escalera paso a paso',
            fen: '8/8/8/1k6/8/8/6R1/K6R w - - 0 1',
            jugadas: ['Rh4', 'Kc5', 'Rg5+', 'Kd6', 'Rh6+', 'Ke7', 'Rg7+', 'Kf8', 'Ra7', 'Kg8', 'Rb6', 'Kf8', 'Rb8#'],
            comentarios: [
              'La torre de h corta al rey en la cuarta fila: ya no puede bajar.',
              '', 'Jaque en la quinta fila: el rey debe subir.',
              '', 'Jaque en la sexta.',
              '', 'Jaque en la séptima.',
              'El rey amenaza la torre de g7.',
              'La torre se va al otro extremo, lejos del rey, sin dejar de cortar la séptima fila.',
              'El rey ahora molesta a la torre de h6 (no puede ir a h8 porque quedaría adyacente al rey).',
              'También la segunda torre se aleja por la sexta fila.',
              '', '¡Jaque mate! La torre de a7 controla la séptima fila y la de b8 da jaque.',
            ],
          },
        },
        {
          titulo: 'Mate con dama y rey',
          texto: 'La dama sola no puede dar mate: necesita la ayuda del rey. Primero se reduce el espacio del rey rival con la dama (a distancia de caballo del rey rival es una buena referencia), luego se acerca el rey propio y se da mate en el borde.',
          puntos: [
            'Encierra al rey rival en una "caja" cada vez más pequeña.',
            'Cuando el rey rival está en el borde, deja de empujar con la dama y acerca tu rey.',
            '¡Cuidado con el ahogado! Cuando al rey rival le quedan dos o tres casillas, revisa que siempre tenga al menos una jugada o que tu jugada sea mate.',
          ],
          ejemplo: {
            titulo: 'Mate en el borde (y el ahogado que hay que evitar)',
            fen: 'k7/8/1K6/8/8/8/8/2Q5 w - - 0 1',
            jugadas: ['Qc8#'],
            comentarios: ['Mate: la dama da jaque por la octava fila y el rey blanco controla a7 y b7. En cambio, 1.Dc7?? sería ahogado: el rey negro no estaría en jaque y no tendría casillas.'],
          },
        },
        {
          titulo: 'Mate con torre y rey',
          texto: 'Con una sola torre el rey propio es imprescindible. El mate se da en el borde cuando los reyes están enfrentados (en oposición) y la torre da jaque por la fila del borde. Si el rey rival no se pone enfrente, se hace una jugada de espera con la torre.',
          puntos: [
            'La torre corta al rey rival en una fila o columna.',
            'El rey propio se acerca hasta quedar enfrente del rival (oposición).',
            'Cuando los reyes están enfrentados, jaque de torre en el borde = mate.',
            'Jugada de espera: mover la torre sin dejar de cortar, para que el rey rival tenga que ponerse enfrente.',
          ],
          ejemplo: {
            titulo: 'Técnica con jugada de espera',
            fen: '5k2/8/4K3/8/8/8/8/R7 w - - 0 1',
            jugadas: ['Ra7', 'Kg8', 'Kf6', 'Kh8', 'Kg6', 'Kg8', 'Ra8#'],
            comentarios: [
              'La torre corta la séptima fila: el rey negro queda preso en la octava.',
              '', 'El rey blanco lo sigue.',
              '', 'Ahora sí, el rey blanco se pone enfrente…',
              '…y el rey negro está obligado a ponerse en oposición.',
              'Jaque mate en la octava fila.',
            ],
          },
        },
      ],
      diapositivas: [
        { titulo: 'Formación Ajedrez · Clase 2', subtitulo: 'Valor de las piezas y mates básicos', puntos: ['¿Qué pieza vale más?', 'Los tres mates que hay que saber de memoria'] },
        { titulo: 'La tabla de valores', puntos: ['Peón 1', 'Caballo 3 · Alfil 3', 'Torre 5', 'Dama 9', 'Rey: ¡la partida!'], nota: 'Preguntar: ¿torre por alfil y peón es buen cambio? (5 contra 4: pierdo 1).' },
        { titulo: 'Cambios buenos y malos', puntos: ['Ganar la calidad: pieza menor por torre', 'Dos piezas menores (6) por una torre (5) suele convenir', 'Una pieza activa vale más que una pasiva'] },
        { titulo: 'Antes de capturar, cuenta', puntos: ['¿Cuántos atacantes y cuántos defensores?', '¿Qué entrego y qué recibo?', 'Captura primero con la pieza de menor valor'] },
        { titulo: 'La escalera', puntos: ['Una torre corta, la otra da jaque', 'El rey retrocede fila a fila', 'Si ataca a una torre: ¡llévala lejos!'], fen: '8/8/8/1k6/8/8/6R1/K6R w - - 0 1' },
        { titulo: 'Escalera: el mate', puntos: ['Torre en la 7.ª + torre en la 8.ª', 'No hace falta el rey propio'], fen: '1R3k2/R7/8/8/8/8/8/K7 b - - 0 7' },
        { titulo: 'Mate con dama: la caja', puntos: ['La dama encierra al rey rival', 'Cuando está en el borde, acerca tu rey', 'Mate: dama protegida por el rey o dama en el borde con el rey cortando la huida'], fen: '8/8/8/3k4/8/8/8/Q3K3 w - - 0 1', nota: 'Hacer la demostración completa en el mural desde esta posición, preguntando a los alumnos cada jugada.' },
        { titulo: '¡Cuidado con el ahogado!', puntos: ['1.Dc8# es mate', '1.Dc7?? es ahogado: tablas', 'Cuenta las casillas del rey rival antes de mover'], fen: 'k7/8/1K6/8/8/8/8/2Q5 w - - 0 1' },
        { titulo: 'Mate con torre', puntos: ['La torre corta', 'Los reyes se enfrentan (oposición)', 'Jaque en el borde = mate'], fen: '5k2/8/4K3/8/8/8/8/R7 w - - 0 1' },
        { titulo: 'La jugada de espera', puntos: ['Si el rey rival no se pone enfrente…', '…mueve la torre sin dejar de cortar', 'Así lo obligas a ponerse en oposición'], fen: '6k1/R7/6K1/8/8/8/8/8 w - - 0 1' },
        { titulo: 'Resumen', puntos: ['Cuenta el material antes de capturar', 'Escalera: sin rey propio', 'Dama y torre: necesitan al rey', 'Antes del mate, revisa el ahogado'] },
      ],
      practicas: [
        { titulo: 'La escalera termina', tipo: 'mate', mateEn: 1, fen: '3k4/R7/8/8/8/8/8/1R4K1 w - - 0 1', linea: ['Rb8#'], enunciado: 'Juegan blancas y dan mate en 1 con las dos torres.', explica: 'La torre de a7 controla la séptima fila y la otra da jaque por la octava.' },
        { titulo: 'Rey y torre en oposición', tipo: 'mate', mateEn: 1, fen: '6k1/8/6K1/8/8/8/8/R7 w - - 0 1', linea: ['Ra8#'], enunciado: 'Juegan blancas y dan mate en 1.', explica: 'Los reyes están enfrentados: el jaque de torre por la octava fila es mate.' },
        { titulo: 'Dama protegida', tipo: 'mate', mateEn: 1, fen: '7k/8/5K2/6Q1/8/8/8/8 w - - 0 1', linea: ['Qg7#'], enunciado: 'Juegan blancas y dan mate en 1.', explica: 'La dama se pone pegada al rey negro, protegida por su propio rey: el rey negro no puede capturarla.' },
        { titulo: 'Sin ahogar', tipo: 'mate', mateEn: 1, fen: 'k7/8/1K6/8/8/8/8/2Q5 w - - 0 1', linea: ['Qc8#'], enunciado: 'Juegan blancas y dan mate en 1. ¡Ojo: hay una jugada natural que ahoga!', explica: 'Dc8# es mate. Dc7?? sería ahogado: el rey negro no estaría en jaque y no tendría ninguna casilla libre.' },
        { titulo: 'Gana material', tipo: 'jugada', fen: '4k3/8/8/3r4/8/8/8/3QK3 w - - 0 1', soluciones: ['Qxd5'], enunciado: 'Juegan blancas. ¿Qué captura es gratis?', explica: 'La torre de d5 no está defendida: Dxd5 gana 5 puntos sin entregar nada.' },
      ],
      preguntas: [
        { enunciado: '¿Cuánto vale aproximadamente una torre?', opciones: ['3 peones', '5 peones', '7 peones', '9 peones'], correcta: 1, explica: 'La torre vale unos 5 puntos.' },
        { enunciado: 'Cambias tu alfil por la torre rival. ¿Qué has hecho?', opciones: ['Perder la calidad', 'Ganar la calidad', 'Un cambio igualado', 'Un sacrificio de dama'], correcta: 1, explica: 'Entregar una pieza menor (3) por una torre (5) es "ganar la calidad".' },
        { enunciado: '¿Qué mate básico NO necesita la ayuda del rey propio?', opciones: ['Dama y rey contra rey', 'Torre y rey contra rey', 'Dos torres contra rey', 'Ninguno'], correcta: 2, explica: 'Con dos torres, la escalera funciona sin el rey.' },
        { enunciado: 'En el mate de torre y rey, ¿cómo deben estar los reyes al darse el mate en el borde (en el caso típico)?', opciones: ['En la misma diagonal', 'Enfrentados (en oposición)', 'Lo más lejos posible', 'En esquinas opuestas'], correcta: 1, explica: 'Con los reyes enfrentados, el jaque de torre por el borde es mate.' },
        { enunciado: 'Tienes dama y rey contra rey y te quedan muchas jugadas para ganar. ¿Qué error es el más común?', opciones: ['Perder la dama por tiempo', 'Ahogar al rey rival', 'Enrocar tarde', 'Coronar un caballo'], correcta: 1, explica: 'El ahogado convierte en tablas un final totalmente ganado.' },
      ],
      tarea: [
        'Dar mate con dos torres, con dama y con torre contra un amigo, un familiar o un programa, desde posiciones distintas. Anotar cuántas jugadas se necesitaron.',
        'Meta: mate de dama en menos de 10 jugadas y mate de torre en menos de 20.',
        'Inventar una posición de ahogado con dama y rey contra rey y traerla dibujada.',
      ],
    },

    // =====================================================================
    // CLASE 3
    // =====================================================================
    {
      numero: 3,
      titulo: 'Principios de apertura',
      icono: '♞',
      nivel: 'Inicial',
      resumen: 'Cómo empezar bien una partida: control del centro, desarrollo rápido de las piezas y seguridad del rey. Trampas típicas de la apertura (mate del pastor, mate de Légal) y un primer mapa de las aperturas más importantes.',
      objetivos: [
        'Aplicar los tres principios de apertura: centro, desarrollo y enroque.',
        'Detectar y defenderse de los ataques tempranos contra f7/f2.',
        'Conocer las ideas de la Italiana, la Española, la Siciliana, la Francesa y el Gambito de Dama.',
        'Jugar las primeras 8–10 jugadas con un plan, sin memorizar.',
      ],
      agenda: [
        { min: 15, tipo: 'inicio', bloque: 'Repaso de mates básicos', detalle: 'Carrera de mates: por parejas, mate de dama y de torre contra el reloj (2 minutos cada uno).' },
        { min: 45, tipo: 'teoria', bloque: 'Los tres principios', detalle: 'Centro, desarrollo (caballos antes que alfiles, no mover dos veces la misma pieza, no sacar la dama pronto) y enroque. Errores típicos. Diapositivas 1–5.' },
        { min: 30, tipo: 'practica', bloque: 'Trampas de apertura', detalle: 'Mate del pastor y cómo defenderse; mate de Légal. Prácticas 1–3 de esta página.' },
        { min: 15, tipo: 'descanso', bloque: 'Descanso', detalle: '' },
        { min: 50, tipo: 'teoria', bloque: 'Mapa de aperturas', detalle: 'Aperturas abiertas (1.e4 e5): Italiana y Española. Semiabiertas: Siciliana y Francesa. Cerradas: Gambito de Dama. Para cada una: primeras jugadas, idea principal y plan típico. Diapositivas 6–10.' },
        { min: 30, tipo: 'practica', bloque: 'Ejercicios: ¿qué principio se rompe?', detalle: 'El profesor juega en el mural aperturas con errores y los alumnos levantan la mano al detectar el principio violado. Preguntas de control.' },
        { min: 15, tipo: 'descanso', bloque: 'Descanso', detalle: '' },
        { min: 65, tipo: 'juego', bloque: 'Torneo relámpago de aperturas (con reloj)', detalle: 'Partidas de 10 minutos por jugador. Regla de la clase: hay que enrocar antes de la jugada 10; quien no enroca pierde medio punto. Primer uso del reloj: explicar cómo se pulsa.' },
        { min: 25, tipo: 'analisis', bloque: 'Análisis de aperturas jugadas', detalle: 'Cada pareja muestra sus primeras 10 jugadas y el grupo evalúa: ¿se ocupó el centro?, ¿cuántas piezas se desarrollaron?, ¿se enrocó?' },
        { min: 10, tipo: 'cierre', bloque: 'Control de comprensión y tarea', detalle: '' },
      ],
      contenido: [
        {
          titulo: 'Los tres principios de la apertura',
          texto: 'La apertura es la fase en la que se preparan las piezas para la batalla. No se trata de memorizar jugadas, sino de cumplir tres objetivos lo antes posible.',
          puntos: [
            '1. Controlar el centro con peones (e4, d4 / e5, d5) y piezas.',
            '2. Desarrollar las piezas menores: normalmente caballos antes que alfiles, hacia el centro ("caballo en el borde, caballo en el desborde").',
            '3. Poner al rey a salvo enrocando pronto y conectar las torres.',
            'No muevas la misma pieza dos veces sin motivo.',
            'No saques la dama demasiado pronto: será perseguida y perderás tiempos.',
            'No hagas demasiadas jugadas de peón en los flancos.',
          ],
          ejemplo: {
            titulo: 'Apertura Italiana (Giuoco Piano) jugada según los principios',
            fen: 'start',
            jugadas: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'c3', 'Nf6', 'd3', 'd6', 'O-O', 'O-O'],
            comentarios: [
              'Peón al centro.', 'Las negras también.', 'Desarrollo con ataque al peón e5.', 'Desarrollo y defensa.',
              'El alfil apunta a f7, el punto débil del enroque negro.', 'Simetría: el alfil apunta a f2.',
              'Prepara d4 para ganar espacio en el centro.', 'Desarrollo y presión sobre e4.', 'Defiende e4 con calma (Giuoco Pianissimo).', 'Defiende e5 y abre el alfil de c8.',
              'El rey blanco, a salvo.', 'Y el negro. Ambos bandos cumplieron los tres principios.',
            ],
          },
        },
        {
          titulo: 'El punto débil f7 (f2) y el mate del pastor',
          texto: 'Al comienzo de la partida la casilla f7 (f2 para las blancas) solo está defendida por el rey. Por eso muchos ataques tempranos se dirigen allí. El mate del pastor combina dama y alfil contra f7.',
          puntos: [
            'Defensas correctas contra Dh5 + Ac4: ...g6 (atacando a la dama), ...De7 o ...Df6.',
            'Tras 3...g6 4.Df3 Cf6 las negras están bien: la dama blanca salió pronto y perdió tiempos.',
          ],
          ejemplo: {
            titulo: 'El mate del pastor',
            fen: 'start',
            jugadas: ['e4', 'e5', 'Bc4', 'Nc6', 'Qh5', 'Nf6', 'Qxf7#'],
            comentarios: [
              '', '', 'El alfil apunta a f7.', '', 'La dama también ataca f7 (y e5).',
              '¡Error decisivo! El caballo ataca a la dama, pero no defiende f7.',
              'Jaque mate: la dama está protegida por el alfil.',
            ],
          },
        },
        {
          titulo: 'El mate de Légal',
          texto: 'Una trampa clásica (siglo XVIII) que enseña que clavar una pieza no siempre es seguro: las blancas entregan la dama y dan mate con las piezas menores.',
          ejemplo: {
            titulo: 'Mate de Légal',
            fen: 'start',
            jugadas: ['e4', 'e5', 'Nf3', 'd6', 'Bc4', 'Bg4', 'Nc3', 'g6', 'Nxe5', 'Bxd1', 'Bxf7+', 'Ke7', 'Nd5#'],
            comentarios: [
              '', '', '', 'Defensa Philidor.', '', 'El alfil clava al caballo contra la dama.', '',
              'Jugada lenta: las negras no desarrollan.',
              '¡Sacrificio de la dama! El caballo "clavado" se mueve.',
              'Las negras aceptan la dama… y reciben mate. (Lo correcto era 5...dxe5, perdiendo solo un peón.)',
              'Jaque con el alfil, protegido por el caballo de e5.', 'Única jugada.',
              '¡Jaque mate con tres piezas menores!',
            ],
          },
        },
        {
          titulo: 'Mapa de aperturas',
          texto: 'Una primera orientación. En esta etapa lo importante es entender la idea de cada apertura, no memorizar variantes largas.',
          puntos: [
            'Italiana (1.e4 e5 2.Cf3 Cc6 3.Ac4): desarrollo rápido y presión sobre f7; plan c3 + d4.',
            'Española o Ruy López (3.Ab5): presión indirecta sobre e5 atacando a su defensor; lucha estratégica larga.',
            'Siciliana (1.e4 c5): las negras luchan por d4 con un peón de flanco; partidas desequilibradas y agudas.',
            'Francesa (1.e4 e6 2.d4 d5): sólida; las negras atacan el centro blanco con ...c5 y ...f6. Su problema: el alfil de c8.',
            'Gambito de Dama (1.d4 d5 2.c4): las blancas ofrecen un peón de flanco para ganar el centro.',
          ],
          ejemplo: {
            titulo: 'Apertura Española (variante cerrada)',
            fen: 'start',
            jugadas: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Re1', 'b5', 'Bb3', 'd6', 'c3', 'O-O'],
            comentarios: [
              '', '', '', '', 'Ataca al defensor de e5.', 'Se pregunta al alfil.', 'Mantiene la presión.', '', 'Enroque rápido.', '',
              'La torre defiende e4.', 'Gana espacio y aleja al alfil.', 'El alfil queda apuntando a f7.', '',
              'Prepara d4 y deja una retirada al alfil en c2.', 'Posición típica de la Española cerrada.',
            ],
          },
        },
        {
          titulo: 'Siciliana y Gambito de Dama',
          ejemplo: {
            titulo: 'Siciliana Najdorf',
            fen: 'start',
            jugadas: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6'],
            comentarios: [
              '', 'La Siciliana: el peón c controla d4.', '', '', 'Las blancas abren el centro.',
              'Las negras cambian un peón de flanco por uno central: tendrán mayoría de peones en el centro.', '', 'Desarrollo con ataque a e4.', '',
              'La Najdorf: controla b5 y prepara ...e5 o ...b5.',
            ],
          },
          texto: 'En la Siciliana las blancas obtienen ventaja de desarrollo y espacio; las negras, la columna c semiabierta y un centro de peones más sólido a largo plazo.',
        },
      ],
      diapositivas: [
        { titulo: 'Formación Ajedrez · Clase 3', subtitulo: 'Principios de apertura', puntos: ['Centro · Desarrollo · Enroque', 'Trampas típicas', 'Mapa de aperturas'] },
        { titulo: '1. El centro', puntos: ['Casillas d4, e4, d5, e5', 'Las piezas centralizadas controlan más casillas', 'Peones al centro: 1.e4 o 1.d4'], fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2' },
        { titulo: '2. El desarrollo', puntos: ['Caballos antes que alfiles', 'Hacia el centro', 'Una jugada por pieza', 'La dama, más tarde'], fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4' },
        { titulo: '3. El enroque', puntos: ['Rey a salvo', 'Torres conectadas', 'Objetivo: enrocar antes de la jugada 10'], fen: 'r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQ1RK1 b - - 0 6' },
        { titulo: 'Errores típicos', puntos: ['Sacar la dama pronto', 'Mover muchas veces la misma pieza', 'Muchas jugadas de peón de flanco', 'Olvidar el enroque'] },
        { titulo: 'El punto f7', puntos: ['Solo lo defiende el rey', 'Mate del pastor: Dh5 + Ac4', 'Defensa: ...g6, ...De7 o ...Df6'], fen: 'r1bqkb1r/pppp1Qpp/2n2n2/4p3/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 4' },
        { titulo: 'Mate de Légal', puntos: ['Una clavada que no es absoluta', 'Sacrificio de dama', 'Mate con tres piezas menores'], fen: 'rn1qkbnr/ppp2B1p/3p2p1/3NN3/4P3/8/PPPP1PPP/R1BbK2R b KQkq - 2 7' },
        { titulo: 'Italiana y Española', puntos: ['1.e4 e5 2.Cf3 Cc6', 'Italiana 3.Ac4: presión sobre f7, plan c3–d4', 'Española 3.Ab5: ataque al defensor de e5'], fen: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3' },
        { titulo: 'Siciliana', puntos: ['1.e4 c5', 'Lucha asimétrica por d4', 'Columna c para las negras'], fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2' },
        { titulo: 'Francesa', puntos: ['1.e4 e6 2.d4 d5', 'Sólida, contraataque con ...c5', 'El alfil de c8 queda encerrado'], fen: 'rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq d6 0 3' },
        { titulo: 'Gambito de Dama', puntos: ['1.d4 d5 2.c4', 'Un peón de flanco por el centro', 'Aceptado (2...dxc4) o rehusado (2...e6)'], fen: 'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq c3 0 2' },
        { titulo: 'Resumen', puntos: ['No memorices: entiende', 'Centro + desarrollo + enroque', 'Cuidado con f7/f2', 'Elige una apertura con blancas y una con negras'] },
      ],
      practicas: [
        { titulo: 'Castiga el error', tipo: 'mate', mateEn: 1, fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4', linea: ['Qxf7#'], enunciado: 'Las negras jugaron 3...Cf6?? Juegan blancas y dan mate en 1.', explica: 'Dxf7#: la dama captura en f7 protegida por el alfil de c4.' },
        { titulo: 'Defiende f7', tipo: 'jugada', fen: 'r1bqkbnr/pppp1ppp/2n5/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 3 3', orientacion: 'black', soluciones: ['g6', 'Qe7', 'Qf6'], enunciado: 'Juegan negras. Las blancas amenazan Dxf7#. Defiéndete con una buena jugada.', explica: 'Las tres defensas correctas son ...g6 (tapa la diagonal y ataca a la dama), ...De7 y ...Df6 (defienden f7). La mejor suele ser 3...g6 y, tras 4.Df3, 4...Cf6.' },
        { titulo: 'El mate de Légal', tipo: 'mate', mateEn: 2, fen: 'rn1qkbnr/ppp2p1p/3p2p1/4N3/2B1P3/2N5/PPPP1PPP/R1BbK2R w KQkq - 0 6', linea: ['Bxf7+', 'Ke7', 'Nd5#'], enunciado: 'Las negras capturaron la dama (5...Axd1??). Juegan blancas y dan mate en 2.', explica: '6.Axf7+ Re7 7.Cd5#: el caballo de e5 protege al alfil y el de d5 da el mate.' },
        { titulo: 'Desarrolla con amenaza', tipo: 'jugada', fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2', soluciones: ['Nf3'], enunciado: 'Juegan blancas. Desarrolla un caballo hacia el centro atacando un peón.', explica: '2.Cf3: desarrolla hacia el centro, ataca el peón de e5 y prepara el enroque corto.' },
      ],
      preguntas: [
        { enunciado: '¿Cuál de estos NO es un principio de apertura?', opciones: ['Controlar el centro', 'Desarrollar las piezas', 'Sacar la dama cuanto antes', 'Enrocar pronto'], correcta: 2, explica: 'Sacar la dama pronto permite al rival desarrollarse atacándola.' },
        { enunciado: '¿Qué casilla del bando negro es la más débil al principio de la partida?', opciones: ['e5', 'f7', 'h7', 'd5'], correcta: 1, explica: 'f7 solo está defendida por el rey.' },
        { enunciado: '¿Con qué jugadas empieza la Defensa Siciliana?', opciones: ['1.e4 e5', '1.e4 c5', '1.d4 d5', '1.e4 e6'], correcta: 1, explica: '1.e4 c5.' },
        { enunciado: 'En la Apertura Española, ¿qué hace la jugada 3.Ab5?', opciones: ['Ataca al rey', 'Ataca al caballo que defiende e5', 'Prepara el enroque largo', 'Amenaza mate'], correcta: 1, explica: 'El alfil presiona al caballo de c6, que es el defensor del peón e5.' },
        { enunciado: '¿Cuál es el principal problema estratégico de la Defensa Francesa para las negras?', opciones: ['El rey no puede enrocar', 'El alfil de c8 queda encerrado detrás de sus peones', 'Pierde un peón', 'La dama queda atrapada'], correcta: 1, explica: 'Con peones en e6 y d5, el alfil de casillas claras tiene poco espacio.' },
      ],
      tarea: [
        'Elegir una apertura para blancas (Italiana recomendada) y una respuesta a 1.e4 para negras (1...e5 recomendada). Escribir las primeras 6 jugadas y la idea de cada una.',
        'Jugar 5 partidas rápidas (10 minutos) enrocando siempre antes de la jugada 10.',
        'Buscar y traer una partida corta (menos de 20 jugadas) ganada por no respetar los principios de apertura.',
      ],
    },

    // =====================================================================
    // CLASE 4
    // =====================================================================
    {
      numero: 4,
      titulo: 'Táctica I: doble ataque, clavada y enfilada',
      icono: '⚔️',
      nivel: 'Básico',
      resumen: 'Los motivos tácticos fundamentales para ganar material: el doble ataque (en especial el del caballo), la clavada, la enfilada y las piezas indefensas. La táctica decide la gran mayoría de las partidas entre aficionados.',
      objetivos: [
        'Reconocer piezas indefensas y piezas sobrecargadas.',
        'Ejecutar dobles ataques con cualquier pieza, en especial con el caballo.',
        'Distinguir clavada absoluta (contra el rey) y relativa, y aprovecharla.',
        'Ejecutar la enfilada (el "pincho").',
        'Usar la rutina: jaques, capturas y amenazas.',
      ],
      agenda: [
        { min: 15, tipo: 'inicio', bloque: 'Repaso de aperturas', detalle: 'Cada alumno muestra la apertura elegida en la tarea. Preguntas rápidas.' },
        { min: 40, tipo: 'teoria', bloque: 'Piezas indefensas y doble ataque', detalle: '"Pieza suelta, pieza perdida". El doble ataque de peón, caballo, alfil, torre y dama. La horquilla de caballo. Diapositivas 1–5.' },
        { min: 35, tipo: 'practica', bloque: 'Ejercicios de doble ataque', detalle: 'Prácticas 1 y 2 de esta página + fichas impresas. Trabajo individual y corrección en voz alta.' },
        { min: 15, tipo: 'descanso', bloque: 'Descanso', detalle: '' },
        { min: 40, tipo: 'teoria', bloque: 'Clavada y enfilada', detalle: 'Clavada absoluta y relativa, cómo explotarla (atacar a la pieza clavada con un peón) y cómo romperla. Enfilada: el ataque a una pieza de valor que, al apartarse, descubre otra detrás. Diapositivas 6–9.' },
        { min: 35, tipo: 'practica', bloque: 'Ejercicios de clavada y enfilada', detalle: 'Prácticas 3 a 5. Competencia por equipos: cada acierto suma un punto; si se falla, rebota al otro equipo.' },
        { min: 15, tipo: 'descanso', bloque: 'Descanso', detalle: '' },
        { min: 15, tipo: 'teoria', bloque: 'La rutina del jugador táctico', detalle: 'Antes de cada jugada: ¿qué amenaza mi rival? ¿Qué jaques, capturas y amenazas tengo? Diapositiva 10.' },
        { min: 55, tipo: 'juego', bloque: 'Partidas con reloj (15 minutos)', detalle: 'Por parejas. Cada jugador marca en la planilla con una "T" las jugadas en las que ganó o perdió material por un motivo táctico.' },
        { min: 25, tipo: 'analisis', bloque: 'Caza de tácticas', detalle: 'Se revisan las jugadas marcadas con "T" y se identifica el motivo (doble ataque, clavada, pieza suelta, enfilada).' },
        { min: 10, tipo: 'cierre', bloque: 'Control de comprensión y tarea', detalle: '' },
      ],
      contenido: [
        {
          titulo: 'Piezas indefensas',
          texto: 'Una pieza que no está defendida por ninguna otra es un blanco fácil: cualquier doble ataque que la incluya ganará material. Los maestros lo resumen así: "las piezas sueltas se caen".',
          puntos: [
            'Revisa en cada jugada qué piezas tuyas y del rival están sin defensa.',
            'Una pieza sobrecargada es la que defiende dos cosas a la vez: si una de ellas es atacada, la otra cae.',
          ],
        },
        {
          titulo: 'El doble ataque',
          texto: 'Una sola jugada ataca dos objetivos a la vez. El rival solo puede salvar uno. Es especialmente fuerte cuando uno de los objetivos es el rey (jaque) o cuando ambos son piezas indefensas o de mayor valor.',
          puntos: [
            'Horquilla de caballo: el caballo ataca en todas direcciones y no se le puede "tapar".',
            'La dama es la pieza que más dobles ataques genera.',
            'Los peones también hacen horquillas (por ejemplo, un peón que ataca a dos piezas menores).',
          ],
          ejemplo: {
            titulo: 'Horquilla de caballo: rey y torre',
            fen: 'r3k3/8/8/1N6/8/8/8/4K3 w - - 0 1',
            jugadas: ['Nc7+', 'Kd7', 'Nxa8'],
            comentarios: ['El caballo da jaque al rey y ataca la torre de a8 a la vez.', 'El rey tiene que moverse.', 'Las blancas ganan la torre.'],
          },
        },
        {
          titulo: 'Doble ataque de dama',
          ejemplo: {
            titulo: 'Jaque y ataque a la torre',
            fen: 'r5k1/6pp/8/8/8/8/5PPP/3Q2K1 w - - 0 1',
            jugadas: ['Qd5+', 'Kh8', 'Qxa8#'],
            comentarios: ['La dama da jaque por la diagonal d5–g8 y a la vez ataca la torre por la diagonal d5–a8.', 'El rey debe apartarse.', 'La dama captura la torre… ¡y además es mate del pasillo! (Tras 2...Rf7 las negras solo perderían la torre.)'],
          },
          texto: 'La dama puede atacar por filas, columnas y diagonales al mismo tiempo. Busca casillas desde las que dé jaque y además ataque una pieza indefensa.',
        },
        {
          titulo: 'La clavada',
          texto: 'Una pieza está clavada cuando no puede (o no debe) moverse porque dejaría expuesta a otra pieza más valiosa que está detrás en la misma línea. Solo clavan las piezas de largo alcance: alfil, torre y dama.',
          puntos: [
            'Clavada absoluta: detrás está el rey. La pieza clavada no puede moverse legalmente.',
            'Clavada relativa: detrás hay una pieza valiosa (por ejemplo, la dama). Moverse es legal, pero cuesta material.',
            'Explotar una clavada: atacar a la pieza clavada con algo de menos valor (muchas veces, un peón).',
          ],
          ejemplo: {
            titulo: 'La pieza clavada se pierde',
            fen: '4k3/8/3p4/4n3/8/8/5P2/4R1K1 w - - 0 1',
            jugadas: ['f4', 'Kd7', 'fxe5', 'dxe5', 'Rxe5'],
            comentarios: ['El caballo está clavado por la torre contra el rey y el peón lo ataca: no puede huir.', 'Aunque el rey se aparte, ya es tarde: les toca a las blancas.', 'Se gana el caballo por un peón.', '', 'Y la torre recupera el peón.'],
          },
        },
        {
          titulo: 'La enfilada (el pincho)',
          texto: 'Es una "clavada al revés": se ataca a una pieza valiosa que está delante y, al apartarse, queda expuesta la pieza que estaba detrás en la misma línea.',
          ejemplo: {
            titulo: 'Enfilada de torre',
            fen: '4q3/8/8/8/4k3/8/8/K6R w - - 0 1',
            jugadas: ['Re1+', 'Kd5', 'Rxe8'],
            comentarios: ['Jaque por la columna e: el rey está delante de su dama.', 'El rey debe salir de la columna.', 'La torre captura la dama que estaba detrás.'],
          },
        },
      ],
      diapositivas: [
        { titulo: 'Formación Ajedrez · Clase 4', subtitulo: 'Táctica I', puntos: ['Piezas indefensas', 'Doble ataque', 'Clavada', 'Enfilada'] },
        { titulo: '"El ajedrez es 99% táctica"', puntos: ['Frase atribuida a Richard Teichmann', 'Entre aficionados, casi todas las partidas se deciden por un error táctico', 'Hoy aprendemos los cuatro motivos básicos'] },
        { titulo: 'Piezas indefensas', puntos: ['Pieza sin defensa = objetivo', 'Revisa las tuyas y las del rival en cada jugada', 'Pieza sobrecargada: defiende dos cosas a la vez'] },
        { titulo: 'El doble ataque', puntos: ['Una jugada, dos amenazas', 'El rival solo salva una', 'Mejor si una es un jaque'], fen: 'r5k1/6pp/8/8/8/8/5PPP/3Q2K1 w - - 0 1', nota: 'Pedir la solución antes de mostrarla: 1.Dd5+.' },
        { titulo: 'La horquilla de caballo', puntos: ['Ataca en 8 direcciones', 'No se puede interponer', 'Busca casillas que ataquen rey + pieza valiosa'], fen: 'r3k3/8/8/1N6/8/8/8/4K3 w - - 0 1' },
        { titulo: 'La clavada', puntos: ['Alfil, torre o dama', 'Absoluta: detrás está el rey', 'Relativa: detrás hay una pieza valiosa'], fen: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3', nota: 'En la Española no hay clavada todavía (d7 tapa). Mostrarlo tras ...d6: el caballo de c6 queda clavado.' },
        { titulo: 'Explotar la clavada', puntos: ['Ataca la pieza clavada con un peón', 'Suma atacantes', 'La pieza clavada no defiende'], fen: '4k3/8/3p4/4n3/8/8/5P2/4R1K1 w - - 0 1' },
        { titulo: 'Romper la clavada', puntos: ['Interponer otra pieza', 'Atacar a la pieza que clava', 'Apartar la pieza de detrás'] },
        { titulo: 'La enfilada', puntos: ['Ataque a la pieza de delante', 'Al apartarse, cae la de detrás', 'Suele ser un jaque'], fen: '4q3/8/8/8/4k3/8/8/K6R w - - 0 1' },
        { titulo: 'La rutina táctica', puntos: ['1. ¿Qué quiere mi rival con su última jugada?', '2. Mis jaques', '3. Mis capturas', '4. Mis amenazas', '5. ¿Mi jugada deja algo suelto?'] },
      ],
      practicas: [
        { titulo: 'Horquilla', tipo: 'jugada', fen: 'r3k3/8/8/1N6/8/8/8/4K3 w - - 0 1', soluciones: ['Nc7+'], linea: ['Nc7+', 'Kd7', 'Nxa8'], enunciado: 'Juegan blancas y ganan material.', explica: 'Cc7+ da jaque al rey y ataca la torre: tras mover el rey, Cxa8.' },
        { titulo: 'Doble ataque de dama', tipo: 'jugada', fen: 'r5k1/6pp/8/8/8/8/5PPP/3Q2K1 w - - 0 1', soluciones: ['Qd5+'], linea: ['Qd5+', 'Kh8', 'Qxa8#'], enunciado: 'Juegan blancas y ganan material.', explica: 'Dd5+ da jaque por la diagonal y ataca la torre de a8 por la otra.' },
        { titulo: 'Aprovecha la clavada', tipo: 'jugada', fen: '4k3/8/3p4/4n3/8/8/5P2/4R1K1 w - - 0 1', soluciones: ['f4'], linea: ['f4', 'Kd7', 'fxe5'], enunciado: 'Juegan blancas y ganan una pieza.', explica: 'f4: el caballo está clavado contra el rey y no puede escapar del ataque del peón.' },
        { titulo: 'Enfilada', tipo: 'jugada', fen: '4q3/8/8/8/4k3/8/8/K6R w - - 0 1', soluciones: ['Re1+'], linea: ['Re1+', 'Kd5', 'Rxe8'], enunciado: 'Juegan blancas y ganan la dama.', explica: 'Te1+: el rey debe salir de la columna e y la torre captura la dama de e8.' },
        { titulo: 'Caballo al acecho', tipo: 'jugada', fen: '6k1/3q1p1p/6p1/8/4N3/8/5PPP/6K1 w - - 0 1', soluciones: ['Nf6+'], linea: ['Nf6+', 'Kg7', 'Nxd7'], enunciado: 'Juegan blancas y ganan la dama.', explica: 'Cf6+ ataca a la vez al rey de g8 y a la dama de d7.' },
      ],
      preguntas: [
        { enunciado: '¿Qué piezas pueden clavar?', opciones: ['Solo el caballo', 'Alfil, torre y dama', 'Todas', 'Solo la dama'], correcta: 1, explica: 'Solo las piezas de largo alcance (que se mueven en línea) pueden clavar.' },
        { enunciado: 'Una clavada es "absoluta" cuando…', opciones: ['La pieza clavada es una dama', 'Detrás de la pieza clavada está el rey', 'La clava una torre', 'Dura más de 5 jugadas'], correcta: 1, explica: 'Si detrás está el rey, mover la pieza clavada es ilegal.' },
        { enunciado: '¿En qué se diferencia la enfilada de la clavada?', opciones: ['No hay diferencia', 'En la enfilada, la pieza de más valor está delante', 'La enfilada solo la hace el caballo', 'La enfilada no gana material'], correcta: 1, explica: 'En la enfilada se ataca primero a la pieza valiosa, que al apartarse deja la de detrás.' },
        { enunciado: '¿Por qué la horquilla de caballo es tan eficaz?', opciones: ['Porque el caballo vale más que la torre', 'Porque no se puede tapar su ataque', 'Porque siempre es mate', 'Porque es una jugada especial'], correcta: 1, explica: 'El caballo salta: su ataque no se puede interponer.' },
        { enunciado: 'Según la rutina táctica, ¿qué hay que mirar primero?', opciones: ['Mis amenazas', 'Qué quiere mi rival con su última jugada', 'Mis jugadas de peón', 'El reloj'], correcta: 1, explica: 'Primero entender la amenaza del rival; luego, jaques, capturas y amenazas propias.' },
      ],
      tarea: [
        'Resolver 30 ejercicios de doble ataque y clavada (libro o web de problemas), anotando el motivo de cada uno.',
        'En 3 partidas propias, buscar una táctica que se jugó o que se pasó por alto.',
        'Aplicar la rutina táctica en cada jugada de una partida lenta (30 minutos).',
      ],
    },

    // =====================================================================
    // CLASE 5
    // =====================================================================
    {
      numero: 5,
      titulo: 'Táctica II y patrones de mate',
      icono: '🎯',
      nivel: 'Básico',
      resumen: 'Motivos tácticos avanzados (ataque descubierto, jaque doble, desviación, atracción, eliminación del defensor) y los patrones de mate que más aparecen en la práctica: pasillo, coz, árabe, Anastasia y el mate de Philidor.',
      objetivos: [
        'Ejecutar ataques descubiertos y jaques dobles.',
        'Reconocer las ideas de desviación, atracción y eliminación del defensor.',
        'Identificar al instante los patrones de mate más comunes.',
        'Evitar dejar al propio rey expuesto a esos patrones (por ejemplo, el mate del pasillo).',
      ],
      agenda: [
        { min: 15, tipo: 'inicio', bloque: 'Calentamiento táctico', detalle: '5 ejercicios de la clase 4 proyectados, 1 minuto cada uno.' },
        { min: 45, tipo: 'teoria', bloque: 'Descubierto, jaque doble y sacrificios', detalle: 'Ataque descubierto y jaque descubierto, jaque doble (solo se responde moviendo el rey), desviación, atracción y eliminación del defensor. Diapositivas 1–5.' },
        { min: 30, tipo: 'practica', bloque: 'Ejercicios de motivos tácticos', detalle: 'Práctica 1 de esta página + fichas. Corrección en el mural.' },
        { min: 15, tipo: 'descanso', bloque: 'Descanso', detalle: '' },
        { min: 50, tipo: 'teoria', bloque: 'Patrones de mate', detalle: 'Mate del pasillo, mate de la coz (ahogado), mate árabe, mate de Anastasia y el mate de Philidor (sacrificio de dama + coz). Diapositivas 6–11 con los ejemplos en tablero.' },
        { min: 40, tipo: 'practica', bloque: 'Ejercicios de mate', detalle: 'Prácticas 2 a 5. Luego, por parejas, cada alumno construye en el tablero una posición con un patrón de mate y su compañero debe encontrarlo.' },
        { min: 15, tipo: 'descanso', bloque: 'Descanso', detalle: '' },
        { min: 55, tipo: 'juego', bloque: 'Partidas temáticas de ataque', detalle: 'Se empieza desde una posición de medio juego con enroques opuestos (preparada por el profesor). 2 partidas de 20 minutos cambiando de color.' },
        { min: 25, tipo: 'analisis', bloque: 'Análisis de los ataques', detalle: '¿Qué patrón de mate se buscaba? ¿Qué defensor sobraba o faltaba?' },
        { min: 10, tipo: 'cierre', bloque: 'Control de comprensión y tarea', detalle: '' },
      ],
      contenido: [
        {
          titulo: 'Ataque descubierto y jaque doble',
          texto: 'Una pieza se aparta de una línea y "descubre" el ataque de otra pieza propia de largo alcance que estaba detrás. Si la pieza que se mueve también ataca algo, se crean dos amenazas a la vez. Cuando el ataque descubierto es un jaque, el rival debe atenderlo primero y la pieza que se movió gana lo que quiere.',
          puntos: [
            'Jaque descubierto: el jaque lo da la pieza de detrás.',
            'Jaque doble: dan jaque las dos piezas a la vez. La única defensa es mover el rey.',
          ],
          ejemplo: {
            titulo: 'Jaque descubierto que gana la dama',
            fen: '4k3/8/8/7q/8/8/4B3/4R1K1 w - - 0 1',
            jugadas: ['Bxh5+'],
            comentarios: ['El alfil captura la dama y, al salir de la columna e, la torre da jaque al rey. Las negras no pueden recuperar nada.'],
          },
        },
        {
          titulo: 'Desviación, atracción y eliminación del defensor',
          texto: 'Tres ideas que suelen empezar con un sacrificio. Desviar: obligar a una pieza a abandonar una casilla o línea que defiende. Atraer: obligar a una pieza (a menudo el rey) a ir a una casilla donde será víctima de una táctica. Eliminar al defensor: capturar la pieza que sostiene la defensa.',
          puntos: [
            'Pregunta clave: ¿qué pieza rival hace todo el trabajo defensivo? Si desaparece o se desvía, ¿qué pasa?',
            'El mate de Philidor combina atracción (la dama se sacrifica en g8) y mate de la coz.',
          ],
        },
        {
          titulo: 'Mate del pasillo',
          texto: 'El rey enrocado con sus tres peones sin mover queda sin casillas de escape: un jaque de torre o dama por la primera/octava fila es mate. Es el patrón más frecuente entre aficionados.',
          puntos: ['Prevención: hacer "luft" (una casilla de escape) con h3/h6 o g3/g6 cuando llegue el momento.'],
          ejemplo: {
            titulo: 'Mate del pasillo',
            fen: '6k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1',
            jugadas: ['Rd8#'],
            comentarios: ['La torre llega a la octava fila y el rey no tiene escape.'],
          },
        },
        {
          titulo: 'Mate de la coz (mate ahogado)',
          texto: 'El caballo da mate a un rey rodeado por sus propias piezas. Típico con el rey en la esquina.',
          ejemplo: {
            titulo: 'Mate de la coz',
            fen: '6rk/6pp/8/6N1/8/8/8/6K1 w - - 0 1',
            jugadas: ['Nf7#'],
            comentarios: ['El caballo da jaque desde f7; g8, g7 y h7 están ocupadas por piezas negras.'],
          },
        },
        {
          titulo: 'El mate de Philidor',
          texto: 'Jaque doble, sacrificio de dama para atraer a la torre a g8 y mate de la coz. Una combinación que todo jugador debe conocer.',
          ejemplo: {
            titulo: 'Mate de Philidor en 3',
            fen: '5rk1/5Npp/8/8/8/1Q6/8/6K1 w - - 0 1',
            jugadas: ['Nh6+', 'Kh8', 'Qg8+', 'Rxg8', 'Nf7#'],
            comentarios: [
              '¡Jaque doble! Dan jaque el caballo y la dama (la diagonal b3–g8 se abrió).',
              'Única jugada: f8 está ocupada por su torre y a h7 no puede ir.',
              '¡Sacrificio de dama! El caballo de h6 la protege, así que el rey no puede capturarla.',
              'Forzado: la torre tapa su propia casilla de escape.',
              'Mate de la coz.',
            ],
          },
        },
        {
          titulo: 'Mate árabe y mate de Anastasia',
          texto: 'Mate árabe: torre y caballo contra el rey en la esquina; el caballo protege a la torre y controla la casilla de escape. Mate de Anastasia: caballo en e7 (o e2) cortando la huida y torre o dama por la columna h.',
          ejemplo: {
            titulo: 'Mate de Anastasia (con sacrificio de dama)',
            fen: '5r1k/4Nppp/8/7Q/8/4R3/8/6K1 w - - 0 1',
            jugadas: ['Qxh7+', 'Kxh7', 'Rh3#'],
            comentarios: ['¡Sacrificio! Se abre la columna h.', 'Forzado.', 'Mate: el caballo de e7 controla g8 y g6, y el peón de g7 tapa la otra salida.'],
          },
        },
      ],
      diapositivas: [
        { titulo: 'Formación Ajedrez · Clase 5', subtitulo: 'Táctica II y patrones de mate', puntos: ['Descubierto y jaque doble', 'Desviación, atracción, eliminación del defensor', '5 patrones de mate'] },
        { titulo: 'Ataque descubierto', puntos: ['Una pieza se aparta…', '…y descubre el ataque de otra', 'Dos amenazas en una jugada'], fen: '4k3/8/8/7q/8/8/4B3/4R1K1 w - - 0 1' },
        { titulo: 'Jaque doble', puntos: ['Dos piezas dan jaque a la vez', 'No se puede capturar ni tapar', 'El rey DEBE moverse'], fen: '5rk1/6pp/7N/8/8/1Q6/8/6K1 b - - 1 1', nota: 'Posición del mate de Philidor tras 1.Ch6++: dan jaque el caballo y la dama.' },
        { titulo: 'Desviación y atracción', puntos: ['Desviar: sacar a un defensor de su puesto', 'Atraer: llevar una pieza a una casilla fatal', 'Suelen empezar con un sacrificio'] },
        { titulo: 'Eliminar al defensor', puntos: ['¿Quién sostiene la defensa?', 'Si lo capturo, ¿qué cae?', 'Cambio de piezas con un objetivo'] },
        { titulo: 'Mate del pasillo', puntos: ['Rey enrocado con peones sin mover', 'Jaque por la última fila', 'Prevención: luft (h3/h6)'], fen: '6k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1' },
        { titulo: 'Mate de la coz', puntos: ['El caballo da el mate', 'El rey, rodeado por sus propias piezas', 'Típico en la esquina'], fen: '6rk/6pp/8/6N1/8/8/8/6K1 w - - 0 1' },
        { titulo: 'Mate de Philidor', puntos: ['1.Ch6++ Rh8', '2.Dg8+! Txg8', '3.Cf7#'], fen: '5rk1/5Npp/8/8/8/1Q6/8/6K1 w - - 0 1' },
        { titulo: 'Mate árabe', puntos: ['Torre + caballo', 'El caballo protege a la torre', 'Y controla la casilla de escape'], fen: '7k/7p/5N2/8/8/8/8/6RK w - - 0 1' },
        { titulo: 'Mate de Anastasia', puntos: ['Caballo en e7', 'Columna h abierta', 'A menudo con sacrificio de dama en h7'], fen: '5r1k/4Nppp/8/7Q/8/4R3/8/6K1 w - - 0 1' },
        { titulo: 'Resumen', puntos: ['Busca piezas alineadas: descubiertos', 'Busca al defensor clave', 'Memoriza los patrones: se reconocen, no se calculan'] },
      ],
      practicas: [
        { titulo: 'Descubierto', tipo: 'jugada', fen: '4k3/8/8/7q/8/8/4B3/4R1K1 w - - 0 1', soluciones: ['Bxh5+', 'Bg4+', 'Bf3+', 'Bd1+'], linea: ['Bxh5+'], enunciado: 'Juegan blancas y ganan la dama.', explica: 'Lo más limpio es Axh5+: el alfil captura la dama descubriendo el jaque de la torre. También ganan Ag4+, Af3+ y Ad1+ (jaque descubierto y el alfil ataca a la dama): la dama solo podría salvarse tapando el jaque en e5 o e2, donde se pierde igual.' },
        { titulo: 'Pasillo', tipo: 'mate', mateEn: 1, fen: '6k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1', linea: ['Rd8#'], enunciado: 'Juegan blancas y dan mate en 1.', explica: 'Td8#: mate del pasillo.' },
        { titulo: 'La coz', tipo: 'mate', mateEn: 1, fen: '6rk/6pp/8/6N1/8/8/8/6K1 w - - 0 1', linea: ['Nf7#'], enunciado: 'Juegan blancas y dan mate en 1.', explica: 'Cf7#: el rey está rodeado por sus propias piezas.' },
        { titulo: 'Mate árabe', tipo: 'mate', mateEn: 1, fen: '7k/7p/5N2/8/8/8/8/6RK w - - 0 1', linea: ['Rg8#'], enunciado: 'Juegan blancas y dan mate en 1.', explica: 'Tg8#: el caballo de f6 protege a la torre y el peón de h7 tapa la salida.' },
        { titulo: 'Anastasia', tipo: 'mate', mateEn: 2, fen: '5r1k/4Nppp/8/7Q/8/4R3/8/6K1 w - - 0 1', linea: ['Qxh7+', 'Kxh7', 'Rh3#'], enunciado: 'Juegan blancas y dan mate en 2.', explica: '1.Dxh7+! Rxh7 2.Th3#: mate de Anastasia.' },
      ],
      preguntas: [
        { enunciado: '¿Cuál es la única defensa contra un jaque doble?', opciones: ['Capturar una de las piezas', 'Interponer', 'Mover el rey', 'Enrocar'], correcta: 2, explica: 'Como hay dos piezas dando jaque, ni una captura ni una interposición detienen ambos: hay que mover el rey.' },
        { enunciado: '¿Qué pieza da el mate en el mate de la coz?', opciones: ['La dama', 'El caballo', 'La torre', 'El alfil'], correcta: 1, explica: 'El caballo, contra un rey rodeado por sus propias piezas.' },
        { enunciado: '¿Cómo se previene el mate del pasillo?', opciones: ['Enrocando largo', 'Abriendo una casilla de escape para el rey (luft)', 'Cambiando las damas', 'Moviendo el rey al centro'], correcta: 1, explica: 'Un avance de peón como h3 o g3 da al rey una salida.' },
        { enunciado: '"Atraer" una pieza significa…', opciones: ['Obligarla a ir a una casilla donde sufrirá una táctica', 'Defenderla', 'Cambiarla', 'Clavarla'], correcta: 0, explica: 'La atracción lleva a una pieza (a menudo el rey) a una casilla fatal.' },
        { enunciado: 'En el mate de Philidor, ¿para qué se sacrifica la dama en g8?', opciones: ['Para ganar la torre', 'Para obligar a la torre a tapar la casilla de escape del rey', 'Para ahogar', 'Para coronar'], correcta: 1, explica: 'Tras ...Txg8, el rey queda encerrado y Cf7 es mate de la coz.' },
      ],
      tarea: [
        'Resolver 30 ejercicios de patrones de mate (10 del pasillo, 10 de la coz / Philidor, 10 variados).',
        'Construir en el tablero, de memoria, los 5 patrones de mate vistos y dibujarlos.',
        'Revisar las propias partidas: ¿alguna vez se perdió o se ganó por el mate del pasillo?',
      ],
    },

    // =====================================================================
    // CLASE 6
    // =====================================================================
    {
      numero: 6,
      titulo: 'Finales esenciales',
      icono: '♔',
      nivel: 'Intermedio',
      resumen: 'Los finales que deciden resultados: rey y peón contra rey (regla del cuadrado y oposición), la ruptura de peones, y los dos finales de torre más importantes, la posición de Lucena (ganar) y la de Philidor (hacer tablas).',
      objetivos: [
        'Aplicar la regla del cuadrado sin calcular.',
        'Usar la oposición en finales de rey y peón.',
        'Conocer la ruptura de tres peones contra tres.',
        'Ganar la posición de Lucena construyendo el puente.',
        'Hacer tablas con la defensa de Philidor.',
      ],
      agenda: [
        { min: 15, tipo: 'inicio', bloque: 'Por qué estudiar finales', detalle: 'Capablanca recomendaba empezar por los finales. Repaso de los mates básicos (clase 2) en 5 minutos.' },
        { min: 45, tipo: 'teoria', bloque: 'Rey y peón', detalle: 'Actividad del rey, regla del cuadrado, oposición, casillas clave, el peón de torre. Diapositivas 1–6.' },
        { min: 35, tipo: 'practica', bloque: 'Práctica de rey y peón', detalle: 'Por parejas: el profesor coloca posiciones de rey y peón contra rey y se juegan con los papeles cambiados. Prácticas 1 y 2.' },
        { min: 15, tipo: 'descanso', bloque: 'Descanso', detalle: '' },
        { min: 45, tipo: 'teoria', bloque: 'Finales de torre: Lucena y Philidor', detalle: '"Todos los finales de torre son tablas" (Tartakower). La torre detrás del peón pasado. Lucena: el puente. Philidor: la torre en la tercera fila y luego jaques desde atrás. Diapositivas 7–10.' },
        { min: 35, tipo: 'practica', bloque: 'Práctica de finales de torre', detalle: 'Se juegan Lucena y Philidor por parejas, cambiando de papel. Preguntas de control.' },
        { min: 15, tipo: 'descanso', bloque: 'Descanso', detalle: '' },
        { min: 55, tipo: 'juego', bloque: 'Torneo de finales', detalle: 'Rondas de 10 minutos, cada una desde un final distinto (rey y peón, ruptura de peones, torre y peón contra torre). Se cuentan puntos.' },
        { min: 30, tipo: 'analisis', bloque: 'Análisis de finales', detalle: 'Los finales del torneo que terminaron mal se repiten en el mural para encontrar la jugada ganadora o la defensa correcta.' },
        { min: 10, tipo: 'cierre', bloque: 'Control de comprensión y tarea', detalle: '' },
      ],
      contenido: [
        {
          titulo: 'El rey en el final',
          texto: 'En el medio juego el rey se esconde; en el final, con pocas piezas, se convierte en una pieza de ataque que vale unos 4 puntos. La primera regla del final es centralizar el rey.',
          puntos: [
            'Centraliza el rey en cuanto se cambien las damas.',
            'Los peones pasados deben avanzar ("hay que empujarlos").',
            'El rey debe ir delante de su peón, no detrás.',
          ],
        },
        {
          titulo: 'La regla del cuadrado',
          texto: 'Para saber si un rey alcanza a un peón pasado sin ayuda, se dibuja un cuadrado imaginario desde el peón hasta su casilla de coronación. Si el rey puede entrar en el cuadrado (con el turno correspondiente), alcanza al peón; si no, el peón corona.',
          puntos: ['Si el peón está en su casilla inicial, se cuenta desde la casilla siguiente, porque puede avanzar dos.'],
          ejemplo: {
            titulo: 'El rey está fuera del cuadrado',
            fen: '8/8/8/8/k5P1/8/8/6K1 w - - 0 1',
            jugadas: ['g5', 'Kb5', 'g6', 'Kc6', 'g7', 'Kd7', 'g8=Q'],
            comentarios: [
              'El cuadrado del peón (g5–g8–d8–d5) ya no incluye al rey negro de a4…', '', '', '', '', '…que llega tarde.',
              'El peón corona.',
            ],
          },
        },
        {
          titulo: 'La oposición',
          texto: 'Dos reyes están en oposición cuando están en la misma fila o columna con una casilla en medio. El que NO tiene que mover "tiene la oposición" y obliga al otro a ceder el paso. En los finales de rey y peón, ganar la oposición suele decidir entre victoria y tablas.',
          puntos: [
            'Con el rey en la sexta fila delante de su peón (salvo peón de torre), se gana siempre, juegue quien juegue.',
            'Con el peón de torre, si el rey defensor llega a la esquina, son tablas.',
          ],
          ejemplo: {
            titulo: 'Rey en sexta: victoria',
            fen: '4k3/8/4K3/4P3/8/8/8/8 b - - 0 1',
            jugadas: ['Kf8', 'Kd7', 'Kf7', 'e6+', 'Kf8', 'e7+', 'Kf7', 'e8=Q+'],
            comentarios: [
              'Las negras se apartan.', 'El rey blanco se pone al lado de la casilla de coronación y la controla.',
              '', 'El peón avanza con jaque.', '', 'El rey blanco protege e7 y e8.', '', 'Corona.',
            ],
          },
        },
        {
          titulo: 'La ruptura de peones',
          texto: 'Con tres peones contra tres, enfrentados en la quinta fila, un sacrificio de peón crea un peón pasado imparable.',
          ejemplo: {
            titulo: 'Ruptura clásica',
            fen: '7k/ppp5/8/PPP5/8/8/8/7K w - - 0 1',
            jugadas: ['b6', 'axb6', 'c6', 'bxc6', 'a6'],
            comentarios: [
              '¡Sacrificio!', 'Si 1...cxb6, entonces 2.a6! bxa6 3.c6 y corona igual.',
              '¡Otro sacrificio!', '', 'El peón de a no puede ser detenido: corona en dos jugadas.',
            ],
          },
        },
        {
          titulo: 'Finales de torre: posición de Lucena',
          texto: 'El bando fuerte tiene torre y peón (en la séptima fila, con su rey delante) contra torre. El rey defensor está cortado. La técnica para ganar es "construir el puente": la torre se sitúa en la cuarta fila para, más tarde, tapar los jaques laterales.',
          ejemplo: {
            titulo: 'El puente de Lucena',
            fen: '3K4/3P1k2/8/8/8/8/2r5/4R3 w - - 0 1',
            jugadas: ['Rf1+', 'Kg7', 'Rf4', 'Rc1', 'Ke7', 'Re1+', 'Kd6', 'Rd1+', 'Ke6', 'Re1+', 'Kd5', 'Rd1+', 'Rd4'],
            comentarios: [
              'Primero se aleja al rey negro con un jaque.', '', '¡El puente! La torre va a la cuarta fila.', 'Las negras esperan.',
              'El rey sale.', 'Empiezan los jaques.', '', '', '', '', 'El rey se acerca a su torre…', '',
              '…y la torre tapa el jaque. El peón coronará.',
            ],
          },
        },
        {
          titulo: 'Finales de torre: defensa de Philidor',
          texto: 'Para hacer tablas con torre contra torre y peón: el rey defensor se coloca delante del peón y la torre controla la tercera fila (desde su lado), impidiendo que el rey rival avance. Cuando el peón avanza a esa fila, la torre se va al fondo y da jaques desde atrás: el rey atacante ya no tiene dónde esconderse.',
          ejemplo: {
            titulo: 'Defensa de Philidor',
            fen: '4k3/7R/r7/3KP3/8/8/8/8 b - - 0 1',
            jugadas: ['Rb6', 'e6', 'Rb1', 'Kd6', 'Rd1+', 'Ke5', 'Re1+'],
            comentarios: [
              'La torre espera en la sexta fila: el rey blanco no puede pasar a d6/e6.',
              'Si el peón avanza, el rey blanco ya no tiene refugio delante…',
              '…y la torre se va al fondo para dar jaques desde atrás.',
              '', 'Jaques sin fin.', '', 'Tablas.',
            ],
          },
        },
      ],
      diapositivas: [
        { titulo: 'Formación Ajedrez · Clase 6', subtitulo: 'Finales esenciales', puntos: ['Rey y peón', 'Ruptura de peones', 'Lucena y Philidor'] },
        { titulo: 'El rey es una pieza de ataque', puntos: ['Centralízalo en el final', 'Vale unos 4 puntos', 'Delante de su peón, no detrás'] },
        { titulo: 'La regla del cuadrado', puntos: ['Cuadrado desde el peón hasta la coronación', '¿El rey entra? Lo alcanza', '¿No entra? El peón corona'], fen: '8/8/8/8/k5P1/8/8/6K1 w - - 0 1' },
        { titulo: 'La oposición', puntos: ['Reyes enfrentados con una casilla en medio', 'Tiene la oposición quien NO mueve', 'El otro debe ceder el paso'], fen: '4k3/8/4K3/4P3/8/8/8/8 b - - 0 1' },
        { titulo: 'Rey en sexta', puntos: ['Rey delante del peón en la sexta fila', 'Gana siempre (salvo peón de torre)'], fen: '4k3/8/4K3/4P3/8/8/8/8 w - - 0 1' },
        { titulo: 'El peón de torre', puntos: ['Si el rey defensor llega a la esquina: tablas', 'Tampoco se gana con alfil del color equivocado'], fen: '7k/8/6K1/7P/8/8/8/8 w - - 0 1' },
        { titulo: 'La ruptura', puntos: ['Tres contra tres en la quinta', '1.b6! y peón pasado', 'Calcula: ¿llegan los reyes?'], fen: '7k/ppp5/8/PPP5/8/8/8/7K w - - 0 1' },
        { titulo: 'Finales de torre', puntos: ['Son los más frecuentes', 'Torre activa y detrás de los peones pasados', '"Todos los finales de torre son tablas" (Tartakower, con humor)'] },
        { titulo: 'Lucena: ganar', puntos: ['Cortar al rey rival', 'Construir el puente en la 4.ª fila', 'Tapar los jaques con la torre'], fen: '3K4/3P1k2/8/8/8/8/2r5/4R3 w - - 0 1' },
        { titulo: 'Philidor: hacer tablas', puntos: ['Rey delante del peón', 'Torre en la tercera fila (desde su lado)', 'Si el peón avanza: jaques desde atrás'], fen: '4k3/7R/r7/3KP3/8/8/8/8 b - - 0 1' },
        { titulo: 'Resumen', puntos: ['Cuadrado y oposición: sin calcular', 'Rompe con peones cuando los reyes están lejos', 'Lucena gana, Philidor empata'] },
      ],
      practicas: [
        { titulo: 'La ruptura', tipo: 'jugada', fen: '7k/ppp5/8/PPP5/8/8/8/7K w - - 0 1', soluciones: ['b6'], linea: ['b6', 'axb6', 'c6', 'bxc6', 'a6'], enunciado: 'Juegan blancas y consiguen un peón que corona.', explica: '1.b6! Si 1...axb6 2.c6! bxc6 3.a6; si 1...cxb6 2.a6! bxa6 3.c6. En ambos casos un peón blanco corona.' },
        { titulo: 'El puente de Lucena', tipo: 'jugada', fen: '3K4/3P1k2/8/8/8/8/2r5/4R3 w - - 0 1', soluciones: ['Rf1+'], linea: ['Rf1+', 'Kg7', 'Rf4'], enunciado: 'Juegan blancas. Primer paso de la técnica de Lucena: aleja al rey negro.', explica: '1.Tf1+ aleja al rey; luego 2.Tf4 construye el puente.' },
        { titulo: 'Corona con jaque', tipo: 'jugada', fen: '5k2/3K4/4P3/8/8/8/8/8 w - - 0 1', soluciones: ['e7+'], enunciado: 'Juegan blancas. Avanza el peón con jaque para asegurar la coronación.', explica: '1.e7+ Rf7 2.e8=D+: el rey de d7 protege las casillas e7 y e8.' },
        { titulo: 'Rey y torre', tipo: 'mate', mateEn: 1, fen: '4k3/8/4K3/8/8/8/8/R7 w - - 0 1', linea: ['Ra8#'], enunciado: 'Repaso de la clase 2: juegan blancas y dan mate en 1.', explica: 'Reyes en oposición y jaque de torre en el borde.' },
      ],
      preguntas: [
        { enunciado: 'Blancas: peón en g4. Negras: rey en a4. Juegan blancas. ¿Qué pasa?', fen: '8/8/8/8/k5P1/8/8/6K1 w - - 0 1', opciones: ['El rey negro alcanza al peón', 'El peón corona', 'Tablas por ahogado', 'Depende de la jugada 3'], correcta: 1, explica: 'Tras 1.g5 el rey negro queda fuera del cuadrado (g5–g8–d8–d5) y no llega.' },
        { enunciado: '¿Cuándo "tiene la oposición" un rey?', opciones: ['Cuando le toca mover', 'Cuando los reyes están enfrentados con una casilla en medio y le toca mover al rival', 'Cuando está en el centro', 'Cuando tiene más peones'], correcta: 1, explica: 'Tener la oposición es no tener que mover en esa situación.' },
        { enunciado: 'En la posición de Lucena, ¿cómo se llama la técnica para ganar?', opciones: ['La escalera', 'Construir el puente', 'La oposición distante', 'El molino'], correcta: 1, explica: 'La torre se coloca en la cuarta fila para tapar luego los jaques.' },
        { enunciado: 'En la defensa de Philidor, ¿qué hace la torre cuando el peón avanza a la sexta fila?', opciones: ['Se cambia', 'Va al fondo para dar jaques desde atrás', 'Se queda quieta', 'Captura el peón'], correcta: 1, explica: 'Sin refugio delante del peón, el rey atacante no puede escapar de los jaques desde atrás.' },
        { enunciado: 'Rey y peón de torre contra rey: el rey defensor llega a la esquina de coronación. ¿Resultado?', opciones: ['Ganan las blancas', 'Tablas', 'Depende del turno', 'Ganan las negras'], correcta: 1, explica: 'Con el peón de torre, si el rey defensor ocupa la esquina, no se puede ganar.' },
      ],
      tarea: [
        'Jugar 10 veces rey y peón contra rey desde posiciones distintas (con ambos colores) contra un compañero o un programa.',
        'Reproducir de memoria las posiciones de Lucena y Philidor y jugarlas contra un programa hasta ganar y hacer tablas.',
        'Resolver 15 ejercicios de finales de peones.',
      ],
    },

    // =====================================================================
    // CLASE 7
    // =====================================================================
    {
      numero: 7,
      titulo: 'Estrategia y medio juego',
      icono: '🧭',
      nivel: 'Intermedio',
      resumen: 'Cómo pensar cuando no hay táctica: evaluar la posición, mejorar la peor pieza, usar columnas abiertas y casillas fuertes, y entender las estructuras de peones (aislado, doblado, retrasado, pasado) para elegir un plan.',
      objetivos: [
        'Evaluar una posición según material, actividad, seguridad del rey y estructura de peones.',
        'Distinguir piezas buenas y malas (alfil bueno y malo, caballo en casilla fuerte).',
        'Aprovechar columnas abiertas y la séptima fila.',
        'Reconocer las debilidades de peones y convertirlas en objetivos.',
        'Formular un plan sencillo de 3–4 jugadas.',
      ],
      agenda: [
        { min: 15, tipo: 'inicio', bloque: 'Repaso de finales', detalle: 'Preguntas rápidas: cuadrado, oposición, Lucena, Philidor.' },
        { min: 45, tipo: 'teoria', bloque: 'Evaluación y piezas', detalle: 'Los elementos de la posición. La peor pieza. Alfil bueno y malo. Casillas fuertes y puestos avanzados. Columnas abiertas y la séptima fila. Diapositivas 1–6.' },
        { min: 30, tipo: 'practica', bloque: 'Ejercicios de evaluación', detalle: 'Preguntas con diagrama de esta página. Debate en grupos de 3: cada grupo defiende una evaluación.' },
        { min: 15, tipo: 'descanso', bloque: 'Descanso', detalle: '' },
        { min: 45, tipo: 'teoria', bloque: 'Estructuras de peones y planes', detalle: 'Peón aislado, doblado, retrasado y pasado. Cadenas de peones: atacar la base. Plan: debilidad → objetivo → piezas → ejecución. Diapositivas 7–11.' },
        { min: 35, tipo: 'practica', bloque: 'Juego de planes', detalle: 'Desde posiciones del mural, cada alumno escribe un plan de 3 jugadas y el grupo lo discute. Prácticas de esta página.' },
        { min: 15, tipo: 'descanso', bloque: 'Descanso', detalle: '' },
        { min: 60, tipo: 'juego', bloque: 'Partidas desde estructuras', detalle: 'Dos partidas de 20 minutos desde una posición con peón aislado (una con cada color). Antes de empezar, cada jugador escribe su plan en la planilla.' },
        { min: 30, tipo: 'analisis', bloque: '¿Se cumplió el plan?', detalle: 'Se comparan los planes escritos con lo que pasó en la partida.' },
        { min: 10, tipo: 'cierre', bloque: 'Control de comprensión y tarea', detalle: '' },
      ],
      contenido: [
        {
          titulo: 'Evaluar la posición',
          texto: 'Cuando no hay táctica inmediata, hay que decidir qué hacer mirando los elementos de la posición. La evaluación responde a "¿quién está mejor y por qué?", y el plan sale de ese "por qué".',
          puntos: [
            'Material: ¿quién tiene más?',
            'Seguridad del rey: ¿algún rey está expuesto?',
            'Actividad de las piezas: ¿cuáles están bien colocadas y cuáles no hacen nada?',
            'Estructura de peones: ¿hay debilidades (peones aislados, doblados, retrasados) o peones pasados?',
            'Espacio y control del centro.',
          ],
        },
        {
          titulo: 'Buenas y malas piezas',
          texto: 'Un alfil es "malo" cuando sus propios peones centrales están fijos en casillas de su color y le quitan diagonales. Un caballo es excelente en una casilla fuerte: una casilla central o avanzada, protegida por un peón propio, desde la que ningún peón rival puede expulsarlo.',
          puntos: [
            'Regla de oro de Tarrasch: "Si una pieza está mal, toda la partida está mal". Busca tu peor pieza y mejórala.',
            'Los caballos quieren casillas fuertes; los alfiles, diagonales abiertas.',
            'En la Francesa de avance, el alfil de c8 negro es el típico alfil malo (sus peones están en e6 y d5, casillas claras).',
          ],
          ejemplo: {
            titulo: 'Francesa, variante del avance: el alfil malo',
            fen: 'start',
            jugadas: ['e4', 'e6', 'd4', 'd5', 'e5', 'c5', 'c3', 'Nc6', 'Nf3', 'Qb6'],
            comentarios: [
              '', '', '', '', 'Las blancas cierran el centro y ganan espacio.',
              'Las negras atacan la base de la cadena (d4).', 'Refuerza d4.', 'Más presión sobre d4.', 'Y más defensa.',
              'La dama también ataca d4 (y b2). El alfil de c8 sigue encerrado detrás de e6 y d5: es el alfil "malo" de las negras.',
            ],
          },
        },
        {
          titulo: 'Columnas abiertas y la séptima fila',
          texto: 'Una columna sin peones es una columna abierta: es la autopista de las torres. Quien la controla puede entrar con las torres en el campo rival, sobre todo en la séptima fila, donde atacan peones y encierran al rey.',
          puntos: [
            'Coloca las torres en las columnas abiertas o semiabiertas.',
            'Duplicar las torres en una columna multiplica su fuerza.',
            'Una torre en la séptima fila suele valer un peón.',
          ],
        },
        {
          titulo: 'Estructuras de peones',
          texto: 'Los peones no retroceden: cada avance cambia la estructura para siempre. Las debilidades de peones son objetivos a largo plazo.',
          puntos: [
            'Peón aislado: sin peones propios en las columnas vecinas. Debe defenderse con piezas y la casilla de delante es un buen puesto para el rival. A cambio, da actividad y columnas semiabiertas.',
            'Peones doblados: dos peones en la misma columna. Son más difíciles de defender y controlan menos casillas.',
            'Peón retrasado: se quedó atrás y no puede ser defendido por otro peón.',
            'Peón pasado: no tiene peones rivales delante en su columna ni en las vecinas. "Los peones pasados deben avanzar" (Nimzowitsch).',
            'Cadena de peones: se ataca por su base.',
          ],
          ejemplo: {
            titulo: 'Defensa Tarrasch: el peón aislado de d5',
            fen: 'start',
            jugadas: ['d4', 'd5', 'c4', 'e6', 'Nc3', 'c5', 'cxd5', 'exd5', 'Nf3', 'Nc6', 'g3', 'Nf6', 'Bg2', 'Be7', 'O-O', 'O-O'],
            comentarios: [
              '', '', 'Gambito de Dama.', '', '', 'La Tarrasch: las negras aceptan tener un peón aislado a cambio de juego activo.',
              '', '', '', '', 'El alfil irá a g2 para presionar d5.', '', 'Presión sobre d5.', '', '',
              'Posición típica: las negras tienen piezas activas; las blancas, un objetivo claro (el peón de d5) y la casilla d4 delante de él.',
            ],
          },
        },
        {
          titulo: 'Cómo hacer un plan',
          texto: 'Un plan no es una variante larga; es una idea con una dirección. Un método sencillo en cuatro pasos:',
          puntos: [
            '1. Evalúa: ¿dónde está la debilidad del rival (o la mía)?',
            '2. Elige el objetivo: una debilidad, una columna, una casilla fuerte o el rey.',
            '3. Decide qué piezas necesitas y adónde deben ir.',
            '4. Ejecuta paso a paso, sin olvidar revisar la táctica en cada jugada.',
          ],
        },
      ],
      diapositivas: [
        { titulo: 'Formación Ajedrez · Clase 7', subtitulo: 'Estrategia y medio juego', puntos: ['Evaluar', 'Mejorar piezas', 'Estructuras de peones', 'Hacer un plan'] },
        { titulo: 'Los elementos de la posición', puntos: ['Material', 'Seguridad del rey', 'Actividad de las piezas', 'Estructura de peones', 'Espacio y centro'] },
        { titulo: 'La peor pieza', puntos: ['"Si una pieza está mal, toda la partida está mal" (Tarrasch)', 'Busca tu peor pieza', 'Hazla trabajar'] },
        { titulo: 'Alfil bueno y alfil malo', puntos: ['Malo: sus peones fijos en casillas de su color', 'Francesa de avance: el alfil de c8'], fen: 'r1b1kbnr/pp3ppp/1qn1p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq - 3 6' },
        { titulo: 'Casillas fuertes', puntos: ['Protegida por un peón propio', 'Ningún peón rival puede atacarla', 'El caballo es el mejor inquilino'], fen: 'rnbqkb1r/1p3ppp/p2p1n2/4p3/4P3/1NN5/PPP1BPPP/R1BQK2R b KQkq - 1 7', nota: 'Siciliana Najdorf con ...e5: la casilla d5 es un agujero en el campo negro.' },
        { titulo: 'Columnas abiertas', puntos: ['La autopista de las torres', 'Duplica las torres', 'Entra en la séptima fila'], fen: 'r4rk1/pp3pp1/2p4p/4p3/4P3/2P5/PP3PPP/R4RK1 w - - 0 1', nota: 'La única columna abierta es la d.' },
        { titulo: 'Peón aislado', puntos: ['Sin peones vecinos', 'Debe defenderse con piezas', 'A cambio: actividad y columnas semiabiertas'], fen: 'r1bq1rk1/pp2bppp/2n2n2/2pp4/8/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 4 9', nota: 'Tras 9.dxc5 Axc5 las negras quedan con el peón aislado en d5.' },
        { titulo: 'Doblados y retrasados', puntos: ['Doblados: dos en la misma columna', 'Retrasado: no puede ser defendido por otro peón', 'Ambos son objetivos a largo plazo'] },
        { titulo: 'El peón pasado', puntos: ['Sin rivales delante ni a los lados', '"Hay que empujarlo" (Nimzowitsch)', 'Bloquéalo con una pieza (mejor, un caballo)'], fen: '8/p4kpp/8/3P4/8/8/5PPP/6K1 w - - 0 1' },
        { titulo: 'Cadenas de peones', puntos: ['Se atacan por la base', 'Francesa: ...c5 contra d4', 'La punta de la cadena indica el flanco de ataque'] },
        { titulo: 'El plan en 4 pasos', puntos: ['1. Evalúa', '2. Elige el objetivo', '3. Coloca las piezas', '4. Ejecuta (sin olvidar la táctica)'] },
      ],
      practicas: [
        { titulo: 'La columna abierta', tipo: 'jugada', fen: 'r4rk1/pp3pp1/2p4p/4p3/4P3/2P5/PP3PPP/R4RK1 w - - 0 1', soluciones: ['Rfd1', 'Rad1'], enunciado: 'Juegan blancas. Coloca una torre en la única columna abierta.', explica: 'La columna d es la única sin peones. Td1 (con cualquiera de las dos torres) la ocupa antes que las negras.' },
        { titulo: 'El caballo a la casilla fuerte', tipo: 'jugada', fen: 'r1bq1rk1/1p2bppp/p1np1n2/4p3/4P3/1NN5/PPP1BPPP/R1BQ1RK1 w - - 0 9', soluciones: ['Bg5', 'Nd5'], enunciado: 'Juegan blancas. La casilla d5 es fuerte, pero el caballo de f6 la controla. Ataca a ese defensor para poder quedarte con d5.', explica: 'Ag5 (o directamente Cd5) ataca al caballo de f6, el defensor de d5. Tras cambiarlo, las blancas podrán instalar una pieza en d5 que ningún peón negro puede expulsar.' },
      ],
      preguntas: [
        { enunciado: 'Blancas: peones en e5 y d4. Negras: peones en e6 y d5, alfil en c8. ¿Qué alfil negro es el "malo"?', fen: 'r1b1kbnr/pp3ppp/1qn1p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq - 3 6', opciones: ['El de casillas oscuras (f8)', 'El de casillas claras (c8)', 'Ninguno', 'Los dos'], correcta: 1, explica: 'Los peones negros de e6 y d5 están en casillas claras y encierran al alfil de c8.' },
        { enunciado: '¿Cuál es la única columna abierta en esta posición?', fen: 'r4rk1/pp3pp1/2p4p/4p3/4P3/2P5/PP3PPP/R4RK1 w - - 0 1', opciones: ['La columna c', 'La columna d', 'La columna e', 'La columna h'], correcta: 1, explica: 'En la columna d no hay peones de ningún bando.' },
        { enunciado: '¿Qué peón blanco es pasado?', fen: '8/p4kpp/8/3P4/8/8/5PPP/6K1 w - - 0 1', opciones: ['f2', 'd5', 'g2', 'h2'], correcta: 1, explica: 'No hay peones negros en las columnas c, d ni e que puedan detenerlo.' },
        { enunciado: '¿Dónde se ataca una cadena de peones?', opciones: ['En la punta', 'En la base', 'En el centro', 'No se puede atacar'], correcta: 1, explica: 'La base no está protegida por otro peón: es el punto débil de la cadena.' },
        { enunciado: 'Según Tarrasch, ¿qué hay que hacer si no se sabe qué jugar?', opciones: ['Atacar al rey', 'Mejorar la peor pieza', 'Cambiar las damas', 'Avanzar peones del flanco'], correcta: 1, explica: '"Si una pieza está mal, toda la partida está mal": mejorarla es casi siempre un buen plan.' },
      ],
      tarea: [
        'Jugar 2 partidas lentas (30 minutos o más) y escribir, en 3 momentos de cada una, una evaluación y un plan.',
        'Buscar en una base de datos una partida de Capablanca o Karpov y marcar dónde aprovecha una columna abierta o una casilla fuerte.',
        'Resolver 10 ejercicios de "mejor plan" o de evaluación de posiciones.',
      ],
    },

    // =====================================================================
    // CLASE 8
    // =====================================================================
    {
      numero: 8,
      titulo: 'Cálculo, reglamento y la partida de torneo',
      icono: '🏆',
      nivel: 'Intermedio',
      resumen: 'Integrar todo lo aprendido: método de cálculo (jugadas candidatas y variantes forzadas), manejo del reloj, reglamento FIDE de competición y análisis de las propias partidas. La clase termina con un torneo interno y la evaluación final del curso.',
      objetivos: [
        'Aplicar un método de cálculo: jugadas candidatas, jugadas forzadas primero y evaluación final.',
        'Calcular combinaciones de 2 y 3 jugadas.',
        'Conocer las normas de competición (pieza tocada, reloj, anotación, conducta).',
        'Analizar las propias partidas para detectar errores recurrentes.',
        'Jugar una partida de torneo completa con reloj y planilla.',
      ],
      agenda: [
        { min: 15, tipo: 'inicio', bloque: 'Repaso general', detalle: 'Un ejercicio de cada clase anterior en el mural (táctica, mate, final, plan).' },
        { min: 40, tipo: 'teoria', bloque: 'Método de cálculo', detalle: 'Jugadas candidatas, jaques-capturas-amenazas, calcular primero lo forzado, visualizar sin mover las piezas, evaluar al final de la variante. Diapositivas 1–5.' },
        { min: 35, tipo: 'practica', bloque: 'Combinaciones', detalle: 'Prácticas de esta página (mates en 2 y en 3, ganancia de material). Ejercicio de visualización: resolver sin tocar las piezas.' },
        { min: 15, tipo: 'descanso', bloque: 'Descanso', detalle: '' },
        { min: 30, tipo: 'teoria', bloque: 'Reglamento y partida de torneo', detalle: 'Pieza tocada, pieza jugada ("compongo"), jugada ilegal, uso del reloj, anotación obligatoria, ofrecer tablas, uso de dispositivos y conducta. Gestión del tiempo. Diapositivas 6–9.' },
        { min: 15, tipo: 'evaluacion', bloque: 'Evaluación final escrita', detalle: 'Control de comprensión de esta clase + 10 preguntas del Diagnóstico de nivel del sitio.' },
        { min: 15, tipo: 'descanso', bloque: 'Descanso', detalle: '' },
        { min: 100, tipo: 'juego', bloque: 'Torneo interno de clausura', detalle: 'Sistema suizo a 3 rondas de 15 minutos + 5 segundos por jugada, con planilla obligatoria y reglamento FIDE. Los alumnos se turnan como árbitros.' },
        { min: 25, tipo: 'analisis', bloque: 'Análisis de una partida propia', detalle: 'Cada alumno analiza su partida del torneo con el método de la clase: momento clave, error principal y lección aprendida.' },
        { min: 10, tipo: 'cierre', bloque: 'Clausura del curso', detalle: 'Entrega de resultados, recomendaciones de estudio personalizadas y próximos pasos (clubes, torneos, curso de aperturas).' },
      ],
      contenido: [
        {
          titulo: 'El método de cálculo',
          texto: 'Calcular es ver jugadas futuras en la cabeza sin mover las piezas. Para no perderse, conviene seguir un orden.',
          puntos: [
            '1. ¿Qué amenaza el rival? (Nunca saltarse este paso.)',
            '2. Busca las jugadas candidatas: normalmente 2 o 3. Empieza por las forzadas: jaques, capturas y amenazas.',
            '3. Calcula cada candidata hasta una posición tranquila, siempre con la mejor respuesta del rival.',
            '4. Evalúa la posición final de cada variante y compara.',
            '5. Antes de jugar, revisa la jugada elegida una última vez ("control de ceguera").',
          ],
        },
        {
          titulo: 'Combinaciones: ver la idea y luego calcular',
          texto: 'Los patrones de las clases 4 y 5 son la materia prima del cálculo: primero se reconoce un motivo (rey sin escape, pieza sobrecargada, piezas alineadas) y después se calcula la secuencia forzada que lo aprovecha.',
          ejemplo: {
            titulo: 'Mate de Philidor: una combinación de 3 jugadas',
            fen: '5rk1/5Npp/8/8/8/1Q6/8/6K1 w - - 0 1',
            jugadas: ['Nh6+', 'Kh8', 'Qg8+', 'Rxg8', 'Nf7#'],
            comentarios: [
              'Candidatas forzadas: el jaque doble Ch6++ (caballo y dama).', 'Forzada.',
              'Solo un jaque más: el sacrificio.', 'Forzada.', 'Mate. Todo el cálculo fue de jugadas forzadas.',
            ],
          },
        },
        {
          titulo: 'Gestión del tiempo',
          texto: 'En una partida con reloj, el tiempo es un recurso más. Perder por tiempo con una posición ganada es tan doloroso como caer en un mate.',
          puntos: [
            'Usa más tiempo en los momentos críticos (cambios de estructura, sacrificios, entrada en el final) y menos en las jugadas obvias.',
            'Ten un control: por ejemplo, llegar a la jugada 20 con al menos la mitad del tiempo.',
            'En apuros de tiempo: jugadas sencillas y seguras, y aprovecha el incremento.',
          ],
        },
        {
          titulo: 'Reglamento FIDE básico',
          texto: 'Normas que hay que conocer antes de jugar un torneo oficial.',
          puntos: [
            'Pieza tocada, pieza jugada: si tocas intencionadamente una pieza propia, debes moverla (si es legal); si tocas una rival, debes capturarla (si es legal).',
            'Para acomodar una pieza sin estar obligado a moverla se dice "compongo" (en inglés, "j\'adoube") antes de tocarla.',
            'La jugada termina al soltar la pieza; luego se pulsa el reloj con la misma mano que movió.',
            'Jugada ilegal: se corrige y, en ritmos rápidos, el rival recibe tiempo extra; la segunda ilegal pierde la partida (en rápidas y relámpago).',
            'En partidas lentas es obligatorio anotar las jugadas.',
            'Se ofrece tablas después de hacer la jugada y antes de pulsar el reloj.',
            'Prohibido tener el teléfono encendido en la sala de juego.',
          ],
        },
        {
          titulo: 'Analizar las propias partidas',
          texto: 'La forma más rápida de mejorar es aprender de las propias derrotas. El análisis se hace primero sin programa (con las propias ideas) y solo después con un motor.',
          puntos: [
            '1. Reproduce la partida desde la planilla y anota lo que pensabas en cada momento clave.',
            '2. Busca el momento en que cambió la evaluación: ¿fue un error táctico, estratégico o de tiempo?',
            '3. Contrasta con el motor y con tu profesor.',
            '4. Escribe una lección de una línea ("revisar siempre las piezas indefensas antes de mover").',
          ],
        },
      ],
      diapositivas: [
        { titulo: 'Formación Ajedrez · Clase 8', subtitulo: 'Cálculo, reglamento y la partida de torneo', puntos: ['Cómo calcular', 'Cómo competir', 'Torneo de clausura'] },
        { titulo: 'Paso 1: ¿qué amenaza el rival?', puntos: ['La jugada del rival siempre tiene un motivo', 'Es la causa de la mayoría de las derrotas'] },
        { titulo: 'Paso 2: jugadas candidatas', puntos: ['2 o 3 candidatas', 'Primero las forzadas: jaques, capturas, amenazas', 'No te enamores de la primera idea'] },
        { titulo: 'Paso 3: calcular', puntos: ['Una variante cada vez', 'Siempre la mejor respuesta del rival', 'Hasta una posición tranquila'], fen: '5rk1/5Npp/8/8/8/1Q6/8/6K1 w - - 0 1' },
        { titulo: 'Paso 4: evaluar y comprobar', puntos: ['¿Qué variante termina mejor?', 'Control de ceguera antes de soltar la pieza'] },
        { titulo: 'El reloj', puntos: ['Pulsa con la mano que movió', 'Controla el tiempo en la jugada 20', 'En apuros: jugadas seguras'] },
        { titulo: 'Pieza tocada', puntos: ['Tocar una pieza propia obliga a moverla', 'Tocar una rival obliga a capturarla', 'Para acomodar: decir "compongo"'] },
        { titulo: 'Normas de conducta', puntos: ['Anotación obligatoria en partidas lentas', 'Tablas: se ofrecen tras jugar y antes de pulsar', 'Teléfono apagado', 'Saludar antes y después de la partida'] },
        { titulo: 'Analizar tus partidas', puntos: ['Primero sin motor', 'Encuentra el momento clave', 'Escribe una lección'] },
        { titulo: 'Torneo de clausura', puntos: ['Suizo a 3 rondas', '15 min + 5 s por jugada', 'Planilla obligatoria', '¡Suerte!'] },
      ],
      practicas: [
        { titulo: 'Mate de Philidor', tipo: 'mate', mateEn: 3, fen: '5rk1/5Npp/8/8/8/1Q6/8/6K1 w - - 0 1', linea: ['Nh6+', 'Kh8', 'Qg8+', 'Rxg8', 'Nf7#'], enunciado: 'Juegan blancas y dan mate en 3.', explica: '1.Ch6++ Rh8 2.Dg8+! Txg8 3.Cf7#.' },
        { titulo: 'Sacrificio en h7', tipo: 'mate', mateEn: 2, fen: '5r1k/4Nppp/8/7Q/8/4R3/8/6K1 w - - 0 1', linea: ['Qxh7+', 'Kxh7', 'Rh3#'], enunciado: 'Juegan blancas y dan mate en 2.', explica: '1.Dxh7+ Rxh7 2.Th3#: mate de Anastasia.' },
        { titulo: 'Légal', tipo: 'mate', mateEn: 2, fen: 'rn1qkbnr/ppp2p1p/3p2p1/4N3/2B1P3/2N5/PPPP1PPP/R1BbK2R w KQkq - 0 6', linea: ['Bxf7+', 'Ke7', 'Nd5#'], enunciado: 'Juegan blancas y dan mate en 2.', explica: '1.Axf7+ Re7 2.Cd5#.' },
        { titulo: 'Horquilla real', tipo: 'jugada', fen: '6k1/3q1p1p/6p1/8/4N3/8/5PPP/6K1 w - - 0 1', soluciones: ['Nf6+'], linea: ['Nf6+', 'Kg7', 'Nxd7'], enunciado: 'Juegan blancas y ganan la dama.', explica: 'Cf6+ ataca al rey y a la dama a la vez.' },
        { titulo: 'Doble ataque', tipo: 'jugada', fen: 'r5k1/6pp/8/8/8/8/5PPP/3Q2K1 w - - 0 1', soluciones: ['Qd5+'], linea: ['Qd5+', 'Kh8', 'Qxa8#'], enunciado: 'Juegan blancas y ganan material.', explica: 'Dd5+ y Dxa8.' },
      ],
      preguntas: [
        { enunciado: '¿Cuál es el primer paso del método de cálculo?', opciones: ['Buscar mis jaques', 'Preguntarme qué amenaza el rival', 'Mirar el reloj', 'Mover la pieza peor colocada'], correcta: 1, explica: 'Antes de pensar en lo propio, hay que entender la jugada del rival.' },
        { enunciado: 'Tocas intencionadamente tu caballo, que tiene jugadas legales. ¿Qué dice el reglamento?', opciones: ['Puedes mover otra pieza', 'Debes mover ese caballo', 'Pierdes la partida', 'Debes decir "compongo" después'], correcta: 1, explica: 'Pieza tocada, pieza jugada. "Compongo" se dice ANTES de tocar.' },
        { enunciado: '¿Cuándo se ofrecen tablas correctamente?', opciones: ['Con el reloj del rival en marcha', 'Después de hacer tu jugada y antes de pulsar el reloj', 'En cualquier momento', 'Solo al árbitro'], correcta: 1, explica: 'Así lo establece el reglamento FIDE.' },
        { enunciado: '¿Qué jugadas se miran primero al buscar candidatas?', opciones: ['Las de peón', 'Jaques, capturas y amenazas', 'Las jugadas de rey', 'Las más largas'], correcta: 1, explica: 'Son forzadas: limitan las respuestas del rival y hacen el cálculo más fiable.' },
        { enunciado: '¿Cuál es la mejor forma de empezar a analizar una partida propia?', opciones: ['Pasarla directamente por un motor', 'Primero con las propias ideas y después con el motor', 'No analizarla', 'Solo mirar la apertura'], correcta: 1, explica: 'Analizar primero sin motor entrena el pensamiento propio; el motor sirve después para comprobar.' },
      ],
      tarea: [
        'Plan de estudio personal para los próximos 3 meses: 20 minutos de táctica diaria, 1 partida lenta por semana analizada y 1 final por semana.',
        'Inscribirse en un torneo local o en línea a ritmo lento o rápido.',
        'Repetir el Diagnóstico de nivel del sitio y comparar con el resultado del inicio del curso.',
      ],
    },
  ],
};
