import { Request, Response } from "express";
import { ImovesServices } from "../../services/ImoveisServices";

const imoveisServices = new ImovesServices();

class ImoveisController {
  list(req: Request, res: Response) {
    const imoveis = imoveisServices.list();
    res.send(imoveis);
  }

  getById(req: Request, res: Response) {
    const { id } = req.params;

    const imovel = imoveisServices.getById(Number(id));

    if (imovel.length === 0) {
      return res.send(`Não foi encontrado o Imóvel de ID = ${id}`);
    }
    res.send(imovel);
  }
}

export { ImoveisController };
