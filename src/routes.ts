import { Request, Response, Router } from "express";
import { CalculadoraController } from "./controllers/01/CalculadoraController";
import { JogadoresController } from "./controllers/02/JogadoresController";
const router = Router();

const calculadoraController = new CalculadoraController();
const jogadoresController = new JogadoresController();

router.get("/", (req: Request, res: Response) => {
  res.send({ ok: true });
});

router.get("/somar", calculadoraController.sum);
router.get("/subtrair", calculadoraController.subtract);
router.get("/multiplicar", calculadoraController.multiply);
router.get("/dividir", calculadoraController.divided);

router.get("/jogadores/jogada", jogadoresController.play);
router.get("/jogadores", jogadoresController.list);
router.get("/jogadores/remover", jogadoresController.remover);
router.get("/jogadores/adicionar", jogadoresController.add);

export { router };
