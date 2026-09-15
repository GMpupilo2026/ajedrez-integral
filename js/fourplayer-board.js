/**
 * Tablero visual de Ajedrez para 4 (FFA/Equipos) — cuatro-jugadores.html.
 * Grilla de 14x14 con las 4 esquinas de 3x3 ocultas (queda en forma de
 * cruz, 160 casillas jugables). Requiere js/fourplayer-engine.js cargado
 * antes que este archivo.
 *
 * Adaptado del tablero de 2 jugadores del sitio (ChessBoardLite): mismo
 * patrón "click para seleccionar, click en casilla destino para mover",
 * sin arrastrar (este sitio tampoco arrastra piezas en su tablero de 8x8).
 *
 * Orientación: cada jugador ve SU PROPIO brazo abajo de la pantalla (como
 * en cualquier tablero de 2 — vos siempre abajo), rotando el tablero según
 * el asiento que mira la pantalla. Esto se resuelve con dos transformadas
 * de coordenadas chiquitas (rotCCW/screenToBoard) en vez de rotar
 * visualmente el DOM (que además giraría los glifos de las piezas).
 */
(function () {
  "use strict";

  const GLYPH = { p: "♟", n: "♞", b: "♝", r: "♜", q: "♛", k: "♚" };
  const PIECE_NAME = { p: "peón", n: "caballo", b: "alfil", r: "torre", q: "dama", k: "rey" };
  const SEAT_LABEL = { red: "Rojo", blue: "Azul", yellow: "Amarillo", green: "Verde" };
  // Rotación (en pasos de 90° horario) para que el brazo de este asiento
  // quede abajo de la pantalla.
  const ROTATION_K = { red: 0, blue: 3, yellow: 2, green: 1 };

  function rotCCW(p) {
    return { x: p.y, y: 13 - p.x };
  }

  // Casilla del TABLERO que corresponde a la posición (sc,sr) de la GRILLA
  // EN PANTALLA, para el asiento que está mirando (seat=null → vista fija
  // sin rotar, para el profesor espectador).
  function screenToBoard(seat, sc, sr) {
    let p = { x: sc, y: sr };
    const k = seat ? ROTATION_K[seat] : 0;
    for (let i = 0; i < k; i++) p = rotCCW(p);
    return { c: p.x, r: 13 - p.y };
  }

  function isLightSquare(c, r) {
    return (c + r) % 2 === 1;
  }

  const FPC = window.FourPlayerChess;

  class FourPlayerBoard {
    /**
     * @param {HTMLElement} boardEl
     * @param {object} opts
     * @param {"red"|"blue"|"yellow"|"green"|null} opts.mySeat - null = espectador (profesor), vista fija sin rotar
     * @param {boolean} opts.interactive - true si este usuario puede mover AHORA MISMO
     * @param {(info: object) => void} opts.onMove - se llama tras aplicar una jugada propia
     * @param {(from,to,callback) => void} [opts.onPromotionNeeded] - callback(pieceType|null)
     */
    constructor(boardEl, opts) {
      opts = opts || {};
      this.boardEl = boardEl;
      this.mySeat = opts.mySeat || null;
      this.interactive = !!opts.interactive;
      this.onMove = opts.onMove || function () {};
      this.onPromotionNeeded = opts.onPromotionNeeded || null;
      this.game = null;
      this.selected = null; // casilla de origen seleccionada, o null

      this.boardEl.classList.add("fp-grid");
      this.boardEl.setAttribute("role", "group");
      this.boardEl.setAttribute("aria-label", "Tablero de ajedrez para 4 jugadores");
    }

    loadGame(game) {
      this.game = game;
      this.selected = null;
      this.render();
    }

    setInteractive(v) {
      this.interactive = !!v;
      this.render();
    }

    _canActNow() {
      return this.interactive && this.game && !this.game.gameOver && this.game.turn === this.mySeat;
    }

    _applyMove(from, to, promotion) {
      const res = this.game.applyMove(this.mySeat, from, to, promotion);
      if (!res.ok) return;
      this.selected = null;
      this.render();
      this.onMove(res);
    }

    _onSquareClick(square) {
      if (!this._canActNow()) return;
      const piece = this.game.board[square];
      if (this.selected === square) {
        this.selected = null;
        this.render();
        return;
      }
      if (this.selected) {
        const legal = this.game.legalMovesFrom(this.selected).find((m) => m.to === square);
        if (legal) {
          if (legal.promotion && this.onPromotionNeeded) {
            const from = this.selected;
            this.onPromotionNeeded(from, square, (chosen) => {
              if (chosen) this._applyMove(from, square, chosen);
              else { this.selected = null; this.render(); }
            });
            return;
          }
          this._applyMove(this.selected, square, "q");
          return;
        }
      }
      if (piece && piece.seat === this.mySeat && !piece.dead) {
        this.selected = square;
        this.render();
      } else if (this.selected) {
        this.selected = null;
        this.render();
      }
    }

    render() {
      if (!this.game) return;
      this.boardEl.innerHTML = "";
      const canAct = this._canActNow();
      this.boardEl.dataset.interactive = String(canAct);
      let legalTargets = [];
      if (canAct && this.selected) legalTargets = this.game.legalMovesFrom(this.selected).map((m) => m.to);

      const checkedSeats = {};
      this.game.seatsInUse.forEach((s) => { if (this.game.status[s] !== "eliminated" && this.game.isInCheck(s)) checkedSeats[s] = true; });

      for (let sr = 0; sr < 14; sr++) {
        for (let sc = 0; sc < 14; sc++) {
          const { c, r } = screenToBoard(this.mySeat, sc, sr);
          if (!FPC.isOnBoard(c, r)) {
            const filler = document.createElement("div");
            filler.className = "fp-square fp-corner";
            filler.setAttribute("aria-hidden", "true");
            this.boardEl.appendChild(filler);
            continue;
          }
          const square = FPC.sq(c, r);
          const light = isLightSquare(c, r);
          const el = document.createElement("div");
          el.className = "fp-square " + (light ? "light" : "dark");
          if (this.selected === square) el.classList.add("selected");
          el.dataset.square = square;

          const piece = this.game.board[square];
          if (piece) {
            const isCheckedKing = piece.type === "k" && checkedSeats[piece.seat] && !piece.dead;
            if (isCheckedKing) el.classList.add("in-check");
            const span = document.createElement("span");
            span.textContent = GLYPH[piece.type];
            span.className = "fp-piece " + (piece.dead ? "fp-piece-dead" : "fp-piece-" + piece.seat);
            span.setAttribute("aria-hidden", "true");
            el.appendChild(span);
            const label = (piece.dead ? "pieza eliminada de " : SEAT_LABEL[piece.seat] + " ") + PIECE_NAME[piece.type];
            el.setAttribute("aria-label", "Casilla " + square + ": " + label);
          } else {
            el.setAttribute("aria-label", "Casilla " + square + ": vacía");
          }

          if (legalTargets.indexOf(square) !== -1) el.classList.add(piece ? "legal-capture" : "legal-move");

          el.addEventListener("click", () => this._onSquareClick(square));
          this.boardEl.appendChild(el);
        }
      }
    }
  }

  window.FourPlayerBoard = FourPlayerBoard;
})();
