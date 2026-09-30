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

## Uso

Abre `index.html` en tu navegador. Tailwind se carga vía CDN, no requiere build.

## Despliegue en Cloudflare Pages

1. Sube los archivos a tu repositorio de Git
2. Conecta el repositorio en Cloudflare Pages
3. Build command: (ninguno)
4. Build output directory: `/`
