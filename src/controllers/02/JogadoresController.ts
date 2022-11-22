import { Request, Response } from "express";
import { JogadoresServices } from "../../services/JogadoresServices";

const jogadoresServices = new JogadoresServices();

let jogadores = jogadoresServices.getJogadores();
let count = 0;

class JogadoresController {
  list(req: Request, res: Response) {
    res.send(jogadores);
  }

  play(req: Request, res: Response) {
    res.send(`É a vez de ${jogadores[count]} jogar!`);
    count = (count + 1) % jogadores.length;
  }

  remover(req: Request, res: Response) {
    const { index } = req.query;

    const jogadores = jogadoresServices.remove(Number(index));

    if (jogadores) {
      return res.send(jogadores);
    }
    res.send(
      `Não existe jogador no índice informado (${index}) para ser removido.`
    );
  }

  add(req: Request, res: Response) {
    let { index, nome } = req.query;
    if (!nome) {
      return res.send(`O parâmetro nome é obrigatório!`);
    }
    nome = nome?.toString();
    const formateName =
      nome[0].toLocaleUpperCase() + nome.substring(1).toLocaleLowerCase();
    const result = jogadoresServices.add(Number(index), formateName);
    if (!result) {
      return res.send(
        `O índice informado (${index}) não existe no array. Novo jogador não adicionado.`
      );
    }
    res.send(result);
  }
}

export { JogadoresController };
