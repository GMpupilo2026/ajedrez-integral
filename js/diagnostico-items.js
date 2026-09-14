// Banco de preguntas del Diagnóstico de nivel — AjedrezIntegral.
//
// 56 preguntas repartidas en 8 áreas (7 cada una): reglas, material,
// aperturas, táctica, mate, finales, estrategia y cálculo.
//
// Todas las preguntas son de opción múltiple con una única respuesta
// correcta entre las alternativas mostradas ("tipo: 'opcion'" o, cuando se
// muestra un tablero, "tipo: 'opcion_tablero'"). Se eligió deliberadamente
// este formato — en vez de "encuentra la jugada" con una casilla de destino
// libre — para que la corrección nunca dependa de adivinar si existe otra
// jugada igual de válida que la documentada: aquí solo hace falta verificar
// que, ENTRE LAS OPCIONES QUE SE MUESTRAN, exactamente una cumple lo que
// pide el enunciado, sin importar si fuera del tablero hay otras jugadas
// legales que también lo harían.
//
// Cada ítem con `fen` fue cargado y verificado con chess.js (posición
// legal, y de las jugadas listadas en `opciones`/`tablero.opciones` se
// comprobó cuál es realmente correcta) — ver el comentario `prueba`.
// Si se toca una posición, hay que volver a verificarla con chess.js.

