# AjedrezIntegral

Sitio web de ajedrez moderno y responsivo construido con HTML5 y Tailwind CSS.

## Características

- Header fijo con navegación responsive (menú hamburguesa en móvil)
- Hero con llamadas a la acción, estadísticas y tablero de ajedrez visual
- Sección de features con tarjetas animadas
- Grilla de cursos con niveles (principiante, intermedio, avanzado)
- Grilla de artículos con categorías, fecha y tiempo de lectura
- Sección de tutoriales numerados
- Sección de aperturas con notación de movimientos
- CTA banner con gradientes
- Footer con newsletter, redes sociales y enlaces
- Diseño mobile-first con Tailwind CSS
- Animaciones: float, fadeInUp, hover effects
- Accesibilidad: focus visible, prefers-reduced-motion, ARIA labels

## Curso Formación Ajedrez

`cursos/academia/formacion-ajedrez.html` (servido como `/cursos/academia/formacion-ajedrez`)
contiene el curso presencial completo: 8 clases de 5 horas (300 minutos) cada una. Por clase:

- **Plan de la clase**: cronograma minuto a minuto, objetivos y distribución del tiempo.
- **Contenido**: teoría con ejemplos en tablero que se recorren jugada a jugada.
- **Presentación**: diapositivas para proyectar (← →, `N` notas del profesor, `F` pantalla completa).
- **Prácticas**: ejercicios en tablero interactivo (mates en 1, 2 y 3, ganancia de material, finales).
- **Control** de comprensión, **Tarea** y **guía imprimible**.

El contenido está en `js/formacion-clases.js`. Todas las posiciones y soluciones están
verificadas con chess.js 0.10.3; si se modifica una posición hay que volver a verificarla.

### Edición por administradores y material adjunto

Los usuarios con `profiles.is_admin` que hayan iniciado sesión ven en la página del curso:

- **✏️ Editar clase** / **✏️ Editar datos del curso**: editor de todo el contenido (plan,
  teoría y ejemplos, diapositivas, prácticas, control y tarea). Al guardar se valida con
  chess.js que las posiciones FEN y las jugadas sean legales y que los mates sean mate.
  Las ediciones se guardan en la tabla `curso_contenido` y reemplazan al contenido de
  `js/formacion-clases.js`; **Restaurar original** las descarta.
- **Material adjunto** (pestaña de cada clase y sección en la portada): subir y eliminar
  presentaciones, PDF, imágenes o cualquier archivo (máx. 50 MB). Se guardan en el bucket
  `curso-adjuntos` de Storage y en la tabla `curso_adjuntos`. Todos pueden descargarlos.

La escritura está protegida por RLS (`public.soy_admin()`); ver
`supabase/migrations/20261001000000_curso_contenido_adjuntos.sql`.

## Informe mensual del profesor

`informe-mensual.html` (enlace "📄 Descargar mi informe mensual" en el panel del profesor de
`clases.html`) deja al profesor elegir un mes (el actual y los 12 anteriores) y descargarlo:

- **Descargar PDF**: abre la impresión del navegador con una hoja limpia en blanco y negro
  ("Guardar como PDF"); el archivo sale como `informe_AAAA-MM_Nombre.pdf`.
- **Descargar Excel (CSV)**: textos del informe, actividad del mes y, si ya se envió, el detalle
  por clase y por alumno.

Si el informe del mes ya se envió, se descarga tal como quedó guardado (`informes_profesor.datos`
y `detalle_informe_mensual()`). Si está en borrador o no se ha escrito, se descargan los textos
del borrador y la actividad calculada hasta hoy con `actividad_profesor()`; el detalle por clase
y por alumno solo existe una vez enviado. Solo ve su propio informe (RLS de `informes_profesor`).

## Uso

Abre `index.html` en tu navegador. Tailwind se carga vía CDN, no requiere build.

## Despliegue en Cloudflare Pages

1. Sube los archivos a tu repositorio de Git
2. Conecta el repositorio en Cloudflare Pages
3. Build command: (ninguno)
4. Build output directory: `/`
