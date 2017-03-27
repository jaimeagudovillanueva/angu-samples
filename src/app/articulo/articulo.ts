export class Articulo {

    titulo: string;
    url: string;
    votos: number;

    constructor(titulo: string, url: string, votos?: number) {
        this.titulo = titulo;
        this.url = url;
        this.votos = votos || 0;
    }

    voteUp() {
      this.votos += 1;
    }

    voteDown() {
      this.votos -= 1;
    }
 }