window.DIAGNOSTICO_ITEMS = [
  // ===== REGLAS (7) =====
  {
    id: 'reg_casillas', area: 'reglas', peso: 1, tipo: 'opcion',
    enunciado: '¿Cuántas casillas tiene un tablero de ajedrez?',
    opciones: ['60', '64', '72', '81'], correcta: 1,
    explica: 'El tablero es una cuadrícula de 8×8 = 64 casillas.',
  },
  {
    id: 'reg_caballo_l', area: 'reglas', peso: 1, tipo: 'opcion',
    enunciado: '¿Qué pieza se mueve siempre en forma de "L"?',
    opciones: ['El alfil', 'El caballo', 'La torre', 'La dama'], correcta: 1,
    explica: 'El caballo es la única pieza que se mueve en "L" (dos casillas en una dirección y una perpendicular) y la única que puede saltar por encima de otras piezas.',
  },
  {
    id: 'reg_h1_clara', area: 'reglas', peso: 1, tipo: 'opcion',
    enunciado: 'En la posición inicial, la casilla h1 (donde empieza la torre blanca del flanco de rey) es de color…',
    opciones: ['Clara', 'Oscura'], correcta: 0,
    explica: 'Regla mnemotécnica clásica: "casilla clara a la derecha" — la esquina inferior derecha del tablero, vista por las blancas, siempre es una casilla clara.',
  },
  {
    id: 'reg_enroque_notacion', area: 'reglas', peso: 2, tipo: 'opcion',
    enunciado: '¿Cómo se anota en notación algebraica el enroque corto?',
    opciones: ['O-O-O', '0-0', 'O-O', 'E.C.'], correcta: 2,
    explica: 'El enroque corto se anota O-O; el enroque largo, O-O-O.',
  },
  {
    id: 'reg_al_paso', area: 'reglas', peso: 2, tipo: 'opcion',
    enunciado: 'Un peón blanco en e5 puede capturar "al paso" a un peón negro que…',
    opciones: [
      'Acaba de avanzar de d7 a d5, quedando junto al peón blanco',
      'Acaba de avanzar de d6 a d5',
      'Lleva varias jugadas parado en d5',
      'Avanzó de d7 a d6',
    ], correcta: 0,
    explica: 'La captura al paso solo es legal en la jugada inmediatamente siguiente a que el peón rival avance dos casillas desde su fila inicial y quede junto a un peón propio.',
  },
  {
    id: 'reg_ahogado', area: 'reglas', peso: 2, tipo: 'opcion',
    enunciado: 'Si el jugador en turno no tiene el rey en jaque, pero no le queda ninguna jugada legal, la partida es…',
    opciones: ['Derrota inmediata', 'Tablas por ahogado', 'Se repite el turno', 'Jaque mate'], correcta: 1,
    explica: 'Esa situación se llama "ahogado" (stalemate) y el resultado son tablas, no una derrota.',
  },
  {
    id: 'reg_promocion', area: 'reglas', peso: 3, tipo: 'opcion',
    enunciado: 'Un peón que llega a la última fila puede coronar en…',
    opciones: [
      'Solo dama',
      'Dama, torre, alfil o caballo (nunca rey)',
      'Solo dama o caballo',
      'Cualquier pieza, incluido el rey',
    ], correcta: 1,
    explica: 'El peón puede coronar en cualquier pieza excepto rey (y excepto seguir siendo peón); no está obligado a elegir dama.',
  },

  // ===== MATERIAL (7) =====
  {
    id: 'mat_peon', area: 'material', peso: 1, tipo: 'opcion',
    enunciado: '¿Cuál es el valor aproximado de un peón?',
    opciones: ['1', '3', '5', '9'], correcta: 0,
    explica: 'El peón es la unidad de valor de referencia: vale 1 punto.',
  },
  {
    id: 'mat_caballo', area: 'material', peso: 1, tipo: 'opcion',
    enunciado: '¿Cuál es el valor aproximado de un caballo?',
    opciones: ['1', '3', '5', '9'], correcta: 1,
    explica: 'Caballo y alfil valen, aproximadamente, 3 peones cada uno.',
  },
  {
    id: 'mat_torre', area: 'material', peso: 1, tipo: 'opcion',
    enunciado: '¿Cuál es el valor aproximado de una torre?',
    opciones: ['1', '3', '5', '9'], correcta: 2,
    explica: 'La torre vale aproximadamente 5 peones.',
  },
  {
    id: 'mat_dama', area: 'material', peso: 2, tipo: 'opcion',
    enunciado: '¿Cuál es el valor aproximado de una dama?',
    opciones: ['3', '5', '9', '13'], correcta: 2,
    explica: 'La dama vale aproximadamente 9 peones: es la pieza más poderosa.',
  },
  {
    id: 'mat_calidad', area: 'material', peso: 2, tipo: 'opcion',
    enunciado: 'Si cambias tu torre (5 puntos) por el alfil (3 puntos) del rival, ¿qué acabas de hacer?',
    opciones: [
      'Un cambio favorable para ti',
      'Un mal cambio: perdiste "calidad" (cediste 2 puntos de material)',
      'Un cambio exactamente igualado',
      'Ganar la partida de inmediato',
    ], correcta: 1,
    explica: 'Cambiar una torre por una pieza menor se llama "perder la calidad": cedes 2 puntos de material aproximados.',
  },
  {
    id: 'mat_dos_torres', area: 'material', peso: 2, tipo: 'opcion',
    enunciado: '¿Qué suele valer más: dos torres o una dama?',
    opciones: [
      'Dos torres (10 puntos) suelen ser algo más fuertes que una dama (9)',
      'Una dama siempre gana a dos torres, sin excepción',
      'Da exactamente igual en cualquier posición',
      'Dos torres nunca pueden ganarle a una dama',
    ], correcta: 0,
    explica: 'Como referencia de valores, dos torres (10) superan ligeramente a una dama (9), aunque el resultado real depende siempre de la posición concreta.',
  },
  {
    id: 'mat_pareja_alfiles', area: 'material', peso: 3, tipo: 'opcion',
    enunciado: '¿Por qué se considera valiosa la "pareja de alfiles" en finales con el tablero abierto?',
    opciones: [
      'Porque juntos controlan casillas de ambos colores y se complementan',
      'Porque un alfil vale más que un caballo en cualquier posición',
      'Porque los alfiles no se pueden cambiar por otras piezas',
      'Porque solo pueden atacar al rey rival',
    ], correcta: 0,
    explica: 'Un solo alfil solo controla casillas de un color; tener los dos alfiles permite dominar todo el tablero, especialmente cuando hay pocos peones que les bloqueen las diagonales.',
  },

  // ===== APERTURAS (7) =====
  {
    id: 'ap_principio', area: 'apertura', peso: 1, tipo: 'opcion',
    enunciado: 'En la apertura, ¿cuál de estos es un principio básico recomendado?',
    opciones: [
      'Sacar la dama lo antes posible',
      'Controlar el centro y desarrollar las piezas menores',
      'Mover siempre los peones de torre primero',
      'Enrocar en la primera jugada, sin excepción',
    ], correcta: 1,
    explica: 'Los tres principios clásicos de apertura son: controlar el centro, desarrollar piezas menores rápido y poner el rey a salvo (enroque) cuando sea oportuno.',
  },
  {
    id: 'ap_espanola', area: 'apertura', peso: 1, tipo: 'opcion',
    enunciado: '1.e4 e5 2.Cf3 Cc6 3.Ab5 corresponde a la apertura…',
    opciones: ['Siciliana', 'Española (Ruy López)', 'Francesa', 'Escocesa'], correcta: 1,
    explica: 'Esa secuencia de jugadas es la Apertura Española o Ruy López, una de las más clásicas del ajedrez.',
  },
  {
    id: 'ap_siciliana', area: 'apertura', peso: 2, tipo: 'opcion',
    enunciado: '1.e4 c5 corresponde a la Defensa…',
    opciones: ['Siciliana', 'Caro-Kann', 'Francesa', 'Pirc'], correcta: 0,
    explica: '1.e4 c5 es la Defensa Siciliana, la respuesta más popular y combativa contra 1.e4.',
  },
  {
    id: 'ap_gambito_dama', area: 'apertura', peso: 2, tipo: 'opcion',
    enunciado: '1.d4 d5 2.c4 es el…',
    opciones: ['Gambito de Rey', 'Gambito de Dama', 'Ataque Colle', 'Sistema Londres'], correcta: 1,
    explica: '1.d4 d5 2.c4 es el Gambito de Dama: las blancas ofrecen un peón para ganar control del centro.',
  },
  {
    id: 'ap_dama_temprano', area: 'apertura', peso: 2, tipo: 'opcion',
    enunciado: '¿Por qué se recomienda no sacar la dama muy pronto en la apertura?',
    opciones: [
      'Porque hacerlo pierde el derecho al enroque',
      'Porque el rival puede ganarle tiempos de desarrollo atacándola con piezas menores',
      'Porque la dama no puede moverse durante la apertura',
      'Porque es una jugada ilegal',
    ], correcta: 1,
    explica: 'Si la dama sale muy pronto, el rival la ataca con piezas menores (ganando desarrollo gratis) mientras la dama tiene que huir una y otra vez.',
  },
  {
    id: 'ap_gambito_idea', area: 'apertura', peso: 3, tipo: 'opcion',
    enunciado: '¿Cuál es la idea principal detrás de un gambito?',
    opciones: [
      'Sacrificar material temporalmente a cambio de ventaja de desarrollo o iniciativa',
      'Ganar una pieza gratis sin ninguna compensación',
      'Evitar por completo el desarrollo de piezas',
      'Forzar tablas lo antes posible',
    ], correcta: 0,
    explica: 'En un gambito se entrega material (normalmente un peón) a cambio de desarrollo más rápido, control del centro o iniciativa en el ataque.',
  },
  {
    id: 'ap_francesa', area: 'apertura', peso: 3, tipo: 'opcion',
    enunciado: '1.e4 e6 corresponde a la Defensa…',
    opciones: ['Francesa', 'Siciliana', 'Escandinava', 'Alekhine'], correcta: 0,
    explica: '1.e4 e6 es la Defensa Francesa, de estructura sólida y con contrajuego típico en el flanco de dama.',
  },

  // ===== TÁCTICA (7) =====
  {
    id: 'tac_horquilla_concepto', area: 'tactica', peso: 1, tipo: 'opcion',
    enunciado: '¿Cómo se llama la táctica en la que una pieza ataca simultáneamente a dos piezas rivales?',
    opciones: ['Clavada', 'Horquilla (tenedor)', 'Rayos X', 'Enroque'], correcta: 1,
    explica: 'La horquilla (o tenedor) es un ataque doble desde una misma pieza; el caballo es especialmente temido por sus horquillas.',
  },
  {
    id: 'tac_clavada_concepto', area: 'tactica', peso: 1, tipo: 'opcion',
    enunciado: '¿Cómo se llama la táctica en la que una pieza no puede (o no conviene que) se mueva porque detrás de ella, en la misma línea, está su rey u otra pieza más valiosa?',
    opciones: ['Horquilla', 'Descubierta', 'Clavada', 'Ahogado'], correcta: 2,
    explica: 'Eso es una clavada: la pieza clavada queda inmovilizada (o penalizada si se mueve) porque expone algo más valioso detrás.',
  },
  {
    id: 'tac_descubierta_concepto', area: 'tactica', peso: 2, tipo: 'opcion',
    enunciado: 'En un "ataque descubierto", ¿qué ocurre?',
    opciones: [
      'Una pieza se mueve y deja al descubierto el ataque de otra pieza que estaba detrás',
      'Dos piezas se mueven en la misma jugada',
      'El rey queda "descubierto" y pierde el derecho al enroque',
      'Se revela un peón pasado escondido',
    ], correcta: 0,
    explica: 'En el ataque (o jaque) descubierto, una pieza se aparta de la línea y "descubre" el ataque de otra pieza propia que estaba detrás, sin que esa segunda pieza se mueva.',
  },
  {
    id: 'tac_horquilla_tablero', area: 'tactica', peso: 2, tipo: 'opcion_tablero',
    enunciado: 'Es el turno de las blancas. ¿Cuál de estas jugadas del caballo gana material con una horquilla?',
    fen: 'r3k3/8/8/1N6/8/8/8/4K3 w - - 0 1',
    tablero: { opciones: [{ from: 'b5', to: 'c7' }, { from: 'b5', to: 'd6' }, { from: 'b5', to: 'a7' }, { from: 'b5', to: 'c3' }] },
    correcta: 0,
    explica: 'Cc7+ da jaque al rey de e8 y, a la vez, ataca la torre de a8: es un jaque de "horquilla familiar" clásico. Las negras deben mover el rey y las blancas ganan la torre. Cd6+ también da jaque, pero no amenaza ninguna pieza; Ca7 y Cc3 ni siquiera dan jaque.',
    prueba: 'con chess.js: Cb5-c7 es jaque (in_check tras la jugada) y desde c7 el caballo ataca a8; Cb5-d6 es jaque pero no ataca a8; Cb5-a7 y Cb5-c3 no son jaque. Las 4 jugadas listadas son legales.',
  },
  {
    id: 'tac_mate1_tablero', area: 'tactica', peso: 3, tipo: 'opcion_tablero',
    enunciado: 'Es el turno de las blancas. ¿Cuál de estas jugadas de la torre da jaque mate?',
    fen: '6k1/5ppp/8/8/8/8/8/4R1K1 w - - 0 1',
    tablero: { opciones: [{ from: 'e1', to: 'e8' }, { from: 'e1', to: 'e7' }, { from: 'e1', to: 'd1' }, { from: 'g1', to: 'g2' }] },
    correcta: 0,
    explica: 'Te8 es jaque mate: el rey negro está encerrado por sus propios peones en f7, g7 y h7, y no hay ninguna pieza que pueda capturar la torre ni bloquear la fila 8. Es el clásico "mate del pasillo".',
    prueba: 'con chess.js: tras Re1-e8, in_checkmate() es true; tras Re1-e7, Re1-d1 o Kg1-g2, in_checkmate() es false. Las 4 jugadas listadas son legales.',
  },
  {
    id: 'tac_rayos_x', area: 'tactica', peso: 3, tipo: 'opcion',
    enunciado: '¿Qué es un "rayo X" (o clavada relativa) en ajedrez?',
    opciones: [
      'Cuando una pieza ataca a través de otra hasta un objetivo más valioso detrás',
      'Cuando dos alfiles se cruzan en el centro del tablero',
      'Un tipo especial de enroque',
      'Una apertura poco frecuente',
    ], correcta: 0,
    explica: 'El rayo X es una línea de ataque que atraviesa una pieza para llegar a otra más valiosa (o igual de valiosa) detrás de ella, similar en idea a la clavada pero visto "desde el otro lado".',
  },
  {
    id: 'tac_desviacion', area: 'tactica', peso: 3, tipo: 'opcion',
    enunciado: '¿Cómo se llama la táctica que obliga a una pieza defensora a abandonar la casilla que protegía?',
    opciones: ['Desviación (eliminación del defensor)', 'Enroque', 'Promoción', 'Ahogado'], correcta: 0,
    explica: 'La desviación (o "eliminación del defensor") ataca o atrae a la pieza que defiende algo importante para forzarla a moverse, dejando esa casilla o pieza sin protección.',
  },

  // ===== MATE (7) =====
  {
    id: 'mate_definicion', area: 'mate', peso: 1, tipo: 'opcion',
    enunciado: '¿Qué significa "jaque mate"?',
    opciones: [
      'El rey está en jaque y no hay ninguna jugada legal para librarlo',
      'El rey está en jaque pero todavía puede escapar',
      'Se acabó el tiempo en el reloj',
      'El rey fue capturado físicamente del tablero',
    ], correcta: 0,
    explica: 'El jaque mate es un jaque del que no hay ninguna forma legal de librarse (ni moviendo el rey, ni bloqueando, ni capturando la pieza atacante). El rey nunca llega a ser capturado.',
  },
  {
    id: 'mate_rey_defendida', area: 'mate', peso: 1, tipo: 'opcion',
    enunciado: '¿Puede un rey capturar una pieza rival que está defendida por otra pieza?',
    opciones: [
      'No, porque el rey quedaría en jaque tras la captura',
      'Sí, siempre que la pieza defendida no sea la dama',
      'Sí, sin ninguna excepción',
      'Solo en la primera jugada de la partida',
    ], correcta: 0,
    explica: 'El rey nunca puede moverse a una casilla atacada por el rival, así que no puede capturar una pieza defendida: quedaría en jaque, lo cual es ilegal.',
  },
  {
    id: 'mate_pasillo_concepto', area: 'mate', peso: 2, tipo: 'opcion',
    enunciado: 'El "mate del pasillo" (back-rank mate) ocurre típicamente cuando…',
    opciones: [
      'El rey está encerrado por sus propios peones en la última fila y una torre o dama da jaque por esa fila',
      'El rey está en el centro del tablero, sin peones cerca',
      'Se acaba de hacer un enroque largo',
      'El rival se quedó sin peones en el tablero',
    ], correcta: 0,
    explica: 'El mate del pasillo aparece cuando el propio rey queda atrapado en la última fila por sus peones, sin escapatoria si una torre o dama rival llega a esa fila con jaque.',
  },
  {
    id: 'mate_pasillo_tablero', area: 'mate', peso: 2, tipo: 'opcion_tablero',
    enunciado: 'Es el turno de las blancas. ¿Cuál de estas jugadas de la torre da jaque mate?',
    fen: '6k1/5ppp/8/8/8/8/8/R5K1 w - - 0 1',
    tablero: { opciones: [{ from: 'a1', to: 'a8' }, { from: 'a1', to: 'a7' }, { from: 'a1', to: 'f1' }, { from: 'g1', to: 'g2' }] },
    correcta: 0,
    explica: 'Ta8 es jaque mate: el rey negro, encerrado por sus propios peones en f7, g7 y h7, no tiene ninguna casilla libre ni forma de capturar o bloquear la torre.',
    prueba: 'con chess.js: tras Ra1-a8, in_checkmate() es true; tras Ra1-a7, Ra1-f1 o Kg1-g2, in_checkmate() es false. Las 4 jugadas listadas son legales.',
  },
  {
    id: 'mate_apoyado', area: 'mate', peso: 2, tipo: 'opcion',
    enunciado: 'El "mate de la coz" (mate de caballo apoyado) suele darse cuando…',
    opciones: [
      'Un caballo da jaque muy cerca del rey rival mientras otra pieza le corta cualquier huida',
      'Solo intervienen dos alfiles',
      'Un peón corona a dama de inmediato',
      'El rey rival está completamente solo, sin ninguna otra pieza',
    ], correcta: 0,
    explica: 'En el mate de la coz, el caballo da el jaque final desde muy cerca del rey (una pieza que el rey no puede capturar por estar defendida), mientras otras piezas le cortan cualquier casilla de escape.',
  },
  {
    id: 'mate_sofocado', area: 'mate', peso: 3, tipo: 'opcion',
    enunciado: '¿Cómo se llama el mate en el que el rey está completamente rodeado por sus propias piezas y un caballo da el jaque final?',
    opciones: ['Mate ahogado', 'Mate sofocado (smothered mate)', 'Mate del pasillo', 'Mate de la escalera'], correcta: 1,
    explica: 'El mate sofocado (smothered mate) ocurre cuando el rey está completamente bloqueado por sus propias piezas y un caballo rival, imposible de capturar ni bloquear, le da jaque.',
  },
  {
    id: 'mate_escalera', area: 'mate', peso: 3, tipo: 'opcion',
    enunciado: '¿Cómo se llama la técnica de dar jaque mate con dos torres (o dama y torre), empujando al rey rival hacia el borde fila por fila?',
    opciones: ['Mate de la escalera (staircase mate)', 'Mate ahogado', 'Enroque largo', 'Gambito de dama'], correcta: 0,
    explica: 'En el mate de la escalera, dos piezas de largo alcance se turnan para dar jaque, empujando al rey rival fila a fila (o columna a columna) hasta acorralarlo en el borde del tablero.',
  },

  // ===== FINALES (7) =====
  {
    id: 'fin_rey_activo', area: 'finales', peso: 1, tipo: 'opcion',
    enunciado: 'En los finales, ¿qué suele ser más importante que en la apertura?',
    opciones: [
      'La actividad del rey, que ahora puede acercarse al centro con seguridad',
      'Enrocar lo antes posible',
      'Sacar la dama cuanto antes',
      'Mover los peones de torre',
    ], correcta: 0,
    explica: 'Con menos piezas en el tablero, el rey deja de estar en peligro constante y se convierte en una pieza activa clave, sobre todo en finales de peones.',
  },
  {
    id: 'fin_peon_pasado', area: 'finales', peso: 1, tipo: 'opcion',
    enunciado: 'Un "peón pasado" es aquel que…',
    opciones: [
      'No tiene peones rivales que puedan detenerlo en su columna ni en las columnas vecinas',
      'Ya fue capturado por el rival',
      'Está clavado por un alfil',
      'Se movió dos casillas en su primer avance',
    ], correcta: 0,
    explica: 'Un peón pasado no puede ser detenido por ningún peón rival en su camino hacia la coronación, lo que lo hace muy valioso en los finales.',
  },
  {
    id: 'fin_oposicion_concepto', area: 'finales', peso: 2, tipo: 'opcion',
    enunciado: 'En un final de rey y peón contra rey, el concepto de "oposición" significa que…',
    opciones: [
      'Los reyes están enfrentados con una casilla de por medio, y quien NO tiene que mover tiene la ventaja',
      'El rey puede atacar directamente al rey rival, algo permitido solo en finales',
      'Los peones se oponen entre sí en la misma columna',
      'Ninguna de las anteriores',
    ], correcta: 0,
    explica: 'Cuando los reyes quedan frente a frente con una casilla vacía entre ellos, el bando que NO tiene que mover "tiene la oposición": el rival se ve obligado a ceder terreno.',
  },
  {
    id: 'fin_oposicion_tablero', area: 'finales', peso: 2, tipo: 'opcion',
    enunciado: 'En esta posición (reyes en e6 y e8, una casilla vacía entre ellos, con las blancas a mover), ¿quién tiene la oposición?',
    fen: '4k3/8/4K3/8/8/8/8/8 w - - 0 1',
    opciones: [
      'Las negras: las blancas están obligadas a ceder terreno',
      'Las blancas',
      'Ninguno, el concepto no aplica aquí',
      'Depende de qué peón quede en el tablero',
    ], correcta: 0,
    explica: 'Con las blancas obligadas a mover, cualquier jugada del rey blanco cede terreno; por eso, aquí las negras tienen la oposición.',
    prueba: 'con chess.js: la posición 4k3/8/4K3/8/8/8/8/8 w - - 0 1 es legal (reyes a distancia de oposición directa, sin jaque).',
  },
  {
    id: 'fin_regla_cuadrado', area: 'finales', peso: 2, tipo: 'opcion',
    enunciado: 'La "regla del cuadrado" sirve para determinar rápidamente si…',
    opciones: [
      'Un rey puede alcanzar y detener a tiempo a un peón pasado rival',
      'Un caballo puede llegar a una casilla concreta',
      'Una posición es tablas por triple repetición',
      'Un enroque sigue siendo legal',
    ], correcta: 0,
    explica: 'La regla del cuadrado permite ver, sin calcular jugada a jugada, si el rey defensor entra a tiempo en el "cuadrado" del peón pasado para detener su coronación.',
  },
  {
    id: 'fin_torres_pasado', area: 'finales', peso: 3, tipo: 'opcion',
    enunciado: 'En un final de torres, ¿cuál es un principio clásico (regla de Tarrasch)?',
    opciones: [
      'Las torres deben colocarse detrás de los peones pasados, propios o rivales',
      'Las torres deben quedarse siempre en la primera fila',
      'Las torres nunca deben salir de la esquina',
      'Las torres son más débiles que los alfiles en cualquier final',
    ], correcta: 0,
    explica: 'La regla de Tarrasch dice que la torre es más activa detrás de un peón pasado: detrás del propio, para empujarlo; detrás del rival, para frenarlo.',
  },
  {
    id: 'fin_alfiles_distinto_color', area: 'finales', peso: 3, tipo: 'opcion',
    enunciado: '¿Qué hace especialmente difícil de ganar un final de alfiles de distinto color, incluso con material de más?',
    opciones: [
      'Que el bando con más material a veces no puede ganar porque el alfil rival controla las casillas clave de bloqueo',
      'Que los alfiles no pueden moverse en diagonal en los finales',
      'Que los alfiles valen menos que los peones en ese final',
      'Que en ese final las tablas son imposibles',
    ], correcta: 0,
    explica: 'Los finales de alfiles de distinto color son famosos por sus tablas "de manual": el alfil defensor puede bloquear para siempre las casillas de su color, aunque el rival tenga varios peones de más.',
  },

  // ===== ESTRATEGIA (7) =====
  {
    id: 'est_centro_concepto', area: 'estrategia', peso: 1, tipo: 'opcion',
    enunciado: '¿Qué significa "controlar el centro" en ajedrez?',
    opciones: [
      'Dominar las casillas centrales (d4, d5, e4, e5) con piezas y peones',
      'Poner el rey en el centro del tablero',
      'Mover solo los peones de torre',
      'Cambiar todas las piezas lo antes posible',
    ], correcta: 0,
    explica: 'Controlar las casillas centrales da más movilidad a las piezas y limita las opciones del rival.',
  },
  {
    id: 'est_columna_abierta', area: 'estrategia', peso: 1, tipo: 'opcion',
    enunciado: 'Una "columna abierta" es una columna…',
    opciones: [
      'Sin peones de ningún color, ideal para colocar torres',
      'Con peones de ambos colores trabados entre sí',
      'Donde está enrocado el rey',
      'Que no existe en las reglas del ajedrez',
    ], correcta: 0,
    explica: 'Sin peones que la bloqueen, una columna abierta es el terreno natural para que las torres se vuelvan muy activas.',
  },
  {
    id: 'est_peon_aislado', area: 'estrategia', peso: 2, tipo: 'opcion',
    enunciado: '¿Qué es un "peón aislado"?',
    opciones: [
      'Un peón sin peones propios en las columnas vecinas que puedan defenderlo',
      'Un peón que quedó solo en el tablero porque los demás fueron capturados',
      'Un peón a punto de coronar',
      'Un peón que se movió dos casillas en su primer avance',
    ], correcta: 0,
    explica: 'Al no tener peones vecinos que lo respalden, el peón aislado suele necesitar protección constante de las piezas, aunque también puede dar movilidad a cambio.',
  },
  {
    id: 'est_casilla_fuerte', area: 'estrategia', peso: 2, tipo: 'opcion',
    enunciado: '¿Qué significa tener un caballo en una "casilla fuerte" (outpost)?',
    opciones: [
      'Un caballo en una casilla avanzada que ningún peón rival puede atacar',
      'Un caballo todavía en su casilla inicial',
      'Un caballo clavado por un alfil rival',
      'Un caballo a punto de coronar',
    ], correcta: 0,
    explica: 'Una casilla fuerte para el caballo es una posición avanzada donde no puede ser expulsado por peones rivales, lo que lo vuelve muy molesto para el rival.',
  },
  {
    id: 'est_alfil_malo', area: 'estrategia', peso: 2, tipo: 'opcion',
    enunciado: '¿Por qué se dice que un alfil es "malo" en ciertas estructuras de peones?',
    opciones: [
      'Porque sus propios peones ocupan casillas del mismo color, bloqueándole las diagonales',
      'Porque el alfil no puede capturar piezas rivales',
      'Porque en esa estructura el alfil vale menos que un peón',
      'Porque no puede moverse en absoluto',
    ], correcta: 0,
    explica: 'Un "alfil malo" queda encerrado por sus propios peones, colocados en casillas del mismo color que el alfil, reduciendo mucho su actividad.',
  },
  {
    id: 'est_desequilibrio', area: 'estrategia', peso: 3, tipo: 'opcion',
    enunciado: '¿A qué se llama "desequilibrio material" cuando se busca conscientemente en una partida?',
    opciones: [
      'Cambiar piezas de tipo distinto pero valor similar (p. ej., dos piezas menores por una torre y un peón) para crear un juego más favorable',
      'Perder material sin ninguna razón concreta',
      'Jugar toda la partida sin dama',
      'Evitar por completo cualquier cambio de piezas',
    ], correcta: 0,
    explica: 'Algunos jugadores buscan cambios "desiguales" en tipo de pieza (aunque similares en valor total) porque generan posiciones más favorables a su estilo de juego.',
  },
  {
    id: 'est_mayoria_flanco', area: 'estrategia', peso: 3, tipo: 'opcion',
    enunciado: 'En estructuras de peones, ¿qué es una "mayoría de peones" en un flanco?',
    opciones: [
      'Tener más peones que el rival en ese sector del tablero, lo que permite crear allí un peón pasado',
      'Tener todos los peones propios en la última fila',
      'Tener menos peones que el rival en ese sector',
      'Un tipo especial de enroque',
    ], correcta: 0,
    explica: 'Una mayoría de peones en un flanco es una ventaja a largo plazo: con buen manejo, puede convertirse en un peón pasado que decida el final.',
  },

  // ===== CÁLCULO (7) =====
  {
    id: 'cal_alfil_diagonal', area: 'calculo', peso: 1, tipo: 'opcion',
    enunciado: 'Un alfil se mueve siempre…',
    opciones: ['En diagonal, cualquier número de casillas libres', 'En línea recta, como la torre', 'En forma de "L"', 'Solo una casilla por turno'], correcta: 0,
    explica: 'El alfil se desplaza en diagonal, tantas casillas como quiera mientras estén libres, y siempre permanece en casillas del mismo color.',
  },
  {
    id: 'cal_torre_bloqueo', area: 'calculo', peso: 1, tipo: 'opcion',
    enunciado: '¿Puede una torre saltar por encima de otras piezas?',
    opciones: ['No: se detiene en la primera pieza que encuentra en su camino', 'Sí, siempre', 'Solo al enrocar', 'Solo en su primera jugada'], correcta: 0,
    explica: 'Salvo el caballo, ninguna pieza puede saltar por encima de otra: la torre (como el alfil y la dama) se detiene en la primera pieza que encuentra en su línea de movimiento.',
  },
  {
    id: 'cal_visualizar', area: 'calculo', peso: 2, tipo: 'opcion',
    enunciado: 'Al calcular una combinación, ¿qué conviene hacer antes de mover la pieza en el tablero?',
    opciones: [
      'Visualizar mentalmente la línea completa de jugadas y respuestas forzadas antes de decidir',
      'Mover primero y pensar después',
      'Ignorar las capturas posibles del rival',
      'Calcular solo la primera jugada, sin ver más allá',
    ], correcta: 0,
    explica: 'Calcular bien significa "ver" la secuencia completa en la cabeza (jugadas propias y respuestas más forzadas del rival) antes de tocar una pieza.',
  },
  {
    id: 'cal_cambio_igualado', area: 'calculo', peso: 2, tipo: 'opcion',
    enunciado: 'Si cambias tu alfil (3 puntos) por el caballo (3 puntos) del rival, y no hay ninguna otra captura en la jugada, ¿qué pasó con el material?',
    opciones: [
      'Sigue igualado: ambos bandos conservan el mismo material que antes',
      'Tú quedaste con una pieza de más',
      'El rival quedó con una pieza de más',
      'Se declaran tablas automáticamente',
    ], correcta: 0,
    explica: 'Cambiar piezas de valor equivalente (3 por 3) no altera el balance material: ambos bandos pierden una pieza menor cada uno.',
  },
  {
    id: 'cal_orden_capturas', area: 'calculo', peso: 2, tipo: 'opcion',
    enunciado: 'Al calcular una serie de capturas en una misma casilla, ¿qué principio general conviene seguir?',
    opciones: [
      'Capturar primero con la pieza de menor valor, para no arriesgar piezas valiosas si vienen más cambios',
      'Capturar siempre primero con la dama',
      'Nunca capturar con peones',
      'Capturar siempre con la pieza más valiosa, sin excepción',
    ], correcta: 0,
    explica: 'La regla práctica es "capturar de menor a mayor valor": así, si la secuencia de cambios se detiene, no arriesgaste tu pieza más valiosa innecesariamente.',
  },
  {
    id: 'cal_contar_atacantes', area: 'calculo', peso: 3, tipo: 'opcion',
    enunciado: 'Antes de lanzar una serie de capturas en una casilla, ¿qué es fundamental contar primero?',
    opciones: [
      'El número de atacantes y defensores, y el valor de cada pieza involucrada',
      'Solo el número de piezas propias en el tablero',
      'El tiempo que queda en el reloj',
      'El color de la casilla donde se cruzan las piezas',
    ], correcta: 0,
    explica: 'Antes de iniciar una serie de capturas hay que contar cuántas piezas atacan y cuántas defienden esa casilla, y el valor de cada una, para saber si el cambio realmente conviene.',
  },
  {
    id: 'cal_jaques_primero', area: 'calculo', peso: 3, tipo: 'opcion',
    enunciado: 'En el cálculo de variantes forzadas (jaques, capturas, amenazas), ¿por qué conviene analizar primero los jaques?',
    opciones: [
      'Porque limitan mucho las respuestas legales del rival, haciendo el árbol de variantes más manejable',
      'Porque el jaque siempre gana la partida',
      'Porque no se puede capturar mientras el propio rey está en jaque',
      'Porque el jaque solo es obligatorio en los finales',
    ], correcta: 0,
    explica: 'Los jaques son la jugada más "forzada" posible: reducen mucho las respuestas legales del rival, lo que hace más fácil calcular con precisión esa rama del cálculo.',
  },
];
