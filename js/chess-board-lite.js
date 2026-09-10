// Tablero de ajedrez minimalista, sin dependencias de imágenes externas.
// Usa glifos Unicode para las piezas y la librería chess.js para
// generar/validar movimientos a partir de la posición FEN.

const PIECE_GLYPHS = {
  K: "♔", Q: "♕", R: "♖", B: "♗", N: "♘", P: "♙",
  k: "♚", q: "♛", r: "♜", b: "♝", n: "♞", p: "♟",
};

class ChessBoardLite {
  /**
   * @param {HTMLElement} container
   * @param {object} opts
   * @param {boolean} opts.interactive - si true, permite mover piezas (rol profesor)
   * @param {(fen: string, sanMove: string) => void} opts.onMove - callback tras un movimiento legal
   */
  constructor(container, opts = {}) {
    this.container = container;
    this.interactive = !!opts.interactive;
    this.onMove = opts.onMove || (() => {});
    this.game = new Chess();
    this.selected = null;
    this._buildGrid();
  }

  _buildGrid() {
    this.container.innerHTML = "";
    this.container.classList.add("board-lite-grid");
    this.squareEls = {};
    const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
    for (let rank = 8; rank >= 1; rank--) {
      for (const file of files) {
        const square = `${file}${rank}`;
        const isLight = (files.indexOf(file) + rank) % 2 === 1;
        const el = document.createElement("div");
        el.className = `chess-square ${isLight ? "light" : "dark"} board-lite-square`;
        el.dataset.square = square;
        el.addEventListener("click", () => this._onSquareClick(square));
        this.squareEls[square] = el;
        this.container.appendChild(el);
      }
    }
  }

  loadFen(fen) {
    if (!fen || fen === "start") {
      this.game = new Chess();
    } else {
      const ok = this.game.load(fen);
      if (!ok) this.game = new Chess();
    }
    this.selected = null;
    this.render();
  }

  reset() {
    this.game = new Chess();
    this.selected = null;
    this.render();
  }

  fen() {
    return this.game.fen();
  }

  render() {
    const board = this.game.board(); // 8x8, board[0] = rank 8 ... board[7] = rank 1
    const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
    for (let r = 0; r < 8; r++) {
      const rank = 8 - r;
      for (let f = 0; f < 8; f++) {
        const square = `${files[f]}${rank}`;
        const piece = board[r][f];
        const el = this.squareEls[square];
        el.textContent = piece ? PIECE_GLYPHS[piece.color === "w" ? piece.type.toUpperCase() : piece.type] : "";
        el.classList.remove("selected", "legal-move", "legal-capture");
      }
    }
    if (this.selected) {
      this.squareEls[this.selected]?.classList.add("selected");
      const moves = this.game.moves({ square: this.selected, verbose: true });
      moves.forEach((m) => {
        this.squareEls[m.to]?.classList.add(m.captured ? "legal-capture" : "legal-move");
      });
    }
  }

  _onSquareClick(square) {
    if (!this.interactive) return;

    if (this.selected === square) {
      this.selected = null;
      this.render();
      return;
    }

    if (this.selected) {
      const move = this.game.moves({ square: this.selected, verbose: true }).find((m) => m.to === square);
      if (move) {
        const result = this.game.move({ from: this.selected, to: square, promotion: "q" });
        this.selected = null;
        this.render();
        if (result) this.onMove(this.game.fen(), result.san);
        return;
      }
    }

    const piece = this.game.get(square);
    if (piece && piece.color === this.game.turn()) {
      this.selected = square;
    } else {
      this.selected = null;
    }
    this.render();
  }
}
