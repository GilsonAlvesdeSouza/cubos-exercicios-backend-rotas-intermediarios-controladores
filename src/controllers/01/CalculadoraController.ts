import { Request, Response } from "express";

class CalculadoraController {
  sum(req: Request, res: Response) {
    const { num1, num2 } = req.query;
    let result = (Number(num1) || 0) + (Number(num2) || 0);
    if (result) {
      return res.send({ resultado: result });
    }
    res.send({ msg: "nenhum dado encontrado!" });
  }

  subtract(req: Request, res: Response) {
    const { num1, num2 } = req.query;
    let result = (Number(num1) || 0) - (Number(num2) || 0);
    if (result) {
      return res.send({ resultado: result });
    }
    res.send({ msg: "nenhum dado encontrado!" });
  }

  multiply(req: Request, res: Response) {
    const { num1, num2 } = req.query;
    let result = (Number(num1) || 0) * (Number(num2) || 0);
    if (result) {
      return res.send({ resultado: result });
    }
    res.send({ msg: "nenhum dado encontrado!" });
  }

  divided(req: Request, res: Response) {
    const { num1, num2 } = req.query;
    let result = (Number(num1) || 0) / (Number(num2) || 0);
    if (result) {
      return res.send({ resultado: result });
    }
    res.send({ msg: "nenhum dado encontrado!" });
  }
}

export { CalculadoraController };
