// Administración del curso "Formación Ajedrez": edición del contenido de las
// clases y material adjunto (presentaciones, PDF, imágenes o cualquier archivo).
//
// - Las ediciones se guardan en la tabla `curso_contenido` (una fila por clase;
//   clase 0 = datos generales del curso). Si una clase no tiene fila se usa el
//   contenido original de js/formacion-clases.js. "Restaurar original" borra la fila.
// - Los adjuntos se suben al bucket `curso-adjuntos` de Storage y se registran
//   en la tabla `curso_adjuntos` (clase 0 = material general del curso).
// - Todos pueden ver el contenido y descargar los adjuntos; solo los usuarios
//   con `profiles.is_admin` ven los controles y pueden escribir (lo garantiza
//   RLS, ver supabase/migrations/20261001000000_curso_contenido_adjuntos.sql).
//
// Expone window.FormacionAdmin, que usa js/formacion.js.

(function () {
  const BUCKET = "curso-adjuntos";
  const MAX_BYTES = 50 * 1024 * 1024;

  const st = {
    curso: null,
    esAdmin: false,
    contenido: {}, // clase → { clase, datos, updated_at }
    adjuntos: [],
  };

  function esc(text) {
    return String(text ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  // ===================================================================
  // CARGA
  // ===================================================================
  async function cargar(curso) {
    st.curso = curso;
    if (!window.sb) return st;
    const [cont, adj, ses] = await Promise.all([
      sb.from("curso_contenido").select("clase, datos, updated_at").eq("curso", curso),
      sb.from("curso_adjuntos").select("*").eq("curso", curso).order("created_at"),
      sb.auth.getSession(),
    ]);
    if (!cont.error) {
      st.contenido = {};
      cont.data.forEach((r) => { st.contenido[r.clase] = r; });
    }
    if (!adj.error) st.adjuntos = adj.data;
    const session = ses.data?.session;
    if (session) {
      const { data } = await sb.from("profiles").select("is_admin").eq("id", session.user.id).single();
      st.esAdmin = !!data?.is_admin;
    }
    return st;
  }

  // ===================================================================
  // MATERIAL ADJUNTO
  // ===================================================================
  const OFFICE = /\.(pptx?|ppsx?|docx?|xlsx?)$/i;

  function urlDe(a) { return sb.storage.from(BUCKET).getPublicUrl(a.path).data.publicUrl; }

  function iconoDe(nombre) {
    const ext = (nombre.split(".").pop() || "").toLowerCase();
    if (["ppt", "pptx", "pps", "ppsx", "key", "odp"].includes(ext)) return "📊";
    if (ext === "pdf") return "📕";
    if (["doc", "docx", "odt", "txt", "rtf", "md"].includes(ext)) return "📄";
    if (["xls", "xlsx", "ods", "csv"].includes(ext)) return "📈";
    if (["png", "jpg", "jpeg", "gif", "webp", "svg"].includes(ext)) return "🖼️";
    if (["mp4", "webm", "mov", "mp3", "wav", "ogg"].includes(ext)) return "🎬";
    if (ext === "pgn") return "♟️";
    if (["zip", "rar", "7z"].includes(ext)) return "🗜️";
    return "📎";
  }

  function fmtTamano(n) {
    if (n == null) return "";
    if (n < 1024) return `${n} B`;
    if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`;
    return `${(n / 1024 / 1024).toFixed(1)} MB`;
  }

  // Nombre seguro para la ruta de Storage (sin tildes ni caracteres raros).
  function nombreSeguro(nombre) {
    return nombre.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^\w.-]+/g, "_").slice(-120) || "archivo";
  }

  function adjuntosDe(clase) { return st.adjuntos.filter((a) => a.clase === clase); }

  function renderAdjuntos(el, clase) {
    const lista = adjuntosDe(clase);
    el.innerHTML = `
      ${lista.length ? `
        <ul class="space-y-3">
          ${lista.map((a) => {
            const url = urlDe(a);
            return `
            <li class="flex flex-wrap items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <span class="text-2xl">${iconoDe(a.nombre)}</span>
              <div class="flex-1 min-w-[10rem]">
                <a href="${esc(url)}" target="_blank" rel="noopener" class="font-semibold hover:text-chess-sky break-all">${esc(a.nombre)}</a>
                <div class="text-xs text-white/40">${esc(fmtTamano(a.tamano))}${a.created_at ? ` · ${esc(new Date(a.created_at).toLocaleDateString("es"))}` : ""}</div>
              </div>
              <div class="flex flex-wrap gap-2">
                ${OFFICE.test(a.nombre) ? `<a href="https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(url)}" target="_blank" rel="noopener" class="btn-secondary !py-1.5 !px-3 !text-xs">Ver en línea</a>` : ""}
                <a href="${esc(url)}" target="_blank" rel="noopener" download="${esc(a.nombre)}" class="btn-secondary !py-1.5 !px-3 !text-xs">Descargar</a>
                ${st.esAdmin ? `<button class="btn-outline !py-1.5 !px-3 !text-xs !border-red-400/60 !text-red-300" data-borrar="${esc(a.id)}">Eliminar</button>` : ""}
              </div>
            </li>`;
          }).join("")}
        </ul>` : `<p class="text-white/50">${clase ? "Esta clase todavía no tiene material adjunto." : "El curso todavía no tiene material general adjunto."}</p>`}
      ${st.esAdmin ? `
        <label class="adj-drop mt-6 flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-white/20 px-6 py-8 text-center cursor-pointer hover:border-chess-sky transition">
          <span class="text-3xl">⬆️</span>
          <span class="font-semibold">Adjuntar archivos</span>
          <span class="text-xs text-white/50">Presentaciones, PDF, imágenes, PGN o cualquier archivo (máx. 50 MB cada uno). Arrastra aquí o haz clic.</span>
          <input type="file" multiple class="hidden adj-input">
        </label>
        <p class="adj-msg text-sm mt-3"></p>` : ""}`;

    el.querySelectorAll("[data-borrar]").forEach((b) => b.addEventListener("click", () => borrarAdjunto(el, clase, b.dataset.borrar)));
    if (!st.esAdmin) return;
    const drop = el.querySelector(".adj-drop");
    el.querySelector(".adj-input").addEventListener("change", (e) => subirArchivos(el, clase, [...e.target.files]));
    drop.addEventListener("dragover", (e) => { e.preventDefault(); drop.classList.add("border-chess-sky"); });
    drop.addEventListener("dragleave", () => drop.classList.remove("border-chess-sky"));
    drop.addEventListener("drop", (e) => {
      e.preventDefault();
      drop.classList.remove("border-chess-sky");
      subirArchivos(el, clase, [...e.dataTransfer.files]);
    });
  }

  function setMsg(el, text, cls) {
    const msg = el.querySelector(".adj-msg");
    if (msg) { msg.textContent = text; msg.className = `adj-msg text-sm mt-3 ${cls || ""}`; }
  }

  async function subirArchivos(el, clase, files) {
    if (!files.length) return;
    const errores = [];
    let ok = 0;
    for (const [i, file] of files.entries()) {
      setMsg(el, `Subiendo ${i + 1} de ${files.length}: ${file.name}…`, "text-white/60");
      if (file.size > MAX_BYTES) { errores.push(`${file.name}: supera 50 MB`); continue; }
      const path = `${st.curso}/clase-${clase}/${Date.now()}-${nombreSeguro(file.name)}`;
      const up = await sb.storage.from(BUCKET).upload(path, file, { contentType: file.type || undefined, upsert: false });
      if (up.error) { errores.push(`${file.name}: ${up.error.message}`); continue; }
      const { data, error } = await sb.from("curso_adjuntos")
        .insert({ curso: st.curso, clase, nombre: file.name, path, tipo: file.type || null, tamano: file.size })
        .select().single();
      if (error) {
        await sb.storage.from(BUCKET).remove([path]);
        errores.push(`${file.name}: ${error.message}`);
        continue;
      }
      st.adjuntos.push(data);
      ok++;
    }
    renderAdjuntos(el, clase);
    if (errores.length) setMsg(el, `No se pudo subir: ${errores.join(" · ")}`, "text-red-400");
    else setMsg(el, ok === 1 ? "Archivo adjuntado." : `${ok} archivos adjuntados.`, "text-green-400");
    st.onChange?.();
  }

  async function borrarAdjunto(el, clase, id) {
    const a = st.adjuntos.find((x) => x.id === id);
    if (!a || !confirm(`¿Eliminar "${a.nombre}"? Esta acción no se puede deshacer.`)) return;
    const { error } = await sb.from("curso_adjuntos").delete().eq("id", id);
    if (error) { setMsg(el, `No se pudo eliminar: ${error.message}`, "text-red-400"); return; }
    await sb.storage.from(BUCKET).remove([a.path]);
    st.adjuntos = st.adjuntos.filter((x) => x.id !== id);
    renderAdjuntos(el, clase);
    setMsg(el, `"${a.nombre}" eliminado.`, "text-green-400");
    st.onChange?.();
  }

  // ===================================================================
  // EDITOR DE CONTENIDO
  // ===================================================================
  // Tipos de campo: text, textarea, number, select, lines (lista de textos,
  // uno por línea), san (jugadas separadas por espacios), json, index1
  // (índice guardado desde 0 pero mostrado desde 1).
  const NIVELES = ["Inicial", "Básico", "Intermedio", "Avanzado"];
  const TIPOS_AGENDA = ["inicio", "teoria", "practica", "descanso", "juego", "analisis", "evaluacion", "cierre"];

  const CAMPOS_CURSO = [
    { key: "titulo", label: "Título del curso", type: "text", required: true },
    { key: "subtitulo", label: "Subtítulo", type: "text" },
    { key: "descripcion", label: "Descripción", type: "textarea" },
    { key: "publico", label: "¿Para quién es?", type: "textarea" },
    { key: "metodologia", label: "Metodología (una idea por línea)", type: "lines" },
    { key: "materiales", label: "Materiales (uno por línea)", type: "lines" },
  ];

  const CAMPOS_CLASE = [
    { key: "titulo", label: "Título de la clase", type: "text", required: true },
    { key: "icono", label: "Icono (emoji)", type: "text" },
    { key: "nivel", label: "Nivel", type: "select", options: NIVELES },
    { key: "resumen", label: "Resumen", type: "textarea" },
    { key: "objetivos", label: "Objetivos (uno por línea)", type: "lines" },
    { key: "tarea", label: "Tarea (una por línea)", type: "lines" },
  ];

  const LISTAS_CLASE = [
    {
      key: "agenda", label: "Plan de la clase (cronograma)", item: "Bloque",
      fields: [
        { key: "min", label: "Minutos", type: "number", required: true },
        { key: "tipo", label: "Tipo", type: "select", options: TIPOS_AGENDA },
        { key: "bloque", label: "Bloque", type: "text", required: true },
        { key: "detalle", label: "Detalle", type: "textarea" },
      ],
    },
    {
      key: "contenido", label: "Contenido (teoría)", item: "Sección",
      fields: [
        { key: "titulo", label: "Título", type: "text", required: true },
        { key: "texto", label: "Texto", type: "textarea" },
        { key: "puntos", label: "Puntos (uno por línea)", type: "lines" },
        { key: "ejemplo", label: "Ejemplo en tablero (JSON opcional: titulo, fen, jugadas, comentarios, nota, orientacion)", type: "json" },
      ],
    },
    {
      key: "diapositivas", label: "Presentación (diapositivas)", item: "Diapositiva",
      fields: [
        { key: "titulo", label: "Título", type: "text", required: true },
        { key: "subtitulo", label: "Subtítulo", type: "text" },
        { key: "puntos", label: "Puntos (uno por línea)", type: "lines" },
        { key: "fen", label: "Tablero (FEN opcional)", type: "text" },
        { key: "nota", label: "Notas del profesor", type: "textarea" },
      ],
    },
    {
      key: "practicas", label: "Prácticas (ejercicios)", item: "Ejercicio",
      fields: [
        { key: "titulo", label: "Título", type: "text", required: true },
        { key: "tipo", label: "Tipo", type: "select", options: ["mate", "jugada"], required: true },
        { key: "mateEn", label: "Mate en (solo tipo mate)", type: "number" },
        { key: "fen", label: "Posición (FEN)", type: "text", required: true },
        { key: "orientacion", label: "Ver tablero desde", type: "select", options: ["", "black"], optionLabels: ["Blancas", "Negras"] },
        { key: "linea", label: "Línea completa en SAN inglés (ej.: Qxh7+ Kxh7 Rh3#)", type: "san" },
        { key: "soluciones", label: "Soluciones aceptadas para la 1.ª jugada (tipo jugada)", type: "san" },
        { key: "enunciado", label: "Enunciado", type: "textarea" },
        { key: "explica", label: "Explicación de la solución", type: "textarea" },
      ],
    },
    {
      key: "preguntas", label: "Control de comprensión", item: "Pregunta",
      fields: [
        { key: "enunciado", label: "Enunciado", type: "textarea", required: true },
        { key: "opciones", label: "Opciones (una por línea)", type: "lines", required: true },
        { key: "correcta", label: "Nº de la opción correcta (1, 2, 3…)", type: "index1", required: true },
        { key: "fen", label: "Tablero (FEN opcional)", type: "text" },
        { key: "explica", label: "Explicación", type: "textarea" },
      ],
    },
  ];

  function inputHtml(f, v) {
    const base = `class="footer-input !text-sm" data-key="${f.key}" data-type="${f.type}"`;
    switch (f.type) {
      case "textarea":
        return `<textarea ${base} rows="3">${esc(v)}</textarea>`;
      case "lines":
        return `<textarea ${base} rows="${Math.min(10, Math.max(3, (v || []).length + 1))}">${esc((v || []).join("\n"))}</textarea>`;
      case "json":
        return `<textarea ${base} rows="${v ? 8 : 2}" spellcheck="false" style="font-family:monospace">${v ? esc(JSON.stringify(v, null, 2)) : ""}</textarea>`;
      case "san":
        return `<input ${base} type="text" spellcheck="false" value="${esc((v || []).join(" "))}">`;
      case "number":
        return `<input ${base} type="number" min="0" value="${esc(v ?? "")}">`;
      case "index1":
        return `<input ${base} type="number" min="1" value="${v == null ? "" : esc(v + 1)}">`;
      case "select": {
        const opts = f.options.includes(v ?? "") || v == null ? f.options : [...f.options, v];
        return `<select ${base}>${opts.map((o, i) => `<option value="${esc(o)}" ${o === (v ?? "") ? "selected" : ""} class="bg-chess-navy">${esc(f.optionLabels?.[i] ?? o)}</option>`).join("")}</select>`;
      }
      default:
        return `<input ${base} type="text" value="${esc(v)}">`;
    }
  }

  function fieldsHtml(fields, obj) {
    return fields.map((f) => `
      <label class="block ${["textarea", "lines", "json"].includes(f.type) ? "sm:col-span-2" : ""}">
        <span class="block text-xs text-white/60 mb-1">${esc(f.label)}${f.required ? " *" : ""}</span>
        ${inputHtml(f, obj?.[f.key])}
      </label>`).join("");
  }

  function itemHtml(lista, obj) {
    return `
      <div class="ed-item rounded-xl border border-white/10 bg-white/5 p-4">
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="ed-num text-sm font-semibold text-chess-gold"></span>
          <div class="flex gap-1">
            <button type="button" class="btn-secondary !py-1 !px-2 !text-xs" data-mv="-1" title="Subir">↑</button>
            <button type="button" class="btn-secondary !py-1 !px-2 !text-xs" data-mv="1" title="Bajar">↓</button>
            <button type="button" class="btn-secondary !py-1 !px-2 !text-xs !text-red-300" data-del title="Quitar">✕</button>
          </div>
        </div>
        <div class="grid sm:grid-cols-2 gap-3">${fieldsHtml(lista.fields, obj)}</div>
      </div>`;
  }

  function renumerar(sec) {
    const lista = LISTAS_CLASE.find((l) => l.key === sec.dataset.lista);
    const items = sec.querySelectorAll(".ed-item");
    items.forEach((it, i) => { it.querySelector(".ed-num").textContent = `${lista.item} ${i + 1}`; });
    sec.querySelector(".ed-count").textContent = `(${items.length})`;
  }

  function leerCampo(el, f) {
    const raw = el.value;
    switch (f.type) {
      case "lines": return raw.split("\n").map((s) => s.trim()).filter(Boolean);
      case "san": return raw.split(/[\s,]+/).map((s) => s.trim()).filter(Boolean);
      case "number": return raw.trim() === "" ? undefined : Number(raw);
      case "index1": return raw.trim() === "" ? undefined : Number(raw) - 1;
      case "json":
        if (!raw.trim()) return undefined;
        try { return JSON.parse(raw); } catch (e) { throw new Error(`${f.label}: JSON no válido (${e.message})`); }
      default: return raw.trim() === "" ? undefined : raw.trim();
    }
  }

  function leerCampos(root, fields, donde) {
    const obj = {};
    fields.forEach((f) => {
      const el = root.querySelector(`:scope [data-key="${f.key}"]`);
      let v;
      try { v = leerCampo(el, f); } catch (e) { throw new Error(`${donde}: ${e.message}`); }
      const vacio = v === undefined || (Array.isArray(v) && !v.length);
      if (f.required && vacio) throw new Error(`${donde}: falta "${f.label}".`);
      if (!vacio) obj[f.key] = v;
    });
    return obj;
  }

  // ----- Validación con chess.js (las prácticas y ejemplos deben ser jugables) -----
  function validarFen(fen, donde) {
    if (!fen || fen === "start") return;
    const r = new Chess().validate_fen(fen);
    if (!r.valid) throw new Error(`${donde}: FEN no válido (${r.error}).`);
  }

  function jugar(fen, jugadas, donde) {
    const g = new Chess(!fen || fen === "start" ? undefined : fen);
    jugadas.forEach((m, i) => {
      if (!g.move(m)) throw new Error(`${donde}: la jugada ${i + 1} (${m}) no es legal.`);
    });
    return g;
  }

  function validarClase(c) {
    c.agenda.forEach((b, i) => {
      if (!(b.min > 0)) throw new Error(`Bloque ${i + 1} del plan: los minutos deben ser mayores que 0.`);
      b.tipo = b.tipo || "teoria";
    });
    c.contenido.forEach((s, i) => {
      if (!s.ejemplo) return;
      const donde = `Sección ${i + 1}, ejemplo`;
      const ej = s.ejemplo;
      if (typeof ej !== "object" || Array.isArray(ej)) throw new Error(`${donde}: debe ser un objeto JSON.`);
      ej.titulo = ej.titulo || s.titulo;
      ej.jugadas = ej.jugadas || [];
      ej.comentarios = ej.comentarios || [];
      if (!Array.isArray(ej.jugadas) || !Array.isArray(ej.comentarios)) throw new Error(`${donde}: "jugadas" y "comentarios" deben ser listas.`);
      validarFen(ej.fen, donde);
      jugar(ej.fen, ej.jugadas, donde);
    });
    c.diapositivas.forEach((d, i) => validarFen(d.fen, `Diapositiva ${i + 1}`));
    c.practicas.forEach((p, i) => {
      const donde = `Ejercicio ${i + 1}`;
      validarFen(p.fen, donde);
      if (p.tipo === "mate") {
        if (!p.linea) throw new Error(`${donde}: un ejercicio de mate necesita la línea completa.`);
        if (!jugar(p.fen, p.linea, donde).in_checkmate()) throw new Error(`${donde}: la línea no termina en jaque mate.`);
        p.mateEn = p.mateEn || Math.ceil(p.linea.length / 2);
        delete p.soluciones;
      } else {
        p.soluciones = p.soluciones || (p.linea ? [p.linea[0]] : undefined);
        if (!p.soluciones) throw new Error(`${donde}: indica al menos una solución.`);
        p.soluciones.forEach((s) => jugar(p.fen, [s], `${donde}, solución`));
        if (p.linea) jugar(p.fen, p.linea, `${donde}, línea`);
        delete p.mateEn;
      }
    });
    c.preguntas.forEach((q, i) => {
      const donde = `Pregunta ${i + 1}`;
      if (q.opciones.length < 2) throw new Error(`${donde}: necesita al menos 2 opciones.`);
      if (!Number.isInteger(q.correcta) || q.correcta < 0 || q.correcta >= q.opciones.length) {
        throw new Error(`${donde}: la opción correcta debe ser un número entre 1 y ${q.opciones.length}.`);
      }
      validarFen(q.fen, donde);
    });
  }

  // ----- Ventana del editor -----
  // `clase` = número de clase, o 0 para los datos generales del curso.
  // `actual` = contenido que se ve ahora; `duracionMin` = minutos por clase.
  function abrirEditor({ clase, actual, duracionMin, onGuardado }) {
    document.getElementById("editor-curso")?.remove();
    const esCurso = clase === 0;
    const editado = !!st.contenido[clase];
    const ov = document.createElement("div");
    ov.id = "editor-curso";
    ov.className = "fixed inset-0 z-50 bg-chess-dark overflow-y-auto";
    ov.setAttribute("role", "dialog");
    ov.setAttribute("aria-modal", "true");
    ov.innerHTML = `
      <div class="sticky top-0 z-10 bg-chess-navy/95 backdrop-blur border-b border-white/10">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div class="text-xs uppercase tracking-widest text-chess-gold">Modo administrador</div>
            <h2 class="font-display text-lg font-bold">${esCurso ? "Editar datos del curso" : `Editar clase ${clase}`}</h2>
          </div>
          <div class="flex flex-wrap gap-2">
            ${editado ? `<button type="button" id="ed-restaurar" class="btn-outline !py-2 !px-3 !text-xs">Restaurar original</button>` : ""}
            <button type="button" id="ed-cancelar" class="btn-secondary !py-2 !px-4 !text-sm">Cancelar</button>
            <button type="button" id="ed-guardar" class="btn-gold !py-2 !px-4 !text-sm">Guardar cambios</button>
          </div>
        </div>
      </div>
      <form id="ed-form" class="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6" novalidate>
        <p id="ed-msg" class="hidden rounded-xl px-4 py-3 text-sm"></p>
        ${editado ? `<p class="text-xs text-white/50">Última edición: ${esc(new Date(st.contenido[clase].updated_at).toLocaleString("es"))}. "Restaurar original" vuelve al contenido de fábrica.</p>` : ""}
        <section class="info-card">
          <h3 class="feature-title">Datos generales</h3>
          <div id="ed-top" class="grid sm:grid-cols-2 gap-3">${fieldsHtml(esCurso ? CAMPOS_CURSO : CAMPOS_CLASE, actual)}</div>
        </section>
        ${esCurso ? "" : LISTAS_CLASE.map((l) => `
          <details class="info-card ed-lista" data-lista="${l.key}">
            <summary class="feature-title cursor-pointer !mb-0">${esc(l.label)} <span class="ed-count text-white/40 text-sm"></span></summary>
            <div class="ed-items space-y-4 mt-4">${(actual[l.key] || []).map((o) => itemHtml(l, o)).join("")}</div>
            <button type="button" class="btn-outline !py-2 !px-4 !text-sm mt-4" data-add>+ Añadir ${esc(l.item.toLowerCase())}</button>
            ${l.key === "agenda" ? `<p class="ed-agenda-total text-xs text-white/50 mt-3"></p>` : ""}
          </details>`).join("")}
        ${esCurso ? "" : `<p class="text-xs text-white/40">Las jugadas se escriben en notación SAN inglesa (K, Q, R, B, N), que es la que entiende el tablero. Al guardar se comprueba que las posiciones FEN y las jugadas sean legales y que los ejercicios de mate terminen en mate.</p>`}
      </form>`;
    document.body.appendChild(ov);
    document.body.style.overflow = "hidden";

    const msg = ov.querySelector("#ed-msg");
    const showMsg = (text, ok) => {
      msg.textContent = text;
      msg.className = `rounded-xl px-4 py-3 text-sm ${ok ? "bg-green-500/15 text-green-300" : "bg-red-500/15 text-red-300"}`;
      msg.scrollIntoView({ block: "nearest" });
    };
    const cerrar = () => { ov.remove(); document.body.style.overflow = ""; document.removeEventListener("keydown", onKey); };
    const onKey = (e) => { if (e.key === "Escape" && confirm("¿Salir sin guardar?")) cerrar(); };
    document.addEventListener("keydown", onKey);

    const totalAgenda = () => {
      const el = ov.querySelector(".ed-agenda-total");
      if (!el) return;
      const t = [...ov.querySelectorAll('[data-lista="agenda"] [data-key="min"]')].reduce((a, i) => a + (Number(i.value) || 0), 0);
      el.textContent = `Total: ${t} min de ${duracionMin}.`;
      el.className = `ed-agenda-total text-xs mt-3 ${t === duracionMin ? "text-white/50" : "text-chess-gold"}`;
    };
    ov.querySelectorAll(".ed-lista").forEach(renumerar);
    totalAgenda();

    ov.addEventListener("input", (e) => { if (e.target.dataset.key === "min") totalAgenda(); });
    ov.addEventListener("click", (e) => {
      const sec = e.target.closest(".ed-lista");
      if (!sec) return;
      const item = e.target.closest(".ed-item");
      if (e.target.closest("[data-add]")) {
        const lista = LISTAS_CLASE.find((l) => l.key === sec.dataset.lista);
        sec.querySelector(".ed-items").insertAdjacentHTML("beforeend", itemHtml(lista, {}));
        sec.querySelector(".ed-items").lastElementChild.querySelector("input, textarea, select")?.focus();
      } else if (item && e.target.closest("[data-del]")) {
        if (!confirm("¿Quitar este elemento?")) return;
        item.remove();
      } else if (item && e.target.closest("[data-mv]")) {
        const d = Number(e.target.closest("[data-mv]").dataset.mv);
        const sib = d < 0 ? item.previousElementSibling : item.nextElementSibling;
        if (sib) d < 0 ? sib.before(item) : sib.after(item);
      } else return;
      renumerar(sec);
      totalAgenda();
    });

    ov.querySelector("#ed-cancelar").addEventListener("click", cerrar);

    ov.querySelector("#ed-restaurar")?.addEventListener("click", async () => {
      if (!confirm("¿Descartar todas las ediciones y volver al contenido original?")) return;
      const { error } = await sb.from("curso_contenido").delete().eq("curso", st.curso).eq("clase", clase);
      if (error) { showMsg(`No se pudo restaurar: ${error.message}`); return; }
      delete st.contenido[clase];
      cerrar();
      onGuardado();
    });

    ov.querySelector("#ed-guardar").addEventListener("click", async () => {
      let datos;
      try {
        datos = leerCampos(ov.querySelector("#ed-top"), esCurso ? CAMPOS_CURSO : CAMPOS_CLASE, "Datos generales");
        if (!esCurso) {
          LISTAS_CLASE.forEach((l) => {
            datos[l.key] = [...ov.querySelectorAll(`[data-lista="${l.key}"] .ed-item`)]
              .map((it, i) => leerCampos(it, l.fields, `${l.item} ${i + 1}`));
          });
          validarClase(datos);
          datos.numero = clase;
          const total = datos.agenda.reduce((a, b) => a + b.min, 0);
          if (total !== duracionMin && !confirm(`El plan suma ${total} min y la clase dura ${duracionMin} min. ¿Guardar igualmente?`)) return;
        }
      } catch (err) {
        showMsg(err.message);
        return;
      }
      const btn = ov.querySelector("#ed-guardar");
      btn.disabled = true; btn.textContent = "Guardando…";
      const { data, error } = await sb.from("curso_contenido")
        .upsert({ curso: st.curso, clase, datos, updated_at: new Date().toISOString() })
        .select("clase, datos, updated_at").single();
      btn.disabled = false; btn.textContent = "Guardar cambios";
      if (error) { showMsg(`No se pudo guardar: ${error.message}`); return; }
      st.contenido[clase] = data;
      cerrar();
      onGuardado();
    });
  }

  window.FormacionAdmin = { state: st, cargar, renderAdjuntos, adjuntosDe, abrirEditor };
})();
