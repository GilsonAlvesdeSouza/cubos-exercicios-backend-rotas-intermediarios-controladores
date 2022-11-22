let jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

class JogadoresServices {
  getJogadores() {
    return jogadores;
  }

  remove(index: number) {
    if (index > -1 && index < jogadores.length) {
      jogadores.splice(index, 1);
      console.log(jogadores);
      return jogadores;
    }
    return false;
  }

  add(index: number, name: string) {
    if (index || index === 0) {
      if (index === 0) {
        jogadores.unshift(name);
        return jogadores;
      }
      if (index > -1 && index < jogadores.length) {
        jogadores.splice(index, 0, name);
        return jogadores;
      }
      return false;
    }
    jogadores.push(name);
    return jogadores;
  }
}

export { JogadoresServices };
