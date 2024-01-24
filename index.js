
class Personagem {
    constructor(nome, idade, tipoPersonagem) {
      this.nome = nome;
      this.idade = idade;
      this.tipoPersonagem = tipoPersonagem;
    }

ataque() {
  let tipoAtaque;
  switch (this.tipoPersonagem) {
    case "mago":
        tipoAtaque = "usou magia";
        break;
    case "guerreiro":
        tipoAtaque = "usou espada";
        break;
    case "monge":
        tipoAtaque = "usou artes marciais";
        break;
    case "ninja":
        tipoAtaque = "usou shuriken";
        break;
}

console.log( `o ${this.tipoPersonagem} atacou usando ${tipoAtaque}` );

}
}

const personagemMago = new Personagem( "Rodrigo", 37, "mago");
personagemMago.ataque();