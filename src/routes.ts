import { Request, Response, Router } from "express";
import { CalculadoraController } from "./controllers/01/CalculadoraController";
const router = Router();

const calculadoraController = new CalculadoraController();

router.get("/", (req: Request, res: Response) => {
  res.send({ ok: true });
});

router.get("/somar", calculadoraController.sum);
router.get("/subtrair", calculadoraController.subtract);
router.get("/multiplicar", calculadoraController.multiply);
router.get("/dividir", calculadoraController.divided);
export { router };
