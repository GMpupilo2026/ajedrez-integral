// Página del curso "Formación Ajedrez": portada del curso, vista de cada clase
// (plan, contenido con ejemplos, presentación, prácticas, control y tarea) y
// modo presentación a pantalla completa para proyectar en el aula.
//
// Rutas (hash): #            → portada del curso
//               #clase-3     → clase 3, pestaña "Plan"
//               #clase-3/practicas → clase 3, pestaña indicada

(function () {
  const CURSO = window.FORMACION_CURSO;
  const main = document.getElementById("main");
  const START_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

  const TABS = [
    { id: "plan", label: "Plan de la clase" },
    { id: "contenido", label: "Contenido" },
    { id: "presentacion", label: "Presentación" },
    { id: "practicas", label: "Prácticas" },
    { id: "control", label: "Control" },
    { id: "tarea", label: "Tarea" },
  ];

  const TIPOS = {
    inicio: { label: "Inicio", cls: "bg-chess-sky/20 text-chess-sky" },
    teoria: { label: "Teoría", cls: "bg-chess-royal/30 text-white" },
    practica: { label: "Práctica", cls: "bg-emerald-500/20 text-emerald-300" },
    descanso: { label: "Descanso", cls: "bg-white/10 text-white/60" },
    juego: { label: "Partidas", cls: "bg-chess-gold/20 text-chess-gold" },
    analisis: { label: "Análisis", cls: "bg-purple-500/20 text-purple-300" },
    evaluacion: { label: "Evaluación", cls: "bg-rose-500/20 text-rose-300" },
    cierre: { label: "Cierre", cls: "bg-chess-sky/20 text-chess-sky" },
  };

  // Nombres de piezas en español para mostrar la notación (los datos usan
  // SAN en inglés, que es lo que entiende chess.js).
  const PIEZAS_ES = { K: "R", Q: "D", R: "T", B: "A", N: "C" };
  function sanEs(san) {
    return san.replace(/^[KQRBN]/, (p) => PIEZAS_ES[p]).replace(/=([QRBN])/, (_, p) => "=" + PIEZAS_ES[p]);
  }

  function esc(text) {
    return String(text ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function fenOf(fen) { return !fen || fen === "start" ? START_FEN : fen; }

  function fmtHora(min) {
    const h = Math.floor(min / 60);
    const m = min % 60;
    return `${h}:${String(m).padStart(2, "0")}`;
  }

  function fmtDuracion(min) {
    const h = Math.floor(min / 60);
    const m = min % 60;
    return h ? (m ? `${h} h ${m} min` : `${h} h`) : `${m} min`;
  }

  // Tablero estático (solo muestra una posición).
  function staticBoard(el, fen, flipped) {
    const b = new ChessBoardLite(el, { interactive: false, flipped: !!flipped, solidPieces: true });
    b.loadFen(fenOf(fen));
    el.dataset.interactive = "false";
    return b;
  }

  function markLastMove(board, move) {
    Object.values(board.squareEls).forEach((sq) => sq.classList.remove("last-move", "hint"));
    if (move) {
      board.squareEls[move.from]?.classList.add("last-move");
      board.squareEls[move.to]?.classList.add("last-move");
    }
  }

  // ===================================================================
  // PORTADA DEL CURSO
  // ===================================================================
  function renderCurso() {
    document.title = `${CURSO.titulo} — AjedrezIntegral`;
    const totalMin = CURSO.clases.length * CURSO.duracionClaseMin;
    const nPracticas = CURSO.clases.reduce((a, c) => a + c.practicas.length, 0);
    const nDiapos = CURSO.clases.reduce((a, c) => a + c.diapositivas.length, 0);

    main.innerHTML = `
      <section class="text-center mb-14">
        <span class="text-chess-sky font-semibold text-sm uppercase tracking-widest">Academia · Curso presencial</span>
        <h1 class="font-display text-4xl sm:text-5xl font-bold mt-3 mb-3">${esc(CURSO.titulo)}</h1>
        <p class="text-chess-gold font-semibold mb-4">${esc(CURSO.subtitulo)}</p>
        <p class="text-white/70 max-w-3xl mx-auto">${esc(CURSO.descripcion)}</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mt-10">
          ${[
            [CURSO.clases.length, "clases"],
            [fmtDuracion(CURSO.duracionClaseMin), "por clase"],
            [fmtDuracion(totalMin), "en total"],
            [nPracticas, "ejercicios interactivos"],
          ].map(([n, l]) => `
            <div class="rounded-xl border border-white/10 bg-white/5 px-4 py-4">
              <div class="text-2xl font-bold text-chess-sky">${esc(n)}</div>
              <div class="text-xs text-white/50 mt-1">${esc(l)}</div>
            </div>`).join("")}
        </div>
      </section>

      <section class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        ${CURSO.clases.map((c) => `
          <a href="#clase-${c.numero}" class="course-card group block">
            <div class="course-badge ${c.nivel === "Inicial" ? "bg-chess-royal" : c.nivel === "Básico" ? "bg-chess-sky" : "bg-chess-gold text-chess-dark"}">${esc(c.nivel)}</div>
            <div class="course-image bg-gradient-to-br from-chess-blue to-chess-navy !h-32">
              <span class="text-5xl">${c.icono}</span>
            </div>
            <div class="course-body">
              <div class="text-xs text-white/40 mb-2">Clase ${c.numero} · ${fmtDuracion(CURSO.duracionClaseMin)} · ${c.practicas.length} prácticas</div>
              <h2 class="course-title !text-lg">${esc(c.titulo)}</h2>
              <p class="course-text !text-sm">${esc(c.resumen)}</p>
              <span class="course-link">Ver clase →</span>
            </div>
          </a>`).join("")}
      </section>

      <section class="grid md:grid-cols-3 gap-6">
        <div class="info-card">
          <h2 class="feature-title">¿Para quién es?</h2>
          <p class="feature-text">${esc(CURSO.publico)}</p>
        </div>
        <div class="info-card">
          <h2 class="feature-title">Metodología</h2>
          <ul class="feature-text list-disc pl-5 space-y-1">${CURSO.metodologia.map((m) => `<li>${esc(m)}</li>`).join("")}</ul>
        </div>
        <div class="info-card">
          <h2 class="feature-title">Materiales</h2>
          <ul class="feature-text list-disc pl-5 space-y-1">${CURSO.materiales.map((m) => `<li>${esc(m)}</li>`).join("")}</ul>
          <p class="text-xs text-white/40 mt-4">${nDiapos} diapositivas en total, listas para proyectar desde cada clase.</p>
        </div>
      </section>`;
    window.scrollTo(0, 0);
  }

  // ===================================================================
  // VISTA DE UNA CLASE
  // ===================================================================
  function renderClase(num, tabId) {
    const clase = CURSO.clases.find((c) => c.numero === num);
    if (!clase) { renderCurso(); return; }
    const tab = TABS.some((t) => t.id === tabId) ? tabId : "plan";
    document.title = `Clase ${clase.numero}: ${clase.titulo} — ${CURSO.titulo}`;
    const prev = CURSO.clases.find((c) => c.numero === num - 1);
    const next = CURSO.clases.find((c) => c.numero === num + 1);

    main.innerHTML = `
      <nav class="text-sm text-white/50 mb-6 no-print"><a href="#" class="hover:text-white">${esc(CURSO.titulo)}</a> / Clase ${clase.numero}</nav>
      <section class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
        <div>
          <span class="text-chess-sky font-semibold text-sm uppercase tracking-widest">Clase ${clase.numero} de ${CURSO.clases.length} · ${esc(clase.nivel)} · ${fmtDuracion(CURSO.duracionClaseMin)}</span>
          <h1 class="font-display text-3xl sm:text-4xl font-bold mt-2 mb-3">${clase.icono} ${esc(clase.titulo)}</h1>
          <p class="text-white/70 max-w-3xl">${esc(clase.resumen)}</p>
        </div>
        <div class="flex flex-wrap gap-2 shrink-0 no-print">
          <button id="present-btn" class="btn-gold">▶ Presentar</button>
          <button id="print-btn" class="btn-secondary">🖨 Imprimir guía</button>
        </div>
      </section>

      <div class="tabs no-print" role="tablist">
        ${TABS.map((t) => `<a href="#clase-${num}/${t.id}" role="tab" aria-selected="${t.id === tab}" class="tab ${t.id === tab ? "active" : ""}">${t.label}</a>`).join("")}
      </div>

      <div id="tab-panel" class="mt-8"></div>

      <div class="flex justify-between gap-4 mt-14 pt-6 border-t border-white/10 no-print">
        ${prev ? `<a href="#clase-${prev.numero}" class="btn-secondary">← Clase ${prev.numero}</a>` : `<a href="#" class="btn-secondary">← Portada del curso</a>`}
        ${next ? `<a href="#clase-${next.numero}" class="btn-primary">Clase ${next.numero} →</a>` : `<a href="#" class="btn-primary">Portada del curso</a>`}
      </div>`;

    main.querySelector(".tab.active")?.scrollIntoView({ block: "nearest", inline: "center" });
    document.getElementById("present-btn").addEventListener("click", () => openPresenter(clase, 0));
    document.getElementById("print-btn").addEventListener("click", () => printGuide(clase));

    const panel = document.getElementById("tab-panel");
    ({
      plan: renderPlan,
      contenido: renderContenido,
      presentacion: renderPresentacion,
      practicas: renderPracticas,
      control: renderControl,
      tarea: renderTarea,
    })[tab](panel, clase);
  }

  // ----- Plan de la clase -----
  function renderPlan(panel, clase) {
    let t = 0;
    const filas = clase.agenda.map((b) => {
      const ini = t; t += b.min;
      const tipo = TIPOS[b.tipo] || TIPOS.teoria;
      return `
        <tr class="border-t border-white/10 align-top">
          <td class="py-3 pr-4 whitespace-nowrap font-mono text-sm text-white/70">${fmtHora(ini)}–${fmtHora(t)}</td>
          <td class="py-3 pr-4 whitespace-nowrap text-sm">${b.min} min</td>
          <td class="py-3 pr-4"><span class="chip ${tipo.cls}">${tipo.label}</span></td>
          <td class="py-3"><div class="font-semibold">${esc(b.bloque)}</div>${b.detalle ? `<div class="text-sm text-white/60 mt-1">${esc(b.detalle)}</div>` : ""}</td>
        </tr>`;
    }).join("");

    const porTipo = {};
    clase.agenda.forEach((b) => { porTipo[b.tipo] = (porTipo[b.tipo] || 0) + b.min; });

    panel.innerHTML = `
      <div class="grid lg:grid-cols-[1fr_300px] gap-8 items-start">
        <div class="info-card overflow-x-auto">
          <h2 class="feature-title">Cronograma (${fmtDuracion(t)})</h2>
          <table class="w-full text-left min-w-[560px]">
            <thead><tr class="text-xs uppercase tracking-wide text-white/40"><th class="pb-2">Horario</th><th class="pb-2">Duración</th><th class="pb-2">Tipo</th><th class="pb-2">Bloque</th></tr></thead>
            <tbody>${filas}</tbody>
          </table>
        </div>
        <aside class="space-y-6">
          <div class="info-card">
            <h2 class="feature-title">Objetivos</h2>
            <ul class="feature-text list-disc pl-5 space-y-2">${clase.objetivos.map((o) => `<li>${esc(o)}</li>`).join("")}</ul>
          </div>
          <div class="info-card">
            <h2 class="feature-title">Distribución del tiempo</h2>
            <div class="flex h-3 rounded-full overflow-hidden mb-4">
              ${Object.entries(porTipo).map(([k, v]) => `<div class="${(TIPOS[k] || TIPOS.teoria).cls.split(" ")[0]}" style="width:${(v / t) * 100}%" title="${esc((TIPOS[k] || TIPOS.teoria).label)}: ${v} min"></div>`).join("")}
            </div>
            <ul class="text-sm space-y-1">
              ${Object.entries(porTipo).map(([k, v]) => `<li class="flex justify-between"><span class="text-white/70">${esc((TIPOS[k] || TIPOS.teoria).label)}</span><span class="font-mono">${v} min</span></li>`).join("")}
            </ul>
          </div>
        </aside>
      </div>`;
  }

  // ----- Contenido con ejemplos -----
  function renderContenido(panel, clase) {
    panel.innerHTML = clase.contenido.map((s, i) => `
      <section class="info-card mb-8">
        <h2 class="font-display text-2xl font-bold mb-3">${i + 1}. ${esc(s.titulo)}</h2>
        <div class="${s.ejemplo ? "grid lg:grid-cols-[1fr_420px] gap-8 items-start" : ""}">
          <div>
            ${s.texto ? `<p class="text-white/80 leading-relaxed mb-4">${esc(s.texto)}</p>` : ""}
            ${s.puntos ? `<ul class="list-disc pl-5 space-y-2 text-white/75">${s.puntos.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
          </div>
          ${s.ejemplo ? `<div class="example" data-idx="${i}"></div>` : ""}
        </div>
      </section>`).join("");

    panel.querySelectorAll(".example").forEach((el) => {
      mountExample(el, clase.contenido[+el.dataset.idx].ejemplo);
    });
  }

  // Visor de ejemplos: tablero + controles para avanzar jugada a jugada.
  function mountExample(el, ej) {
    const game = new Chess(fenOf(ej.fen));
    const startTurn = game.turn();
    const startNum = parseInt(fenOf(ej.fen).split(" ")[5], 10) || 1;
    const fens = [game.fen()];
    const moves = [];
    ej.jugadas.forEach((m) => { const r = game.move(m); moves.push(r); fens.push(game.fen()); });

    el.innerHTML = `
      <div class="text-sm font-semibold text-chess-gold mb-2">Ejemplo: ${esc(ej.titulo)}</div>
      <div class="ex-board"></div>
      ${ej.jugadas.length ? `
      <div class="flex justify-center gap-2 mt-3">
        <button class="btn-secondary !px-3 !py-1.5 !text-sm" data-go="first" aria-label="Inicio">⏮</button>
        <button class="btn-secondary !px-3 !py-1.5 !text-sm" data-go="prev" aria-label="Anterior">◀</button>
        <button class="btn-primary !px-3 !py-1.5 !text-sm" data-go="next" aria-label="Siguiente">▶</button>
        <button class="btn-secondary !px-3 !py-1.5 !text-sm" data-go="last" aria-label="Final">⏭</button>
      </div>
      <div class="ex-moves flex flex-wrap gap-1 mt-3 text-sm"></div>` : ""}
      <p class="ex-comment text-sm text-white/70 mt-3 min-h-[2.5rem]"></p>`;

    const board = staticBoard(el.querySelector(".ex-board"), ej.fen, ej.orientacion === "black");
    const movesEl = el.querySelector(".ex-moves");
    const commentEl = el.querySelector(".ex-comment");
    let idx = 0;

    if (movesEl) {
      let html = "";
      moves.forEach((m, i) => {
        const ply = i + (startTurn === "b" ? 1 : 0);
        const num = startNum + Math.floor(ply / 2);
        if (ply % 2 === 0) html += `<span class="text-white/40 ml-1">${num}.</span>`;
        else if (i === 0) html += `<span class="text-white/40 ml-1">${num}...</span>`;
        html += `<button class="move-chip" data-i="${i + 1}">${esc(sanEs(m.san))}</button>`;
      });
      movesEl.innerHTML = html;
    }

    function show(i) {
      idx = Math.max(0, Math.min(moves.length, i));
      board.loadFen(fens[idx]);
      markLastMove(board, idx ? moves[idx - 1] : null);
      el.querySelectorAll(".move-chip").forEach((c) => c.classList.toggle("active", +c.dataset.i === idx));
      commentEl.textContent = idx ? (ej.comentarios[idx - 1] || "") : (ej.nota || (moves.length ? "Posición inicial del ejemplo. Pulsa ▶ para avanzar." : ""));
    }

    el.addEventListener("click", (e) => {
      const go = e.target.closest("[data-go]")?.dataset.go;
      const chip = e.target.closest(".move-chip");
      if (go === "first") show(0);
      else if (go === "prev") show(idx - 1);
      else if (go === "next") show(idx + 1);
      else if (go === "last") show(moves.length);
      else if (chip) show(+chip.dataset.i);
    });
    show(0);
  }

  // ----- Presentación (índice de diapositivas) -----
  function renderPresentacion(panel, clase) {
    panel.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
        <p class="text-white/70">${clase.diapositivas.length} diapositivas. Pulsa una para empezar desde ahí. En el modo presentación: ← → para navegar, <kbd>N</kbd> notas del profesor, <kbd>F</kbd> pantalla completa, <kbd>Esc</kbd> salir.</p>
        <button id="present-btn-2" class="btn-gold">▶ Presentar desde el inicio</button>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        ${clase.diapositivas.map((d, i) => `
          <button class="slide-thumb text-left" data-i="${i}">
            <div class="text-xs text-white/40 mb-2">${i + 1} / ${clase.diapositivas.length}</div>
            <div class="font-display text-lg font-bold mb-2">${esc(d.titulo)}</div>
            ${d.subtitulo ? `<div class="text-chess-gold text-sm mb-2">${esc(d.subtitulo)}</div>` : ""}
            <ul class="text-sm text-white/60 list-disc pl-5 space-y-0.5">${(d.puntos || []).slice(0, 3).map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
            ${d.fen ? `<div class="text-xs text-chess-sky mt-2">♟ Incluye tablero</div>` : ""}
          </button>`).join("")}
      </div>`;
    document.getElementById("present-btn-2").addEventListener("click", () => openPresenter(clase, 0));
    panel.querySelectorAll(".slide-thumb").forEach((b) => b.addEventListener("click", () => openPresenter(clase, +b.dataset.i)));
  }

  // ----- Prácticas interactivas -----
  function renderPracticas(panel, clase) {
    panel.innerHTML = `
      <p class="text-white/70 mb-6">Mueve las piezas en el tablero: toca una pieza y luego la casilla de destino. En los ejercicios de mate en 2 o 3, el rival responde automáticamente.</p>
      <div class="flex items-center gap-3 mb-8"><div class="progress flex-1"><div id="prac-bar" class="progress-bar" style="width:0%"></div></div><span id="prac-count" class="text-sm text-white/60 font-mono"></span></div>
      <div class="grid md:grid-cols-2 gap-8">
        ${clase.practicas.map((p, i) => `
          <article class="info-card puzzle" data-i="${i}">
            <div class="flex items-center justify-between gap-3 mb-2">
              <h2 class="feature-title !mb-0">${i + 1}. ${esc(p.titulo)}</h2>
              <span class="chip ${p.tipo === "mate" ? "bg-rose-500/20 text-rose-300" : "bg-chess-royal/30"}">${p.tipo === "mate" ? `Mate en ${p.mateEn}` : "Gana / encuentra"}</span>
            </div>
            <p class="text-white/75 text-sm mb-4">${esc(p.enunciado)}</p>
            <div class="pz-board"></div>
            <p class="pz-msg text-sm mt-4 min-h-[1.5rem]"></p>
            <div class="flex flex-wrap gap-2 mt-3">
              <button class="btn-secondary !py-1.5 !px-3 !text-xs" data-act="reset">↺ Reiniciar</button>
              <button class="btn-secondary !py-1.5 !px-3 !text-xs" data-act="hint">💡 Pista</button>
              <button class="btn-outline !py-1.5 !px-3 !text-xs" data-act="solve">Ver solución</button>
            </div>
            <p class="pz-explain hidden text-sm text-white/70 mt-4 border-t border-white/10 pt-3"></p>
          </article>`).join("")}
      </div>`;

    const solved = new Set();
    const updateProgress = () => {
      const n = clase.practicas.length;
      document.getElementById("prac-bar").style.width = `${(solved.size / n) * 100}%`;
      document.getElementById("prac-count").textContent = `${solved.size}/${n} resueltos`;
    };
    updateProgress();

    panel.querySelectorAll(".puzzle").forEach((card) => {
      mountPuzzle(card, clase.practicas[+card.dataset.i], () => { solved.add(card.dataset.i); updateProgress(); });
    });
  }

  function mountPuzzle(card, p, onSolved) {
    const msg = card.querySelector(".pz-msg");
    const explain = card.querySelector(".pz-explain");
    const boardEl = card.querySelector(".pz-board");
    const linea = p.linea || [p.soluciones[0]];
    const flipped = p.orientacion === "black";
    let step = 0; // índice en `linea` de la próxima jugada del alumno
    let done = false;
    let timer = null;

    const board = new ChessBoardLite(boardEl, { interactive: true, flipped, solidPieces: true, onMove: handleMove });
    boardEl.dataset.interactive = "true";

    function setMsg(text, cls) { msg.textContent = text; msg.className = `pz-msg text-sm mt-4 min-h-[1.5rem] ${cls || ""}`; }
    function setInteractive(on) { board.interactive = on; boardEl.dataset.interactive = String(on); }

    function reset() {
      clearTimeout(timer);
      board.loadFen(p.fen);
      markLastMove(board, null);
      step = 0; done = false;
      setInteractive(true);
      explain.classList.add("hidden");
      const lado = board.game.turn() === "w" ? "blancas" : "negras";
      setMsg(`Juegan ${lado}.`, "text-white/50");
    }

    function finish(text) {
      done = true;
      setInteractive(false);
      setMsg(text, "text-green-400 font-semibold");
      explain.textContent = p.explica;
      explain.classList.remove("hidden");
      onSolved();
    }

    function strip(s) { return s.replace(/[+#]/g, ""); }

    function handleMove(fen, san) {
      if (done) return;
      const last = board.game.history({ verbose: true }).slice(-1)[0];
      let ok;
      let final;
      if (p.tipo === "mate") {
        final = step === linea.length - 1;
        ok = final ? board.game.in_checkmate() : strip(san) === strip(linea[step]);
      } else {
        const sols = step === 0 ? p.soluciones : [linea[step]];
        ok = sols.some((s) => strip(s) === strip(san));
        final = true;
      }

      if (!ok) {
        board.game.undo();
        board.render();
        markLastMove(board, board.game.history({ verbose: true }).slice(-1)[0] || null);
        setMsg(`${sanEs(san)} no es la solución. Inténtalo de nuevo.`, "text-red-400");
        return;
      }

      markLastMove(board, last);
      if (final) {
        finish(p.tipo === "mate" ? `¡Jaque mate! ${sanEs(san)} ✔` : `¡Correcto! ${sanEs(san)} ✔`);
        return;
      }

      // Respuesta automática del rival.
      step++;
      setInteractive(false);
      setMsg(`¡Bien! ${sanEs(san)}. El rival responde…`, "text-green-400");
      timer = setTimeout(() => {
        const r = board.game.move(linea[step]);
        board.render();
        markLastMove(board, r);
        step++;
        setInteractive(true);
        setMsg(`El rival jugó ${sanEs(r.san)}. Tu turno.`, "text-white/70");
      }, 600);
    }

    function hint() {
      if (done) return;
      const g = new Chess(board.fen());
      const mv = g.move(linea[step]);
      if (!mv) return;
      board.selected = null;
      board.render();
      markLastMove(board, null);
      board.squareEls[mv.from]?.classList.add("hint");
      setMsg("Pista: la pieza marcada es la que debes mover.", "text-chess-gold");
    }

    function solve() {
      reset();
      setInteractive(false);
      done = true;
      explain.textContent = p.explica;
      explain.classList.remove("hidden");
      let i = 0;
      const playNext = () => {
        if (i >= linea.length) { setMsg("Solución: " + linea.map(sanEs).join(" "), "text-chess-gold"); return; }
        const r = board.game.move(linea[i++]);
        board.render();
        markLastMove(board, r);
        timer = setTimeout(playNext, 800);
      };
      timer = setTimeout(playNext, 400);
    }

    card.addEventListener("click", (e) => {
      const act = e.target.closest("[data-act]")?.dataset.act;
      if (act === "reset") reset();
      else if (act === "hint") hint();
      else if (act === "solve") solve();
    });
    reset();
  }

  // ----- Control de comprensión -----
  // Las opciones se barajan al mostrarlas para que la respuesta correcta no
  // caiga siempre en la misma posición (`data-j` conserva el índice original).
  function shuffled(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) { const k = Math.floor(Math.random() * (i + 1)); [a[i], a[k]] = [a[k], a[i]]; }
    return a;
  }

  function renderControl(panel, clase) {
    panel.innerHTML = `
      <p class="text-white/70 mb-6">Responde cada pregunta. La corrección es inmediata.</p>
      <div class="space-y-6">
        ${clase.preguntas.map((q, i) => `
          <div class="info-card quiz" data-i="${i}">
            <div class="${q.fen ? "grid md:grid-cols-[1fr_260px] gap-6 items-start" : ""}">
              <div>
                <h2 class="font-semibold mb-4">${i + 1}. ${esc(q.enunciado)}</h2>
                <div class="grid sm:grid-cols-2 gap-2">
                  ${shuffled(q.opciones.map((o, j) => [o, j])).map(([o, j]) => `<button class="quiz-opt" data-j="${j}">${esc(o)}</button>`).join("")}
                </div>
                <p class="quiz-exp hidden text-sm mt-4"></p>
              </div>
              ${q.fen ? `<div class="q-board"></div>` : ""}
            </div>
          </div>`).join("")}
      </div>
      <div id="quiz-score" class="hidden info-card mt-8 text-center"></div>`;

    panel.querySelectorAll(".q-board").forEach((el) => {
      staticBoard(el, clase.preguntas[+el.closest(".quiz").dataset.i].fen);
    });

    let answered = 0;
    let correct = 0;
    panel.querySelectorAll(".quiz").forEach((box) => {
      const q = clase.preguntas[+box.dataset.i];
      box.querySelectorAll(".quiz-opt").forEach((btn) => btn.addEventListener("click", () => {
        if (box.dataset.done) return;
        box.dataset.done = "1";
        const j = +btn.dataset.j;
        box.querySelectorAll(".quiz-opt").forEach((b) => {
          b.disabled = true;
          if (+b.dataset.j === q.correcta) b.classList.add("correct");
        });
        if (j !== q.correcta) btn.classList.add("wrong"); else correct++;
        const exp = box.querySelector(".quiz-exp");
        exp.innerHTML = `<span class="${j === q.correcta ? "text-green-400" : "text-red-400"} font-semibold">${j === q.correcta ? "¡Correcto!" : "Incorrecto."}</span> <span class="text-white/70">${esc(q.explica)}</span>`;
        exp.classList.remove("hidden");
        answered++;
        if (answered === clase.preguntas.length) {
          const score = document.getElementById("quiz-score");
          score.innerHTML = `<div class="text-3xl font-bold text-chess-gold mb-2">${correct} / ${answered}</div><p class="text-white/70">${correct === answered ? "¡Perfecto! Clase dominada." : correct >= answered * 0.6 ? "Bien. Repasa las preguntas falladas en el Contenido." : "Conviene repasar el Contenido y las Prácticas de esta clase."}</p>`;
          score.classList.remove("hidden");
        }
      }));
    });
  }

  // ----- Tarea -----
  function renderTarea(panel, clase) {
    panel.innerHTML = `
      <div class="info-card max-w-3xl">
        <h2 class="feature-title">Tarea para la próxima clase</h2>
        <ol class="list-decimal pl-5 space-y-3 text-white/80">${clase.tarea.map((t) => `<li>${esc(t)}</li>`).join("")}</ol>
        <p class="text-sm text-white/50 mt-6">La tarea se revisa en el bloque de inicio de la clase siguiente.</p>
      </div>`;
  }

  // ===================================================================
  // GUÍA IMPRIMIBLE (todas las secciones de la clase en una página)
  // ===================================================================
  function printGuide(clase) {
    const guide = document.createElement("div");
    guide.id = "print-guide";
    let t = 0;
    guide.innerHTML = `
      <h1>${esc(CURSO.titulo)} · Clase ${clase.numero}: ${esc(clase.titulo)}</h1>
      <p>${esc(clase.resumen)}</p>
      <h2>Objetivos</h2><ul>${clase.objetivos.map((o) => `<li>${esc(o)}</li>`).join("")}</ul>
      <h2>Cronograma (${fmtDuracion(CURSO.duracionClaseMin)})</h2>
      <table><tr><th>Horario</th><th>Min</th><th>Bloque</th></tr>${clase.agenda.map((b) => { const ini = t; t += b.min; return `<tr><td>${fmtHora(ini)}–${fmtHora(t)}</td><td>${b.min}</td><td><b>${esc(b.bloque)}</b><br>${esc(b.detalle)}</td></tr>`; }).join("")}</table>
      <h2>Contenido</h2>
      ${clase.contenido.map((s) => `<h3>${esc(s.titulo)}</h3>${s.texto ? `<p>${esc(s.texto)}</p>` : ""}${s.puntos ? `<ul>${s.puntos.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}${s.ejemplo && s.ejemplo.jugadas.length ? `<p><i>Ejemplo — ${esc(s.ejemplo.titulo)}:</i> ${s.ejemplo.jugadas.map(sanEs).join(" ")}</p>` : ""}`).join("")}
      <h2>Prácticas</h2>
      <ol>${clase.practicas.map((p) => `<li><b>${esc(p.titulo)}.</b> ${esc(p.enunciado)} <br><small>FEN: ${esc(p.fen)}</small><br><i>Solución:</i> ${(p.linea || p.soluciones).map(sanEs).join(" ")} — ${esc(p.explica)}</li>`).join("")}</ol>
      <h2>Control de comprensión</h2>
      <ol>${clase.preguntas.map((q) => `<li>${esc(q.enunciado)}<br>${q.opciones.map((o, j) => `${"abcd"[j]}) ${esc(o)}`).join(" · ")}<br><i>Respuesta: ${"abcd"[q.correcta]}) ${esc(q.opciones[q.correcta])}</i></li>`).join("")}</ol>
      <h2>Tarea</h2><ol>${clase.tarea.map((x) => `<li>${esc(x)}</li>`).join("")}</ol>`;
    document.body.appendChild(guide);
    document.body.classList.add("printing-guide");
    const cleanup = () => { guide.remove(); document.body.classList.remove("printing-guide"); window.removeEventListener("afterprint", cleanup); };
    window.addEventListener("afterprint", cleanup);
    window.print();
    setTimeout(cleanup, 1000);
  }

  // ===================================================================
  // MODO PRESENTACIÓN
  // ===================================================================
  const pres = {
    el: document.getElementById("presenter"),
    slide: document.getElementById("pres-slide"),
    notes: document.getElementById("pres-notes"),
    counter: document.getElementById("pres-counter"),
    clase: null,
    i: 0,
    showNotes: false,
  };

  function openPresenter(clase, i) {
    pres.clase = clase;
    pres.i = i;
    document.getElementById("pres-class").textContent = `${CURSO.titulo} · Clase ${clase.numero}: ${clase.titulo}`;
    pres.el.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    renderSlide();
  }

  function closePresenter() {
    pres.el.classList.add("hidden");
    document.body.style.overflow = "";
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  }

  function renderSlide() {
    const d = pres.clase.diapositivas[pres.i];
    const first = pres.i === 0;
    pres.slide.innerHTML = `
      <div class="${d.fen ? "grid md:grid-cols-[1fr_minmax(0,440px)] gap-10 items-center" : "max-w-4xl mx-auto"} ${first ? "text-center md:text-left" : ""}">
        <div>
          <h2 class="font-display font-bold slide-title ${first ? "text-chess-gold" : ""}">${esc(d.titulo)}</h2>
          ${d.subtitulo ? `<div class="slide-sub text-chess-sky font-semibold mt-3">${esc(d.subtitulo)}</div>` : ""}
          ${d.puntos ? `<ul class="slide-points mt-8 space-y-4">${d.puntos.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
        </div>
        ${d.fen ? `<div class="slide-board"></div>` : ""}
      </div>`;
    if (d.fen) staticBoard(pres.slide.querySelector(".slide-board"), d.fen);
    pres.counter.textContent = `${pres.i + 1} / ${pres.clase.diapositivas.length}`;
    pres.notes.textContent = d.nota ? `Notas del profesor: ${d.nota}` : "Sin notas para esta diapositiva.";
    pres.notes.classList.toggle("hidden", !pres.showNotes);
    document.getElementById("pres-prev").disabled = pres.i === 0;
    document.getElementById("pres-next").textContent = pres.i === pres.clase.diapositivas.length - 1 ? "Terminar" : "Siguiente →";
  }

  function go(delta) {
    const n = pres.clase.diapositivas.length;
    if (pres.i + delta >= n) { closePresenter(); return; }
    pres.i = Math.max(0, pres.i + delta);
    renderSlide();
  }

  function toggleFullscreen() {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    else pres.el.requestFullscreen?.().catch(() => {});
  }

  document.getElementById("pres-prev").addEventListener("click", () => go(-1));
  document.getElementById("pres-next").addEventListener("click", () => go(1));
  document.getElementById("pres-close-btn").addEventListener("click", closePresenter);
  document.getElementById("pres-full-btn").addEventListener("click", toggleFullscreen);
  document.getElementById("pres-notes-btn").addEventListener("click", () => { pres.showNotes = !pres.showNotes; renderSlide(); });
  document.addEventListener("keydown", (e) => {
    if (pres.el.classList.contains("hidden")) return;
    if (["ArrowRight", "PageDown", " "].includes(e.key)) { e.preventDefault(); go(1); }
    else if (["ArrowLeft", "PageUp"].includes(e.key)) { e.preventDefault(); go(-1); }
    else if (e.key === "Escape") closePresenter();
    else if (e.key === "n" || e.key === "N") { pres.showNotes = !pres.showNotes; renderSlide(); }
    else if (e.key === "f" || e.key === "F") toggleFullscreen();
  });

  // ===================================================================
  // RUTAS
  // ===================================================================
  function route() {
    if (!pres.el.classList.contains("hidden")) closePresenter();
    const m = location.hash.match(/^#clase-(\d+)(?:\/(\w+))?$/);
    const prevClase = main.dataset.clase;
    if (m) {
      renderClase(parseInt(m[1], 10), m[2]);
      main.dataset.clase = m[1];
      if (prevClase !== m[1]) window.scrollTo(0, 0);
    } else {
      delete main.dataset.clase;
      renderCurso();
    }
  }

  window.addEventListener("hashchange", route);
  route();
})();
